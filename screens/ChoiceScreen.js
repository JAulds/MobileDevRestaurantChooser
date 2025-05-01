class ChoiceScreen extends React.Component {
  /**
   * Constructor.
   */
  constructor(inProps) {
    super(inProps);
    this.state = {
      participantsList: participants,
      participantsListRefresh: false,
      selectedVisible: false,
      vetoVisible: false,
      vetoDisabled: false,
      vetoText: "Veto",
    };
  } /* End constructor. */
  /**
   * Render this component.
   */
  render() {
    return (
      <View style={styles.listScreenContainer}>
        {/* ########## Selected Modal ########## */}
        <Modal
          presentationStyle={"formSheet"}
          visible={this.state.selectedVisible}
          animationType={"slide"}
          onRequestClose={() => {}}
        >
          <View style={styles.selectedContainer}>
            <View style={styles.selectedInnerContainer}>
              <Text style={styles.selectedName}>{chosenRestaurant.name}</Text>
              <View style={styles.selectedDetails}>
                <Text style={styles.selectedDetailsLine}>
                  This is a {"\u2605".repeat(chosenRestaurant.rating)} star
                </Text>
                <Text style={styles.selectedDetailsLine}>
                  {chosenRestaurant.cuisine} restaurant
                </Text>
                <Text style={styles.selectedDetailsLine}>
                  with a price rating of {"$".repeat(chosenRestaurant.price)}
                </Text>
                <Text style={styles.selectedDetailsLine}>
                  that{" "}
                  {chosenRestaurant.delivery === "Yes" ? "DOES" : "DOES NOT"}{" "}
                  deliver.
                </Text>
              </View>
              <CustomButton
                text="Accept"
                width="94%"
                onPress={() => {
                  this.setState({ selectedVisible: false, vetoVisible: false });
                  this.props.navigation.navigate("PostChoiceScreen");
                }}
              />
              <CustomButton
                text={this.state.vetoText}
                width="94%"
                disabled={this.state.vetoDisabled ? "true" : "false"}
                onPress={() => {
                  this.setState({ selectedVisible: false, vetoVisible: true });
                }}
              />
            </View>
          </View>
        </Modal>
        {/* ########## Veto Modal ########## */}
        <Modal
          presentationStyle={"formSheet"}
          visible={this.state.vetoVisible}
          animationType={"slide"}
          onRequestClose={() => {}}
        >
          <View style={styles.vetoContainer}>
            <View style={styles.vetoContainerInner}>
              <Text style={styles.vetoHeadline}>Who's vetoing?</Text>
              <ScrollView style={styles.vetoScrollViewContainer}>
                {participants.map((inValue) => {
                  if (inValue.vetoed === "no") {
                    return (
                      <TouchableOpacity
                        key={inValue.key}
                        style={styles.vetoParticipantContainer}
                        onPress={() => {
                          // Mark the vetoer as having vetoed.
                          for (const participant of participants) {
                            if (participant.key === inValue.key) {
                              participant.vetoed = "yes";
                              break;
                            }
                          }
                          // Make sure there's still at least one person that
                          // can veto, otherwise disable the Veto button.
                          let vetoStillAvailable = false;
                          let buttonLabel = "No Vetoes Left";
                          for (const participant of participants) {
                            if (participant.vetoed === "no") {
                              vetoStillAvailable = true;
                              buttonLabel = "Veto";
                              break;
                            }
                          }
                          // Delete the vetoed restaurant.
                          for (let i = 0; i < filteredRestaurants.length; i++) {
                            if (
                              filteredRestaurants[i].key ===
                              chosenRestaurant.key
                            ) {
                              filteredRestaurants.splice(i, 1);
                              break;
                            }
                          }
                          // Update state.
                          this.setState({
                            selectedVisible: false,
                            vetoVisible: false,
                            vetoText: buttonLabel,
                            vetoDisabled: !vetoStillAvailable,
                            participantsListRefresh:
                              !this.state.participantsListRefresh,
                          });
                          // If there's only one restaurant left then
                          // that's the choice.
                          if (filteredRestaurants.length === 1) {
                            this.props.navigation.navigate("PostChoiceScreen");
                          }
                        }}
                      >
                        <Text style={styles.vetoParticipantName}>
                          {inValue.firstName + " " + inValue.lastName}
                        </Text>
                      </TouchableOpacity>
                    );
                  }
                })}
              </ScrollView>
              <View style={styles.vetoButtonContainer}>
                <CustomButton
                  text="Never Mind"
                  width="94%"
                  onPress={() => {
                    this.setState({
                      selectedVisible: true,
                      vetoVisible: false,
                    });
                  }}
                />
              </View>
            </View>
          </View>
        </Modal>
        {/* ########## Main choice screen. ########## */}
        <Text style={styles.choiceScreenHeadline}>Choice Screen</Text>
        <FlatList
          style={styles.choiceScreenListContainer}
          data={this.state.participantsList}
          extraData={this.state.participantsListRefresh}
          renderItem={({ item }) => (
            <View style={styles.choiceScreenListItem}>
              <Text style={styles.choiceScreenListItemName}>
                {item.firstName} {item.lastName} ({item.relationship})
              </Text>
              <Text>Vetoed: {item.vetoed}</Text>
            </View>
          )}
        />
        <CustomButton
          text="Randomly Choose"
          width="94%"
          onPress={() => {
            // Randomly pick one.
            const selectedNumber = getRandom(0, filteredRestaurants.length - 1);
            // Get the restaurant descriptor.
            chosenRestaurant = filteredRestaurants[selectedNumber];
            // Show the selected modal
            this.setState({ selectedVisible: true });
          }}
        />
      </View>
    );
  } /* End render(). */
} /* End ChoiceScreen. */
