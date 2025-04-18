import React, { useState } from 'react';
import { View, Text, TextInput} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#ecf0f1' }}>
    
      <InputField
        label="Name"
        value={name}
        onChangeText={setName}
        placeholder="Your name..."    
      />

    </View>
  ); 
};

export default App;

export const InputField = ({
  label,
  value,
  onChangeText,
  placeholder
}) => (
    <View style={{
      flex: 1,
      alignContent: 'center',
      justifyContent: 'center',
      padding: 16
    }}>
      <Text style ={{marginVertical: 10}}>{label}</Text>
      <TextInput
        style={{padding:8, backgroundColor: '#f5f5f5'}} 
        value={value}
        onChangeText={text => onChangeText(text)}
        placeholder={placeholder}
      />
    </View>
);