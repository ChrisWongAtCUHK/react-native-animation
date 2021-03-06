import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Text,
  TouchableHighlight,
} from 'react-native';

export default class AnimatedParallel extends Component {
  animatedTitle = new Animated.Value(-200);
  animatedSubtitle = new Animated.Value(600);
  animatedButton = new Animated.Value(900);

  componentDidMount() {
    this.animate();
  }
  animate = () => {
    Animated.parallel([
      Animated.timing(this.animatedTitle, {
        toValue: 200,
        duration: 800,
        useNativeDriver: false,
      }),
      Animated.timing(this.animatedSubtitle, {
        toValue: 0,
        duration: 1400,
        delay: 800, // equal to preivous duration
        useNativeDriver: false,
      }),
      Animated.timing(this.animatedButton, {
        toValue: 0,
        duration: 1000,
        delay: 2200, // equal to preivous duration sum: 800+1400
        useNativeDriver: false,
      }),
    ]).start();
  };
  render() {
    return (
      <View style={styles.container}>
        <Animated.Text style={[styles.title, {marginTop: this.animatedTitle}]}>
          Welcome
        </Animated.Text>
        <Animated.Text
          style={[styles.subTitle, {marginLeft: this.animatedSubtitle}]}>
          Thanks for visiting our app!
        </Animated.Text>
        <Animated.View style={{marginTop: this.animatedButton}}>
          <TouchableHighlight style={styles.button}>
            <Text>Get Started</Text>
          </TouchableHighlight>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 12,
  },
  subTitle: {
    width: '100%',
    textAlign: 'center',
    fontSize: 18,
    opacity: 0.8,
  },
  button: {
    marginTop: 25,
    backgroundColor: '#ddd',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
});
