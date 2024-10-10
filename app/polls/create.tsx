import { Stack } from "expo-router";
import { View, Text, ScrollView, TextInput, StyleSheet, Button, Alert, Pressable } from "react-native";
import { useState } from "react";

import gs from "../styles/globalStyles";
import { createBorder } from '../styles/borderUtils';

export default function Create() {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['111', '222']);

  const createPoll = () => Alert.alert('Form submitted');

  // (i)
  // - onChangeText handler provides the input value by default
  // - The handleTextChange function is a higher-order function that takes an index and returns a new function that takes the value from onChangeText.
  // This allows the index to be preserved, while the inner function can update the state with the new value.
  // inline version: onChangeText={(value) => handleTextChange(index)(value)}
  // const handleOptionChange = (index: number) => (value: string) => {
  //   const updated = [...options];
  //   updated[index] = value;
  //   setOptions(updated);
  // }

  // probably simpler way
  const handleOptionChange = (index: number, value: string) => {
    const updated = [...options];
    updated[index] = value;
    setOptions(updated);
  };

  const removeOption = (index: number) => {
    const updated = [...options];
    updated.splice(index, 1);
    setOptions(updated);
  };

  return (
    <>
      <Stack.Screen options={{
        title: 'Create poll',
        headerStyle: {
          backgroundColor: 'thistle',
        }
      }} />
      <ScrollView style={{
        backgroundColor: 'thistle',
      }}
        contentContainerStyle={gs.container}
      >
        <View style={{ gap: 10 }}>
          <View>
            <Text style={s.label}>Title</Text>
            <TextInput style={s.input} value={question} onChangeText={setQuestion} placeholder="Type your question here"></TextInput>
          </View>
          <View>
            <Text style={s.label}>Options</Text>
            {options.map((option, index) => (
              <View style={s.optionContainer}>
                <TextInput
                  key={index}
                  value={option}
                  // onChangeText={handleOptionChange(index)}
                  onChangeText={(value) => handleOptionChange(index, value)}
                  style={s.input}
                  placeholder={`Option ${index + 1}`}
                />
                <Pressable style={s.removeBtnBox} onPress={() => removeOption(index)}>
                  <Text style={s.removeBtnTxt}>&ndash;</Text>
                </Pressable>
              </View>
            ))}
          </View>
          <View>
            <Button
              onPress={() => setOptions([...options, ''])}
              title="Add option"
              accessibilityLabel="Add next option"
            />
            <Button
              onPress={createPoll}
              title="Create poll"
              accessibilityLabel="Create new poll"
            />
          </View>
        </View>
      </ScrollView>
    </>
  )
}

const s = StyleSheet.create({
  optionContainer: {
    justifyContent: 'center',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    padding: 10,
    ...createBorder(1, 'mediumpurple'),
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 5,
  },
  removeBtnBox: {
    position: 'absolute',
    right: 10,
    backgroundColor: 'red',
    width: 20,
    height: 20,
    borderRadius: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
    transform: [{ translateY: -1 }],
  },
  removeBtnTxt: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    // backgroundColor: 'lime',
    width: 20,
    height: 20,
    lineHeight: 20,
    textAlign: 'center',
  }
});