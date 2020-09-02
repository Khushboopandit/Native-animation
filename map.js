import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import Rows from "./rows";

export default class MapOfGame extends Component {
  render() {
    return (
      <View>
        {this.props.gridsRefCreate.map((refCreate,index) => {
          if (index % 2 != 0) {
            return <View ref={this.props.grid1} key={'map'+index} >
              {Array(Math.floor(Math.random() * 15) + 1)
                .fill()
                .map((_,ind) => (
                  <View key={'row'+ind}>
                  <Rows/>
                  </View>
                ))}
            </View>
          } else {
            return <View style={styles.column} ref={this.props.grid2} key={'map'+index}>
              {Array(Math.floor(Math.random() * 15) + 1)
                .fill()
                .map((_,ind) => (
                  <View key={'row'+ind}>
                  <Rows pathType="column"/>
                  </View>
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
