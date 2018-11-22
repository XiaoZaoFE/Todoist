/**
 * Author   : Syan
 * Date     : 2018/4/15
 * Project [ RNPlayground ] Coded on WebStorm.
 */

import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import { BottomTabBar } from './components';
import Exemples from './pages/Exemples';
import Home from './pages/Home';
import Car from './pages/Car';
import My from './pages/My';
import ScrollableTabScreen from './pages/Exemples/ScrollableTabScreen';
import PopoverScreen from './pages/Exemples/PopoverScreen';
import SectionListScreen from './pages/Exemples/SectionListScreen';

const TabNav = createBottomTabNavigator(
  {
    Home: { screen: Home },
    Exemples: { screen: Exemples },
    Car: { screen: Car },
    My: { screen: My },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'ios-home';
        } else if (routeName === 'Car') {
          iconName = 'md-car';
        } else if (routeName === 'My') {
          iconName = 'md-paper';
        } else {
          iconName = 'ios-color-filter';
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    initialRouteName: 'Home',
    tabBarComponent: BottomTabBar,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);

TabNav.navigationOptions = ({ navigation }) => {
  const { routes, index } = navigation.state;
  const navigationOptions = {};

  if (routes[index].routeName === 'Exemples') {
    navigationOptions.title = '首页';
  } else {
    navigationOptions.title = '其他';
  }

  return navigationOptions;
};
const AppNavigator = createStackNavigator(
  {
    Tab: {
      screen: TabNav,
    },
    ScrollableTabScreen: {
      screen: ScrollableTabScreen,
    },
    PopoverScreen: {
      screen: PopoverScreen,
    },
    SectionListScreen: {
      screen: SectionListScreen,
    },
  },
  {
    navigationOptions: {
      header: null,
    },
  }
);

export default createAppContainer(AppNavigator);
