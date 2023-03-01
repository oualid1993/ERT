import { authActions } from "../slices/authSlice";
import axios from "axios";
import { toast } from "react-toastify";

// login user
export function loginUser(user) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        "https://ert.onrender.com/api/auth/login",
        user
      );
      dispatch(authActions.login(data));
      localStorage.setItem("userInfo", JSON.stringify(data));
      toast.success(" you are login ");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error.response.data.message);
    }
  };
}
