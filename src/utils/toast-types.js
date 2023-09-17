import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const POSITION = {
  RIGHT: "bottom-right",
};

const THEME_COLOR = {
  colored: "colored",
  dark: "dark",
};

const notifySuccess = (message) => {
  toast.success(message, {
    position: POSITION.RIGHT,
    theme: THEME_COLOR.colored,
  });
};

const notifyError = (message) => {
  toast.error(message, {
    position: POSITION.RIGHT,
    theme: THEME_COLOR.colored,
  });
};

export { notifySuccess, notifyError };
