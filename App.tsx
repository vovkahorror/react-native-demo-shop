import {StatusBar} from 'expo-status-bar';
import {FlatList, ListRenderItem, StyleSheet, Text, View, Image} from 'react-native';
import {Box} from './src/Box/Box';
import {VStack} from './src/VStack/VStack';
import {HStack} from './src/HStack/HStack';
import {ZStack} from './src/ZStack/ZStack';
import {PADDING, WIDTH} from './src/constants/constants';

const images = [
    require('./assets/image1.jpg'),
    require('./assets/image2.jpg'),
    require('./assets/image3.jpg'),
    require('./assets/image4.jpg'),
    require('./assets/image5.jpg'),
    require('./assets/image6.jpg'),
];

const titles = [
    'Apple iPhone 13 128GB Blue',
    'Apple iPhone 14 Pro 128GB Space Black',
    'Apple iPhone 12 128GB Purple',
    'Apple iPhone SE 128GB 2022 Midnight',
    'Apple iPhone 13 512GB Midnight',
    'Apple iPhone 14 Pro Max 256GB Purple',
];

const prices = [999, 1199, 799, 599, 899, 1199];

const fakeData: ItemType[] = [...Array(12)].map((_, index) => ({
    id: index + 1,
    title: titles[index % titles.length],
    price: prices[index % prices.length],
    image: images[index % images.length],
}));

export default function App() {
    const renderItem: ListRenderItem<ItemType> = ({item}) => {
        return (
            <View style={styles.itemPhone}>
                <Image resizeMode={'contain'} source={item.image} style={styles.phoneImage}/>
                <View style={styles.infoPhone}>
                    <Text style={styles.phoneName}>{item.title}</Text>
                    <Text>$ {item.price}</Text>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <StatusBar style={'auto'}/>
            <FlatList
                data={fakeData}
                renderItem={renderItem}
                numColumns={2}
                contentContainerStyle={{paddingHorizontal: PADDING}}
                columnWrapperStyle={{justifyContent: 'space-between'}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cecece',
    },
    itemPhone: {
        backgroundColor: '#fff',
        width: (WIDTH - PADDING * 2) / 2 - (PADDING / 2),
        marginVertical: 6,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.4)',
        borderRadius: 5,
        paddingTop: 12,
    },
    phoneImage: {
        width: (WIDTH - PADDING * 2) / 2 - (PADDING / 2),
        height: (WIDTH - PADDING * 2) / 2 - (PADDING / 2),
    },
    infoPhone: {
        marginTop: 19,
        marginBottom: 22,
        paddingLeft: 12,
        paddingRight: 15,
    },
    phoneName: {
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 16,
    },
});

type ItemType = {
    id: number
    title: string
    price: number
    image: any
}