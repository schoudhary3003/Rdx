import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { addToCart, removeFromCart } from './redux/action';
import { useDispatch, useSelector } from "react-redux"

const Product = (props) => {
    const item = props.item
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.reducer);
    const [isAdded, setIsAdded] = useState(false)

// console.log("itempropssssssssssss=====+>",item)


    useEffect(() => {
        // if (cartItems && cartItems.length) {
        //     cartItems.forEach((element) => {
        //         if (element.name === item.name) {

        //         }
        //     })
        // }
        let result = cartItems.filter((element) => {
            return element?.name == item?.name
        });
        if (result.length) {
            setIsAdded(true)
        } else {
            setIsAdded(false)
        }
    }, [cartItems])


    const handleAddToCart = (item) => {
        dispatch(addToCart(item))
    }
    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item?.name))
    }
    console.log('item========+>', cartItems)
    return (
        <View style={{ marginTop: 20, alignSelf: 'center' }}>
            <Text style={{ fontSize: 20 }}>{item?.name}</Text>
            <Text style={{ fontSize: 16 }}>{`Price: ${item?.price}`}</Text>
            <Text style={{ fontSize: 16 }}>{`Color: ${item?.color}`}</Text>
            {!isAdded ? <TouchableOpacity onPress={() => handleAddToCart(item)} style={{ backgroundColor: 'blue', margin: 10, padding: 10 }}>
                <Text style={{ color: 'white' }}>AddToCart</Text>
            </TouchableOpacity>
                :
                <TouchableOpacity onPress={() => handleRemoveFromCart(item)} style={{ backgroundColor: 'blue', margin: 10, padding: 10 }}>
                    <Text style={{ color: 'white' }}>remove from cart</Text>
                </TouchableOpacity>}
        </View>
    );
};

export default Product;
