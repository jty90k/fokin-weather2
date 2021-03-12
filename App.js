import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";

export default class extends React.Component {
  getLoacation = async () => {
    const location = await Location.getCurrentPositionAsync();
    console.log(location);
  };
  ComponentDidMount() {
    this.getLoacation();
  }
  render() {
    return <Loading />;
  }
}
