import { useSnackbar } from "notistack";
import { ERR_TOP_CENTER } from "../utils/snackbar-utils";

export default function useHandleError() {
  const { enqueueSnackbar } = useSnackbar();
  function handleError(error) {
    enqueueSnackbar(error.message, ERR_TOP_CENTER);
  }
  return { handleError };
}
