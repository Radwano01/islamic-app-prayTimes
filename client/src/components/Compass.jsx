import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import {ImageBackground, StyleSheet, Text, View,TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/Entypo";


const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
    },
    image:{
        width:400,
        height:200,
        alignItems:"center",
    },
    title:{
       marginTop:70
    },
    location:{
        justifyContent:"center",
        alignItems:"center"
    },
    icon:{
        margin:10,
        color:"white",
    },
    country:{
        color:"white",
        fontSize:20,
        fontWeight:"bold",

    },
    type:{
        fontSize:25,
        fontWeight:"bold",
        color:"white",

    },
    compass:{
        width:350,
        height:350,
        borderRadius:225,
        backgroundColor:"green",
        marginTop:100,
        marginBottom:100,
        position:"relative"
    },
    arrow:{
        position:"absolute",
    },
    arrowText:{
        position:"absolute",
        top: 10,
        left: 138,
        fontSize:150,
        color:"white"
    }

})

const Compass = ()=>{

    const Navigation = useNavigation()
    const navigateLocation = ()=>{
        Navigation.navigate("Location")
    }
    const route = useRoute()
    const selectedCity = route.params?.selectedCity

    return(
        <View style={styles.container}>
            <ImageBackground source={require("../assets/mosque.jpg")} style={styles.image}>
                <View style={styles.title}>
                    <TouchableOpacity style={styles.location} onPress={navigateLocation}>
                        <Text style={styles.icon}>
                            <Icon
                                name="location"
                                size={18}
                                
                            />
                            <Text style={styles.country}>{selectedCity}</Text>
                        </Text>
                    </TouchableOpacity> 
                    <Text style={styles.type}>
                        Qibla-Compass
                    </Text>
                </View>
            </ImageBackground>
            <ImageBackground source={require("../assets/qibla-compass.png")} style={styles.compass}>
                <View style={styles.arrow}>
                    <Text style={styles.arrowText}>↑</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Compass