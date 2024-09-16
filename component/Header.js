import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Header = ({ navigation }) => {
    const cartData = useSelector((state) => state.reducer)
    const [cartitems, setCartItems] = useState(0)

    useEffect(() => {
        setCartItems(cartData.length)
    }, [cartData])
    return (
        <TouchableOpacity onPress={() => navigation.navigate("User")} style={{ backgroundColor: 'orange' }}>
            <Text style={{ fontSize: 30 }}>{cartitems}</Text>
        </TouchableOpacity>
    )
}

export default Header