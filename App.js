import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import AnimatedTiming from './components/AnimatedTiming';
import AnimatedInput from './components/AnimatedInput';
import AnimatedLoop from './components/AnimatedLoop';
import AnimatedParallel from './components/AnimatedParallel';
import AnimatedSequence from './components/AnimatedSequence';

// dynamic component???
const getScreen = (ScreenComponent) => {
  const screen = ({navigation}) => {
    return (
      <View style={styles.screenView}>
        <ScreenComponent />
      </View>
    );
  };

  return screen;
};

const App = new DrawerNavigator({
  'Animated Timing': getScreen(AnimatedTiming),
  'Animated Input': getScreen(AnimatedInput),
  'Animated Loop': getScreen(AnimatedLoop),
  'Animated Parallel': getScreen(AnimatedParallel),
  'Animated Sequence': getScreen(AnimatedSequence),
});

const styles = StyleSheet.create({
  screenView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
