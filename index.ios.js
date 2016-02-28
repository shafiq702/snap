/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class snap extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          SNAPPR
        </Text>
        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText}>
            Find Location
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
    padding: 10
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button:{
    height: 50,
    marginTop: 50,
    backgroundColor: '#34495e',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#fff',
    alignSelf: 'center'
  }
});

AppRegistry.registerComponent('snap', () => snap);
