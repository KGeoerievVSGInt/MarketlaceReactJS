import { Box, Stack, Button } from "@mui/material";
import { MarketplacePopupProps } from "../../../types";
import { usePostNewOrderMutation } from "../../../services/marketService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const MarketPopupElement = ({
  itemId,
  onToggle,
  price,
  quantity,
}: MarketplacePopupProps) => {
  const navigate = useNavigate();
  const [newOrder] = usePostNewOrderMutation();
  const buyHandler = () => {
    newOrder({
      itemId,
      quantity,
    })
      .unwrap()
      .then(() => {
        toast.success("Item bought succsessfuly!");
        navigate("/myorders");
      })
      .catch((error) => console.log(error));

    onToggle();
  };
  return (
    <Box
      padding={"10px"}
      maxWidth={"277px"}
      boxSizing={"border-box"}
      fontSize={"16px"}
    >
      <p>
        Are you sure you want to buy <strong>{quantity}</strong> item for{" "}
        <strong>{price && quantity && price * quantity}BGN</strong>
      </p>

      <Stack
        marginTop={"16px"}
        spacing={2}
        direction={"row"}
        justifyContent={"flex-end"}
      >
        <Button
          onClick={buyHandler}
          variant="contained"
          size="small"
          sx={{
            background: "#ED1C25",
            ":hover": {
              bgcolor: "#f69296",
            },
          }}
        >
          Yes
        </Button>
        <Button
          onClick={onToggle}
          variant="outlined"
          size="small"
          sx={{
            color: "#ED1C25",
            borderColor: "#ED1C25",
            ":hover": {
              color: "#fff",
              bgcolor: "#f69296",
              borderColor: "#f69296",
            },
          }}
        >
          No
        </Button>
      </Stack>
    </Box>
  );
};

export default MarketPopupElement;
