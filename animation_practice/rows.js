import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

export default class Rows extends Component {
  render() {
    return this.props.pathType != undefined &&
      this.props.pathType == "column" ? (
      <Image style={styles.display} source={require("../assets/rowX.png")} />
    ) : (
      <Image style={styles.display} source={require("../assets/rowY.png")} />
    );
  }
}

const styles = StyleSheet.create({
  display: {
    width: 20,
    height: 20,
    margin: "2px",
  },
});
