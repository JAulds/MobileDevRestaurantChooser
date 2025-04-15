import React, { useState, useEffect } from "react";
import Constants from "expo-constants";
import { Image, Platform } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PeopleScreen from "./screens/PeopleScreen";
import RestaurantsScreen from "./screens/RestaurantScreen";
import DecisionScreen from "./screens/DecisionScreen";
import ChoiceScreen from "./screens/ChoiceScreen";

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => {
  const navigation = useNavigation();
  const [people, setPeople] = useState([
    { id: 1, fullName: "John Doe", relationship: "Friend" },
    { id: 2, fullName: "Jane Smith", relationship: "Family" },
  ]);
  useEffect(() => {
    navigation.setParams({ people: people });
  }, [people, navigation]);
  return (
    <Tab.Navigator initialRouteName="People">
      <Tab.Screen name="People" component={PeopleScreen} />
      <Tab.Screen
        name="Decision"
        component={DecisionScreen}
        initialParams={{ people: people }}
      />
      <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TabNavigator"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="Choice" component={ChoiceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
