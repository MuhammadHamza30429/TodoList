
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Splash = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Splash</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to SignUp"
          onPress={() => navigation.navigate('SignUp')}
        />
        <Button
          title="Go to Login"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Optional: for better visual
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'space-around',
  },
});

export default Splash;
