import { useRoute } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {},
  mainWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
  wrapper: {
    margin: 20,
    borderRadius: 5,
  },
  cards: {
    margin: 5,
    width: 240,
  },
  card: {
    padding: 15,
    margin: 20,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 5,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 5,
  },
});
const monthNames = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];
const daysOfWeek = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

const currentDate = new Date();
const month = currentDate.getMonth();
const numberOfMonth = currentDate.getDate();
const day = currentDate.getDay();

const PrayTimes = () => {
  const [data, setData] = useState([]);
  const [city, setCity] = useState("oslo");
  const route = useRoute();
  const selectedCity = route.params?.selectedCity;

  const getData = async () => {
    const apiUrl = `${process.env.REACT_APP_DATA_API}/api/norway/${city}/${monthNames[month]}/${numberOfMonth}/${daysOfWeek[day]}`;
    try {
      const response = await axios.get(apiUrl);
      if (response.data) {
        setData(response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    setCity(selectedCity);
  }, [selectedCity]);

  useEffect(() => {
    getData();
  }, [city]);

  return (
    <View style={styles.container}>
      <View style={styles.mainWrapper}>
        <View style={styles.wrapper}>
          {Object.keys(data)?.map((time, index) => {
            return (
              <View style={styles.cards} key={index}>
                <View style={styles.card}>
                  <Text style={styles.name}>{time}</Text>
                  <Text style={styles.name}>{data[time]}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default PrayTimes;
