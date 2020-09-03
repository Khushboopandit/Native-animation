import React, { Component } from "react";
import { View ,StyleSheet} from "react-native";
import CreateMap from './create-map/main'
import PracticeAnimation from "./animation_practice/main";

export default class App extends Component {
  render() {
    return (
      <View  style={styles.container}> 
        {/* <PracticeAnimation /> */}
        <CreateMap/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

