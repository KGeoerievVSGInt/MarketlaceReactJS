import defaultProductImage from "../../../assets/marketPage/product-image.png";
import { IconButton, Stack, Autocomplete, TextField } from "@mui/material";
import { Tooltip } from "react-tooltip";
import dollar from "../../../assets/marketPage/Vector_dollar.svg";
import { useState } from "react";
import MarketModal from "./MarketModal";
import "react-tooltip/dist/react-tooltip.css";
import MarketPopupElement from "./MarketPopupElement";
const CardItem = () => {
  const [value, setValue] = useState("1");
  const [modalVisible, setModalVisible] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const changeValueHandler = (e: any, newVal: string | null) => {
    if (newVal) {
      setValue(newVal);
    }
  };
  const toggleModal = () => {
    setModalVisible((prevState) => !prevState);
  };
  const togglePopup = () => {
    setPopupVisible((prevState) => !prevState);
  };
  return (
    <div className="card-item">
      <a href="#" onClick={toggleModal}>
        <img src={defaultProductImage} alt="Product Image" />
      </a>
      <div className="item-options">
        <div className="item-options-info">
          <span>5000BGN</span>
          <span className="item-options-info-category">Laptops</span>
        </div>
        <Stack
          direction={"row"}
          justifyContent={"stretch"}
          alignItems={"flex-start"}
          marginRight={"8px"}
          gap={2}
        >
          <Autocomplete
            value={value}
            onChange={changeValueHandler}
            options={["1", "2", "3", "4"]}
            size="small"
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                sx={{ width: "20px" }}
              />
            )}
            disableClearable={true}
          />
          <IconButton
            sx={{
              background: "#ED1C25",
              ":hover": {
                bgcolor: "#f69296",
              },
            }}
            size="small"
            className="tooltip-popup"
            data-tooltip-id="my-tooltip"
            onClick={togglePopup}
          >
            <img src={dollar} alt="Purchase Button" />
          </IconButton>
          <Tooltip
            id="my-tooltip"
            isOpen={popupVisible}
            place="bottom"
            closeOnEsc
            variant="light"
            className="tooltip"
            clickable={true}
          >
            <MarketPopupElement onToggle={togglePopup} type="market" />
          </Tooltip>
        </Stack>
      </div>
      <MarketModal open={modalVisible} onClose={toggleModal} />
    </div>
  );
};

export default CardItem;
