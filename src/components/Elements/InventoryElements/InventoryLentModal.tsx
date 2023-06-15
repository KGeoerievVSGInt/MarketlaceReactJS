import {
  Dialog,
  Stack,
  Typography,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Button,
  Avatar,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { LentItemCtx } from "../../../context/lentItemCtx";
import {
  InventoryLentModalType,
  LentModalType,
  UserType,
} from "../../../types";
import { numbersToArr } from "../../../utils/numberToArr";
import { usePostLentItemMutation } from "../../../services/inventoryService";
import { toast } from "react-toastify";
import { useGetAllUserQuery } from "../../../redux/userSlice";

const InventoryLentModal = ({ data }: InventoryLentModalType) => {
  //states
  const { isLentModalVisible, toggleLentModal } = useContext(LentItemCtx);
  const [users, setUsers] = useState<UserType[]>([]);
  //form controls
  const { register, handleSubmit, formState, reset } = useForm<LentModalType>({
    defaultValues: {
      orderedBy: "",
      quantity: 0,
    },
  });
  const { errors, isSubmitSuccessful } = formState;
  ///fetchers
  const [postLentItem] = usePostLentItemMutation();
  const { data: fetchedUsers } = useGetAllUserQuery();

  const availableQuantityArr = numbersToArr(data?.availableQuantity ?? 0); //quantity check to avoid undefined
  //handlers
  const onSubmit = (fetchData: LentModalType) => {
    console.log(fetchData);

    if (data) {
      const readyData: LentModalType = { ...fetchData, itemID: data.id };
      postLentItem(readyData)
        .unwrap()
        .then(() => {
          toast.success("Item updated successfully!");
        })
        .catch((e) => console.log(e));
      toggleLentModal(null);
    }
  };
  //form reset
  useEffect(() => {
    isSubmitSuccessful && reset();
  }, [isSubmitSuccessful]);
  //set users
  useEffect(() => {
    if (fetchedUsers) {
      setUsers(fetchedUsers.employees);
    }
  }, [fetchedUsers]);

  return (
    <Dialog
      open={isLentModalVisible}
      PaperProps={{
        style: {
          borderRadius: "20px",
          width: "400px",
          height: "300px",
        },
      }}
    >
      <div className="item-management">
        <form
          className="item-data"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <Stack direction={"column"} width={"100%"} spacing={2}>
            <Typography variant="h5" fontWeight={700} textAlign={"center"}>
              {data?.name}
            </Typography>
            <FormControl variant="standard" error={!!errors.orderedBy}>
              <InputLabel id="user-select-label">Users</InputLabel>
              <Select
                labelId="user-select-label"
                required
                defaultValue={""}
                label="Users "
                variant="standard"
                {...register("orderedBy", {
                  required: "Please, select user!",
                })}
              >
                {/* <MenuItem>One</MenuItem> */}
                {users.map((user) => (
                  <MenuItem key={user.email} value={user.email}>
                    <Avatar src={user.avatar} alt={user.name} />
                    <Typography marginLeft={1}>{user.name}</Typography>
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>{errors.quantity?.message}</FormHelperText>
            </FormControl>
            <FormControl variant="standard" error={!!errors.quantity}>
              <InputLabel id="quantity-select-label">Quantity</InputLabel>
              <Select
                labelId="quantity-select-label"
                required
                defaultValue={""}
                label="Quantity "
                variant="standard"
                {...register("quantity", {
                  required: "Please, select quantity!",
                })}
              >
                {availableQuantityArr.map((user) => (
                  <MenuItem key={user} value={user + 1}>
                    {user + 1}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>{errors.quantity?.message}</FormHelperText>
            </FormControl>
            <Button
              variant="contained"
              color="success"
              sx={{ fontWeight: "700", width: "150px", alignSelf: "center" }}
              type="submit"
            >
              Submit Lend
            </Button>
          </Stack>
          <IconButton
            sx={{
              position: "absolute",
              right: "-10px",
              top: "-10px",
            }}
            onClick={() => {
              toggleLentModal(null);
            }}
          >
            <Close sx={{ color: "#000" }} />
          </IconButton>
        </form>
      </div>
    </Dialog>
  );
};

export default InventoryLentModal;
