import { Link } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";

export default function App() {

  // =========================
  // STATES
  // =========================

  const [iss, setIss] = useState(null);

  const [people, setPeople] = useState([]);

  const [photo, setPhoto] = useState(null);

  const [asteroids, setAsteroids] = useState([]);

  // =========================
  // ISS POSITION
  // =========================

  useEffect(() => {

    const fetchISS = async () => {

      const res = await fetch(
        "http://api.open-notify.org/iss-now.json"
      );

      const data = await res.json();

      setIss(data.iss_position);
    };

    fetchISS();

    const interval = setInterval(
      fetchISS,
      5000
    );

    return () => clearInterval(interval);

  }, []);

  // =========================
  // PEOPLE IN SPACE
  // =========================

  useEffect(() => {

    const fetchPeople = async () => {

      const res = await fetch(
        "http://api.open-notify.org/astros.json"
      );

      const data = await res.json();

      setPeople(data.people);
    };

    fetchPeople();

  }, []);

  // =========================
  // NASA PHOTO
  // =========================

  useEffect(() => {

    const fetchPhoto = async () => {

      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_NASA_KEY}`
      );

      const data = await res.json();

      setPhoto(data);
    };

    fetchPhoto();

  }, []);

  // =========================
  // ASTEROIDS
  // =========================

  useEffect(() => {

    const fetchAsteroids = async () => {

      const res = await fetch(
        `https://api.nasa.gov/neo/rest/v1/feed?api_key=${import.meta.env.VITE_NASA_KEY}`
      );

      const data = await res.json();

      const today =
        Object.keys(
          data.near_earth_objects
        )[0];

      setAsteroids(
        data.near_earth_objects[today]
          .slice(0, 5)
      );
    };

    fetchAsteroids();

  }, []);

  return (

    <div className="dashboard">

      {/* =========================
          HEADER
      ========================= */}

      <div className="header">
<Link to="/">
  <button className="home-btn">
    HOME
  </button>
</Link>
<Link to="/info">
  <button className="info-btn">
    INFO
  </button>
</Link>
        <h1 className="logo">
          🚀 NASA DASHBOARD
        </h1>

        <div className="live">
          ● LIVE DATA
        </div>

      </div>

      {/* =========================
          TOP GRID
      ========================= */}

      <div className="top-grid">

        {/* =========================
            ISS
        ========================= */}

        <div className="card iss-card">

          <h2>
            🛰 ISS POSITION
          </h2>

          <img
            className="earth-image"
            src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa"
            alt=""
          />

          <div className="coordinates">

            <div>
              Latitude:

              <span className="green">
                {" "}
                {iss?.latitude}
              </span>
            </div>

            <div>
              Longitude:

              <span className="green">
                {" "}
                {iss?.longitude}
              </span>
            </div>

          </div>

        </div>

        {/* =========================
            PEOPLE
        ========================= */}

        <div className="card people-card">

          <div className="people-header">

            <h2>
              👨‍🚀 PEOPLE IN SPACE
            </h2>

            <div className="people-count">
              {people.length} PEOPLE
            </div>

          </div>

          <div className="people-list">

            {people.map((person, index) => (

              <div
                className="person"
                key={index}
              >

                <h3>
                  {person.name}
                </h3>

                <p>
                  {person.craft}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* =========================
            ASTEROIDS
        ========================= */}

        <div className="card asteroid-card">

          <h2>
            ☄ ASTEROIDS
          </h2>

          {asteroids.map(
            (asteroid, index) => (

            <div
              className="asteroid"
              key={index}
            >

              <h3>
                {asteroid.name}
              </h3>

              <p>
                Size:

                {" "}

                {Math.round(

                  asteroid
                    .estimated_diameter
                    .meters
                    .estimated_diameter_max

                )}{" "}

                m
              </p>

              <p
                className={
                  asteroid
                    .is_potentially_hazardous_asteroid
                    ? "hazard"
                    : "safe"
                }
              >

                {asteroid
                  .is_potentially_hazardous_asteroid
                  ? "HAZARDOUS"
                  : "SAFE"}

              </p>

            </div>

          ))}

        </div>

      </div>

      {/* =========================
          PHOTO OF THE DAY
      ========================= */}

      <div className="photo-section">

        <div className="photo-grid">

          <img
            src={photo?.url}
            alt=""
          />

          <div className="photo-content">

            <h2>
              🌌 PICTURE OF THE DAY
            </h2>

            <h1>
              {photo?.title}
            </h1>

            <p>
              {photo?.explanation}
            </p>

          </div>

        </div>

      </div>

      {/* =========================
          SOLAR SYSTEM
      ========================= */}

      <div className="solar-system">

        <h2>
          ☀️ SOLAR SYSTEM
        </h2>

        <div className="planets">

          <div className="planet mercury">
            <span>Mercury</span>
          </div>

          <div className="planet venus">
            <span>Venus</span>
          </div>

          <div className="planet earth">
            <span>Earth</span>
          </div>

          <div className="planet mars">
            <span>Mars</span>
          </div>

          <div className="planet jupiter">
            <span>Jupiter</span>
          </div>

          <div className="planet saturn">
            <span>Saturn</span>
          </div>

          <div className="planet uranus">
            <span>Uranus</span>
          </div>

          <div className="planet neptune">
            <span>Neptune</span>
          </div>

        </div>

      </div>

    </div>
  );
}