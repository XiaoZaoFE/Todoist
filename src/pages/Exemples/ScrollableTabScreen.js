/**
 * Author   : Syan
 * Date     : 2018/5/11
 */
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollableTabView } from '../../components';
export default class ScrollableTabScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollableTabView
          renderTabBar={() => <ScrollableTabView.ScrollableTabBar />}
          collapsableBar={<View style={{ height: 100, backgroundColor: 'red' }} />}
        >
          <View tabLabel={'React'} style={{ height: 1000 }} />
          <View tabLabel={'React1'} style={{ height: 500 }} />
          <View tabLabel={'React2'} style={{ height: 2000 }} />
          <View tabLabel={'React3'} style={{ height: 2000 }} />
          <View tabLabel={'React4'} style={{ height: 2000 }} />
          <View tabLabel={'React5'} style={{ height: 500 }} />
        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent',
  },
});
