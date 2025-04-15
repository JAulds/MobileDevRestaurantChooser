import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function ChoiceScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { restaurants } = route.params || {};

  const randomlyChooseRestaurant = () => {
    if (restaurants && restaurants.length > 0) {
      const randomIndex = Math.floor(Math.random() * restaurants.length);
      const chosenRestaurant = restaurants[randomIndex];
      navigation.navigate("RestaurantChoice", { restaurant: chosenRestaurant });
    } else {
      alert("No restaurants available. Please add restaurants.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choice Screen</Text>
      <TouchableOpacity
        style={styles.randomButton}
        onPress={randomlyChooseRestaurant}
      >
        <Text style={styles.randomButtonText}>Randomly Choose</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f8f8",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  randomButton: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
  },
  randomButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
