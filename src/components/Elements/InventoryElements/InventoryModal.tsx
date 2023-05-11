import {
  Dialog,
  TextField,
  Stack,
  Autocomplete,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import noImagePlaceholder from "../../../assets/inventory/no_image-placeholder.png";
import { InvenotryDialogModalProps } from "../../../types";

const InventoryModal = ({ open, onClose, data }: InvenotryDialogModalProps) => {
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
            <Stack direction="column" spacing={2} sx={{ flexGrow: "1" }}>
              <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
                {data ? "Edit New Item" : "Add New Item"}
              </Typography>
              <TextField variant="standard" label="Code" required />
              <TextField variant="standard" label="Name" required />
              <TextField
                variant="standard"
                label="Description"
                multiline
                rows={4}
              />
              <Autocomplete
                options={["Laptops", "Furniture", "Office tools", "Misc"]}
                renderInput={(params) => (
                  <TextField {...params} label="Category" variant="standard" />
                )}
                disableClearable={true}
              />
              <TextField
                variant="standard"
                label="Qty For Sale"
                required
                type="number"
              />
              <TextField
                variant="standard"
                label="Sale Price"
                required
                type="number"
              />
              <TextField
                variant="standard"
                label="Qty"
                required
                type="number"
              />
            </Stack>

            <Stack
              direction="column"
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >
              <img src={noImagePlaceholder} alt="Hard coded Image Text" />
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
              right: "-15px",
              top: "-15px",
            }}
            onClick={() => {
              onClose();
            }}
          >
            <Close sx={{ color: "#000" }} />
          </IconButton>
        </form>
      </div>
    </Dialog>
  );
};

export default InventoryModal;
