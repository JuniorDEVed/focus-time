import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { fontSizes, spacing } from "../utils/sizes";
import { colors } from "../utils/colors";

interface ICountdownProps {
  isPaused: boolean;
  minutes: number;
}

const minutesToMilliseconds = (minutes: number) => minutes * 1000 * 60;
const formatTime = (t: number) => (t < 10 ? `0${t}` : t);

export const Countdown = ({ minutes = 20, isPaused }: ICountdownProps) => {
  const [millis, setMillis] = useState(minutesToMilliseconds(minutes));

  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;

  return (
    <View>
      <Text style={styles.text}>
        {formatTime(minute)}:{formatTime(seconds)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.lg,
    fontWeight: "bold",
    color: colors.white,
    padding: spacing.lg,
    backgroundColor: "rgba(94, 132, 226, 0.3)",
  },
});
