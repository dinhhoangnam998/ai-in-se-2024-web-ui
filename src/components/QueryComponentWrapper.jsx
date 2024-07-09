import { Box, Button, CircularProgress, LinearProgress, Skeleton, Typography } from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useSnackbar } from "notistack";
import { ERR_TOP_CENTER } from "../utils/snackbar-utils";

export default function QueryComponentWrapper({ isUninitialized, isLoading, isError, refetch, isFetching, error, render, data, children, ...rest }) {
  const { enqueueSnackbar } = useSnackbar();
  // console.log({ children, isUninitialized, isLoading, isError, refetch, isFetching, error });
  if (isUninitialized) return <div></div>;
  if (isLoading) return <Skeleton variant="rounded" height={"3rem"} />;
  // if (isLoading) return <CircularProgress />;
  if (isError) {
    enqueueSnackbar(error.message, ERR_TOP_CENTER);
    return (
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, py: 1 }}>
        <HighlightOffIcon color="error" />
        <Typography sx={{ color: "red", fontSize: "1rem" }}>Đã có lỗi xảy ra khi lấy dữ liệu!</Typography>
        <Button endIcon={<CachedIcon />} color="primary" onClick={() => refetch()}>
          Thử lại
        </Button>
      </Box>
    );
  }
  return (
    <Box sx={{ position: "relative" }}>
      {isFetching && <LinearProgress sx={{ position: "absolute", display: "block", top: 0, width: "100%", height: "4px" }} />}
      {render ? render(data) : children}
    </Box>
  );
}
