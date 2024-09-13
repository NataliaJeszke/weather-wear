import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import animation from '../assets/animation/animdog.json';
import LottieView from 'lottie-react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <View style={{ height: 200, width: 200 }}>
      <LottieView style={{flex:1}} source={require('../assets/animation/animdog.json')} autoPlay loop />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
