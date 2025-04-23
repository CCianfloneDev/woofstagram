import React from 'react';
import {
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  View,
  Text,
  Button,
  Alert
} from 'react-native';
import { Formik } from 'formik';
import InputWithLabel from './components/InputWithLabel';

export default function App() {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        dateOfBirth: '',
        breed: '',
        favoriteToy: '',
      }}
      onSubmit={values => {
        console.log('Submitted values:', values);
        Alert.alert('Form submitted!', JSON.stringify(values, null, 2));
      }}
    >
      {({ handleChange, handleSubmit, values }) => (
        <KeyboardAvoidingView
          style={{ flex: 1, backgroundColor: '#ecf0f1' }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
        >
          <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ padding: 15, paddingTop: 30 }}
          >
            <Text style={{ padding: 8, fontSize: 20 }}>Account Info</Text>

            <InputWithLabel
              label="Email"
              value={values.email}
              placeholder="Your email…"
              onChangeText={handleChange('email')}
            />

            <InputWithLabel
              label="Password"
              value={values.password}
              placeholder="A secure password…"
              secureTextEntry
              onChangeText={handleChange('password')}
            />

            <InputWithLabel
              label="Confirm Password"
              value={values.confirmPassword}
              placeholder="Confirm your password…"
              secureTextEntry
              onChangeText={handleChange('confirmPassword')}
            />

            <Text style={{ paddingTop: 20, padding: 8, fontSize: 20 }}>Dog Info</Text>

            <InputWithLabel
              label="Name"
              value={values.name}
              placeholder="Your dog’s name…"
              onChangeText={handleChange('name')}
            />

            <InputWithLabel
              label="Date of birth"
              value={values.dateOfBirth}
              placeholder="YYYY-MM-DD"
              onChangeText={handleChange('dateOfBirth')}
            />

            <InputWithLabel
              label="Breed"
              value={values.breed}
              placeholder="Your dog’s breed…"
              onChangeText={handleChange('breed')}
            />

            <InputWithLabel
              label="Favorite Toy"
              value={values.favoriteToy}
              placeholder="Your dog’s favorite toy…"
              onChangeText={handleChange('favoriteToy')}
            />

            <View style={{ marginTop: 30, marginHorizontal: 15 }}>
              <Button title="Submit" onPress={handleSubmit} />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
}
