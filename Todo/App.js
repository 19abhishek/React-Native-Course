import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput placeholder="Add Todo" style={styles.textInput} />
        <Button title="Add" />
      </View>
      <View style={styles.items}>
        <Text>List Items ...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  input: {
    flexDirection: "row",
    width: "100%",
  },
  textInput: {
    borderBottomColor: "#777",
    borderBottomWidth: 2,
    width: "70%",
    marginRight: 20,
  },
  items: {
    marginTop: 20,
  },
});
