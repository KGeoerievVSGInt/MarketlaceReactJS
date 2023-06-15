import { Dialog, Stack, Box, Typography, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { MarketplaceModalProps } from "../../../types";
import bubbles from "../../../assets/marketPage/bubbles.png";
import { useGetMarketDataQuery } from "../../../services/marketService";
import defaultImage from "../../../assets/inventory/no_image-placeholder.png";

const MarketModal = ({ open, onClose, code }: MarketplaceModalProps) => {
  const { data } = useGetMarketDataQuery(code);
  if (!data || Array.isArray(data)) return null;

  return (
    <Dialog
      role="market-modal"
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
        src={data.imageURL ?? defaultImage}
        alt={data.name}
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
            sx={{
              wordBreak: "break-all",
            }}
          >
            {data.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "#9a9a9a" }}>
            {data.category}
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
            {data.price}BGN
          </Typography>
          <Typography variant="body2" sx={{ color: "#9a9a9a" }}>
            Qty {data.quantityForSale}
          </Typography>
        </Box>
      </Stack>
      <Box margin={"16px 32px 16px 16px"}>
        <Typography
          sx={{
            wordBreak: "break-all",
          }}
        >
          {data.description === "" ? "No description" : data.description}
        </Typography>
      </Box>
      <IconButton
        role="close-button"
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
