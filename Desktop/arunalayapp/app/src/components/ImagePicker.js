import React, { useState } from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import colors from '../utils/colors';

const ImagePickerComponent = ({ image, onImageChange, placeholder, style }) => {
  const [loading, setLoading] = useState(false);

//   const pickImage = async () => {
//     setLoading(true);
//     try {
//       // Request permission
//       const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      
//       if (permissionResult.granted === false) {
//         Alert.alert(
//           'Permission Required',
//           'You need to grant permission to access your photo library',
//           [{ text: 'OK' }]
//         );
//         return;
//       }

//       // Launch image picker
//       // const result = await ImagePicker.launchImageLibraryAsync({
//       //   mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       //   allowsEditing: true,
//       //   aspect: [4, 3],
//       //   quality: 0.8,
//       // });

//       // if (!result.cancelled) {
//       //   onImageChange(result.uri);
//       // }
//       const result = await ImagePicker.launchImageLibraryAsync({
//   mediaTypes: ImagePicker.MediaType.Image,
//   allowsEditing: true,
//   aspect: [4, 3],
//   quality: 0.8,
// });

// if (!result.canceled) {
//   onImageChange(result.assets[0].uri);
// }

//     } catch (error) {
//       Alert.alert('Error', 'Failed to pick image');
//     } finally {
//       setLoading(false);
//     }
//   };
const pickImage = async () => {
  setLoading(true);
  try {
    // Ask permission
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      Alert.alert("Permission Required", "Please allow access to gallery");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      // mediaTypes: ImagePicker.MediaType.Image,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      // allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });

    console.log("RESULT → ", result); // DEBUGGING line

    // If user cancels → do nothing
    if (result.canceled) return;

    // Expo SDK 51+ always returns result.assets
    if (result.assets && result.assets.length > 0) {
      const uri = result.assets[0].uri;
      onImageChange(uri);
    } else {
      Alert.alert("Error", "No image selected");
    }

  } catch (error) {
    console.log("Image Picker Error →", error);
    Alert.alert("Error", "Failed to pick image");
  } finally {
    setLoading(false);
  }
};

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={pickImage}
      disabled={loading}
    >
      {image ? (
        <Image source={{ uri: image }} style={styles.image} />
      ) : (
        <View style={styles.placeholder}>
          <Ionicons name="camera" size={40} color={colors.gray} />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  placeholder: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

export default ImagePickerComponent;