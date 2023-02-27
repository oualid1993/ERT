import React from "react";
import { useSelector, useDispatch } from "react-redux";
import DashboardLeftSide from "../components/Admin/DashboardLeftSide";
import { useState, useEffect } from "react";
import "../index.css";
import "../styles/dashboard.css";
import { Link } from "react-router-dom";
import { GetInvoice } from "../redux/apiCalls/invoiceApiCall";
import {
  ArrowRight,
  Speedometer2,
  Stickies,
  Receipt,
  Activity,
  Person,
  Buildings,
  Cash,
  Coin,
  Wallet2,
} from "react-bootstrap-icons";
import { GetMessage } from "../redux/apiCalls/MessageApiCall";
import { toast } from "react-toastify";

export default function Dashboard() {
  const { invoice } = useSelector((state) => state.invoice);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetInvoice());
    dispatch(GetMessage());
  }, []);

  return (
    <>
      <div className="page">
        <DashboardLeftSide />
        <div className="dashboard-centent">
          <h3 className="title">Dashboard</h3>
          <div className="cards">
            <div className="card">
              <div className="icon-card">
                <Stickies className="logo" />
              </div>
              <div className="title-card">Posts </div>
              <div className="discreption"> 182 factures</div>
            </div>
            <div className="card">
              <div className="icon-card">
                <Receipt className="logo" />
              </div>
              <div className="title-card">facture</div>
              <div className="discreption">{invoice.length} factures</div>
            </div>
            <div className="card">
              <div className="icon-card">
                <Activity className="logo" />
              </div>
              <div className="title-card">CNSS</div>
              <div className="discreption"> 182 factures</div>
              <div className="detail">Detail</div>
            </div>
            <div className="card">
              <div className="icon-card">
                <Person className="logo" />
              </div>
              <div className="title-card">les employés</div>
              <div className="discreption"> 182 factures</div>
            </div>
            <div className="card">
              <div className="icon-card">
                <Buildings className="logo" />
              </div>
              <div className="title-card">marches</div>
              <div className="discreption"> 182 factures</div>
            </div>
            <div className="card">
              <div className="icon-card">
                <Cash className="logo" />
              </div>
              <div className="title-card"> Les impots</div>
              <div className="discreption"> 182 factures</div>
            </div>
            <div className="card">
              <div className="icon-card">
                <Coin className="logo" />
              </div>
              <div className="title-card">revenu</div>
              <div className="discreption"> 182 factures</div>
            </div>
            <div className="card">
              <div className="icon-card">
                <Wallet2 className="logo" />
              </div>
              <div className="title-card">Messages</div>
              <div className="discreption"> {message.length} Messages</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
