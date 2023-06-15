import InventoryPopupElement from "./InventoryPopupElement";
import { Edit, DeleteOutline, ContentPasteGo } from "@mui/icons-material";
import { InventoryActionCellType } from "../../../types";
import { useState, useContext } from "react";
import { Stack, IconButton } from "@mui/material";
import { LentItemCtx } from "../../../context/lentItemCtx";
import { Tooltip } from "react-tooltip";

const InventoryActionCell = ({
  onToggle,
  cellId,
  hasAvailable,
}: InventoryActionCellType) => {
  const [isVisible, setIsVisible] = useState(false);
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
      {hasAvailable && (
        <IconButton
          size="small"
          onClick={() => {
            toggleLentModal(cellId);
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
