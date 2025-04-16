import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { addToCart, removeFromCart, clearCart } from '../redux/features/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const SingleProductScreen = ({ route }) => {
  const { product } = route.params;
  const [loadingStates, setLoadingStates] = useState(product.images.map(() => true));


  const navigation = useNavigation();

  const dispatch = useDispatch();

  const handleLoadStart = (index) => {
    const newStates = [...loadingStates];
    newStates[index] = true;
    setLoadingStates(newStates);
  };

  const handleLoadEnd = (index) => {
    const newStates = [...loadingStates];
    newStates[index] = false;
    setLoadingStates(newStates);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Horizontal Image Gallery */}
      <ScrollView horizontal pagingEnabled style={styles.imageGallery}>
        {product.images?.map((img, index) => (
          <View key={index} style={styles.imageWrapper}>
            {loadingStates[index] && (
              <ActivityIndicator size="large" color="#ff4d4d" style={styles.loader} />
            )}
            <Image
              source={{ uri: img }}
              style={styles.image}
              onLoadStart={() => handleLoadStart(index)}
              onLoadEnd={() => handleLoadEnd(index)}
            />
          </View>
        ))}
      </ScrollView>

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        <Text style={styles.description}>{product.description}</Text>

        <View style={styles.section}>
          <Text style={styles.label}>Brand:</Text>
          <Text style={styles.value}>{product.brand}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Category:</Text>
          <Text style={styles.value}>{product.category}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Stock:</Text>
          <Text
            style={[
              styles.value,
              { color: product.stock < 10 ? 'red' : 'green' },
            ]}
          >
            {product.availabilityStatus || (product.stock < 10 ? 'Low Stock' : 'In Stock')}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Rating:</Text>
          <Text style={styles.value}>{product.rating} / 5</Text>
        </View>

        <Text style={styles.sectionTitle}>Tags:</Text>
        <View style={styles.tagsContainer}>
          {product.tags?.map((tag, index) => (
            <Text key={index} style={styles.tag}>{tag}</Text>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Reviews:</Text>
        {product.reviews?.map((review, idx) => (
          <View key={idx} style={styles.reviewBox}>
            <Text style={styles.reviewName}>{review.reviewerName}</Text>
            <Text style={styles.reviewComment}>"{review.comment}"</Text>
            <Text style={styles.reviewRating}>Rating: {review.rating} ⭐</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={() => {dispatch(addToCart(product))}}>
        <Text style={{color: 'white'}}>Add To Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate("Cart")}} style={[styles.button, {backgroundColor: 'blue', marginTop: 20, marginBottom: 50}]}>
        <Text style={{color: 'white'}}>View Cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SingleProductScreen;


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      paddingBottom: 40,
    },
    imageGallery: {
      height: 300,
      backgroundColor: '#f2f2f2',
    },
    imageWrapper: {
      width: Dimensions.get('window').width,
      height: 300,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#e6e6e6',
    },
    image: {
      width: '100%',
      height: 300,
      resizeMode: 'cover',
    },
    loader: {
      position: 'absolute',
      zIndex: 1,
    },
    detailsContainer: {
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    price: {
      fontSize: 20,
      color: '#ff4d4d',
      marginBottom: 10,
    },
    description: {
      fontSize: 16,
      color: '#555',
      marginBottom: 15,
    },
    section: {
      flexDirection: 'row',
      marginBottom: 8,
    },
    label: {
      fontWeight: 'bold',
      marginRight: 5,
    },
    value: {
      color: '#333',
    },
    sectionTitle: {
      marginTop: 15,
      fontWeight: 'bold',
      fontSize: 18,
    },
    tagsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 5,
    },
    tag: {
      backgroundColor: '#eee',
      color: '#333',
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 12,
      marginRight: 8,
      marginTop: 5,
    },
    reviewBox: {
      backgroundColor: '#f9f9f9',
      padding: 10,
      marginTop: 10,
      borderRadius: 8,
    },
    reviewName: {
      fontWeight: 'bold',
    },
    reviewComment: {
      fontStyle: 'italic',
      marginVertical: 4,
    },
    reviewRating: {
      color: '#666',
    },
    button: {
        backgroundColor: 'green',
        width: Dimensions.get('window').width -100,
        height: 45,
        alignSelf: 'center',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
  });
  