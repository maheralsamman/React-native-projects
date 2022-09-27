import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import customers from "../customers";

const List = ({ navigation }) => {
    
  const commentHandler = (userComment, userEmail) => {
        customers.customers.map((customer)=> {
          if(customer.email === userEmail) {
              customer.comment = userComment;
          }
      }) 
  }

  return (
    <View style={styles.container}>
        {customers.customers.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1).map((customer, index) => {
          return (
            <Pressable key={index} onPress={() => navigation.navigate("Details", {customer, commentHandler})}>
              <Text style={index % 2 ? styles.text1 : styles.text2}>{customer.name.first} {customer.name.last}</Text>
            </Pressable>
          );
        })}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
    container: {
        margin: "20px"
    },
    text1: {
        backgroundColor:"pink",
        color: "darkgreen",
        textAlign: "left",
        margin : "6px",
        fontSize: "20px",
        paddingLeft: ".5em",
    },
    text2: {
        paddingLeft: ".5em",
        backgroundColor:"darkred",
        color: "white",
        textAlign: "left",
        margin : "6px",
        fontSize: "20px",
      },
  });