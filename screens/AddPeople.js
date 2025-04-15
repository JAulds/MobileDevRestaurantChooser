import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import CustomTextInput from "../components/CustomTextInput"; // Ensure the path is correct

export default function AddPeople({ addPerson }) {
  const [fullName, setFullName] = useState("");
  const [relationship, setRelationship] = useState("");

  const handleAdd = () => {
    if (fullName.trim() && relationship.trim()) {
      addPerson({
        fullName,
        relationship,
      });
      // Clear the input fields after adding
      setFullName("");
      setRelationship("");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Add a New Person</Text>

      <CustomTextInput
        label="Full Name"
        placeholder="Enter full name"
        value={fullName}
        onChangeText={(text) => setFullName(text)}
        stateFieldName="fullName"
      />

      <CustomTextInput
        label="Relationship"
        placeholder="Enter relationship to account owner"
        value={relationship}
        onChangeText={(text) => setRelationship(text)}
        stateFieldName="relationship"
      />

      <Button title="Add Person" onPress={handleAdd} />
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
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 4,
    backgroundColor: "#fff",
  },
});
