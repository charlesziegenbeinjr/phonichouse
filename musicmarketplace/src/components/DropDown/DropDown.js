import React, { Component } from "react";
import Select from "react-select";
import "./DropDown.css";

const genre = [
  {value:"Rock" ,label: "Rock"},
  {value:"Pop" ,label: "Pop"},
  {value:"Hip-Hop" ,label: "Hip-Hop"},
  {value:"Rap" ,label: "Rap"},
  {value:"Classical" ,label: "Classical"},
  {value:"Country" ,label: "Country"},
  {value:"EDM" ,label: "EDM"},
  {value:"Alternative" ,label: "Alternative"},
  {value:"Blues" ,label: "Blues"},
  {value:"Jazz" ,label: "Jazz"},
];

const percentagechane = [
  {value:"0-1",label:"0-1"},
  {value:"1-2",label:"1-2"},
  {value:"2-3",label:"2-3"},
  {value:"3-4",label:"3-4"},
  {value:"4-5",label:"4-5"},
  {value:"5-10",label:"5-10"},
  {value:"10+",label:"10+"},
]

const streams = [
  {value:"1 Million - 5 Million",label:"1 Million - 5 Million"},
    {value:"5 Million - 10 Million",label:"5 Million - 10 Million"},
    {value:"10 Million - 20 Million",label:"10 Million - 20 Million"},
    {value:"20 Million +",label:"20 Million +"}
]

const datelisted = [
  {value:"Past 30 days",label:"Past 30 days"},
  {value:"Past 60 days",label:"Past 60 days"},
  {value:"Past 90 days",label:"Past 90 days"},
  {value:"Past year",label:"Past year"},
  {value:"Over 1 year",label:"Over 1 year"}
]

const ytd = [
  {value:"0-5%",label:"0-5%"},
  {value:"5-10%",label:"5-10%"},
  {value:"10-20%",label:"10-20%"},
  {value:"20%+",label:"20%+"}
]

const streamsthisyear = [

{value:"500,000-1,000,000",label:"500,000-1,000,000"},
{value:"1,000.000-1,500,000",label:"1,000.000-1,500,000"},
{value:"1,500,000-2,000,000",label:"1,500,000-2,000,000"},
{value:"2,000,000-3,000,000",label:"2,000,000-3,000,000"},
{value:"3,000,000-5,000,000",label:"3,000,000-5,000,000"},
{value:"5,000,000-10,000,000",label:"5,000,000-10,000,000"},
{value:"10,000,000+",label:"10,000,000+"}
]

const marketcap = [
  {value:"10,000-20,000",label:"10,000-20,000"},
  {value:"20,000-30,000",label:"20,000-30,000"},
  {value:"30,000-40,000",label:"30,000-40,000"},
  {value:"40,000-50,000",label:"40,000-50,000"},
  {value:"50,000-100,000",label:"50,000-100,000"},
  {value:"100,000-500,000",label:"100,000-500,000"},
  {value:"500,000-1,000,000",label:"500,000-1,000,000"},
  {value:"1,000,000+",label:"1,000,000+"}
]

const divide = [
  {value:"1%",label:"1%"},
  {value:"2%",label:"2%"},
  {value:"3%",label:"3%"},
  {value:"4%",label:"4%"},
  {value:"5%",label:"5%"},
  {value:"6+",label:"6+"}
]

const drops = [genre,
  percentagechane,
  streams,
  datelisted,
  ytd,
  streamsthisyear,
  marketcap,
  divide]

export default function DropDown(props) {
  return (
    <>
      <p className="DropDownTitle">{props.title}</p>

      <Select options={drops[parseInt(props.options)]} />
    </>
  );
}
