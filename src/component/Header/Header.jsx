import { useState } from "react";
import Chart from "../Chart/Chart";
import "../Header/header.css";


const Header = () => {
  const [chart, changeChart] = useState("open");
  const [chartStyle, setChartStyle] = useState("line");
  return (
    <>
      <center>
        <h1>Time Series Data Visualization</h1>
      </center>
      <div className="container">
        <header className="header">
          <div>
            <select
              className="chartSelect"
              name=""
              id=""
              value={chart}
              onChange={(e) => {
                changeChart(e.target.value);
              }}
            >
              <option value="open">Open</option>
              <option value="low">Low</option>
              <option value="high">High</option>
              <option value="close">Close</option>
              <option value="volume">Volume</option>
            </select>
          </div>

          <div>
            <button onClick={() => setChartStyle("line")}>Line</button>
            <button onClick={() => setChartStyle("bar")}>Bar</button>
          </div>
        </header>

        <Chart option={chart} val={chartStyle} />
      </div>
    </>
  );
};

export default Header;
