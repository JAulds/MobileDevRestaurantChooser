import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Checkbox from "expo-checkbox"; // Ensure you have this installed (npx expo install expo-checkbox)

export default function DecisionScreen() {
  const [selectedPeople, setSelectedPeople] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();

  const { people } = route.params || { people: [] };

  const togglePerson = (id) => {
    if (selectedPeople.includes(id)) {
      setSelectedPeople(selectedPeople.filter((personId) => personId !== id));
    } else {
      setSelectedPeople([...selectedPeople, id]);
    }
  };

  const handleNext = () => {
    // Navigate to the ChoiceScreen with the selected people
    navigation.navigate("Choice", { selectedPeople });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.personItem}
      onPress={() => togglePerson(item.id)}
    >
      <Checkbox
        value={selectedPeople.includes(item.id)}
        onValueChange={() => togglePerson(item.id)}
        style={styles.checkbox}
      />
      <Text style={styles.personName}>{item.fullName}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Who's Going?</Text>
      <FlatList
        data={people}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
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
    textAlign: "center",
  },
  personItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  checkbox: {
    marginRight: 8,
  },
  personName: {
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: "#5cb85c",
    paddingVertical: 12,
    borderRadius: 4,
    marginTop: 16,
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
