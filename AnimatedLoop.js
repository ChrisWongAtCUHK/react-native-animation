import React, {Component} from 'react';
import {Easing, StyleSheet, View, Animated, Text} from 'react-native';

export default class AnimatedLoop extends Component {
  state = {
    loading: true,
  };
  componentDidMount() {
    this.animate();
    setTimeout(() => this.setState({loading: false}), 2000);
  }
  animatedRotation = new Animated.Value(0);
  animate = () => {
    Animated.loop(
      Animated.timing(this.animatedRotation, {
        toValue: 1,
        duration: 1800,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ).start();
  };
  render() {
    const rotation = this.animatedRotation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    const {loading} = this.state;
    const spinnerStyle = {
      width: 40,
      height: 40,
      transform: [{rotate: rotation}],
    };
    return (
      <View style={styles.container}>
        {loading ? (
          <Animated.Image
            source={require('./spinner.png')}
            style={spinnerStyle}
          />
        ) : (
          <Text>Welcome</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingTop: 50,
  },
});
