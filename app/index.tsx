import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import LottieView from 'lottie-react-native';
import { SearchBar } from '../components/SearchBar';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ height: 200, width: 350 }}>
        <SearchBar />
      </View>
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
