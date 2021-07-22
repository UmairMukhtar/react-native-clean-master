import React, {Component} from 'react';
import Homescreen from './src/screens/Home';
import YourPlan from './src/screens/YourPlan';
import Account from './src/screens/Account';
import CleanerCalendar from './src/screens/CleanerCalendar';
import {createStackNavigator} from '@react-navigation/stack';
import {Scene, Router, Drawer} from 'react-native-router-flux';

const Stack = createStackNavigator();

const MyTransitionSpec = {
  duration: 300,
  // easing: Easing.bezier(0.2833, 0.99, 0.31833, 0.99),
  // timing: Animated.timing,
};

const transitionConfig = () => ({
  transitionSpec: MyTransitionSpec,
  // screenInterpolator: StackViewStyleInterpolator.forFadeFromBottomAndroid,
  screenInterpolator: sceneProps => {
    const {layout, position, scene} = sceneProps;
    const {index} = scene;
    const width = layout.initWidth;

    //right to left by replacing bottom scene
    // return {
    //     transform: [{
    //         translateX: position.interpolate({
    //             inputRange: [index - 1, index, index + 1],
    //             outputRange: [width, 0, -width],
    //         }),
    //     }]
    // };

    const inputRange = [index - 1, index, index + 1];

    const opacity = position.interpolate({
      inputRange,
      outputRange: [0, 1, 0],
    });

    const translateX = position.interpolate({
      inputRange,
      outputRange: [width, 0, 0],
    });

    return {
      opacity,
      transform: [{translateX}],
    };

    //from center to corners
    // const inputRange = [index - 1, index, index + 1];
    // const opacity = position.interpolate({
    //     inputRange,
    //     outputRange: [0.8, 1, 1],
    // });

    // const scaleY = position.interpolate({
    //     inputRange,
    //     outputRange: ([0.8, 1, 1]),
    // });

    // return {
    //     opacity,
    //     transform: [
    //         { scaleY }
    //     ]
    // };
  },
});

export default class App extends Component {
  render() {
    return (
      <Router>
        <Stack key="root" transitionConfig={transitionConfig}>
          <Scene key="home" component={Homescreen} hideNavBar={true} />
          {/* <Scene key="home" component={YourPlan} hideNavBar={true} /> */}
          {/* <Scene key="home" component={Account} hideNavBar={true} /> */}
          <Scene key="calendar" component={CleanerCalendar} hideNavBar={true} />
        </Stack>
      </Router>
    );
  }
}
