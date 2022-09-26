import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";


const Details = ({ route }) => {
  const { customer } = route.params;
  const [userComment, setUserComment] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Name: {customer.name.title} {customer.name.first} {customer.name.last}
      </Text>
      <Text style={styles.text}>Email: {customer.email}</Text>
      <Text style={styles.text}>Gender: {customer.gender}</Text>
      <Text style={styles.text}>Phone nb: {customer.phone}</Text>
      <Text style={styles.text}>Comment: {userComment ? userComment : ""}</Text>
      <TextInput
        placeholder="Details here..."
        value={userComment}
        onChangeText={(t) => setUserComment(t)}
      />
    
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
});
