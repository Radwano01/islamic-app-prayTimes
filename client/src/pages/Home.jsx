import react from "react"
import { StyleSheet, ScrollView } from "react-native"
import Navbar from "../components/Navbar"
import PrayTimes from "../components/PrayTimes"
import Footer from "../components/Footer"

const styles = StyleSheet.create({
    container:{

    }
})


const Home = ()=>{
    return(
        <ScrollView style={styles.container}>
            <Navbar/>
            <PrayTimes/>
            <Footer/>
        </ScrollView>
    )
}

export default Home