class AddScreen extends React.Component {
  /**
   * Constructor.
   */
  constructor(inProps) {
    super(inProps);
    this.state = {
      name: "",
      cuisine: "",
      price: "",
      rating: "",
      phone: "",
      address: "",
      webSite: "",
      delivery: "",
      key: `r_${new Date().getTime()}`,
    };
  } /* End constructor. */
  /**
   * Render this component.
   */
  render() {
    return (
      <ScrollView style={styles.addScreenContainer}>
        <View style={styles.addScreenInnerContainer}>
          <View style={styles.addScreenFormContainer}>
            {/* ########## Name ########## */}
            <CustomTextInput
              label="Name"
              maxLength={20}
              stateHolder={this}
              stateFieldName="name"
            />
            {/* ########## Cuisine ########## */}
            <Text style={styles.fieldLabel}>Cuisine</Text>
            <View style={styles.pickerContainer}>
              <Picker
                style={styles.picker}
                prompt="Cuisine"
                selectedValue={this.state.cuisine}
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
            <Text style={styles.fieldLabel}>Price</Text>
            <View style={styles.pickerContainer}>
              <Picker
                style={styles.picker}
                selectedValue={this.state.price}
                prompt="Price"
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
            <Text style={styles.fieldLabel}>Rating</Text>
            <View style={styles.pickerContainer}>
              <Picker
                style={styles.picker}
                selectedValue={this.state.rating}
                prompt="Rating"
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
            {/* ########## Phone ########## */}
            <CustomTextInput
              label="Phone Number"
              maxLength={20}
              stateHolder={this}
              stateFieldName="phone"
            />
            {/* ########## Address ########## */}
            <CustomTextInput
              label="Address"
              maxLength={20}
              stateHolder={this}
              stateFieldName="address"
            />
            {/* ########## Web Site ########## */}
            <CustomTextInput
              label="Web Site"
              maxLength={20}
              stateHolder={this}
              stateFieldName="webSite"
            />
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
          </View>
          {/* ########## Buttons ########## */}
          <View style={styles.addScreenButtonsContainer}>
            <CustomButton
              text="Cancel"
              width="44%"
              onPress={() => {
                this.props.navigation.navigate("ListScreen");
              }}
            />
            <CustomButton
              text="Save"
              width="44%"
              onPress={() => {
                AsyncStorage.getItem(
                  "restaurants",
                  function (inError, inRestaurants) {
                    if (inRestaurants === null) {
                      inRestaurants = [];
                    } else {
                      inRestaurants = JSON.parse(inRestaurants);
                    }
                    inRestaurants.push(this.state);
                    AsyncStorage.setItem(
                      "restaurants",
                      JSON.stringify(inRestaurants),
                      function () {
                        this.props.navigation.navigate("ListScreen");
                      }.bind(this)
                    );
                  }.bind(this)
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    );
  } /* End render(). */
} /* End AddScreen. */
