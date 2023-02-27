import React, { useEffect } from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";
import axios from "axios";

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
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { GetMessage } from "../../redux/apiCalls/MessageApiCall";

export default function DashboardLeftSide() {
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetMessage());
  }, []);

  return (
    <div className="dashboard-left-side">
      <ul>
        <li className="left-menu-link">
          <i clclassNameass="bi bi-menu-button-wide"></i>
          <Speedometer2 />
          <Link to="/Admin"> dashboard</Link>
        </li>
        <li className="left-menu-link">
          <Stickies />
          <Link to="/"> Posts</Link>
        </li>
        <li className="left-menu-link">
          <Receipt />
          <Link to="/invoice"> factures</Link>
        </li>
        <li className="left-menu-link">
          <Activity />
          <Link to="/"> CNSS</Link>
        </li>
        <li className="left-menu-link">
          <Person />
          <Link to="/"> les employés</Link>
        </li>
        <li className="left-menu-link">
          <Buildings />
          <Link to="/login"> marches</Link>
        </li>
        <li className="left-menu-link">
          <Cash />
          <Link to="/"> Les impots</Link>
        </li>
        <li className="left-menu-link">
          <Coin />
          <Link to="/"> revenu</Link>
        </li>
        <li className="left-menu-link ">
          <Wallet2 />
          <Link to="/">Messages</Link>
          <div className="message-alert">{message.length}</div>
        </li>
      </ul>
    </div>
  );
}
