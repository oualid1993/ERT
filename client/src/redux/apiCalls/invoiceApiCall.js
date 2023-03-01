import { invoiceActions } from "../slices/invoiceSlice";
import axios from "axios";
import { toast } from "react-toastify";

//create invoice
export function CreateInvoice(invoice) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        "https://ert.onrender.com/api/Invoice/addInvoice",
        invoice
      );
      if (data) toast.success(" facture a éte ajouter  ");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

//get  invoices
export function GetInvoice(page) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://ert.onrender.com/api/Invoice?page=${page}`
      );
      if (data) dispatch(invoiceActions.setInvoice(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}
