import { Box, Stack, Button } from "@mui/material";
import { MyOrdersPopupType } from "../../../types";
const MyOrdersPopup = ({ onToggle }: MyOrdersPopupType) => {
  return (
    <Box
      padding={"10px"}
      maxWidth={"277px"}
      boxSizing={"border-box"}
      fontSize={"16px"}
    >
      <p>Are You sure you want to delete this item</p>

      <Stack
        marginTop={"16px"}
        spacing={2}
        direction={"row"}
        justifyContent={"flex-end"}
      >
        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "#ED1C25",
            ":hover": {
              backgroundColor: "#f69296",
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
              backgroundColor: "#f69296",
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

export default MyOrdersPopup;
