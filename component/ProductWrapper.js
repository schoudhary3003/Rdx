import { View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import Header from './Header';
import Product from './Product';


const ProductWrapper = () => {
  const products = [
    {
      name: 'samsung',
      price: 1000,
      color: 'green',
    },
    {
      name: 'iphone',
      price: 2000,
      color: 'blue',
    },
    {
      name: 'mi',
      price: 4000,
      color: 'black',
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView>
        <Header />
        <ScrollView>
          {products.map((item, index) => (
            <Product key={index} item={item} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default ProductWrapper;
