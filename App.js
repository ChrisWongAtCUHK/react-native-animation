import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import AnimatedInput from './components/AnimatedInput';
import AnimatedLoop from './components/AnimatedLoop';
import AnimatedParallel from './components/AnimatedParallel';
import AnimatedSequence from './components/AnimatedSequence';
import AnimatedTiming from './components/AnimatedTiming';

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

const Drawer = createDrawerNavigator();
const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Animated Timing"
          component={getScreen(AnimatedTiming)}
        />
        <Drawer.Screen
          name="Animated Input"
          component={getScreen(AnimatedInput)}
        />
        <Drawer.Screen
          name="Animated Loop"
          component={getScreen(AnimatedLoop)}
        />
        <Drawer.Screen
          name="Animated Parallel"
          component={getScreen(AnimatedParallel)}
        />
        <Drawer.Screen
          name="Animated Sequence"
          component={getScreen(AnimatedSequence)}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screenView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
