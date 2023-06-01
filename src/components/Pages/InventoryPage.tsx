import { useState, useEffect } from "react";
import InventoryModal from "../Elements/InventoryElements/InventoryModal";
import InventoryTable from "../Elements/InventoryElements/InventoryTable";
import {
  Stack,
  TextField,
  Button,
  InputAdornment,
  Select,
  MenuItem,
  SelectChangeEvent,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Add, Search } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { GridRowId } from "@mui/x-data-grid";
import { InventoryItemType } from "../../types";
import {
  useGetCategoryQuery,
  useGetInventoryDataQuery,
  useGetLocationsQuery,
} from "../../redux/dataSlice";
import { Navigate } from "react-router-dom";
const InventoryPage = () => {
  //states
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState<InventoryItemType | null>(null);
  const [rows, setRows] = useState<InventoryItemType[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [currentLocation, setCurrentLocation] = useState<string>("All");
  const [currentCategory, setCurrentCategory] = useState<string>("All");

  //RTK Query
  const { data, error } = useGetInventoryDataQuery("");
  const { data: locations } = useGetLocationsQuery("");
  const { data: categories } = useGetCategoryQuery("");

  //Search row and render data
  useEffect(() => {
    if (data) {
      setRows(
        data
          // search filter
          .filter((row) => {
            if (searchValue === "") return true;
            return (
              row.code.toString().includes(searchValue) ||
              row.name.includes(searchValue) ||
              row.category.includes(searchValue)
            );
          })
          //location filter
          .filter((row) => {
            if (currentLocation === "All") return true;
            return row.location === currentLocation;
          })
          //category filter
          .filter((row) => {
            if (currentCategory === "All") return true;
            return row.category === currentCategory;
          })
      );
    }
  }, [data, searchValue, currentLocation, currentCategory]);

  //Modal Visibility Handler
  const modalHandler = (num?: GridRowId) => {
    setModalVisible((prevState) => !prevState);

    if (num) {
      const rowData = rows.find((el) => el.id === num);
      if (rowData) setModalData(rowData);
    }
  };

  // token expiration check
  if (error && "data" in error && error.status === 401) {
    return <Navigate to="/" replace />;
  }
  return (
    <main className="main-content-inventory">
      <Stack
        direction={"row"}
        marginBottom={3}
        spacing={2}
        justifyContent={"flex-end"}
      >
        <Stack direction={"row"} width={"200px"}>
          <LocationOnIcon
            sx={{
              color: "#ed1c25",
              fontSize: "2rem",
            }}
          />
          <FormControl sx={{ width: "100%" }} size="small">
            <InputLabel id="location-select-label">Location</InputLabel>
            <Select
              labelId="location-select-label"
              variant="standard"
              value={currentLocation}
              onChange={(e: SelectChangeEvent) =>
                setCurrentLocation(e.target.value as string)
              }
            >
              <MenuItem defaultChecked value={"All"}>
                All
              </MenuItem>
              {locations?.map((location, i) => (
                <MenuItem key={i} value={location}>
                  {location}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
        <FormControl sx={{ width: "200px" }} size="small">
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            labelId="category-select-label"
            variant="standard"
            value={currentCategory}
            onChange={(e: SelectChangeEvent) => {
              setCurrentCategory(e.target.value as string);
            }}
          >
            <MenuItem defaultChecked value={"All"}>
              All
            </MenuItem>
            {categories?.map((category, i) => (
              <MenuItem key={i} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Stack direction={"row"} spacing={2} alignItems={"flex-end"}>
          <TextField
            id="standard-start-adornment"
            value={searchValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSearchValue(e.target.value);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search
                    sx={{
                      color: "#000",
                    }}
                  />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          <Button
            variant="contained"
            color="success"
            startIcon={<Add />}
            onClick={() => {
              setModalVisible((prevState) => !prevState);
              setModalData(null);
            }}
          >
            Add New
          </Button>
        </Stack>
      </Stack>
      <InventoryTable onToggle={modalHandler} data={rows} />
      {modalVisible && (
        <InventoryModal
          open={modalVisible}
          onClose={modalHandler}
          product={modalData}
        />
      )}
    </main>
  );
};

export default InventoryPage;
