import React, { Component } from "react";
import PropTypes from "prop-types";
import { TextInput, View, Text, StyleSheet } from "react-native";

class CustomTextInput extends Component {
  constructor(props) {
    super(props);
    // Bind the onChangeText method to the component instance
    //this.onChangeText = this.onChangeText.bind(this);
  }

  render() {
    const {
      label,
      value,
      onChangeText,
      placeholder,
      secureTextEntry,
      keyboardType,
      stateFieldName,
    } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
        />
      </View>
    );
  }
}

CustomTextInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  keyboardType: PropTypes.string,
  stateFieldName: PropTypes.string.isRequired,
};

CustomTextInput.defaultProps = {
  placeholder: "",
  secureTextEntry: false,
  keyboardType: "default",
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 4,
    backgroundColor: "#fff",
  },
});

export default CustomTextInput;
