import { useState, useContext } from "react";
import { LentItemCtx } from "../../../context/lentItemCtx";
import { Stack, IconButton } from "@mui/material";
import { Edit, DeleteOutline, ContentPasteGo } from "@mui/icons-material";
import { Tooltip } from "react-tooltip";
import InventoryPopupElement from "./InventoryPopupElement";
import { InventoryActionCellType } from "../../../types";

const InventoryActionCell = ({
  onToggle,
  cellId,
  hasAvailable,
}: InventoryActionCellType) => {
  const [isVisible, setIsVisible] = useState(false); // local state and toggle for single row
  const { toggleLentModal } = useContext(LentItemCtx);

  const togglePopup = () => {
    setIsVisible((prevState) => !prevState);
  };
  return (
    <Stack direction={"row"}>
      <IconButton
        onClick={() => {
          onToggle(cellId);
        }}
        size="small"
      >
        <Edit
          sx={{
            color: "#ed1c25",
          }}
        />
      </IconButton>
      <IconButton
        size="small"
        data-tooltip-id={`my-tooltip-${cellId}`}
        onClick={togglePopup}
      >
        <DeleteOutline
          sx={{
            color: "#ed1c25",
          }}
        />
      </IconButton>
      {!!hasAvailable && (
        <IconButton
          size="small"
          onClick={() => {
            toggleLentModal(cellId as number);
          }}
        >
          <ContentPasteGo
            sx={{
              color: "#ed1c25",
            }}
          />
        </IconButton>
      )}
      {isVisible && (
        <Tooltip
          id={`my-tooltip-${cellId}`}
          isOpen={isVisible}
          place="bottom"
          closeOnEsc
          variant="light"
          className="tooltip"
          clickable={true}
          style={{
            whiteSpace: "normal",
            zIndex: "5",
          }}
        >
          <InventoryPopupElement onToggle={togglePopup} id={cellId} />
        </Tooltip>
      )}
    </Stack>
  );
};

export default InventoryActionCell;
