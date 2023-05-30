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
import React, { useState } from "react";
import MarketModal from "./MarketModal";
import "react-tooltip/dist/react-tooltip.css";
import MarketPopupElement from "./MarketPopupElement";
import { FetcherDataType } from "../../../types";
import { usePostNewOrderMutation } from "../../../redux/dataSlice";
import { useNavigate } from "react-router-dom";
import defaultImage from "../../../assets/inventory/no_image-placeholder.png";
import { numbersToArr } from "../../../utils/numberToArr";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { toast } from "react-toastify";
const CardItem = ({
  code,
  price,
  category,
  quantityForSale,
  imageURL,
}: FetcherDataType) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectVal, setSelectVal] = useState("1");
  const [newOrder] = usePostNewOrderMutation();
  const navigate = useNavigate();
  const toggleModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setModalVisible((prevState) => !prevState);
  };
  const togglePopup = () => {
    setPopupVisible((prevState) => !prevState);
  };

  const buyHandler = () => {
    const user = localStorage.getItem("user");
    if (user) {
      const parced = JSON.parse(user);
      const email = parced.username;
      newOrder({
        itemCode: code,
        quantity: Number(selectVal),
        userEmail: email,
      })
        .unwrap()
        .then(() => {
          toast.success("item bought succsessfuly");
          navigate("/myorders");
        })
        .catch((error) => console.log(error));
    }

    setPopupVisible((prevState) => !prevState);
  };
  return (
    <div className="card-item">
      <a href="" onClick={toggleModal}>
        <img src={imageURL ?? defaultImage} alt="Product Image" />
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
              {numbersToArr(quantityForSale).map((num) => {
                return (
                  <MenuItem key={num} value={num + 1}>
                    {num + 1}
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
                quantity={Number(selectVal)}
                price={price}
                onBuy={buyHandler}
              />
            </Tooltip>
          )}
        </Stack>
      </div>
      {modalVisible && (
        <MarketModal open={modalVisible} onClose={toggleModal} code={code} />
      )}
    </div>
  );
};

export default CardItem;
