import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Animated,
  TouchableWithoutFeedback,
  Text
} from "react-native";
import  {sideRowsData,centerRowData} from './map_data'

export default class Main extends Component {
 
  render() {
    console.log(centerRowData,sideRowsData)
    return (
      <View>
        {sideRowsData.map((sideRow,index)=>{
          
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
