import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, View, TextInput, Pressable,
} from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState('');
  const [operation, setOperation] = useState('');

  useEffect(() => {
    if (operation === '+') setResult(+firstNumber + +secondNumber);
    if (operation === '-') setResult(+firstNumber - +secondNumber);
    if (operation === '*') setResult(+firstNumber * +secondNumber);
    if (operation === '/') setResult(+firstNumber / +secondNumber);
    setFirstNumber('');
    setSecondNumber('');
  }, [operation]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="The first number"
        style={styles.textInput}
        keyboardType="numeric"
        onChangeText={text => setFirstNumber(text)}
        value={firstNumber}
        maxLength={10} />

      <Text>{operation}</Text>

      <TextInput
        placeholder="The second number"
        style={styles.textInput}
        keyboardType="numeric"
        onChangeText={text => setSecondNumber(text)}
        value={secondNumber}
        maxLength={10} />
      <View style={styles.buttons}>
        <Pressable style={styles.button} onPress={() => setOperation('+')}>
          <Text style={styles.text}>+</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => setOperation('-')}
          title="-">
          <Text style={styles.text}>-</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => setOperation('*')}
          title="*">
          <Text style={styles.text}>*</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => setOperation('/')}
          title="/">
          <Text style={styles.text}>/</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
      <Text>
        {result && 'Your result is: '}
        {result}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    gap: '2em',
    marginTop: '1rem',
  },
  button: {
    padding: '2em',
    height: 40,
    color: 'red',
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
