class ListScreen extends React.Component {
  /**
   * Constructor.
   */
  constructor(inProps) {
    super(inProps);
    this.state = {
      listData: [],
    };
  } /* End constructor. */
  /**
   * Render this component.
   */
  render() {
    return (
      <Root>
        <View style={styles.listScreenContainer}>
          {/* ########## Add Restaurant button ########## */}
          <CustomButton
            text="Add Restaurant"
            width="94%"
            onPress={() => {
              this.props.navigation.navigate("AddScreen");
            }}
          />
          {/* ########## Restaurant list ########## */}
          <FlatList
            style={styles.restaurantList}
            data={this.state.listData}
            renderItem={({ item }) => (
              <View style={styles.restaurantContainer}>
                <Text style={styles.restaurantName}>{item.name}</Text>
                <CustomButton
                  text="Delete"
                  onPress={() => {
                    Alert.alert(
                      "Please confirm",
                      "Are you sure you want to delete this restaurant?",
                      [
                        {
                          text: "Yes",
                          onPress: () => {
                            // Pull data out of storage.
                            AsyncStorage.getItem(
                              "restaurants",
                              function (inError, inRestaurants) {
                                if (inRestaurants === null) {
                                  inRestaurants = [];
                                } else {
                                  inRestaurants = JSON.parse(inRestaurants);
                                }
                                // Find the right one to delete and splice it out.
                                for (let i = 0; i < inRestaurants.length; i++) {
                                  const restaurant = inRestaurants[i];
                                  if (restaurant.key === item.key) {
                                    inRestaurants.splice(i, 1);
                                    break;
                                  }
                                }
                                // Store updated data in storage.
                                AsyncStorage.setItem(
                                  "restaurants",
                                  JSON.stringify(inRestaurants),
                                  function () {
                                    // Set new state to update list.
                                    this.setState({ listData: inRestaurants });
                                    // Show toast message to confirm deletion.
                                    Toast.show({
                                      text: "Restaurant deleted",
                                      position: "bottom",
                                      type: "danger",
                                      duration: 2000,
                                    });
                                  }.bind(this)
                                );
                              }.bind(this)
                            );
                          },
                        },
                        { text: "No" },
                        { text: "Cancel", style: "cancel" },
                      ],
                      { cancelable: true }
                    );
                  }}
                />
              </View>
            )}
          />
        </View>
      </Root>
    );
  } /* End render(). */
  /**
   * Execute after the component mounts.
   */
  componentDidMount() {
    // Block hardware back button on Android.
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true;
    });
    // Get list of restaurants.
    AsyncStorage.getItem(
      "restaurants",
      function (inError, inRestaurants) {
        if (inRestaurants === null) {
          inRestaurants = [];
        } else {
          inRestaurants = JSON.parse(inRestaurants);
        }
        this.setState({ listData: inRestaurants });
      }.bind(this)
    );
  } /* End componentDidMount() */
} /* End ListScreen. */
