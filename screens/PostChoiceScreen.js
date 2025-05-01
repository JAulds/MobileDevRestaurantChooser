class PostChoiceScreen extends React.Component {
  /**
   * Constructor.
   */
  constructor(inProps) {
    super(inProps);
  } /* End constructor. */
  /**
   * Render this component.
   */
  render() {
    return (
      <View style={styles.postChoiceScreenContainer}>
        <View>
          <Text style={styles.postChoiceHeadline}>Enjoy your meal!</Text>
        </View>
        <View style={styles.postChoiceDetailsContainer}>
          <View style={styles.postChoiceDetailsRowContainer}>
            <Text style={styles.postChoiceDetailsLabel}>Name:</Text>
            <Text style={styles.postChoiceDetailsValue}>
              {chosenRestaurant.name}
            </Text>
          </View>
          <View style={styles.postChoiceDetailsRowContainer}>
            <Text style={styles.postChoiceDetailsLabel}>Cuisine:</Text>
            <Text style={styles.postChoiceDetailsValue}>
              {chosenRestaurant.cuisine}
            </Text>
          </View>
          <View style={styles.postChoiceDetailsRowContainer}>
            <Text style={styles.postChoiceDetailsLabel}>Price:</Text>
            <Text style={styles.postChoiceDetailsValue}>
              {"$".repeat(chosenRestaurant.price)}
            </Text>
          </View>
          <View style={styles.postChoiceDetailsRowContainer}>
            <Text style={styles.postChoiceDetailsLabel}>Rating:</Text>
            <Text style={styles.postChoiceDetailsValue}>
              {"\u2605".repeat(chosenRestaurant.rating)}
            </Text>
          </View>
          <View style={styles.postChoiceDetailsRowContainer}>
            <Text style={styles.postChoiceDetailsLabel}>Phone:</Text>
            <Text style={styles.postChoiceDetailsValue}>
              {chosenRestaurant.phone}
            </Text>
          </View>
          <View style={styles.postChoiceDetailsRowContainer}>
            <Text style={styles.postChoiceDetailsLabel}>Address:</Text>
            <Text style={styles.postChoiceDetailsValue}>
              {chosenRestaurant.address}
            </Text>
          </View>
          <View style={styles.postChoiceDetailsRowContainer}>
            <Text style={styles.postChoiceDetailsLabel}>Web Site:</Text>
            <Text style={styles.postChoiceDetailsValue}>
              {chosenRestaurant.webSite}
            </Text>
          </View>
          <View style={styles.postChoiceDetailsRowContainer}>
            <Text style={styles.postChoiceDetailsLabel}>Delivery:</Text>
            <Text style={styles.postChoiceDetailsValue}>
              {chosenRestaurant.delivery}
            </Text>
          </View>
        </View>
        <View style={{ paddingTop: 80 }}>
          <Button
            title="All Done"
            onPress={() => this.props.navigation.navigate("DecisionTimeScreen")}
          />
        </View>
      </View>
    );
  } /* End render(). */
} /* End PostChoiceScreen. */
