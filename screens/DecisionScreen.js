class DecisionTimeScreen extends React.Component {
  /**
   * Render this component.
   */
  render() {
    return (
      <View style={styles.decisionTimeScreenContainer}>
        <TouchableOpacity
          style={styles.decisionTimeScreenTouchable}
          onPress={() => {
            // Make sure there's people.
            AsyncStorage.getItem(
              "people",
              function (inError, inPeople) {
                if (inPeople === null) {
                  inPeople = [];
                } else {
                  inPeople = JSON.parse(inPeople);
                }
                if (inPeople.length === 0) {
                  Alert.alert(
                    "That ain't gonna work, chief",
                    "You haven't added any people. " +
                      "You should probably do that first, no?",
                    [{ text: "OK" }],
                    { cancelable: false }
                  );
                } else {
                  // Ok, there's people, now make sure there's restaurants.
                  AsyncStorage.getItem(
                    "restaurants",
                    function (inError, inRestaurants) {
                      if (inRestaurants === null) {
                        inRestaurants = [];
                      } else {
                        inRestaurants = JSON.parse(inRestaurants);
                      }
                      if (inRestaurants.length === 0) {
                        Alert.alert(
                          "That ain't gonna work, chief",
                          "You haven't added any restaurants. " +
                            "You should probably do that first, no?",
                          [{ text: "OK" }],
                          { cancelable: false }
                        );
                      } else {
                        this.props.navigation.navigate("WhosGoingScreen");
                      }
                    }.bind(this)
                  );
                }
              }.bind(this)
            );
          }}
        >
          <Image source={require("../images/its-decision-time.png")} />
          <Text style={{ paddingTop: 20 }}>(click the food to get going)</Text>
        </TouchableOpacity>
      </View>
    );
  } /* End render(). */
} /* End DecisionTimeScreen. */
