import "./App.css";
import { Link } from "react-router-dom";
export default function Info() {

  return (

    <div className="info-page">

  <Link to="/dashboard">

    <button className="back-btn">
      HOME
    </button>

  </Link>

  <h1>
    ℹ️ ABOUT THIS PROJECT
  </h1>

      <p className="info-text">
        This futuristic NASA Dashboard was created
        using React and real NASA APIs.
      </p>

      {/* COMPONENTS */}

      <div className="info-cards">

        <div className="info-card">

          <h2>
            🛰 ISS POSITION
          </h2>

          <p>
            Shows the live location of the
            International Space Station.
          </p>

          <p>
            Updates every 5 seconds using
            real-time coordinates.
          </p>

        </div>

        <div className="info-card">

          <h2>
            👨‍🚀 PEOPLE IN SPACE
          </h2>

          <p>
            Displays every astronaut currently
            in space.
          </p>

          <p>
            Shows which spacecraft they are on.
          </p>

        </div>

        <div className="info-card">

          <h2>
            ☄ ASTEROIDS
          </h2>

          <p>
            Shows near-earth asteroids
            detected today.
          </p>

          <p>
            Includes size and danger level.
          </p>

        </div>

        <div className="info-card">

          <h2>
            🌌 PICTURE OF THE DAY
          </h2>

          <p>
            NASA astronomy picture of the day
            with title and explanation.
          </p>

        </div>

        <div className="info-card">

          <h2>
            ☀️ SOLAR SYSTEM
          </h2>

          <p>
            Animated planets from our
            solar system.
          </p>

          <p>
            Includes Mercury, Venus,
            Earth, Mars and more.
          </p>

        </div>

      </div>

      {/* CREATOR */}

      <div className="creator-box">

        <h2>
          👨‍💻 CREATED BY
        </h2>

        <p>
          Artyom Suqiasyan
        </p>

      </div>

    </div>
  );
}