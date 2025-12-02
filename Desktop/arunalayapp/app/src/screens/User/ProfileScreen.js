
import React, { useState, useEffect, useContext, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, Image, RefreshControl } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons
import { AuthContext } from '../../context/AuthContext';
import { userAPI } from '../../api/user';
import Button from '../../components/Button';
import Input from '../../components/Input';
import ImagePicker from '../../components/ImagePicker';
import Toast from '../../components/Toast';
import colors from '../../utils/colors';

const ProfileScreen = ({ navigation }) => {
  const { user, logout } = useContext(AuthContext);

  const [profile, setProfile] = useState(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [totalBookings, setTotalBookings] = useState(0); 
  const [completedBookings, setCompletedBookings] = useState(0); 
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [toast, setToast] = useState({ message: '', type: '', isVisible: false });
  const [isEditing, setIsEditing] = useState(false);

  const showToast = (message, type) => {
    setToast({ message, type, isVisible: true });
  };

  const hideToast = () => {
    setToast({ message: '', type: '', isVisible: false });
  };

  // const fetchProfile = async () => {
  //   try {
  //     const response = await userAPI.getUserProfile();
  //     console.log("Profile API Response →", response.data);

  //     const userData = response?.data?.user;
  //     const bookings = response?.data?.bookings || [];
  //     console.log("bookings", bookings);

  //     if (!userData) {
  //       showToast("User data missing from API response", "error");
  //       return;
  //     }

  //     // --- Calculate Bookings ---
  //     const total =bookings && bookings.length;
  //     const completed =bookings && bookings.filter(booking => booking.bookingStatus === 'completed').length; 
      
  //     setTotalBookings(total);
  //     setCompletedBookings(completed);
  //     // --------------------------

  //     setProfile(userData);
  //     setName(userData.name || '');
  //     setPhone(userData.phone || '');
  //     setAddress(userData.address || '');
  //     setProfileImage(userData.profileImage || null);
  //   } catch (error) {
  //     console.log("Fetch Profile Error: ", error.message);
  //     showToast(error.message || "Failed to fetch profile", "error");
  //     console.log("userdata", profile);
  //   } finally {
  //     setFetching(false);
  //   }
  // };
//   const fetchProfile = async () => {
//     // Log 1: Request shuru hone se pehle
//     console.log("➡️ Starting fetchProfile API call...");
//     
//     try {
//       const response = await userAPI.getUserProfile();
//       
//       // Log 2: Successful response ka status aur data
//       console.log("✅ Profile API Success Status:", response.status); // Axios status
//       console.log("✅ Profile API Response Data:", JSON.stringify(response.data, null, 2));

//       const userData = response?.data?.user;
//       const bookings = response?.data?.bookings || [];
//       console.log("Bookings Count:", bookings.length);

//       if (!userData) {
//         // Log 3: Agar data mein user object missing ho
//         console.log("🛑 Client Error: User data object missing in successful response.");
//         showToast("User data missing from API response", "error");
//         return;
//       }

//       // --- Calculate Bookings ---
//       const total = bookings.length;
//       const completed = bookings.filter(booking => booking.bookingStatus === 'completed').length; 
//       
//       setTotalBookings(total);
//       setCompletedBookings(completed);
//       // --------------------------

//       setProfile(userData);
//       setName(userData.name || '');
//       setPhone(userData.phone || '');
//       setAddress(userData.address || '');
//       setProfileImage(userData.profileImage || null);
//       
//     } catch (error) {
//       // Log 4: Error details
//       console.log("❌ Fetch Profile Error Details:");
//       console.log("   - Status Code:", error.response?.status); // Status code (401, 500, etc.)
//       console.log("   - Server Error Message:", error.response?.data?.message); // Server se aaya hua message
//       console.log("   - Network Error:", error.message); // Network / Timeout error
//       
//       // showToast mein server ka message ya default message use karein
//       const errorMessage = error.response?.data?.message || error.message || "Failed to fetch profile";
//       showToast(errorMessage, "error");
//       
//     } finally {
//       console.log("🏁 fetchProfile API call finished.");
//       setFetching(false);
//     }
//   };
  
  // const fetchProfile = async () => {
  //   console.log("➡️ Starting fetchProfile API call...");
    
  //   try {
  //     const response = await userAPI.getUserProfile();
      
  //     console.log("✅ Profile API Success Status:", response.status);
  //     console.log("✅ Profile API Response Data:", JSON.stringify(response.data, null, 2));

  //     // ✅ CORRECT: Your backend returns data directly in response.data.data
  //     const userData = response?.data?.data;
      
  //     console.log("User Data:", userData);

  //     if (!userData) {
  //       console.log("🛑 Client Error: User data object missing in successful response.");
  //       showToast("User data missing from API response", "error");
  //       return;
  //     }

  //     // Note: No bookings in current backend response
  //     // If you add bookings later, they would be at response.data.bookings
  //     setTotalBookings(0);
  //     setCompletedBookings(0);

  //     setProfile(userData);
  //     setName(userData.name || '');
  //     setPhone(userData.phone || '');
  //     setAddress(userData.address || '');
  //     setProfileImage(userData.profileImage || null);
      
  //   } catch (error) {
  //     console.log("❌ Fetch Profile Error Details:");
  //     console.log("   - Status Code:", error.response?.status);
  //     console.log("   - Server Error Message:", error.response?.data?.message);
  //     console.log("   - Network Error:", error.message);
      
  //     const errorMessage = error.response?.data?.message || error.message || "Failed to fetch profile";
  //     showToast(errorMessage, "error");
      
  //   } finally {
  //     console.log("🏁 fetchProfile API call finished.");
  //     setFetching(false);
  //   }
  // };
const fetchProfile = async () => {
  console.log("➡️ Starting fetchProfile API call...");
  
  try {
    const response = await userAPI.getUserProfile();
    
    console.log("✅ Response Data:", response.data);

    // ✅ The backend sends { success: true, data: {...} }
    // So userData is at response.data.data
    let userData = null;
    
    if (response.data && response.data.success && response.data.data) {
      userData = response.data.data;
    } else if (response.data && response.data._id) {
      // Fallback: maybe axios already extracted it
      userData = response.data;
    }
    
    console.log("User Data:", userData);

    if (!userData) {
      console.log("🛑 Unable to extract user data");
      showToast("User data missing from API response", "error");
      return;
    }

    setTotalBookings(0);
    setCompletedBookings(0);

    setProfile(userData);
    setName(userData.name || '');
    setPhone(userData.phone || '');
    setAddress(userData.address || '');
    setProfileImage(userData.profileImage || null);
    
  } catch (error) {
    console.log("❌ Error:", error.message);
    showToast(error.message || "Failed to fetch profile", "error");
  } finally {
    setFetching(false);
  }
};
const onRefresh = useCallback(() => {
    setFetching(true);
    fetchProfile();
  }, []);

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleUpdateProfile = async () => {
    if (!name || !phone) {
      showToast('Please fill in all required fields', 'error');
      return;
    }

    setLoading(true);
    try {
      const profileData = { name, phone, address, profileImage };
      const response = await userAPI.updateUserProfile(profileData);

      const updatedUser = response?.data?.user || response?.user || {};

      setProfile(updatedUser);
      setIsEditing(false);
      showToast('Profile updated successfully', 'success');
    } catch (error) {
      showToast(error.message || 'Failed to update profile', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Logout', onPress: logout }
      ],
      { cancelable: false }
    );
  };
  
  const handleEditToggle = () => {
      // If closing the edit form, reset the state to current profile data
      if (isEditing) {
          setName(profile?.name || '');
          setPhone(profile?.phone || '');
          setAddress(profile?.address || '');
          setProfileImage(profile?.profileImage || null);
      }
      setIsEditing(!isEditing);
  };

  if (fetching) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading Profile...</Text>
      </View>
    );
  }

  return (
    <View style={styles.fullScreenContainer}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>My Profile</Text>
        <TouchableOpacity onPress={handleEditToggle} style={styles.editButton}>
          <Ionicons 
            name={isEditing ? "close-circle-outline" : "create-outline"} 
            size={28} 
            color={isEditing ? colors.error : colors.primary} 
          />
        </TouchableOpacity>
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        refreshControl={
            <RefreshControl refreshing={fetching} onRefresh={onRefresh} tintColor={colors.primary} />
        }
      >
        
        {/* Profile Card / Avatar Section */}
        <View style={styles.profileCard}>
          <View style={styles.avatarContainer}>
            {isEditing ? (
              <ImagePicker
                image={profileImage}
                onImageChange={setProfileImage}
                style={styles.avatar}
                iconSize={30}
              />
            ) : (
              <View style={styles.avatar}>
                {profileImage ? (
                  <Image source={{ uri: profileImage }} style={styles.avatarImage} />
                ) : (
                  <Text style={styles.avatarText}>
                    {profile?.name ? profile.name.charAt(0).toUpperCase() : "U"}
                  </Text>
                )}
              </View>
            )}
          </View>

          <Text style={styles.profileName}>{profile?.name}</Text>
          <Text style={styles.profileEmail}>{profile?.email}</Text>
        </View>

        {/* Bookings Stats Section */}
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{totalBookings && totalBookings}</Text>
            <Text style={styles.statLabel}>Total Bookings</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{completedBookings}</Text>
            <Text style={styles.statLabel}>Completed</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{profile?.createdAt ? new Date(profile.createdAt).toLocaleDateString().split('/')[2] : 'N/A'}</Text>
            <Text style={styles.statLabel}>Member Since</Text>
          </View>
        </View>

        {/* Input Fields / Details Section */}
            <View style={styles.detailsCard}>
  <Text style={styles.cardTitle}>Patient Information</Text>

  {!isEditing && (
    <>
      <View style={styles.detailRow}>
        <Ionicons name="call-outline" size={22} color={colors.primary} style={styles.detailIcon} />
        <View>
          <Text style={styles.detailLabel}>Phone</Text>
          <Text style={styles.detailValue}>{profile?.phone || 'N/A'}</Text>
        </View>
      </View>

      <View style={styles.detailRow}>
        <Ionicons name="home-outline" size={22} color={colors.primary} style={styles.detailIcon} />
        <View>
          <Text style={styles.detailLabel}>Address</Text>
          <Text style={styles.detailValue}>{profile?.address || 'Not provided'}</Text>
        </View>
      </View>

      <View style={styles.detailRow}>
        <Ionicons name="pulse-outline" size={22} color={colors.primary} style={styles.detailIcon} />
        <View>
          <Text style={styles.detailLabel}>Health Status</Text>
          <Text style={styles.detailValue}>Active & Under Treatment</Text>
        </View>
      </View>
    </>
  )}

        {/* Logout Section */}
        <View style={styles.logoutContainer}>
            <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
                <Ionicons name="log-out-outline" size={24} color={colors.error} />
                <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
        </View>
        
        <View style={{ height: 40 }} /> {/* Padding at the bottom */}

      </ScrollView>

      <Toast message={toast.message} type={toast.type} isVisible={toast.isVisible} onHide={hideToast} />

    </View>
  );
};

const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  loadingText: {
    color: colors.text,
    fontSize: 18,
  },

  /* Header */
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 10,
    backgroundColor: colors.white, // White header for better separation
    borderBottomWidth: 1,
    borderBottomColor: colors.border || '#f0f0f0',
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: colors.text,
  },
  editButton: {
    padding: 5,
  },

  /* Profile Card (Top Section) */
  profileCard: {
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: colors.white, // Use white for the main section card
    borderRadius: 15,
    marginTop: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  avatarContainer: {
    marginBottom: 10,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: colors.lightPrimary, // Light background for avatar placeholder
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderWidth: 3,
    borderColor: colors.primary, // Primary color border
  },
  avatarImage: {
    width: "100%",
    height: "100%",
  },
  avatarText: {
    color: colors.primary,
    fontSize: 45,
    fontWeight: "bold",
  },
  profileName: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.text,
    marginTop: 5,
  },
  profileEmail: {
    fontSize: 16,
    color: colors.gray,
  },

  /* Bookings Stats Section (Clean Grid) */
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.card, // Separate card for stats
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  statBox: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 5,
  },
  statValue: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 13,
    color: colors.gray,
    textAlign: 'center',
  },

  /* Details & Form Card */
  detailsCard: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.border || '#f0f0f0',
    paddingBottom: 10,
  },
  
  // Display details styling
  detailRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
    paddingHorizontal: 5,
  },
  detailIcon: {
    marginRight: 15,
    marginTop: 5,
  },
  detailLabel: {
    fontSize: 12,
    color: colors.gray,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  detailValue: {
    fontSize: 16,
    color: colors.text,
    marginTop: 2,
    fontWeight: '500',
  },

  // Edit form styling
  inputSpacing: {
    marginBottom: 15,
  },
  saveButton: {
    marginTop: 20,
    marginBottom: 5,
  },

  /* Logout Section */
  logoutContainer: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.errorLight || '#FEECEB',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: '100%',
    justifyContent: 'center',
    gap: 10,
  },
  logoutText: {
    color: colors.error,
    fontSize: 18,
    fontWeight: '600',
  },
});


export default ProfileScreen;