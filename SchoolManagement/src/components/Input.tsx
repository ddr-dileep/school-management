import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

export const AppInput = ({
  onChangeText,
  value,
  id,
  name,
  placeholder,
  defaultValue,
  label,
  keyboardType = 'default',
}: any) => {
  const handleChange = (text: any) => {
    const event = {
      target: {
        name: name,
        value: text,
      },
      id,
    };

    // console.log('onChange', event);
    onChangeText(event);
  };

  return (
    <View style={styles.container}>
      <TextInput
        label={label}
        style={styles.textInput}
        value={value}
        placeholder={placeholder}
        id={id}
        onChangeText={handleChange}
        defaultValue={defaultValue}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
});
