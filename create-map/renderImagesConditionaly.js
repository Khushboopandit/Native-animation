import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Animated,
  TouchableWithoutFeedback,
  Text
} from "react-native";

export default class Main extends Component {
 
  render() {
      let value = 'up'
    return (
      <View>
        {value == 'up'?<Image style={styles.display} source={require("../assets/rowY.png")} />:null}
        {value == ''?<Image style={styles.display} source={require("../assets/rowY.png")} />:null}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
