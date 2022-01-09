import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import RoundedButton from "../../components/RoundedButton";

const Focus = (props) => {
  const [tmpItem, setTmpItem] = useState(null);

  const handleAddSubject = () => {
    props.addSubject(tmpItem);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          What would you like to focus on is it me?
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            onSubmitEditing={({ nativeEvent: { text } }) => setTmpItem(text)}
            style={styles.textInput}
          />
          <RoundedButton title="+" size={50} onPress={handleAddSubject} />
        </View>
      </View>
    </View>
  );
};

export default Focus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    padding: 16,
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    marginRight: 20,
  },
});
