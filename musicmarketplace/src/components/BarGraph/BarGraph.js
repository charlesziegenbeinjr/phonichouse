import React from "react";
import ReactApexChart from "react-apexcharts";
import "./BarGraph.css";

export default function BarGraph() {
  var series = [
    {
      color: "#ff6347",
      name: "Listeners",
      data: [44, 55, 60],
    },
    {
      color: "#081041",
      name: "Streams",
      data: [76, 85, 95],
    },
  ];

  var options = {
    chart: {
      type: "bar",
      toolbar: {
        show: true,
        tools: {
          download: false,
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 1,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["2019", "2020", "2021"],
    },
    yaxis: {
      title: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
  };
  return (
    <div id="HistoricalData">
      <div id="BG-heading">
        <p
          style={{
            color: "#00000",
            fontSize: 14,
            fontWeight: "bolder",
            marginLeft: 20,
            opacity: 0.7,
          }}
        >
          Historical Data
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div class="myDivGraphBG">
          <ReactApexChart
            options={options}
            series={series}
            type="bar"
            height={200}
          />
        </div>
        <div className="SIGraphData">
          <div className="SIGraphDataRow">
            <span>Last EPS: $4.37</span>
          </div>
          <br />

          <div className="SIGraphDataRow">
            <span>Yield: 4.54%</span>
          </div>
          <br />

          <div className="SIGraphDataRow">
            <span>TTM Rev: $7.48M</span>
          </div>
          <br />
          <div className="SIGraphDataRow">
            <span>TTM Stream Growth: +105%</span>
          </div>
          <br />

          <div className="SIGraphDataRow">
            <span>TTM Listeners Growth: +105%</span>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
