class PreFiltersScreen extends React.Component {
  /**
   * Constructor.
   */
  constructor(inProps) {
    super(inProps);
    this.state = {
      cuisine: "",
      price: "",
      rating: "",
      delivery: "",
    };
  } /* End constructor. */
  /**
   * Render this component.
   */
  render() {
    return (
      <ScrollView style={styles.preFiltersContainer}>
        <View style={styles.preFiltersInnerContainer}>
          <View style={styles.preFiltersScreenFormContainer}>
            <View style={styles.preFiltersHeadlineContainer}>
              <Text style={styles.preFiltersHeadline}>Pre-Filters</Text>
            </View>
            {/* ########## Cuisine ########## */}
            <Text style={styles.fieldLabel}>Cuisine</Text>
            <View style={styles.pickerContainer}>
              <Picker
                style={styles.picker}
                selectedValue={this.state.cuisine}
                prompt="Cuisine"
                onValueChange={(inItemValue) =>
                  this.setState({ cuisine: inItemValue })
                }
              >
                <Picker.Item label="" value="" />
                <Picker.Item label="Algerian" value="Algerian" />
                <Picker.Item label="American" value="American" />
                <Picker.Item label="BBQ" value="BBQ" />
                <Picker.Item label="Belgian" value="Belgian" />
                <Picker.Item label="Brazilian" value="Brazilian" />
                <Picker.Item label="British" value="British" />
                <Picker.Item label="Cajun" value="Cajun" />
                <Picker.Item label="Canadian" value="Canadian" />
                <Picker.Item label="Chinese" value="Chinese" />
                <Picker.Item label="Cuban" value="Cuban" />
                <Picker.Item label="Egyptian" value="Egyptian" />
                <Picker.Item label="Filipino" value="Filipino" />
                <Picker.Item label="French" value="French" />
                <Picker.Item label="German" value="German" />
                <Picker.Item label="Greek" value="Greek" />
                <Picker.Item label="Haitian" value="Haitian" />
                <Picker.Item label="Hawaiian" value="Hawaiian" />
                <Picker.Item label="Indian" value="Indian" />
                <Picker.Item label="Irish" value="Irish" />
                <Picker.Item label="Italian" value="Italian" />
                <Picker.Item label="Japanese" value="Japanese" />
                <Picker.Item label="Jewish" value="Jewish" />
                <Picker.Item label="Kenyan" value="Kenyan" />
                <Picker.Item label="Korean" value="Korean" />
                <Picker.Item label="Latvian" value="Latvian" />
                <Picker.Item label="Libyan" value="Libyan" />
                <Picker.Item label="Mediterranean" value="Mediterranean" />
                <Picker.Item label="Mexican" value="Mexican" />
                <Picker.Item label="Mormon" value="Mormon" />
                <Picker.Item label="Nigerian" value="Nigerian" />
                <Picker.Item label="Other" value="Other" />
                <Picker.Item label="Peruvian" value="Peruvian" />
                <Picker.Item label="Polish" value="Polish" />
                <Picker.Item label="Portuguese" value="Portuguese" />
                <Picker.Item label="Russian" value="Russian" />
                <Picker.Item label="Salvadorian" value="Salvadorian" />
                <Picker.Item label="Sandwiche Shop" value="Sandwiche Shop" />
                <Picker.Item label="Scottish" value="Scottish" />
                <Picker.Item label="Seafood" value="Seafood" />
                <Picker.Item label="Spanish" value="Spanish" />
                <Picker.Item label="Steak House" value="Steak House" />
                <Picker.Item label="Sushi" value="Sushi" />
                <Picker.Item label="Swedish" value="Swedish" />
                <Picker.Item label="Tahitian" value="Tahitian" />
                <Picker.Item label="Thai" value="Thai" />
                <Picker.Item label="Tibetan" value="Tibetan" />
                <Picker.Item label="Turkish" value="Turkish" />
                <Picker.Item label="Welsh" value="Welsh" />
              </Picker>
            </View>
            {/* ########## Price ########## */}
            <Text style={styles.fieldLabel}>Price &lt;=</Text>
            <View style={styles.pickerContainer}>
              <Picker
                style={styles.picker}
                selectedValue={this.state.price}
                prompt="price <="
                onValueChange={(inItemValue) =>
                  this.setState({ price: inItemValue })
                }
              >
                <Picker.Item label="" value="" />
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
              </Picker>
            </View>
            {/* ########## Rating ########## */}
            <Text style={styles.fieldLabel}>Rating &gt;=</Text>
            <View style={styles.pickerContainer}>
              <Picker
                style={styles.picker}
                selectedValue={this.state.rating}
                prompt="Rating >="
                onValueChange={(inItemValue) =>
                  this.setState({ rating: inItemValue })
                }
              >
                <Picker.Item label="" value="" />
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
              </Picker>
            </View>
            {/* ########## Delivery ########## */}
            <Text style={styles.fieldLabel}>Delivery?</Text>
            <View style={styles.pickerContainer}>
              <Picker
                style={styles.picker}
                prompt="Delivery?"
                selectedValue={this.state.delivery}
                onValueChange={(inItemValue) =>
                  this.setState({ delivery: inItemValue })
                }
              >
                <Picker.Item label="" value="" />
                <Picker.Item label="Yes" value="Yes" />
                <Picker.Item label="No" value="No" />
              </Picker>
            </View>
            {/* ########## Next Step button ########## */}
            <CustomButton
              text="Next"
              width="94%"
              onPress={() => {
                // Get all restaurants from LocalStorage.
                AsyncStorage.getItem(
                  "restaurants",
                  function (inError, inRestaurants) {
                    if (inRestaurants === null) {
                      inRestaurants = [];
                    } else {
                      inRestaurants = JSON.parse(inRestaurants);
                    }
                    // Now filter them based on selected criteria, if any.
                    filteredRestaurants = [];
                    for (const restaurant of inRestaurants) {
                      let passTests = true;
                      // Filter on cuisine.
                      if (this.state.cuisine !== "") {
                        if (Object.keys(this.state.cuisine).length > 0) {
                          if (restaurant.cuisine !== this.state.cuisine) {
                            passTests = false;
                          }
                        }
                      }
                      // Filter on price.
                      if (this.state.price !== "") {
                        if (restaurant.price > this.state.price) {
                          passTests = false;
                        }
                      }
                      // Filter on rating.
                      if (this.state.rating !== "") {
                        if (restaurant.rating < this.state.rating) {
                          passTests = false;
                        }
                      }
                      // Filter on delivery.
                      if (this.state.delivery !== "") {
                        if (restaurant.delivery !== this.state.delivery) {
                          passTests = false;
                        }
                      }
                      // The case where there are no selected criteria.
                      if (
                        this.state.cuisine.length === 0 &&
                        this.state.price === "" &&
                        this.state.rating === "" &&
                        this.state.delivery === ""
                      ) {
                        passTests = true;
                      }
                      // Yep, this one meets the criteria, add it.
                      if (passTests) {
                        filteredRestaurants.push(restaurant);
                      }
                    }
                    // If there were no matches, we can't go on.
                    if (filteredRestaurants.length === 0) {
                      Alert.alert(
                        "Well, that's an easy choice",
                        "None of your restaurants match these criteria. Maybe " +
                          "try loosening them up a bit?",
                        [{ text: "OK" }],
                        { cancelable: false }
                      );
                    } else {
                      // We've got at least one, go to the next screen.
                      this.props.navigation.navigate("ChoiceScreen");
                    }
                  }.bind(this)
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    );
  } /* End render(). */
} /* End PreFiltersScreen. */
