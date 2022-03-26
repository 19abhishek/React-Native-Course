import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export default function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState(["Hi", "Hello"]);

  const inputHandler = (e) => {
    setInput(e);
  };

  const addHandler = () => {
    setList((l) => [...l, input]);
    setInput("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput
          placeholder="Add Todo"
          onChangeText={inputHandler}
          style={styles.textInput}
        />
        <Button title="Add" onPress={addHandler} />
      </View>
      <View style={styles.items}>
        {list.map((cItem) => (
          <Text key={Math.random()}>{Object.values(cItem.toString())}</Text>
        ))}
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
