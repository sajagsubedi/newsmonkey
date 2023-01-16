import loading from "./loading.gif"
import React, { Component } from "react";

export default class Spinner extends Component{
  render(){
    return(
      <div className="my-5 w-full">
      <img className=" mx-auto " src={loading} alt="Loading..."/>
      </div>
      )
  }
}