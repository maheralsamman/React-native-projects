import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";

const Details = ({ route }) => {
  let { customer } = route.params;
  const commentHandler = route.params.commentHandler;

  const [userComment, setUserComment] = useState("");
  const [comment, setComment] = useState("");
  const userEmail = customer.email;
  const changeHandler = () => {
    commentHandler(userComment, userEmail);
    setComment(userComment);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Name:{" "}
        <b>
          {customer.name.title} {customer.name.first} {customer.name.last}
        </b>
      </Text>
      <Text style={styles.text}>Email: {customer.email}</Text>
      <Text style={styles.text}>Gender: {customer.gender}</Text>
      <Text style={styles.text}>Phone number: {customer.phone}</Text>
      <Text style={styles.lastText}>
        Comment: {customer.comment ? customer.comment : comment || ""}
      </Text>
      <TextInput
        testID='inputComment'
        style={styles.textInput}
        placeholder="Details here..."
        value={userComment}
        onChangeText={(t) => setUserComment(t)}
      />
      <Pressable style={styles.button} onPress={changeHandler} testID='pressButton'>
        <Text style={styles.buttonText}>Add comment</Text>
      </Pressable>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    padding: "2em",
  },
  text: {
    textAlign: "left",
    fontSize: "20px",
  },
  lastText: {
    textAlign: "left",
    fontSize: "20px",
    marginBottom: 20,
  },
  textInput: {
    border: "solid 2px black",
    borderRadius: 5,
    marginBottom: 25,
    fontSize: 20,
    padding: 10,
    color: "green",
  },
  button: {
    backgroundColor: "darkgreen",
    padding: 20,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
});
