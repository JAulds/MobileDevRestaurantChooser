import React, { useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ListScreen from "./ListScreen";
import AddScreen from "./AddScreen";

const Tab = createMaterialTopTabNavigator();

export default function RestaurantScreen() {
  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
      name: "The Italian Bistro",
      cuisine: "Italian",
      starRating: "4",
      priceRating: "$$",
      phone: "123-456-7890",
      address: "123 Main St",
    },
    {
      id: 2,
      name: "Sushi World",
      cuisine: "Japanese",
      starRating: "5",
      priceRating: "$$$",
      phone: "987-654-3210",
      address: "456 Elm St",
    },
  ]);

  const addRestaurant = (restaurant) => {
    const newRestaurant = {
      id: restaurants.length + 1,
      ...restaurant,
    };
    setRestaurants([...restaurants, newRestaurant]);
  };

  const deleteRestaurant = (id) => {
    setRestaurants(restaurants.filter((restaurant) => restaurant.id !== id));
  };

  return (
    <Tab.Navigator
      initialRouteName="ListScreen"
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: "#fff" },
      }}
    >
      {/* Pass restaurants and deleteRestaurant as props */}
      <Tab.Screen
        name="ListScreen"
        options={{ tabBarLabel: "Restaurant List" }}
      >
        {() => (
          <ListScreen
            restaurants={restaurants}
            deleteRestaurant={deleteRestaurant}
          />
        )}
      </Tab.Screen>
      <Tab.Screen
        name="AddScreen"
        options={{ tabBarLabel: "Add Restaurant" }}
      >
        {() => <AddScreen addRestaurant={addRestaurant} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}




/*import React from "react";
import CustomButton from "../components/CustomButton"
import CustomTextInput from "../components/CustomTextInput";
import {
    Alert, AsyncStorage, BackHandler, FlatList, Picker, Platform, ScrollView, StyleSheet, Text, View
} from "react-native"
import { createStackNavigator } from "@react-navigation/native-stack"
import { Root, Toast } from "@gluestack-ui/themed-native-base"
import Constants from "expo-constants"

class ListScreen extends React.Component {
    constructor(inProps) {
        super(inProps);
        this.state = { listData : [ ] };
    }

    render() { return {

        <Root>
            <View style={styles.listScreenContainer}>
                {/* Add restaurant button }
                <CustomButton
                    text = "Add Restaurant"
                    width = "94%"
                    onPress = { () => {this.props.navigation.navigate("AddScreen"); } }
                />
                {/* Restaurant List }
                <FlatList
                    style = {styles.restaurantList}
                    data={this.state.listData}
                    renderItem={ ({item}) =>
                        <View style = {styles.restaurantContainer}>
                        <Text style = {styles.restaurantName}>{item.name}</Text>
                        <CustomButton
                            text="delete"
                            onPress={ () => {
                                Alert.alert(
                                    "Please confirm",
                                    "Are you sure you want to delete this restaurant?",
                                    [
                                        { text : "Yes", onPress: () => {
                                            //Pull data out of storage
                                            AsyncStorage.getItem("restaurants",
                                                function(inError, inRestaurants){
                                                    if(inRestaurants === null){
                                                        inRestaurants = [ ];
                                                    }
                                                    else{
                                                        inRestaurants = JSON.parse(inRestaurants);
                                                    }
                                                    //find the right one and delete
                                                    for(let i = 0; i < inRestaurants.length; i++){
                                                        const restaurant = inRestaurants[i]
                                                        if(restaurant.key === item.key){
                                                            inRestaurants.splice(i, 1)
                                                            break;
                                                        }
                                                    }
                                                    AsyncStorage.setItem("restaurants",
                                                        JSON.stringify(inRestaurants), function() {
                                                            //set new state to update list
                                                            this.setState({ listData : inRestaurants});
                                                            //show toast message to confirm deletion
                                                            Toast.show({
                                                                text : "Restaurant deleted",
                                                                position : "bottom",
                                                                type : "danger",
                                                                duration : 2000
                                                            })
                                                        }.bind(this)
                                                    );
                                                }.bind(this)
                                            );
                                        } },
                                        { text : "No" },
                                        { text : "Cancel", style : "cancel" }
                                    ],
                                    { cancelable : true }
                                )
                            }} />
                        </View>
                    }
                />
            </View>
        </Root>
    };

    }

    /*
listScreenContainer : { flex : 1, alignItems : "center", justifyContent : "center",
    ...Platform.select({
        ios : { paddingTop : Constants.statusBarHeight },
        android : { }
    })
}

restaurantList : { width : "94%" }

restaurantContainer : { flexDirection : "row", marginTop : 4, marginBottom : 4,
    borderColor : "#e0e0e0", borderBottomWidth : 2, alignItems : "center"
}
restaurantName : { flex : 1 }
*/
