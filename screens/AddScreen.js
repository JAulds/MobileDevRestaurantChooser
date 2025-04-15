import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  Button, // ADDED Button import
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import CustomTextInput from "../components/CustomTextInput"; // Ensure the path is correct

export default function AddScreen({ addRestaurant }) {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [starRating, setStarRating] = useState("3");
  const [priceRating, setPriceRating] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleAdd = () => {
    if (name.trim()) {
      addRestaurant({
        name,
        cuisine,
        starRating,
        priceRating,
        phone,
        address,
      });
      // Clear the input fields after adding
      setName("");
      setCuisine("");
      setStarRating("3");
      setPriceRating("");
      setPhone("");
      setAddress("");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Add a New Restaurant</Text>

      <CustomTextInput
        label="Restaurant Name"
        value={name}
        onChangeText={(text) => setName(text)} // Correct Way
        placeholder="Enter restaurant name"
        stateFieldName="name"
      />

      <CustomTextInput
        label="Cuisine Type"
        value={cuisine}
        onChangeText={(text) => setCuisine(text)} // Correct Way
        placeholder="Enter cuisine type"
        stateFieldName="cuisine"
      />

      <Text style={styles.label}>Star Rating</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={starRating}
          onValueChange={(itemValue) => setStarRating(itemValue)}
          style={Platform.OS === "ios" ? styles.pickerIOS : styles.pickerAndroid}
        >
          <Picker.Item label="1 Star" value="1" />
          <Picker.Item label="2 Stars" value="2" />
          <Picker.Item label="3 Stars" value="3" />
          <Picker.Item label="4 Stars" value="4" />
          <Picker.Item label="5 Stars" value="5" />
        </Picker>
      </View>

      <CustomTextInput
        label="Price Rating"
        value={priceRating}
        onChangeText={(text) => setPriceRating(text)} // Correct Way
        placeholder="Enter price rating (e.g., $, $$, $$$)"
        stateFieldName="priceRating"
      />

      <CustomTextInput
        label="Phone Number"
        value={phone}
        onChangeText={(text) => setPhone(text)} // Correct Way
        placeholder="Enter phone number"
        keyboardType="phone-pad"
        stateFieldName="phone"
      />

      <CustomTextInput
        label="Address"
        value={address}
        onChangeText={(text) => setAddress(text)} // Correct Way
        placeholder="Enter address"
        stateFieldName="address"
      />
      <Button title="Add Restaurant" onPress={handleAdd} /> {/* ADDED Button */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    marginBottom: 16,
  },
  pickerIOS: {
    height: 100,
  },
  pickerAndroid: {
    height: 50,
  },
});
