import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  TextInput,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "whitesmoke",
    height: 1000,
  },
  image: {
    width: "100%",
    height: 180,
    alignItems: "center",
  },
  title: {
    marginTop: 70,
  },
  type: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  search: {
    marginTop: 30,
    alignItems: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    width: 300,
    height: 40,
    borderRadius: 5,
    fontSize: 15,
    padding: 10,
  },
  countries: {
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    padding: 15,
    borderRadius: 5,
    margin: 15,
    width: 300,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  country: {
    fontSize: 17,
  },
});

const countries = [
  { id: 1, name: "oslo" },
  { id: 2, name: "halden" },
  { id: 3, name: "honefoss"}
  // Add more countries as needed
];

const Countries = () => {
  const navigate = useNavigation();
  const [selectedCity, setSelectedCity] = useState("");
  const handleSelectCity = () => {
    navigate.navigate("Home", { selectedCity });
  };
  const handleFunction = (e) => {
    setSelectedCity(e);
  };

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require("../assets/mosque.jpg")}
        style={styles.image}
      >
        <View style={styles.title}>
          <Text style={styles.type}>Cities</Text>
        </View>
      </ImageBackground>
      <View style={styles.search}>
        <TextInput style={styles.input} placeholder="text" />
      </View>
      <View style={styles.countries}>
        {countries?.map((country) => (
          <TouchableOpacity
            key={country.id}
            style={styles.card}
            onPress={() => handleFunction(country.name)}
          >
            <Text style={styles.city}>{country.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Button title="Change City" onPress={handleSelectCity} />
    </ScrollView>
  );
};

export default Countries;
