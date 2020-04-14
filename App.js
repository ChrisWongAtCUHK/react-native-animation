import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import AnimatedInput from './AnimatedInput';
import AnimatedLoop from './AnimatedLoop';

function AnimatedInputScreen({navigation}) {
  return (
    <View style={styles.screenView}>
      <AnimatedInput />
    </View>
  );
}

function AnimatedLoopScreen({navigation}) {
  return (
    <View style={styles.screenView}>
      <AnimatedLoop />
    </View>
  );
}

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
