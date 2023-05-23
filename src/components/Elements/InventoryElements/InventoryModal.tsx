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
  FormHelperText,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import noImagePlaceholder from "../../../assets/inventory/no_image-placeholder.png";
import { InvenotryDialogModalProps, InventoryItemType } from "../../../types";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useEffect, useState } from "react";
import {
  usePostInventoryDataMutation,
  useUpdateInventoryDataMutation,
} from "../../../redux/dataSlice";

const InventoryModal = ({
  open,
  onClose,
  product,
}: InvenotryDialogModalProps) => {
  const [image, setImage] = useState(
    product ? product.imageURL : noImagePlaceholder
  );

  const [productData, setProductData] = useState<InventoryItemType | null>(
    product
  );
  const [addItem] = usePostInventoryDataMutation();
  const [editItem] = useUpdateInventoryDataMutation();
  useEffect(() => {
    setProductData(product);
  }, [product]);
  const defaultData = {
    id: 0,
    category: "",
    code: 0,
    description: "",
    imageURL: "",
    name: "",
    price: 0,
    quantityForSale: 0,
    quantity: 0,
  };
  const { register, control, handleSubmit, formState, reset } =
    useForm<InventoryItemType>({
      values: productData ?? undefined,
    });

  const { errors, isSubmitSuccessful } = formState;
  const onSubmit = (data: InventoryItemType) => {
    addItem(data);
    onClose();
  };
  const onEdit = (data: InventoryItemType) => {
    editItem(data);
    onClose();
  };
  useEffect(() => {
    isSubmitSuccessful && reset();
  }, [isSubmitSuccessful]);
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
        <form
          className="item-data"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <Stack direction="row" spacing={6}>
            <Stack direction="column" spacing={2} flexGrow={1}>
              <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
                {product ? "Edit New Item" : "Add New Item"}
              </Typography>
              <TextField
                error={!!errors.code}
                helperText={errors.code?.message}
                variant="standard"
                required
                label="Code"
                {...register("code", {
                  required: "Please, enter code!",
                })}
              />
              <TextField
                error={!!errors.name}
                helperText={errors.name?.message}
                variant="standard"
                required
                label="Name"
                {...register("name", {
                  required: "Please, enter name!",
                })}
              />
              <TextField
                variant="standard"
                label="Description"
                multiline
                rows={4}
                {...register("description")}
              />
              <FormControl variant="standard" error={!!errors.category}>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  required
                  label="Category "
                  variant="standard"
                  defaultValue=""
                  {...register("category", {
                    required: "Please, select category!",
                  })}
                >
                  <MenuItem value={"Laptops"}>Laptops</MenuItem>
                  <MenuItem value={"Furniture"}>Furniture</MenuItem>
                  <MenuItem value={"Office tools"}>Office tools</MenuItem>
                  <MenuItem value={"Misc"}>Misc</MenuItem>
                </Select>
                <FormHelperText>{errors.category?.message}</FormHelperText>
              </FormControl>
              <TextField
                variant="standard"
                label="Qty For Sale"
                type="number"
                {...register("quantityForSale", {
                  valueAsNumber: true,
                })}
              />
              <TextField
                variant="standard"
                label="Sale Price"
                type="number"
                {...register("price", {
                  valueAsNumber: true,
                })}
              />
              <TextField
                error={!!errors.quantity}
                helperText={errors.quantity?.message}
                variant="standard"
                required
                label="Qty"
                type="number"
                {...register("quantity", {
                  valueAsNumber: true,
                  required: "Please, select quantity!",
                })}
              />
            </Stack>

            <Stack
              direction="column"
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >
              <img
                src={image}
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
                  {...register("imageURL", {
                    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                      if (e.target.files) {
                        const newImg = URL.createObjectURL(e.target.files[0]);
                        setImage(newImg);
                      }
                    },
                  })}
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
            {!product && (
              <Button
                variant="contained"
                color="success"
                sx={{ fontWeight: "700", width: "150px" }}
                type="submit"
              >
                Add
              </Button>
            )}
            {product && (
              <Button
                variant="contained"
                color="success"
                sx={{ fontWeight: "700", width: "150px" }}
                type="button"
                onClick={handleSubmit(onEdit)}
              >
                Modify
              </Button>
            )}
          </Box>
          <IconButton
            sx={{
              position: "absolute",
              right: "-10px",
              top: "-10px",
            }}
            onClick={() => {
              onClose();
              setProductData(defaultData);
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
