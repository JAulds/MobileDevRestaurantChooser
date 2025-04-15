import React, { useState, useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ListPeople from "./ListPeople";
import AddPeople from "./AddPeople";
import { useNavigation } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

export default function PeopleScreen() {
  const [people, setPeople] = useState([
    { id: 1, fullName: "John Doe", relationship: "Friend" },
    { id: 2, fullName: "Jane Smith", relationship: "Family" },
  ]);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setParams({ people: people });
  }, [people, navigation]);

  const addPerson = (person) => {
    const newPerson = {
      id: people.length + 1,
      ...person,
    };
    setPeople([...people, newPerson]);
  };

  const deletePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <Tab.Navigator
      initialRouteName="ListPeople"
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: "#fff" },
      }}
    >
      <Tab.Screen
        name="ListPeople"
        options={{ tabBarLabel: "People List" }}
      >
        {() => (
          <ListPeople people={people} deletePerson={deletePerson} />
        )}
      </Tab.Screen>
      <Tab.Screen
        name="AddPeople"
        options={{ tabBarLabel: "Add Person" }}
      >
        {() => <AddPeople addPerson={addPerson} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
