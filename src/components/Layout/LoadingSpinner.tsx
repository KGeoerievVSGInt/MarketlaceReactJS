import { CircularProgress, Stack } from "@mui/material";

const LoadingSpinner = () => {
  return (
    <Stack height={"100%"} justifyContent={"center"} alignItems={"center"}>
      <CircularProgress />
    </Stack>
  );
};

export default LoadingSpinner;
