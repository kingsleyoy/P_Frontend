import React from "react";
import "./LogCollection.scss";
import { Link } from "react-router-dom";

const LogCollection = () => {
  return (
    <div className="log-container" id="app">
      <div className="log-wrapper">
        <h4>FUNLOG COLLECTION</h4>
        <ul>
          <li>
            <Link to={"/intellect_insurgence"}>Intellect Insurgence</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LogCollection;
