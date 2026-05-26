import { Link } from "react-router-dom";

import "./App.css";

export default function Open() {

  return (

    <div className="open-page">

      <div className="open-content">

        <h1 className="welcome-title">
          🚀 NASA SPACE
        </h1>

        <p className="welcome-text">
          Explore The Universe
        </p>

        <Link to="/dashboard">

          <button className="start-btn">
            OPEN
          </button>

        </Link>

      </div>

    </div>
  );
}