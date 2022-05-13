import React from "react";
import ReactApexChart from "react-apexcharts";
import "./graph.css";

export default function Graph() {
  const series = [
    {
      name: "Account value",
      color: "#FF1493",
      data: [2800, 2900, 3300, 3600, 4200, 4200, 5300, 5400, 5200, 6000, 6700],
    },
    {
      name: "Hip-Hop 500",
      color: "#FFE633",
      data: [1200, 2100, 2400, 2800, 2700, 3300, 4300, 4200, 5100, 5400, 5800],
    },
    {
      name: "Pop Music 2000",
      color: "#33FFAF",
      data: [700, 1100, 2400, 3200, 2300, 2500, 3300, 3200, 4100, 5400, 4800],
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "line",
      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 3.5,
    },
    title: {
      text: "_",
      align: "left",
      style: {
        fontSize: "14px",
        fontWeight: "bold",
        fontFamily: undefined,
        color: "#fff",
      },
    },

    grid: {
      show: true,
      strokeDashArray: 0,
      borderColor: "#e7e7e7",
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
      column: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      // title: {
      //   text: 'Month'
      // }
    },
    yaxis: {
      // title: {
      //   text: 'Temperature'
      // },
      min: 0,
      max: 7000,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
  };

  return (
    <div class="myDivGraph">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={240}
        width={1020}
      />
    </div>
  );
}
