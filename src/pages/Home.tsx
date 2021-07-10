import * as React from "react";
import { Component } from "react";

export interface HomeProps {}

export interface HomeState {}

class Home extends React.Component<HomeProps, HomeState> {
  render() {
    return <h2>Hi</h2>;
  }
}

export default Home;
