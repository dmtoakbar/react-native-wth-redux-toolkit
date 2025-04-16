import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { View, Text, StyleSheet, Button, Dimensions, FlatList, Pressable, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { allProducts } from "../redux/features/productslice";



const HomeScreen = () => {
    const navigation = useNavigation();

    const dispatch = useDispatch();
    const { products, isLoading } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(allProducts());
    }, []);


    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <FlatList
                data={products?.products}
                renderItem={({ item, index }) => {
                    return <Pressable
                        onPress={() => { navigation.navigate("SingleProduct", {product: item}) }}
                        key={item.id}
                    >
                        <View style={styles.card}>
                            <Image source={{ uri: item.thumbnail }} style={styles.img} />
                            <View style={styles.tag}>
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>{item.title}</Text>
                                <Text style={{ color: 'white', marginTop: 4 }}>${item.price.toFixed(2)}</Text>
                            </View>
                        </View>
                    </Pressable>
                }}
            />
        </View>
    )
}


export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    card: {
        width: Dimensions.get('window').width - 40,
        height: 250,
        borderRadius: 16,
        backgroundColor: '#fff',
        marginBottom: 20,
        overflow: 'hidden',

        // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,

        // Shadow for Android
        elevation: 5,
    },
    img: {
        width: '100%',
        height: '70%',
        resizeMode: 'cover',
    },
    tag: {
        height: '30%',
        backgroundColor: '#ff4d4d',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
});
