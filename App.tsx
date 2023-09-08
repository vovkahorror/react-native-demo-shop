import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Box} from './src/Box/Box';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style={'auto'}/>
        <Box width={100} bgr={'#7767f8'}>
            <Text>Children</Text>
        </Box>
      <Box width={100} bgr={'#7767f8'}>
          <Box width={20} bgr={'#a85454'}/>
          <Box width={20} bgr={'#a85454'}/>
          <Box width={20} bgr={'#a85454'}/>
      </Box>
      <Box width={100} bgr={'#7767f8'}/>
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
