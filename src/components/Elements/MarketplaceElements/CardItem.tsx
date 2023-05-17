import {
  IconButton,
  Stack,
  Select,
  MenuItem,
  FormControl,
  SelectChangeEvent,
} from "@mui/material";
import { Tooltip } from "react-tooltip";
import dollar from "../../../assets/marketPage/Vector_dollar.svg";
import { useState } from "react";
import MarketModal from "./MarketModal";
import "react-tooltip/dist/react-tooltip.css";
import MarketPopupElement from "./MarketPopupElement";
import { CardItemProps } from "../../../types";
const CardItem = ({
  id,
  code,
  price,
  category,
  quantityForSale,
  imageURL,
}: CardItemProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectVal, setSelectVal] = useState("1");
  const toggleModal = () => {
    setModalVisible((prevState) => !prevState);
  };
  const togglePopup = () => {
    setPopupVisible((prevState) => !prevState);
  };
  return (
    <div className="card-item">
      <a href="#" onClick={toggleModal}>
        <img src={imageURL} alt="Product Image" />
      </a>
      <div className="item-options">
        <div className="item-options-info">
          <span>{`${price}BGN`}</span>
          <span className="item-options-info-category">{category}</span>
        </div>
        <Stack
          direction={"row"}
          justifyContent={"stretch"}
          alignItems={"flex-start"}
          marginRight={"8px"}
          gap={2}
        >
          <FormControl>
            <Select
              variant="standard"
              defaultValue={"1"}
              onChange={(e: SelectChangeEvent) => {
                setSelectVal(e.target.value);
              }}
            >
              {[...Array(quantityForSale)].map((num: null, i) => {
                return (
                  <MenuItem key={i} value={i + 1}>
                    {i + 1}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <IconButton
            sx={{
              background: "#ED1C25",
              ":hover": {
                bgcolor: "#f69296",
              },
            }}
            size="small"
            className="tooltip-popup"
            data-tooltip-id={`my-tooltip-${code}`}
            onClick={togglePopup}
          >
            <img src={dollar} alt="Purchase Button" />
          </IconButton>
          {popupVisible && (
            <Tooltip
              id={`my-tooltip-${code}`}
              isOpen={popupVisible}
              place="bottom"
              closeOnEsc
              variant="light"
              className="tooltip"
              clickable={true}
            >
              <MarketPopupElement
                onToggle={togglePopup}
                type="market"
                quantity={Number(selectVal)}
                price={price}
              />
            </Tooltip>
          )}
        </Stack>
      </div>
      {modalVisible && (
        <MarketModal open={modalVisible} onClose={toggleModal} id={id} />
      )}
    </div>
  );
};

export default CardItem;
