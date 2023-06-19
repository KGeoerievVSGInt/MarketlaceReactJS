import noImagePlaceholder from "../../../assets/inventory/no_image-placeholder.png";
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
import { InvenotryDialogModalProps, InventoryItemType } from "../../../types";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useEffect, useState } from "react";
import {
  usePostInventoryDataMutation,
  useUpdateInventoryDataMutation,
} from "../../../services/inventoryService";
import { useGetLocationsQuery } from "../../../services/locationService";
import { useGetCategoryQuery } from "../../../services/categoryService";
import { toast } from "react-toastify";
import { dataSanitizer } from "../../../utils/dataSanitizer";
const InventoryModal = ({
  open,
  onClose,
  product,
}: InvenotryDialogModalProps) => {
  //states
  const [image, setImage] = useState(
    product ? product.imageURL : noImagePlaceholder
  );
  //fetchers
  const { data: locations } = useGetLocationsQuery();
  const { data: categories } = useGetCategoryQuery();
  const [addItem] = usePostInventoryDataMutation();
  const [editItem] = useUpdateInventoryDataMutation();
  //form controls
  const { register, control, handleSubmit, formState, reset, setValue, watch } =
    useForm<InventoryItemType>({
      values: product ?? undefined,
    });

  const { errors, isSubmitSuccessful, dirtyFields } = formState;

  //Handlers
  const onSubmit = (data: InventoryItemType) => {
    addItem(dataSanitizer<InventoryItemType>(data))
      .unwrap()
      .then(() => toast.success("Item added successfully!"))
      .catch((e) => console.log(e));
    onClose();
  };

  const onEdit = (data: InventoryItemType) => {
    editItem({
      ...data,
      imageModified: dirtyFields.imageURL ?? false,
    })
      .unwrap()
      .then(() => toast.success("Item updated successfully!"))
      .catch((e) => console.log(e));
    onClose();
  };

  const onImageDelete = () => {
    setValue("imageURL", null, { shouldDirty: true });
    setImage(noImagePlaceholder);
  };
  //quantity watchers
  const quantity = watch("quantity") ?? 0;
  const quantityForSale = watch("quantityForSale") ?? 0;
  const availableQuantity = watch("availableQuantity") ?? 0;
  //Form reset
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
          height: "800px",
        },
      }}
    >
      <div className="item-management">
        <form
          className="item-data"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <Stack direction="row" spacing={6} width={"100%"}>
            <Stack direction="column" spacing={2} flexGrow={1}>
              <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
                {product ? "Edit Item" : "Add New Item"}
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
                <InputLabel id="category-select-label">Category</InputLabel>
                <Select
                  labelId="category-select-label"
                  required
                  label="Category "
                  defaultValue={product ? product.category : ""}
                  variant="standard"
                  {...register("category", {
                    required: "Please, select category!",
                  })}
                >
                  {categories &&
                    categories.map((category, i) => (
                      <MenuItem key={i} value={category}>
                        {category}
                      </MenuItem>
                    ))}
                </Select>
                <FormHelperText>{errors.category?.message}</FormHelperText>
              </FormControl>
              <FormControl variant="standard" error={!!errors.location}>
                <InputLabel id="location-select-label">Location</InputLabel>
                <Select
                  labelId="location-select-label"
                  required
                  label="Category "
                  defaultValue={product ? product.location : ""}
                  variant="standard"
                  {...register("location", {
                    required: "Please, select location!",
                  })}
                >
                  {locations &&
                    locations.map((location: string, i) => (
                      <MenuItem key={i} value={location}>
                        {location}
                      </MenuItem>
                    ))}
                </Select>
                <FormHelperText>{errors.location?.message}</FormHelperText>
              </FormControl>
              <TextField
                error={
                  product
                    ? !!errors.quantityForSale && dirtyFields.quantityForSale
                    : false
                }
                variant="standard"
                helperText={
                  product &&
                  errors.quantityForSale &&
                  dirtyFields.quantityForSale
                    ? errors.quantityForSale.message
                    : ""
                }
                label="Qty For Sale"
                type="number"
                {...register("quantityForSale", {
                  valueAsNumber: true,
                  max: {
                    value: quantity - availableQuantity,
                    message: `Not enough available quantity for sale`,
                  },
                })}
              />
              <TextField
                error={
                  product
                    ? !!errors.availableQuantity &&
                      dirtyFields.availableQuantity
                    : false
                }
                helperText={
                  product &&
                  errors.availableQuantity &&
                  dirtyFields.availableQuantity
                    ? errors.availableQuantity.message
                    : ""
                }
                variant="standard"
                label="Available Quantity"
                type="number"
                {...register("availableQuantity", {
                  valueAsNumber: true,
                  max: {
                    value: quantity - quantityForSale,
                    message: `Not enough available quantity for borrow
                    `,
                  },
                })}
              />
              <TextField
                error={!!errors.price}
                helperText={errors.price?.message ?? ""}
                variant="standard"
                label="Sale Price"
                type="number"
                {...register("price", {
                  required: {
                    value: quantityForSale > 0,
                    message: "Please, specify price!",
                  },
                  valueAsNumber: true,
                })}
              />
              <TextField
                error={!!errors.quantity && dirtyFields.quantity}
                helperText={
                  errors.quantity && dirtyFields.quantity
                    ? errors.quantity.message
                    : ""
                }
                variant="standard"
                required
                label="Qty"
                type="number"
                {...register("quantity", {
                  valueAsNumber: true,
                  required: "Please, select quantity!",
                  min: {
                    value: quantityForSale + availableQuantity,
                    message: `The quantity cannot be lower than the sum of Qty for Sale and Available Quantity
                    }`,
                  },
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
                src={image ?? noImagePlaceholder}
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
                onClick={onImageDelete}
                variant="contained"
                color="error"
                sx={{ fontWeight: "700", width: "150px" }}
              >
                Delete
              </Button>
            </Stack>
          </Stack>
          <Box marginTop="35px" paddingBottom="20px">
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
              reset();
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
