import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../utils/colors";
import { spacing } from "../../utils/sizes";

import { Countdown } from "../../components/Countdown";

export const Timer = ({ focusSubject }) => {
  return (
    <View style={styles.container}>
      <View>
        <Countdown />
      </View>
      <View style={{ paddingTop: spacing.xxl }}>
        <Text style={styles.title}>Focusing on: </Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <Text>Timer goes here: {focusSubject}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: colors.white,
    textAlign: "center",
  },
  task: {
    color: colors.white,
    textAlign: "center",
    fontWeight: "bold",
  },
});
