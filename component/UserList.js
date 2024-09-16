import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserList } from "./redux/action"

const UserList = () => {
    const dispatch = useDispatch();
    const userList = useSelector((state) => state.reducer)

    useEffect(() => {
        dispatch(getUserList())
    }, [])
    console.log('dkdk====+>', userList[0])
    return (
        <View>
            <Text>UserList</Text>
        </View>
    )
}

export default UserList