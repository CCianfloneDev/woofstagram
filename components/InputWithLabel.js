import React from 'react';
import { View, Text, TextInput } from 'react-native';

const InputWithLabel = ({
  label,
  value,
  placeholder,
  secureTextEntry = false,
  onChangeText,
  onSubmitEditing
}) => (
  <View style={{
    alignContent: 'center',
    justifyContent: 'center',
    padding: 15
  }}>
    <Text style={{ fontSize: 15, marginVertical: 10 }}>{label}</Text>
    <TextInput
      style={{ fontSize: 15, padding: 8, backgroundColor: '#f5f5f5' }}
      value={value}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
    />
  </View>
);

export default InputWithLabel;
