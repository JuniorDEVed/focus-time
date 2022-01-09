import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const RoundedButton = ({ size = 25, style = {}, textStyle = {}, ...props }) => {
  console.log("loaded");
  return (
    <TouchableOpacity
      onPress={() => console.log("pressed")}
      style={[styles(size).radius, style]}
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
