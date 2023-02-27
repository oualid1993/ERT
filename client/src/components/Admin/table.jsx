import React from "react";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { format } from "date-fns";
import axios from "axios";

export default function TableData({ invoice }) {
  const [invoiceNumber, setInvoiceNumber] = useState(null);
  const [invoiceCompany, setInvoiceCompany] = useState(null);
  const [invoiceDate, setInvoiceDate] = useState(null);
  const [isPaid, setIsPaid] = useState(null);
  const invoices = invoice;
  let Nr = 1;

  const fromSearchSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={fromSearchSubmitHandler}>
        <div className="add-invoice-form">
          <div className="form-groupe-search">
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
            <button className="btn-submit-invoice">chercher</button>
          </div>
        </div>
      </form>
      {/* --------------------------------------------------------------------
  ------------------------------ facture tabel--------------------------- 
  -----------------------------------------------------------------------  */}
      <table>
        <thead>
          <tr>
            <th># </th>
            <th>Nr facture </th>
            <th>Total </th>
            <th className="invoice-company">Entreprise </th>
            <th>date </th>
            <th>methode de paye </th>
            <th>payee </th>
            <th>Modifier </th>
          </tr>
        </thead>
        <tbody>
          {invoice &&
            invoice.map((invoice) => (
              <tr key={invoice._id}>
                <td> {Nr++}</td>
                <td> {invoice.invoiceNumber} </td>
                <td> {invoice.invoiceValue} </td>
                <td> {invoice.invoiceCompany} </td>
                <td> {invoice.invoiceDate}</td>
                <td> {invoice.methodePaid} </td>
                <td> {invoice.isPaid} </td>
                <td>
                  <button
                    className="delete"
                    onClick={() => {
                      try {
                        axios.delete(
                          `http://localhost:5000/api/Invoice/${invoice._id}`
                        );
                        toast.success("facture est suprime");
                      } catch (err) {
                        toast.error(err.response.data.message);
                      }
                    }}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
