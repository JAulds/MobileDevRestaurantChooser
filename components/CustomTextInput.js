import React, { Component } from "react";
import PropTypes from "prop-types";
import { TextInput, View, Text, StyleSheet } from "react-native";

class CustomTextInput extends Component {
  render() {
    const {
      label,
      labelStyle,
      maxLength,
      textInputStyle,
      stateHolder,
      stateFieldName,
      onChangeText, // New prop for custom change handler
      error, // New prop for error message
      ...props // Capture any other props
    } = this.props;

    return (
      <View style={{ marginBottom: 10 }}>
        <Text style={[styles.fieldLabel, labelStyle]}>{label}</Text>
        <TextInput
          maxLength={maxLength}
          onChangeText={(inText) => {
            // Update state through stateHolder
            stateHolder.setState(() => {
              const obj = {};
              obj[stateFieldName] = inText;
              return obj;
            });
            // Call custom onChangeText if provided
            if (onChangeText) {
              onChangeText(inText);
            }
          }}
          style={[
            styles.textInput,
            textInputStyle,
            error ? { borderColor: 'red', borderWidth: 1 } : {}
          ]}
          {...props} // Spread any additional props
        />
        {error && (
          <Text style={{ color: 'red', marginLeft: 10, fontSize: 12 }}>
            {error}
          </Text>
        )}
      </View>
    );
  }
}

CustomTextInput.propTypes = {
  label: PropTypes.string.isRequired,
  labelStyle: PropTypes.object,
  maxLength: PropTypes.number,
  textInputStyle: PropTypes.object,
  stateHolder: PropTypes.object.isRequired,
  stateFieldName: PropTypes.string.isRequired,
  onChangeText: PropTypes.func, // New prop type
  error: PropTypes.string // New prop type for error message
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
