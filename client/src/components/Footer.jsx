import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from "react-native"
import Icon from "react-native-vector-icons/Entypo"

const styles = StyleSheet.create({
    footer:{
        backgroundColor:"#006400",
        padding:5,
        justifyContent:"space-evenly",
        alignItems:"center",
        flexDirection:"row",
    },
    header:{
        padding:5,
    }
})


const Footer = () => {

    const Navigation = useNavigation()
    // const navigateQible = ()=>{
    //     Navigation.navigate("Qible")
    // }
    const navigateHome = ()=>{
        Navigation.navigate("Home")
    }

  return (
    <View style={styles.footer}>
        <TouchableOpacity onPress={navigateHome}>
            <Text style={styles.header}>
                <Icon 
                    name="home"
                    size={30}
                    color="white"
                />
            </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={navigateQible}>
            <Text style={styles.header}>
                <Icon
                    name="compass"
                    size={30}
                    color="white"
                />
            </Text>
        </TouchableOpacity> */}
    </View>
  )
}

export default Footer