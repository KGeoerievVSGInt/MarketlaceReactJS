import { Dialog, Stack, Box, Typography, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { MarketplaceModalProps } from "../../../types";
import bubbles from "../../../assets/marketPage/bubbles.png";
import { useGetMarketModalDataQuery } from "../../../redux/marketSlice";

const MarketModal = ({ open, onClose, code }: MarketplaceModalProps) => {
  const { data } = useGetMarketModalDataQuery(code);

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
        src={data?.imageURL}
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
            {data?.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "#9a9a9a" }}>
            {data?.category}
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
            {data?.price}BGN
          </Typography>
          <Typography variant="body2" sx={{ color: "#9a9a9a" }}>
            Qty {data?.quantityForSale}
          </Typography>
        </Box>
      </Stack>
      <Box margin={"16px 32px 16px 16px"}>
        {data?.description === "" ? "No description" : data?.description}
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
