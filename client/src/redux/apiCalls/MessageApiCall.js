import { messageActions } from "../slices/MessageSlice";
import axios from "axios";
import { toast } from "react-toastify";

//get  invoices
export function GetMessage() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:5000/api/message`);
      if (data) dispatch(messageActions.setMessage(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}
