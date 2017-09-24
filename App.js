import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Font } from 'expo';
import { FBLoginButton, Button } from './components';


var { height, width } = Dimensions.get('window');

export default class App extends React.Component {

  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'pacifico-regular': require('./assets/fonts/Pacifico-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          {
            this.state.fontLoaded ? <Text style={styles.logoText}>Snapchase</Text> : null
          }
        </View>
        <View style={styles.buttonContainer}>
          <Button size="large" style={styles.button} text="About" />
          <FBLoginButton size="large" style={styles.button} text="Login With Facebook " />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoContainer: {
    flex: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 40,
    fontFamily: 'pacifico-regular'
  },
  buttonContainer: {
    flex: 1,
    marginBottom: 50
  },
  button: {
    width: width - 50,
    marginBottom: 10
  }
});
