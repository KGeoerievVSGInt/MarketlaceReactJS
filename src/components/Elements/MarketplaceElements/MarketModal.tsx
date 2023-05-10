import { Dialog, Stack, Box, Typography, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { MarketplaceModalProps } from "../../../types";
import defaultImage from "../../../assets/marketPage/product-image.png";
import bubbles from "../../../assets/marketPage/bubbles.png";

const MarketModal = ({ open, onClose }: MarketplaceModalProps) => {
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
      <img src={defaultImage} alt="Hard Coded Text" className="dialog-image" />
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
            Laptop MacBook Pro 16” M1 Max 32GB RAM 1TB SSD 32 Cores GPU
          </Typography>
          <Typography variant="body2" sx={{ color: "#9a9a9a" }}>
            Laptops
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
            5000BGN
          </Typography>
          <Typography variant="body2" sx={{ color: "#9a9a9a" }}>
            Qty 2
          </Typography>
        </Box>
      </Stack>
      <Box margin={"16px 32px 16px 16px"}>
        This it the description of the product. This it the description of the
        product. This it the description of the product. This it the description
        of the product. This it the description of the product. This it the
        description of the product. This it the description of the product. This
        it the description of the product. This it the description of the
        product. This it the description of the product. This it the description
        of the product. This it the description of the product. This it the
        description of the product. This it the description of the product.
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
};

export default MarketModal;
