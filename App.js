import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import MapOfGame from "./map";

export default class App extends Component {
  state = {
    animationY: new Animated.Value(0),
    animationX: new Animated.Value(0),
    rotate: new Animated.Value(0),
  };
  gridsRefCreate = [];

  grid1 = React.createRef();
  grid2 = React.createRef();

  startAnimation = () => {
    // Animated.loop(
    //   Animated.sequence([
    //     this.gridsRefCreate.map((refValue) =>
    //       refValue.current.measureInWindow((x, y, width, height) => {
    //         if (width > height) {
    //           this.startAnimationX(width);
    //         }
    //         if(width < height){
    //           this.startAnimationY(height)
    //         }else{
    //           this.startAnimationRound()
    //         }
    //       })
    //     ),
    //   ])
    // ).start()
    this.grid1.current.measureInWindow((x1, y1, width1, height1) => {
      this.grid2.current.measureInWindow((x2, y2, width2, height2) => {
        let num = -height2 + 12;
        Animated.loop(
          Animated.sequence([
            Animated.timing(this.state.animationY, {
              toValue: -height1 - 24,
              duration: 1000,
              useNativeDriver: true,
            }),
            // Animated.parallel([
            Animated.timing(this.state.rotate, {
              toValue: 1,
              duration: 800,
              useNativeDriver: true,
            }),
            Animated.timing(this.state.animationX, {
              toValue: width2 - 100,
              duration: 1000,
              useNativeDriver: true,
            }),
            // ]),
          ]),
          { iterations: 5 }
        ).start();
      });
    });
  };

  // startAnimationY = (value) => {
  //   return Animated.timing(this.state.animationY, {
  //     toValue: -value - 24,
  //     duration: 1000,
  //     useNativeDriver: true,
  //   });
  // };
  // startAnimationX = (value) => {
  //   return Animated.timing(this.state.animationX, {
  //     toValue: value - 100,
  //     duration: 1000,
  //     useNativeDriver: true,
  //   });
  // };
  // startAnimationRound=()=>{
  //   Animated.timing(this.state.rotate, {
  //     toValue: 1,
  //     duration: 800,
  //     useNativeDriver: true,
  //   })
  // }
  render() {
    Array(2)
      .fill()
      .map((i) => {
        this.gridsRefCreate.push(React.createRef());
      });
    const rotateInterpolate = this.state.rotate.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "90deg"],
    });

    const animatedStyles = {
      transform: [
        { translateY: this.state.animationY },
        { translateX: this.state.animationX },
        { rotate: rotateInterpolate },
      ],
    };

    return (
      <View style={styles.container}>
        <View>
          <MapOfGame
            gridsRefCreate={this.gridsRefCreate}
            grid2={this.grid2}
            grid1={this.grid1}
          />
          <TouchableWithoutFeedback onPress={this.startAnimation}>
            <Animated.View style={[styles.view, animatedStyles]}>
              <Image
                style={styles.rocket}
                source={require("./assets/rocket.png")}
              />
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
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
  rocket: {
    width: 25,
    height: 60,
  },
  view: {
    width: 100,
    height: 100,
  },
});
