import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 135,
  tempItem,
  addSubject,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles(size).radius, style]}
      onPress={() => addSubject(tempItem)}
    >
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default RoundedButton;

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: "center",
      justifyContent: "center",
      borderColor: "white",
      borderWidth: 2,
    },
    text: {
      color: "white",
      fontSize: size / 3,
    },
  });
