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
  TextField,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { LentItemCtx } from "../../../context/lentItemCtx";
import { InventoryLentModalType, LentModalType } from "../../../types";
import { numbersToArr } from "../../../utils/numberToArr";
import { usePostLentItemMutation } from "../../../services/inventoryService";
import { toast } from "react-toastify";
import { useGetAllUserQuery } from "../../../redux/userSlice";

const InventoryLentModal = ({ data }: InventoryLentModalType) => {
  //states
  const { isLentModalVisible, toggleLentModal } = useContext(LentItemCtx);
  //form controls
  const { register, handleSubmit, formState, reset } = useForm<LentModalType>({
    defaultValues: {
      orderedBy: "",
      quantity: 0,
    },
  });
  const { errors, isSubmitSuccessful } = formState;
  useEffect(() => {
    isSubmitSuccessful && reset();
  }, [isSubmitSuccessful]);
  ///fetchers
  const [postLentItem] = usePostLentItemMutation();
  const { data: users } = useGetAllUserQuery("");

  console.log(users);

  const availableQuantityArr = numbersToArr(data?.availableQuantity ?? 0); //quantity check to avoid undefined
  //handlers
  const onSubmit = (fetchData: LentModalType) => {
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
            <TextField
              error={!!errors.orderedBy}
              helperText={errors.orderedBy?.message}
              variant="standard"
              required
              label="Email"
              {...register("orderedBy", {
                required: "Please, enter code!",
                pattern: {
                  value: /[\w]+@vsgbg\.com$/i,
                  message: "Please, use valid VSG Bulgaria email!",
                },
              })}
            />
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
