import React from "react";
import ReactApexChart from "react-apexcharts";
import "./graphCard.css";

export default function GraphCard(props) {
  const series = [
    {
      color: props.color,
      name: "Rock 100",
      data: [
        2800, 3000, 3200, 3600, 2800, 3500, 4000, 4400, 4200, 4800, 4400, 5200,
      ],  
    },
  ];
  const options = {
    chart: {
      type: "line",
      dropShadow: {
        enabled: true,
        color: props.color,
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.8,
      },
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    grid: {
      show: false,
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
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
        // color: "#78909C",
        // height: 1,
        // width: "100%",
        // offsetX: 0,
        // offsetY: 0,
      },
      axisTicks: {
        show: false,
        borderType: "solid",
        color: "#78909C",
        height: 6,
        offsetX: 0,
        offsetY: 0,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
    },
  };
  return (
    <div class="parentDiv">
      <h5 class="heading1">{props.title}</h5>
      <h6 class="heading2" style={{ color: props.txtColor }}>
        {props.delta}
      </h6>
      <h6 class="heading3">637.5</h6>
      <div class="myDiv">
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={130}
          width={150}
        />
      </div>
    </div>
  );
}
