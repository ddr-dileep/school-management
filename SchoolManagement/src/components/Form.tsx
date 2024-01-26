import {StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {AppInput} from './Input';

export const AppForm = ({formFields, handleChange}: any) => {
  const renderItem = ({item}: any) => (
    <AppInput
      key={item.id}
      label={item.label}
      name={item.name}
      onChangeText={handleChange}
      keyboardType={item.keyboardType}
    />
  );

  return (
    <FlatList
      data={formFields}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
});
