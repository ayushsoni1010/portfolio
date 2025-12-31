import { toast, ToastPosition } from "react-toastify";

const helpers = {
  /***** Hardcoded RegEx for Email validations *****/
  validEmail: (email: string): boolean => {
    const valid =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const specials = /[*|\":<>[\]{}`\\()';&$]/;

    return valid.test(email) && !specials.test(email);
  },

  /***** Toast for Base Error Messages by using React Toastify library *****/
  alertToastHandling: (
    message: string,
    position: ToastPosition = "top-right"
  ): void => {
    toast(message, {
      position,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  },
};

export { helpers };
