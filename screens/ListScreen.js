import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";

export default function ListScreen({ restaurants, deleteRestaurant }) {
  const renderItem = ({ item }) => (
    <View style={styles.restaurantItem}>
      <View>
        <Text style={styles.restaurantName}>{item.name}</Text>
        <Text style={styles.restaurantDetails}>
          Cuisine: {item.cuisine}, Rating: {item.starRating} stars, Price: {item.priceRating}
        </Text>
        <Text style={styles.restaurantDetails}>
          Phone: {item.phone}, Address: {item.address}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteRestaurant(item.id)}
      >
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restaurant List</Text>
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  restaurantItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  restaurantDetails: {
    fontSize: 14,
    color: "gray",
  },
  deleteButton: {
    backgroundColor: "#ff4d4d",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  deleteButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
