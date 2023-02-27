import React from "react";
import DashboardLeftSide from "../components/Admin/DashboardLeftSide";
import TableData from "../components/Admin/table";

import { CreateInvoice, GetInvoice } from "../redux/apiCalls/invoiceApiCall";
import "../index.css";
import "../styles/invoice.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { invoiceActions } from "../redux/slices/invoiceSlice";
import axios from "axios";

// fetch data function

function Invoice() {
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetInvoice(page));
  }, [page]);
  // fetch data from sever
  const { invoice } = useSelector((state) => state.invoice);
  const [invoiceNumber, setInvoiceNumber] = useState(null);
  const [invoiceValue, setInvoiceValue] = useState(null);
  const [invoiceCompany, setInvoiceCompany] = useState(null);
  const [invoiceDate, setInvoiceDate] = useState(null);
  const [methodePaid, setMethodePaid] = useState("----");
  const [isPaid, setIsPaid] = useState(null);

  const fromSubmitHandler = (e) => {
    e.preventDefault();
    //validition form
    if (!invoiceNumber) toast.error("ajouter Nr de facture");
    if (!invoiceValue) toast.error("ajouter total de facture");
    if (!invoiceCompany) toast.error("ajouter nom d'entreprise ");
    if (!invoiceDate) toast.error("ajouter date du facture ");

    // dipatch the data to the redux action
    if (
      invoiceNumber != null &&
      invoiceValue != null &&
      invoiceCompany != null &&
      invoiceDate != null &&
      methodePaid != null &&
      isPaid != null
    ) {
      dispatch(
        CreateInvoice({
          invoiceNumber,
          invoiceValue,
          invoiceCompany,
          invoiceDate,
          methodePaid,
          isPaid,
        })
      );
      dispatch(GetInvoice());
    }
  };

  return (
    <div className="page">
      <ToastContainer />
      <DashboardLeftSide />
      <div className="invoice-Content">
        <h3 className="title">Factures</h3>
        <form onSubmit={fromSubmitHandler}>
          <div className="add-invoice-form">
            <div className="form-groupe-ivoices">
              <div className="input-form-invoice">
                <input
                  className="number"
                  type="number"
                  value={invoiceNumber}
                  placeholder="Numero du facture"
                  onChange={(e) => setInvoiceNumber(e.target.value)}
                />
              </div>
              <div className="input-form-invoice">
                <input
                  className="number"
                  type="number"
                  value={invoiceValue}
                  placeholder="Total"
                  onChange={(e) => setInvoiceValue(e.target.value)}
                />
              </div>
              <div className="input-form-invoice">
                <input
                  type="text"
                  value={invoiceCompany}
                  placeholder="Entreprise"
                  onChange={(e) => setInvoiceCompany(e.target.value)}
                />
              </div>
              <div className="input-form-invoice">
                <input
                  type="date"
                  value={invoiceDate}
                  onChange={(e) => setInvoiceDate(e.target.value)}
                />
              </div>
              <div className="input-form-invoice">
                <label htmlFor="pet-select">methode </label>
                <select
                  id="pet-select"
                  value={methodePaid}
                  onChange={(e) => setMethodePaid(e.target.value)}
                >
                  <option value="notPaid"></option>
                  <option value="notPaid">---</option>
                  <option value="cash">cash</option>
                  <option value="cheque">chèque</option>
                </select>
              </div>
              <div className="input-form-invoice">
                <label htmlFor="idPaid">payee? </label>
                <select
                  id="idPaid"
                  value={isPaid}
                  onChange={(e) => setIsPaid(e.target.value)}
                >
                  <option value="----">---</option>
                  <option value="non">non</option>
                  <option value="oui">oui</option>
                </select>
              </div>
              <button className="btn-submit-invoice">ajouter la facture</button>
            </div>
          </div>
        </form>
        <TableData invoice={invoice} />
        {/* pagination nav */}
        <div className="pagintion-nav">
          <button
            disabled={page == 0 ? true : false}
            onClick={() => {
              setPage((prev) => prev - 1);
            }}
          >
            &lt; précédent
          </button>
          <button
            disabled={invoice.length >= 10 ? false : true}
            onClick={() => {
              setPage((prev) => prev + 1);
            }}
          >
            Apres &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Invoice;
