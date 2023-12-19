import react from "react"
import { useNavigation, useRoute } from "@react-navigation/native"
import {Text, View, StyleSheet, ImageBackground, TouchableOpacity} from "react-native"
import Icon from "react-native-vector-icons/Entypo"


const styles = StyleSheet.create({
    container:{
        height:200
    },
    date:{
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
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
    dateWrapper:{
        flexDirection:"row",
        backgroundColor:"white",
        padding:10,
        borderRadius:10
    },
    calender:{
        fontSize:20,
        fontWeight:"bold",
        marginLeft:10,
        marginRight:10
    }
})

const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "sep", "Oct", "Nov", "Dec"
];
const currectDate = new Date()
const day = currectDate.getDate()
const month = currectDate.getMonth()
const year = currectDate.getFullYear()
const Navbar = () => {
    const Navigation = useNavigation()
    const navigateLocation = ()=>{
        Navigation.navigate("Location")
    }
    const route = useRoute()
    const selectedCity = route.params?.selectedCity

    return (
        <ImageBackground
            source={require("../assets/mosque.jpg")}
        >
            <View style={styles.container}>
                <View style={styles.date}>
                    <TouchableOpacity style={styles.location} onPress={navigateLocation}>
                        <Text style={styles.icon}>
                            <Icon
                                name="location"
                                size={18}
                                
                            />
                            <Text style={styles.country}>{selectedCity === undefined ? "oslo" : selectedCity}</Text>
                        </Text>
                    </TouchableOpacity>          
                    <View style={styles.dateWrapper}>
                        <Text style={styles.calender}>{`${day}/${monthNames[month]}/${year}`}</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}


export default Navbar