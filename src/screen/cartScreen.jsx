import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from '../redux/features/cartSlice';

const CartScreen = () => {
  const dispatch = useDispatch();
  const {cartData = [], totalAmount = 0 } = useSelector((state) => state.cart || {});

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.thumbnail }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        <View style={styles.actions}>
          <TouchableOpacity onPress={() => dispatch(removeFromCart(item))}>
            <Text style={styles.qtyButton}>−</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => dispatch(addToCart(item))}>
            <Text style={styles.qtyButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {cartData.length === 0 ? (
        <Text style={styles.empty}>Your cart is empty.</Text>
      ) : (
        <>
          <FlatList
            data={cartData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
          />
          <View style={styles.footer}>
            <Text style={styles.total}>Total: ${totalAmount.toFixed(2)}</Text>
            <TouchableOpacity
              style={styles.clearButton}
              onPress={() =>
                Alert.alert("Clear Cart", "Are you sure you want to remove all items?", [
                  { text: "Cancel", style: "cancel" },
                  { text: "Yes", onPress: () => dispatch(clearCart()) },
                ])
              }
            >
              <Text style={{ color: 'white' }}>Clear Cart</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  card: {
    flexDirection: 'row',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 100,
  },
  details: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    color: '#ff4d4d',
    marginVertical: 5,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qtyButton: {
    fontSize: 22,
    paddingHorizontal: 10,
    color: 'green',
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  empty: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 40,
    color: '#555',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  clearButton: {
    marginTop: 10,
    backgroundColor: '#ff4d4d',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
  },
});
