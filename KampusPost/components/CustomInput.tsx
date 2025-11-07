import React from 'react';
import { StyleSheet, TextInput, View, TextInputProps } from 'react-native';

type CustomInputProps = TextInputProps & {
  value: string;
  onChangeText: (text: string) => void;
};

const CustomInput: React.FC<CustomInputProps> = ({ value, onChangeText, style, ...rest }) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        style={[styles.input, style]}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#9CA3AF"
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginBottom: 12,
  },
  input: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#FFFFFF',
    color: '#111827',
    fontSize: 16,
  },
});

export default CustomInput;