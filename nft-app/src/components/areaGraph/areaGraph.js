import React from "react";
import ReactApexChart from "react-apexcharts";
import "./areaGraph.css";

export default function AreaGraph() {
  const series = [
    {
      name: "Account value",
      color: "#081041",
      data: [2800, 2900, 3300, 3600, 4200, 4200, 5300, 5400, 5200, 6000, 6700],
    }
  ];

  const options = {
    chart: {
      height: 350,
      type: "line",
      dropShadow: {
        enabled: true,
        color: "#081041",
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
      width: 2,
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
    },
    yaxis: {
      min: 0,
      max: 6700,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
    fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 0.5,
          opacityFrom: 0.3,
          opacityTo: 0.6,
          stops: [0, 90, 100]
        }
      },
    dataLabels: {
        enabled: false,
    }
  };

  return (
    <div class="myDivGraphAg">
        <div class="titleAg">
            <div class="colorAg">
                
            </div>
            <div class="parentspanAg">
                <span class="spanAg1">
                    NEWRT
                </span>
            </div>
        </div>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={240}
        width={830}
      />
    </div>
  );
}
