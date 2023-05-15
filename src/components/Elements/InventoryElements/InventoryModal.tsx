import {
  Dialog,
  TextField,
  Stack,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Button,
  Box,
  IconButton,
  FormControl,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import noImagePlaceholder from "../../../assets/inventory/no_image-placeholder.png";
import { InvenotryDialogModalProps } from "../../../types";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const InventoryModal = ({
  open,
  onClose,
  productId,
}: InvenotryDialogModalProps) => {
  const { register, control } = useForm();
  console.log(productId);

  return (
    <Dialog
      open={open}
      onClose={() => {
        onClose();
      }}
      PaperProps={{
        style: {
          borderRadius: "20px",
          width: "600px",
          height: "700px",
        },
      }}
    >
      <div className="item-management">
        <form className="item-data">
          <Stack direction="row" spacing={6}>
            <Stack direction="column" spacing={2} flexGrow={1}>
              <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
                {productId ? "Edit New Item" : "Add New Item"}
              </Typography>
              <TextField
                variant="standard"
                label="Code"
                {...register("code")}
              />
              <TextField
                variant="standard"
                label="Name"
                {...register("name")}
              />
              <TextField
                variant="standard"
                label="Description"
                multiline
                rows={4}
                {...register("description")}
              />
              <FormControl variant="standard">
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  label="Category"
                  variant="standard"
                >
                  <MenuItem value={"Laptops"}>Laptops</MenuItem>
                  <MenuItem value={"Furniture"}>Furniture</MenuItem>
                  <MenuItem value={"Office tools"}>Office tools</MenuItem>
                  <MenuItem value={"Misc"}>Misc</MenuItem>
                </Select>
              </FormControl>
              <TextField
                variant="standard"
                label="Qty For Sale"
                type="number"
                {...register("qty-for-sale")}
              />
              <TextField
                variant="standard"
                label="Sale Price"
                required
                type="number"
                {...register("price")}
              />
              <TextField
                variant="standard"
                label="Qty"
                type="number"
                {...register("quantity")}
              />
            </Stack>

            <Stack
              direction="column"
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >
              <img
                src={noImagePlaceholder}
                alt="Hard coded Image Text"
                className="item-image"
              />
              <Button
                variant="contained"
                color="warning"
                sx={{ fontWeight: "700", width: "150px" }}
                component="label"
              >
                Upload
                <input
                  type="file"
                  hidden
                  accept="image/jpeg, image/png, image/jpg"
                />
              </Button>
              <Button
                variant="contained"
                color="error"
                sx={{ fontWeight: "700", width: "150px" }}
              >
                Delete
              </Button>
            </Stack>
          </Stack>
          <Box margin="35px 0" paddingBottom="20px">
            <Button
              variant="contained"
              color="success"
              sx={{ fontWeight: "700", width: "150px" }}
            >
              Add
            </Button>
          </Box>
          <IconButton
            sx={{
              position: "absolute",
              right: "-10px",
              top: "-10px",
            }}
            onClick={() => {
              onClose();
            }}
          >
            <Close sx={{ color: "#000" }} />
          </IconButton>
        </form>
      </div>
      <DevTool control={control} />
    </Dialog>
  );
};

export default InventoryModal;
