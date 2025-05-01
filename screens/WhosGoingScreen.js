class WhosGoingScreen extends React.Component {
  /**
   * Constructor.
   */
  constructor(inProps) {
    super(inProps);
    this.state = {
      people: [],
      selected: {},
    };
  } /* End constructor. */
  /**
   * Render this component.
   */
  render() {
    return (
      <View style={styles.listScreenContainer}>
        <Text style={styles.whosGoingHeadline}>Who's Going?</Text>
        {/* ########## Who's going list ########## */}
        <FlatList
          style={{ width: "94%" }}
          data={this.state.people}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.whosGoingItemTouchable}
              onPress={function () {
                // Toggle selected on the person and update the list of
                // selected people in state.
                const selected = this.state.selected;
                selected[item.key] = !selected[item.key];
                this.setState({ selected: selected });
              }.bind(this)}
            >
              <CheckBox
                style={styles.whosGoingCheckbox}
                checked={this.state.selected[item.key]}
                onPress={function () {
                  // Toggle selected on the person and update the list of
                  // selected people in state.
                  const selected = this.state.selected;
                  selected[item.key] = !selected[item.key];
                  this.setState({ selected: selected });
                }.bind(this)}
              />
              <Text style={styles.whosGoingName}>
                {item.firstName} {item.lastName} ({item.relationship})
              </Text>
            </TouchableOpacity>
          )}
        />
        {/* ########## Next Step button ########## */}
        <CustomButton
          text="Next"
          width="94%"
          onPress={() => {
            // Construct list of people going for the next screen.
            participants = [];
            for (const person of this.state.people) {
              if (this.state.selected[person.key]) {
                // Copy the person object.
                const participant = Object.assign({}, person);
                participant.vetoed = "no";
                participants.push(participant);
              }
            }
            if (participants.length === 0) {
              Alert.alert(
                "Uhh, you awake?",
                "You didn't select anyone to go. Wanna give it another try?",
                [{ text: "OK" }],
                { cancelable: false }
              );
            } else {
              this.props.navigation.navigate("PreFiltersScreen");
            }
          }}
        />
      </View>
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
    // Get list of people.
    AsyncStorage.getItem(
      "people",
      function (inError, inPeople) {
        if (inPeople === null) {
          inPeople = [];
        } else {
          inPeople = JSON.parse(inPeople);
        }
        // Construct an object keyed by each person's ID that tells us if that
        // person is selected or not.
        const selected = {};
        for (const person of inPeople) {
          selected[person.key] = false;
        }
        this.setState({
          people: inPeople,
          selected: selected,
        });
      }.bind(this)
    );
  } /* End componentDidMount() */
} /* End WhosGoingScreen. */
