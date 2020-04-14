import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import AnimatedInput from './AnimatedInput';
import AnimatedLoop from './AnimatedLoop';

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

const AnimatedInputScreen = getScreen(AnimatedInput);

const AnimatedLoopScreen = getScreen(AnimatedLoop);

const Drawer = createDrawerNavigator();
const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Animated Input" component={AnimatedInputScreen} />
        <Drawer.Screen name="Animated Loop" component={AnimatedLoopScreen} />
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
