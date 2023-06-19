import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { PaginationPropsType } from "../../types";
const buttonsStyling = {
  color: "#FFF",
  bgcolor: "#ED1C25",
  marginTop: "12px",
  marginRight: "16px",
  ":hover": {
    bgcolor: "#f69296",
  },
};

const Pagination = ({
  nextPage,
  prevPage,
  currPage,
  maxPage,
}: PaginationPropsType) => {
  return (
    <Box alignSelf={"flex-end"} marginTop={"auto"}>
      <IconButton
        size="small"
        sx={buttonsStyling}
        onClick={prevPage}
        disabled={currPage === 0}
      >
        <ChevronLeft />
      </IconButton>
      <IconButton
        size="small"
        sx={buttonsStyling}
        onClick={nextPage}
        disabled={currPage === maxPage - 1}
      >
        <ChevronRight />
      </IconButton>
    </Box>
  );
};

export default Pagination;
