import { Dialog, Stack, Box, Typography, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { InventoryItemType, MarketplaceModalProps } from "../../../types";
import bubbles from "../../../assets/marketPage/bubbles.png";
import useGetData from "../../../hooks/useGetData";

const MarketModal = ({ open, onClose, id }: MarketplaceModalProps) => {
  console.log(id);
  
  console.log('tttt1');
  const fetched = useGetData<InventoryItemType>(`/products/${id}`);

  if (!Array.isArray(fetched)) {
    return (
      <Dialog
        open={open}
        PaperProps={{
          style: {
            borderRadius: "20px",
            width: "600px",
            height: "621px",
          },
        }}
      >
        <img
          src={fetched?.imageURL}
          alt="Hard Coded Text"
          className="dialog-image"
        />
        <Stack direction="row" justifyContent="space-between" margin="16px">
          <Box width="75%">
            <Typography
              variant="h6"
              paragraph
              fontSize="22px"
              fontWeight="700"
              lineHeight="25px"
              margin="0px"
            >
              {fetched?.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "#9a9a9a" }}>
              {fetched?.category}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h6"
              paragraph
              fontSize="22px"
              fontWeight="700"
              lineHeight="25px"
              marginBottom="0px"
            >
              {fetched?.price}BGN
            </Typography>
            <Typography variant="body2" sx={{ color: "#9a9a9a" }}>
              Qty {fetched?.quantityForSale}
            </Typography>
          </Box>
        </Stack>
        <Box margin={"16px 32px 16px 16px"}>
          {fetched?.description === ""
            ? "No description"
            : fetched?.description}
        </Box>
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", right: "4px", top: "4px" }}
        >
          <Close sx={{ color: "#000" }} />
        </IconButton>
        <img src={bubbles} alt="Bubbles Decoration" className="bubbles" />
      </Dialog>
    );
  }
  return null;
};

export default MarketModal;
