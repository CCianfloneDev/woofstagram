import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView} from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [breed, setBreed] = useState('');
  const [favoriteToy, setFavoriteToy] = useState('');
  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#ecf0f1', padding:15, paddingTop:30 }}>
      <ScrollView style={{}}> 
        <Text style={{padding:8, fontSize:20}}>Account Info</Text>
        <InputField
          label="Email"
          value={email}
          placeholder="Your email..."    
          onChangeText={setEmail}
        />
        <InputField
          label="Password"
          value={password}
          placeholder="A secure password..."   
          secureTextEntry={true}
          onChangeText={setPassword}
        />
        <InputField
          label="Confirm Password"
          value={confirmPassword}
          placeholder="Confirm your secure password..."   
          secureTextEntry={true}
          onChangeText={setConfirmPassword}
          onSubmitEditing={(e) => {
            confirmPasswordsMatch(e.nativeEvent.text, password);
          }}
        />
        <Text style={{paddingTop:20, padding:8, fontSize:20}}>Dog Info</Text>
        <InputField
          label="Name"
          value={name}
          placeholder="Your dogs name..."    
          onChangeText={setName}
        />
        <InputField
          label="Date of birth"
          value={dateOfBirth}
          placeholder="Your dogs date of birth..."    
          onChangeText={setDateOfBirth}
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

function confirmPasswordsMatch(confirmationPassword, originalPassword) {
  if (confirmationPassword !== originalPassword) {
    alert('Passwords do not match, please try again.');
  }
}

export default App;

export const InputField = ({
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
      <Text style ={{fontSize: 15, marginVertical: 10}}>{label}</Text>
      <TextInput
        style={{fontSize: 15, padding:8, backgroundColor: '#f5f5f5'}} 
        value={value}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
      />
    </View>
);