// import React,{useState} from 'react';
// import {View, Text,StyleSheet, Image, Animated, TouchableOpacity } from 'react-native';

// function Switch_groupType(props){
//     const [selectedType, setSelectedType] = useState(0);
//     const groupTypes = groupTypes.map((element, index) => {
//         const is_selected = is_selected == index;

//         return(

//             <View style={styles.subTitleBar}>
//         <TouchableOpacity
//         key={index}
//         disabled={disabled}
//           style={styles.btnBar}
//           onPress={() => {
//             // Animated.timing(linePostionXLeft, {
//             //   toValue: 0,
//             //   duration: 300
//             // }).start();
//             selectedType.toggleItem(index)
//           }}
//         >
//           <Text style={styles.txtBar}>Joined</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.btnBar}
//           onPress={() => {
//             Animated.timing(linePostionXRight, {
//               toValue: 200,
//               duration: 300
//             }).start();
//           }}
//         >
//           <Text style={styles.txtBar}>Created</Text>
//         </TouchableOpacity>
//       </View>
//         )
        
//     })
  

//     const [linePostionXRight, setPositionXRight] = useState(
//         new Animated.Value(setPositionXRight ? 200 : 0)
//       );
//       const [linePostionXLeft] = useState(new Animated.Value(0));
    
//       var animatedLineRight = linePostionXRight.interpolate({
//         inputRange: [0, 200],
//         outputRange: [0, 200]
//       });
//       var animatedLineLeft = linePostionXLeft.interpolate({
//         inputRange: [0, 200],
//         outputRange: [0, 200]
//       });
//     return(
//         <View>
//              {/* <View style={styles.subTitleBar}>
//         <TouchableOpacity
//           style={styles.btnBar}
//           onPress={() => {
//             Animated.timing(linePostionXLeft, {
//               toValue: 0,
//               duration: 300
//             }).start();
//           }}
//         >
//           <Text style={styles.txtBar}>Joined</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.btnBar}
//           onPress={() => {
//             Animated.timing(linePostionXRight, {
//               toValue: 200,
//               duration: 300
//             }).start();
//           }}
//         >
//           <Text style={styles.txtBar}>Created</Text>
//         </TouchableOpacity>
//       </View> */}
//       <Animated.View
//         style={{
//           left: setPositionXRight ? animatedLineRight : animatedLineLeft
//         }}
//       >
//         <View style={styles.selectedLine}></View>
//       </Animated.View>

//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     subTitleBar: {
//       width: "100%",
//       height: 45,
//       backgroundColor: "#FE647B",
//       flexDirection: "row",
//       alignItems: "center",
//       justifyContent: "center"
//     },
//     txtBar: {
//       flex: 1,
//       fontSize: 20,
//       fontWeight: "bold",
//       fontFamily: "Open sans",
//       color: "#FFFFFF",
//       top: 8,
//       textAlign: "center"
//     },
//     selectedLine: {
//       width: "50%",
//       height: 3,
//       backgroundColor: "#C73C50"
//     },
//     btnBar: {
//       width: "50%",
//       height: "100%"
//     }
//   });

// export default Switch_groupType;
import React, { Component } from "react";
import {
  Animated,
  Easing,
  I18nManager,
  Image,
  PanResponder,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const styles = {
  button: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  containerButton: {
    flexDirection: "row",
    flex: 1,
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  animated: {
    borderWidth: 0,
    position: "absolute"
  },
  // horLine:{
  //   // height:5,
  //   width:'100%',
  //   position:'absolute',
  //   top:37,
  //   flex: 1,
  //   flexDirection: "row",
  //   // justifyContent: "center",
  //   // alignItems: "center",
  // },
  horlineColor:{

  }
};

export default class Switch_groupType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.initial ? this.props.initial : 0
    };

    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this.shouldSetResponder,
      onMoveShouldSetPanResponder: this.shouldSetResponder,
      onPanResponderRelease: this.responderEnd,
      onPanResponderTerminate: this.responderEnd
    });

    this.animatedValue = new Animated.Value(
      this.props.initial
        ? I18nManager.isRTL
          ? -(this.props.initial / this.props.options.length)
          : this.props.initial / this.props.options.length
        : 0
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.toggleItem(prevProps.value, !this.props.disableValueChangeOnPress);
    }
  }

  shouldSetResponder = (evt, gestureState) => {
    return (
      evt.nativeEvent.touches.length === 1 &&
      !(Math.abs(gestureState.dx) < 5 && Math.abs(gestureState.dy) < 5)
    );
  };

  responderEnd = (evt, gestureState) => {
    if (this.props.disabled) return;
    const swipeDirection = this._getSwipeDirection(gestureState);
    if (
      swipeDirection === "RIGHT" &&
      this.state.selected < this.props.options.length - 1
    ) {
      this.toggleItem(this.state.selected + 1);
    } else if (swipeDirection === "LEFT" && this.state.selected > 0) {
      this.toggleItem(this.state.selected - 1);
    }
  };

  _getSwipeDirection(gestureState) {
    const { dx, dy, vx } = gestureState;
    // 0.1 velocity
    if (Math.abs(vx) > 0.1 && Math.abs(dy) < 80) {
      return dx > 0 ? "RIGHT" : "LEFT";
    }
    return null;
  }

  getBgColor() {
    const { selected } = this.state;
    const { options, buttonColor } = this.props;
    return options[selected].activeColor || buttonColor;
  }

  getBgColorForHorLine() {
    const { selected } = this.state;
    const { options, horlineColor } = this.props;
    return options[selected].activeColor || horlineColor;
  }

  animate = (value, last) => {
    this.animatedValue.setValue(last);
    Animated.timing(this.animatedValue, {
      toValue: value,
      duration: this.props.animationDuration,
      easing: Easing.cubic,
      useNativeDriver: true
    }).start();
  };

  toggleItem = (index, callOnPress = true) => {
    const { options, returnObject, onPress } = this.props;
    if (options.length <= 1 || index === null || isNaN(index)) return;
    this.animate(
      I18nManager.isRTL ? -(index / options.length) : index / options.length,
      I18nManager.isRTL
        ? -(this.state.selected / options.length)
        : this.state.selected / options.length
    );
    if (callOnPress && onPress) {
      onPress(returnObject ? options[index] : options[index].value);
    } else {
      console.log("Call onPress with value: ", options[index].value);
    }
    this.setState({ selected: index });
  };

  render() {
    const {
      style,
      textStyle,
      selectedTextStyle,
      textContainerStyle,
      selectedTextContainerStyle,
      imageStyle,
      textColor,
      selectedColor,
      fontSize,
      backgroundColor,
      borderColor,
      borderRadius,
      hasPadding,
      valuePadding,
      height,
      bold,
      disabled,
      horLineSeletedStyle,
      horLineStyle
    } = this.props;

    const options = this.props.options.map((element, index) => {
      const is_selected = this.state.selected == index;

      return (
       
        <TouchableOpacity
          key={index}
          disabled={disabled}
          style={[styles.button, 
            is_selected ? 
            selectedTextContainerStyle : textContainerStyle
          ]}
          onPress={() => this.toggleItem(index)}
        >
          {/* {typeof element.customIcon === "function"
            ? element.customIcon(is_selected)
            : element.customIcon}
          {element.imageIcon && (
            <Image
              source={element.imageIcon}
              style={[
                {
                  height: 30,
                  width: 30,
                  tintColor:
                    is_selected ? selectedColor : textColor
                },
                imageStyle
              ]}
            />
          )} */}
          <Text
            style={[
              {
                fontSize,
                fontWeight: bold ? "bold" : "normal",
                textAlign: "center",
                color: is_selected ? selectedColor : textColor,
                backgroundColor: "transparent"
              },
              is_selected ? selectedTextStyle : textStyle
            ]}
          >
            {element.label}
          </Text>
          <TouchableOpacity
          
        key={index}
        disabled={disabled}
        style={[styles.horLine, is_selected ? horLineSeletedStyle : horLineStyle, 
          {backgroundColor:this.getBgColorForHorLine()}]}
        onPress={() => this.toggleItem(index)}
      >
        </TouchableOpacity>
          
        </TouchableOpacity>
        
        
      )
    });

    return (
      <View style={[{ flexDirection: "row" }, style]}>
        <View {...this._panResponder.panHandlers} style={{ flex: 1 }}>
          <View
            style={{
              borderRadius: borderRadius,
              backgroundColor: backgroundColor,
              height
            }}
            onLayout={event => {
              const { width } = event.nativeEvent.layout;
              this.setState({
                sliderWidth: width - (hasPadding ? 1 : 0)
              });
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                borderColor: borderColor || "#ffffff",
                borderRadius: borderRadius,
                borderWidth:  0
              }}
            >
              {!!this.state.sliderWidth && (
                <Animated.View
                  style={[
                    {
                      height: hasPadding ? height - 1 : height,
                      backgroundColor: this.getBgColor(),
                      // backgroundColor: this.getBgColorForHorLine(),
                      width:
                      // 85,
                        this.state.sliderWidth / this.props.options.length -
                        (hasPadding ? 0 : 0),
                      transform: [
                        {
                          translateX: this.animatedValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: [
                              hasPadding ? 0 : 0,
                              this.state.sliderWidth -
                                (hasPadding ? 0 : 0)
                            ]
                          })
                        }
                      ],
                      borderRadius: borderRadius,
                      marginTop:  0
                    },
                    styles.animated
                  ]}
                />
                
              ) && (
                <Animated.View
                  style={[
                    { 
                      top:36,
                      height: hasPadding ? 4:4,
                      // backgroundColor: this.getBgColor(),
                      backgroundColor: this.getBgColorForHorLine(),
                      width:
                      // 85,
                        this.state.sliderWidth / this.props.options.length -
                        (hasPadding ? 0 : 0),
                      transform: [
                        {
                          translateX: this.animatedValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: [
                              hasPadding ? 0 : 0,
                              this.state.sliderWidth -
                                (hasPadding ? 0 : 0)
                            ]
                          })
                        }
                      ],
                      borderRadius: borderRadius,
                      marginTop:  0
                    },
                    styles.animated
                  ]}
                />
              )}
              {options}
            </View>
          </View>
        </View>
      </View>
    );
  }
}

Switch_groupType.defaultProps = {
  style: {},
  textStyle: {},
  selectedTextStyle: {},
  textContainerStyle: {},
  selectedTextContainerStyle: {},
  imageStyle: {},
  textColor: "#000000",
  selectedColor: "#FFFFFF",
  fontSize: 14,
  backgroundColor: "#FFFFFF",
  borderColor: "#ffffff",
  borderRadius: 50,
  hasPadding: false,
  valuePadding: 1,
  height: 40,
  bold: false,
  buttonColor: '#FE647B',
  returnObject: false,
  animationDuration: 100,
  disabled: false,
  disableValueChangeOnPress: false,
  horLineSeletedStyle:{},
  textContainerStyle:{},
  horlineColor:'#C73C50'

};
