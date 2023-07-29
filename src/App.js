import React from "react";
import "./App.css";
const App = () => {
  return (
    <div>
      <img
        src="https://app.wobot.ai/assets/images/wobot-logo.png"
        alt="wobot-logo"
      />
      <div className="container">
        <form>
          <div className="loginForm">
            <div className="logo">
              <svg
                width="52"
                height="48"
                viewBox="0 0 52 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="11.0477"
                  height="27.8427"
                  rx="5.52383"
                  transform="matrix(0.854439 -0.519552 0.510535 0.859857 0.499878 24.0586)"
                  fill="#3766E8"
                ></rect>
                <rect
                  width="11.0477"
                  height="42.3694"
                  rx="5.52383"
                  transform="matrix(0.854439 -0.519552 0.510535 0.859857 12.3904 8.65234)"
                  fill="#3766E8"
                ></rect>
                <rect
                  width="11.0477"
                  height="21.5479"
                  rx="5.52383"
                  transform="matrix(0.854439 -0.519552 0.510535 0.859857 31.0594 5.73828)"
                  fill="#3766E8"
                ></rect>
              </svg>
            </div>

            <h2 className="heading">It's a delight to have you onboard</h2>
            <p>Help us know you better</p>
            <p>(This is how we optimize wobot as per your business needs)</p>
            <label htmlFor="name">Your name</label>
            <input type="text" placeholder="e.g. John Smith" id="name" />
            <label htmlFor="company">Company name</label>
            <input type="text" placeholder="e.g. Alpha Inc" id="company" />
            <label htmlFor="select">Industry</label>
            <input
              list="browsers"
              name="myBrowser"
              id="select"
              placeholder="Select"
            />
            <datalist id="browsers">
              <option value="QSR" />
              <option value="DriveThru" />
              <option value="Car Wash" />
            </datalist>
          </div>
          <label>Number of locations</label> <br />
          <br />
          <span>
            <input type="checkbox" />
            1-20
          </span>
          <span>
            <input type="checkbox" />
            21-50
          </span>
          <span>
            <input type="checkbox" />
            51-200
          </span>
          <span>
            <input type="checkbox" />
            201-500
          </span>
          <span>
            <input type="checkbox" />
            500+
          </span>
          <br />
          <br />
          <button>Get Started</button>
        </form>
      </div>
      <footer>Terms of use | Privacy policy</footer>
    </div>
  );
};

export default App;
