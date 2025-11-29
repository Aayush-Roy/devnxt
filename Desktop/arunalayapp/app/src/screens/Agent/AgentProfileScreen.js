// // import React, { useState, useEffect, useContext } from 'react';
// // import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
// // import { AuthContext } from '../../context/AuthContext';
// // import { agentAPI } from '../../api/agent';
// // import Button from '../../components/Button';
// // import Input from '../../components/Input';
// // import Toast from '../../components/Toast';
// // import colors from '../../utils/colors';

// // const AgentProfileScreen = ({ navigation }) => {
// //   const { logout } = useContext(AuthContext);
// //   const [profile, setProfile] = useState(null);
// //   const [name, setName] = useState('');
// //   const [phone, setPhone] = useState('');
// //   const [specialization, setSpecialization] = useState('');
// //   const [experience, setExperience] = useState('');
// //   const [loading, setLoading] = useState(false);
// //   const [fetching, setFetching] = useState(true);
// //   const [toast, setToast] = useState({ message: '', type: '', isVisible: false });
// //   const [isEditing, setIsEditing] = useState(false);

// //   const showToast = (message, type) => {
// //     setToast({ message, type, isVisible: true });
// //   };

// //   const hideToast = () => {
// //     setToast({ message: '', type: '', isVisible: false });
// //   };

// //   const fetchProfile = async () => {
// //     try {
// //       const response = await agentAPI.getAgentProfile();
// //       console.log("ag=>",response)
// //       setProfile(response.data);
// //       setName(response.name);
// //       setPhone(response.phone);
// //       setSpecialization(response.specialization);
// //       setExperience(response.experience && response.experience.toString());
// //     } catch (error) {
// //       showToast(error.message || 'Failed to fetch profile', 'error');
// //     } finally {
// //       setFetching(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchProfile();
// //   }, []);

// //   const handleUpdateProfile = async () => {
// //     if (!name || !phone || !specialization || !experience) {
// //       showToast('Please fill in all fields', 'error');
// //       return;
// //     }

// //     setLoading(true);
// //     try {
// //       const profileData = {
// //         name,
// //         phone,
// //         specialization,
// //         experience: parseInt(experience, 10),
// //       };
// //       const response = await agentAPI.updateAgentProfile(profileData);
// //       setProfile(response.agent);
// //       setIsEditing(false);
// //       showToast('Profile updated successfully', 'success');
// //     } catch (error) {
// //       showToast(error.message || 'Failed to update profile', 'error');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleLogout = () => {
// //     Alert.alert(
// //       'Logout',
// //       'Are you sure you want to logout?',
// //       [
// //         {
// //           text: 'Cancel',
// //           style: 'cancel',
// //         },
// //         {
// //           text: 'Logout',
// //           onPress: logout,
// //         },
// //       ],
// //       { cancelable: false }
// //     );
// //   };

// //   if (fetching) {
// //     return <View style={styles.container}><Text style={styles.loadingText}>Loading...</Text></View>;
// //   }

// //   return (
// //     <ScrollView style={styles.container}>
// //       <View style={styles.header}>
// //         <Text style={styles.title}>My Profile</Text>
// //         <TouchableOpacity
// //           style={styles.editButton}
// //           onPress={() => setIsEditing(!isEditing)}
// //         >
// //           <Text style={styles.editButtonText}>{isEditing ? 'Cancel' : 'Edit'}</Text>
// //         </TouchableOpacity>
// //       </View>
      
// //       <View style={styles.profileContainer}>
// //         <View style={styles.avatar}>
// //           <Text style={styles.avatarText}>
// //             {profile?.name?.charAt(0).toUpperCase()}
// //           </Text>
// //         </View>
        
// //         <View style={styles.profileInfo}>
// //           <Text style={styles.name}>{profile?.name}</Text>
// //           <Text style={styles.email}>{profile?.email}</Text>
// //           <Text style={styles.rating}>Rating: {profile?.rating || 'N/A'} ⭐</Text>
// //         </View>
// //       </View>
      
// //       <View style={styles.formContainer}>
// //         <Input
// //           label="Full Name"
// //           value={profile.name}
// //           onChangeText={setName}
// //           placeholder="Enter your full name"
// //           editable={isEditing}
// //         />
        
// //         <Input
// //           label="Email"
// //           value={profile?.email}
// //           placeholder="Email"
// //           editable={false}
// //         />
        
// //         <Input
// //           label="Phone Number"
// //           value={profile.phone}
// //           onChangeText={setPhone}
// //           placeholder="Enter your phone number"
// //           keyboardType="phone-pad"
// //           editable={isEditing}
// //         />

// //         <Input
// //           label="Specialization"
// //           value={profile.specialization}
// //           onChangeText={setSpecialization}
// //           placeholder="e.g., Sports Physiotherapy"
// //           editable={isEditing}
// //         />
        
// //         <Input
// //           label="Years of Experience"
// //           value={profile.experience || "1"}
// //           onChangeText={setExperience}
// //           placeholder="Enter years of experience"
// //           keyboardType="numeric"
// //           editable={isEditing}
// //         />
        
// //         {isEditing && (
// //           <Button
// //             title="Update Profile"
// //             onPress={handleUpdateProfile}
// //             loading={loading}
// //           />
// //         )}
// //       </View>
      
// //       <View style={styles.logoutContainer}>
// //         <Button
// //           title="Logout"
// //           onPress={handleLogout}
// //           style={styles.logoutButton}
// //         />
// //       </View>
      
// //       <Toast
// //         message={toast.message}
// //         type={toast.type}
// //         isVisible={toast.isVisible}
// //         onHide={hideToast}
// //       />
// //     </ScrollView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: colors.background,
// //   },
// //   header: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     padding: 20,
// //   },
// //   title: {
// //     color: colors.text,
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //   },
// //   editButton: {
// //     paddingHorizontal: 15,
// //     paddingVertical: 8,
// //     backgroundColor: colors.card,
// //     borderRadius: 8,
// //   },
// //   editButtonText: {
// //     color: colors.primary,
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //   },
// //   profileContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     padding: 20,
// //     backgroundColor: colors.card,
// //     marginHorizontal: 20,
// //     borderRadius: 12,
// //     marginBottom: 20,
// //   },
// //   avatar: {
// //     width: 80,
// //     height: 80,
// //     borderRadius: 40,
// //     backgroundColor: colors.primary,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginRight: 20,
// //   },
// //   avatarText: {
// //     color: colors.text,
// //     fontSize: 32,
// //     fontWeight: 'bold',
// //   },
// //   profileInfo: {
// //     flex: 1,
// //   },
// //   name: {
// //     color: colors.text,
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     marginBottom: 5,
// //   },
// //   email: {
// //     color: colors.gray,
// //     fontSize: 16,
// //     marginBottom: 5,
// //   },
// //   rating: {
// //     color: colors.primary,
// //     fontSize: 16,
// //   },
// //   formContainer: {
// //     padding: 20,
// //   },
// //   logoutContainer: {
// //     padding: 20,
// //     marginTop: 20,
// //   },
// //   logoutButton: {
// //     backgroundColor: colors.error,
// //   },
// //   loadingText: {
// //     color: colors.text,
// //     fontSize: 18,
// //     textAlign: 'center',
// //     marginTop: 50,
// //   },
// // });

// // export default AgentProfileScreen;
// import React, { useState, useEffect, useContext } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Alert,
// } from "react-native";
// import { AuthContext } from "../../context/AuthContext";
// import { agentAPI } from "../../api/agent";
// import Button from "../../components/Button";
// import Input from "../../components/Input";
// import Toast from "../../components/Toast";
// import colors from "../../utils/colors";

// const AgentProfileScreen = ({ navigation }) => {
//   const { logout } = useContext(AuthContext);

//   const [profile, setProfile] = useState(null);
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [specialization, setSpecialization] = useState("");
//   const [experience, setExperience] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [fetching, setFetching] = useState(true);
//   const [toast, setToast] = useState({ message: "", type: "", isVisible: false });
//   const [isEditing, setIsEditing] = useState(false);

//   const showToast = (message, type) => {
//     setToast({ message, type, isVisible: true });
//   };

//   const hideToast = () => {
//     setToast({ message: "", type: "", isVisible: false });
//   };

//   const fetchProfile = async () => {
//     try {
//       const response = await agentAPI.getAgentProfile();
//       setProfile(response.data);

//       setName(response.data.name);
//       setPhone(response.data.phone);
//       setSpecialization(response.data.specialization);
//       setExperience(response.data.experience?.toString());
//     } catch (error) {
//       showToast(error.message || "Failed to fetch profile", "error");
//     } finally {
//       setFetching(false);
//     }
//   };

//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   const handleUpdateProfile = async () => {
//     if (!name || !phone || !specialization || !experience) {
//       return showToast("Please fill all fields", "error");
//     }

//     setLoading(true);
//     try {
//       const updated = {
//         name,
//         phone,
//         specialization,
//         experience: parseInt(experience),
//       };

//       const response = await agentAPI.updateAgentProfile(updated);
//       setProfile(response.agent);
//       setIsEditing(false);
//       showToast("Profile updated successfully", "success");
//     } catch (error) {
//       showToast(error.message || "Update failed", "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleLogout = () => {
//     Alert.alert("Logout", "Are you sure you want to logout?", [
//       { text: "Cancel", style: "cancel" },
//       { text: "Logout", onPress: logout },
//     ]);
//   };

//   if (fetching) {
//     return (
//       <View style={styles.center}>
//         <Text style={styles.loadingText}>Loading...</Text>
//       </View>
//     );
//   }

//   return (
//     <ScrollView style={styles.container}>

//       {/* HEADER */}
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>My Profile</Text>
//         <TouchableOpacity
//           style={styles.editButton}
//           onPress={() => setIsEditing(!isEditing)}
//         >
//           <Text style={styles.editButtonText}>
//             {isEditing ? "Cancel" : "Edit"}
//           </Text>
//         </TouchableOpacity>
//       </View>

//       {/* PROFILE CARD */}
//       <View style={styles.profileCard}>
//         <View style={styles.avatar}>
//           <Text style={styles.avatarText}>
//             {profile?.name?.charAt(0)?.toUpperCase()}
//           </Text>
//         </View>

//         <View style={styles.profileInfo}>
//           <Text style={styles.name}>{profile?.name}</Text>
//           <Text style={styles.email}>{profile?.email}</Text>

//           <View style={styles.ratingBox}>
//             <Text style={styles.ratingText}>
//               ⭐ {profile?.rating || "N/A"} Rating
//             </Text>
//           </View>
//         </View>
//       </View>

//       {/* FORM */}
//       <View style={styles.formCard}>
//         <Input label="Full Name" value={name} onChangeText={setName} editable={isEditing} />
//         <Input label="Email" value={profile.email} editable={false} />
//         <Input label="Phone Number" value={phone} onChangeText={setPhone} editable={isEditing} />
//         <Input
//           label="Specialization"
//           value={specialization}
//           onChangeText={setSpecialization}
//           editable={isEditing}
//         />
//         <Input
//           label="Years of Experience"
//           value={experience}
//           onChangeText={setExperience}
//           editable={isEditing}
//           keyboardType="numeric"
//         />

//         {isEditing && (
//           <Button title="Update Profile" loading={loading} onPress={handleUpdateProfile} />
//         )}
//       </View>

//       {/* LOGOUT */}
//       <View style={styles.logoutSection}>
//         <Button title="Logout" onPress={handleLogout} style={styles.logoutButton} />
//       </View>

//       <Toast {...toast} onHide={hideToast} />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: colors.background },

//   // --- Header ---
//   header: {
//     padding: 20,
//     paddingTop: 40,
//     backgroundColor: colors.primary,
//     borderBottomLeftRadius: 25,
//     borderBottomRightRadius: 25,
//   },
//   headerTitle: {
//     color: "#fff",
//     fontSize: 26,
//     fontWeight: "bold",
//   },
//   editButton: {
//     position: "absolute",
//     right: 20,
//     top: 40,
//     backgroundColor: "rgba(255,255,255,0.15)",
//     paddingVertical: 6,
//     paddingHorizontal: 14,
//     borderRadius: 20,
//   },
//   editButtonText: {
//     color: "#fff",
//     fontWeight: "bold",
//   },

//   // --- Profile Card ---
//   profileCard: {
//     marginTop: -30,
//     marginHorizontal: 20,
//     backgroundColor: colors.card,
//     padding: 20,
//     borderRadius: 16,
//     flexDirection: "row",
//     alignItems: "center",
//     elevation: 5,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//   },
//   avatar: {
//     width: 80,
//     height: 80,
//     borderRadius: 60,
//     backgroundColor: colors.primary,
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: 20,
//     elevation: 4,
//   },
//   avatarText: { color: "#fff", fontSize: 32, fontWeight: "bold" },
//   profileInfo: { flex: 1 },
//   name: { fontSize: 22, fontWeight: "bold", color: colors.text },
//   email: { color: colors.gray, marginVertical: 4 },
//   ratingBox: {
//     backgroundColor: colors.primary,
//     alignSelf: "flex-start",
//     paddingHorizontal: 10,
//     paddingVertical: 4,
//     borderRadius: 8,
//     marginTop: 6,
//   },
//   ratingText: { color: "#fff", fontWeight: "bold" },

//   // --- Form Card ---
//   formCard: {
//     marginHorizontal: 20,
//     backgroundColor: colors.card,
//     padding: 20,
//     borderRadius: 16,
//     marginTop: 20,
//     elevation: 3,
//   },

//   // Logout
//   logoutSection: { padding: 20 },
//   logoutButton: { backgroundColor: colors.error },

//   loadingText: {
//     color: colors.text,
//     fontSize: 18,
//     marginTop: 50,
//   },
//   center: { flex: 1, justifyContent: "center", alignItems: "center" },
// });

// export default AgentProfileScreen;
import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from "../../context/AuthContext";
import { agentAPI } from "../../api/agent";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Toast from "../../components/Toast";
import colors from "../../utils/colors";

const AgentProfileScreen = ({ navigation }) => {
  const { logout } = useContext(AuthContext);

  const [profile, setProfile] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [experience, setExperience] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [toast, setToast] = useState({ message: "", type: "", isVisible: false });
  const [isEditing, setIsEditing] = useState(false);

  const showToast = (message, type) => {
    setToast({ message, type, isVisible: true });
  };

  const hideToast = () => {
    setToast({ message: "", type: "", isVisible: false });
  };

  const fetchProfile = async () => {
    try {
      const response = await agentAPI.getAgentProfile();
      setProfile(response.data);

      setName(response.data.name);
      setPhone(response.data.phone);
      setSpecialization(response.data.specialization);
      setExperience(response.data.experience?.toString());
    } catch (error) {
      showToast(error.message || "Failed to fetch profile", "error");
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleUpdateProfile = async () => {
    if (!name || !phone || !specialization || !experience) {
      return showToast("Please fill all fields", "error");
    }

    setLoading(true);
    try {
      const updated = {
        name,
        phone,
        specialization,
        experience: parseInt(experience),
      };

      const response = await agentAPI.updateAgentProfile(updated);
      setProfile(response.agent);
      setIsEditing(false);
      showToast("Profile updated successfully", "success");
    } catch (error) {
      showToast(error.message || "Update failed", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      { text: "Logout", onPress: logout },
    ]);
  };

  if (fetching) {
    return (
      <View style={styles.center}>
        <Ionicons name="person-outline" size={64} color={colors.gray} />
        <Text style={styles.loadingText}>Loading profile...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* CLEAN HEADER */}
        {/* <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>My Profile</Text>
          <View style={styles.headerSpacer} />
        </View> */}

        {/* PROFILE HEADER CARD */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {profile?.name?.charAt(0)?.toUpperCase() || 'A'}
              </Text>
            </View>
            <TouchableOpacity style={styles.editAvatarBtn}>
              <Ionicons name="camera-outline" size={20} color={colors.primary} />
            </TouchableOpacity>
          </View>

          <View style={styles.profileDetails}>
            <Text style={styles.profileName}>{profile?.name || name}</Text>
            <Text style={styles.profileSpecialization}>{specialization}</Text>
            
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={16} color="#FFD700" />
              <Text style={styles.ratingText}>
                {profile?.rating?.toFixed(1) || 4.5} ({profile?.totalReviews || 23} reviews)
              </Text>
            </View>
          </View>
        </View>

        {/* FORM SECTION */}
        <View style={styles.formSection}>
          <Text style={styles.sectionTitle}>Profile Details</Text>
          
          <View style={styles.inputCard}>
            <Input 
              label="Full Name" 
              value={name} 
              onChangeText={setName} 
              editable={isEditing}
              icon="person-outline"
            />
            <Input 
              label="Phone Number" 
              value={phone} 
              onChangeText={setPhone} 
              editable={isEditing}
              icon="call-outline"
              keyboardType="phone-pad"
            />
            <Input 
              label="Specialization" 
              value={specialization} 
              onChangeText={setSpecialization} 
              editable={isEditing}
              icon="hammer-outline"
            />
            <Input 
              label="Years of Experience" 
              value={experience} 
              onChangeText={setExperience} 
              editable={isEditing}
              icon="briefcase-outline"
              keyboardType="numeric"
            />
          </View>

          {/* EDIT BUTTONS */}
          {isEditing ? (
            <View style={styles.editButtonsContainer}>
              <Button 
                title="Cancel" 
                onPress={() => setIsEditing(false)}
                style={styles.cancelButton}
              />
              <Button 
                title="Save Changes" 
                loading={loading}
                onPress={handleUpdateProfile}
                style={styles.saveButton}
              />
            </View>
          ) : (
            <TouchableOpacity 
              style={styles.editProfileBtn}
              onPress={() => setIsEditing(true)}
            >
              <Ionicons name="create-outline" size={20} color="#fff" />
              <Text style={styles.editProfileText}>Edit Profile</Text>
            </TouchableOpacity>
          )}
        </View>

      </ScrollView>

      {/* LOGOUT BUTTON */}
      <View style={styles.logoutContainer}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={20} color="#fff" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <Toast {...toast} onHide={hideToast} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContainer: {
    flex: 1,
  },

  // CLEAN HEADER
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: colors.primary,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    flex: 1,
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
  },
  headerSpacer: {
    width: 40,
    height: 40,
  },

  // PROFILE HEADER
  profileHeader: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#fff',
    fontSize: 40,
    fontWeight: '800',
  },
  editAvatarBtn: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: colors.white,
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  profileDetails: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileName: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  profileSpecialization: {
    fontSize: 16,
    color: colors.gray,
    marginBottom: 12,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    elevation: 2,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginLeft: 4,
  },

  // FORM SECTION
  formSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 16,
  },
  inputCard: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 20,
  },

  // BUTTONS
  editButtonsContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: colors.gray,
  },
  saveButton: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  editProfileBtn: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  editProfileText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },

  // LOGOUT
  logoutContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  logoutButton: {
    flexDirection: 'row',
    backgroundColor: colors.error,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },

  // LOADING
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  loadingText: {
    color: colors.text,
    fontSize: 16,
    marginTop: 16,
  },
});

export default AgentProfileScreen;
