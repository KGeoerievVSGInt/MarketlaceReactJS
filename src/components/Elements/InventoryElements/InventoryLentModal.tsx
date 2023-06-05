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
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { LentItemCtx } from "../../../context/lentItemCtx";
import { InventoryLentModalType, LentModalType } from "../../../types";
import { numbersToArr } from "../../../utils/numberToArr";
import { usePostLentItemMutation } from "../../../services/inventoryService";
const users = [
  "kgeorgiev@vsgbg.com",
  "vdenchev@vsgbg.com",
  "snikolov@vsgbg.com",
  "ykurtev@vsgbg.com",
  "eredzhepov@vsgbg.com",
  "sstoyanov@vsgbg.com",
  "sdimitrov@vsgbg.com",
  "zkerozov@vsgbg.com",
  "adragiev@vsgbg.com",
];

const InventoryLentModal = ({ data }: InventoryLentModalType) => {
  const { isLentModalVisible, toggleLentModal } = useContext(LentItemCtx);
  const { register, handleSubmit, formState, reset, setValue } =
    useForm<LentModalType>({
      defaultValues: {
        email: "",
        quantity: 0,
      },
    });
  const [postLentItem] = usePostLentItemMutation();
  const { errors, isSubmitSuccessful } = formState;

  const availableQuantityArr = numbersToArr(data?.availableQuantity ?? 0);

  const onSubmit = (fetchData: LentModalType) => {
    if (data) {
      const readyData: LentModalType = { ...fetchData, itemID: data.id };
      postLentItem(readyData);
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
            <FormControl variant="standard" error={!!errors.email}>
              <InputLabel id="email-select-label">Email</InputLabel>
              <Select
                labelId="email-select-label"
                defaultValue={""}
                required
                label="Email "
                variant="standard"
                {...register("email", {
                  required: "Please, select email!",
                })}
              >
                {users.map((user, i) => (
                  <MenuItem key={i} value={user}>
                    {user}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>{errors.email?.message}</FormHelperText>
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
              <FormHelperText>{errors.email?.message}</FormHelperText>
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
