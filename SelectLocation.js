import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function LocationScreen() {
  const [zone, setZone] = useState('Banasree');
  const [area, setArea] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.backArrow}>{'\u2190'}</Text>
      <Image
        source={require('./assets/map.png')}
        style={styles.image}
      />

      {/* Title */}
      <Text style={styles.title}>Select Your Location</Text>
      <Text style={styles.subtitle}>
        Switch on your location to stay in tune with what's happening in your area
      </Text>

      {/* Zone Dropdown */}
      <Text style={styles.label}>Your Zone</Text>
      <RNPickerSelect
        onValueChange={(value) => setZone(value)}
        value={zone}
        placeholder={{ label: 'Select your zone', value: null }}
        items={[
          { label: 'Banasree', value: 'Banasree' },
          { label: 'Uttara', value: 'Uttara' },
          { label: 'Dhanmondi', value: 'Dhanmondi' },
        ]}
        style={pickerSelectStyles}
      />

      {/* Area Dropdown */}
      <Text style={styles.label}>Your Area</Text>
      <RNPickerSelect
        onValueChange={(value) => setArea(value)}
        value={area}
        placeholder={{ label: 'Types of your area', value: null }}
        items={[
          { label: 'Block A', value: 'Block A' },
          { label: 'Block B', value: 'Block B' },
          { label: 'Sector 1', value: 'Sector 1' },
        ]}
        style={pickerSelectStyles}
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

// Style cho toàn bộ component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  backArrow: {
    fontSize: 24,
    marginBottom: 16,
  },
  image: {
    width: 310,
    height: 200,
    alignSelf: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 16,
  },
  button: {
    backgroundColor: '#30C36E',
    padding: 14,
    borderRadius: 12,
    marginTop: 32,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});

// Style riêng cho RNPickerSelect
const pickerSelectStyles = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },
};
