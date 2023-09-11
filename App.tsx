import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {Box} from './src/Box/Box';
import {VStack} from './src/VStack/VStack';
import {HStack} from './src/HStack/HStack';
import {ZStack} from './src/ZStack/ZStack';
import {PADDING} from './src/constants/constants';

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style={'auto'}/>
            <VStack>
                <Box width={100} bgr={'#7767f8'}>
                    <Text>Children</Text>
                </Box>
            </VStack>
            <HStack>
                <Box width={100} bgr={'#a85454'}/>
                <Box width={100} bgr={'#a85454'}/>
                <Box width={100} bgr={'#a85454'}/>
                <Box width={100} bgr={'#a85454'}/>
                <Box width={100} bgr={'#a85454'}/>
            </HStack>
            <ZStack reverse>
                <Box width={100} bgr={'#d467f8'}/>
                <Box width={100} bgr={'#7767f8'} mt={10} ml={10}/>
                <Box width={100} bgr={'#7767f8'} mt={20} ml={20}/>
                <Box width={100} bgr={'#6cf867'} mt={30} ml={30}/>
            </ZStack>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingHorizontal: PADDING
    },
});
