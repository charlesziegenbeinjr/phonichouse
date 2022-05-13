import React from "react";
import ReactApexChart from "react-apexcharts";
import "./BarGraphSmall.css";

export default function BarGraphSmall() {
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
    <div class="myDivGraphBGS">
        <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={200}
        />
    </div>
  )
}