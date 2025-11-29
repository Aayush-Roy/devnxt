import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, ScrollView } from 'react-native';
import colors from '../utils/colors';

const TimePicker = ({ label, value, onChange }) => {
  const [show, setShow] = useState(false);
  
  const times = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const time = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
      times.push(time);
    }
  }

  const selectTime = (time) => {
    onChange(time);
    setShow(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity style={styles.timePicker} onPress={() => setShow(true)}>
        <Text style={styles.timeText}>
          {value || 'Select time'}
        </Text>
      </TouchableOpacity>
      
      <Modal
        transparent={true}
        animationType="slide"
        visible={show}
        onRequestClose={() => setShow(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Time</Text>
            <ScrollView style={styles.timeList}>
              {times.map((time, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.timeOption}
                  onPress={() => selectTime(time)}
                >
                  <Text style={styles.timeOptionText}>{time}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setShow(false)}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  timePicker: {
    backgroundColor: colors.card,
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  timeText: {
    color: colors.text,
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: colors.card,
    width: '80%',
    maxHeight: '70%',
    borderRadius: 12,
    padding: 20,
  },
  modalTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  timeList: {
    maxHeight: 300,
  },
  timeOption: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  timeOptionText: {
    color: colors.text,
    fontSize: 16,
    textAlign: 'center',
  },
  cancelButton: {
    marginTop: 15,
    paddingVertical: 10,
  },
  cancelButtonText: {
    color: colors.primary,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default TimePicker;