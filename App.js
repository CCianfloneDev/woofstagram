import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView} from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [breed, setBreed] = useState('');
  const [favoriteToy, setFavoriteToy] = useState('');
  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#ecf0f1' }}>
      <ScrollView style={{paddingTop:75}}> 
        <Text style={{padding:8, fontSize:20}}>Account Info</Text>
        <InputField
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="Your email..."    
        />
        <InputField
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="A secure password..."   
          secureTextEntry={true}
        />
        <Text style={{paddingTop:20, padding:8, fontSize:20}}>Dog Info</Text>
        <InputField
          label="Name"
          value={name}
          onChangeText={setName}
          placeholder="Your dogs name..."    
        />
        <InputField
          label="Date of birth"
          value={dateOfBirth}
          onChangeText={setDateOfBirth}
          placeholder="Your dogs date of birth..."    
        />
        <InputField
          label="Breed"
          value={breed}
          onChangeText={setBreed}
          placeholder="Your dogs breed..."    
        />
        <InputField
          label="Favorite Toy"
          value={favoriteToy}
          onChangeText={setFavoriteToy}
          placeholder="Your dogs favorite toy..."    
        />
      </ScrollView>  
    </View>
  ); 
};

export default App;

export const InputField = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
}) => (
    <View style={{
      alignContent: 'center',
      justifyContent: 'center',
      padding: 15
    }}>
      <Text style ={{marginVertical: 10}}>{label}</Text>
      <TextInput
        style={{padding:8, backgroundColor: '#f5f5f5'}} 
        value={value}
        onChangeText={text => onChangeText(text)}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
);