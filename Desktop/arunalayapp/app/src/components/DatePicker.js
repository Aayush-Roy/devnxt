import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import colors from '../utils/colors';

const DatePicker = ({ label, value, onChange, mode = 'date' }) => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());

  const onChangeDate = (event, selectedDate) => {
    setShow(false);
    if (selectedDate) {
      setDate(selectedDate);
      onChange(selectedDate);
    }
  };

  const showPicker = () => {
    setShow(true);
  };

  const formatDate = (date) => {
    if (mode === 'date') {
      return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    } else {
      return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity style={styles.datePicker} onPress={showPicker}>
        <Text style={styles.dateText}>
          {value ? formatDate(value) : `Select ${mode}`}
        </Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          value={date}
          mode={mode}
          display="default"
          onChange={onChangeDate}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    color: colors.text,
    fontSize: 16,
    marginBottom: 5,
  },
  datePicker: {
    backgroundColor: colors.card,
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  dateText: {
    color: colors.text,
    fontSize: 16,
  },
});

export default DatePicker;