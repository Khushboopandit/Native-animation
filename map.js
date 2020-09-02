import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import Rows from "./rows";

export default class MapOfGame extends Component {
  render() {
    return (
      <View>
        {this.props.gridsRefCreate.map((refCreate,index) => {
          if (index % 2 != 0) {
            return <View ref={refCreate}>
              {Array(Math.floor(Math.random() * 15) + 1)
                .fill()
                .map((index) => (
                  <Rows />
                ))}
            </View>;
          } else {
            return <View style={styles.column} ref={refCreate}>
              {Array(Math.floor(Math.random() * 15) + 1)
                .fill()
                .map((ind) => (
                  <Rows pathType="column" />
                ))}
            </View>;
          }
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  column: {
    display: "flex",
    flexDirection: "row",
  },
});
