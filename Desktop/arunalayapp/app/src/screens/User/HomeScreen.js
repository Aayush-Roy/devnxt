
// import React, { useState, useEffect, useCallback } from 'react';
// import { View, Text, StyleSheet, FlatList, RefreshControl, ScrollView, TouchableOpacity } from 'react-native';
// import { useFocusEffect } from '@react-navigation/native';
// import { Ionicons } from '@expo/vector-icons';

// import { servicesAPI } from '../../api/services';
// import ServiceCard from '../../components/ServiceCard';
// import SearchBar from '../../components/SearchBar';
// import FilterChip from '../../components/FilterChip';
// import Loader from '../../components/Loader';
// import Toast from '../../components/Toast';
// import colors from '../../utils/colors';

// const HomeScreen = ({ navigation }) => {
//   const [services, setServices] = useState([]);
//   const [filteredServices, setFilteredServices] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [refreshing, setRefreshing] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [toast, setToast] = useState({ message: '', type: '', isVisible: false });

//   const showToast = (message, type) => setToast({ message, type, isVisible: true });
//   const hideToast = () => setToast({ message: '', type: '', isVisible: false });

//   // Fetch services
//   const fetchServices = async () => {
//     try {
//       const response = await servicesAPI.getAllServices();
//       setServices(response.data || []);
//     } catch (error) {
//       showToast(error.message || 'Failed to fetch services', 'error');
//     } finally {
//       setLoading(false);
//       setRefreshing(false);
//     }
//   };

//   const onRefresh = useCallback(() => {
//     setRefreshing(true);
//     fetchServices();
//   }, []);

//   // Extract categories
//   const extractCategories = useCallback(() => {
//     if (services.length > 0) {
//       const uniqueCategories = [...new Set(services.map(service => service.category))];
//       setCategories(uniqueCategories);
//     }
//   }, [services]);

//   // Filter services by search / category
//   const filterServices = useCallback(() => {
//     let filtered = [...services];
//     if (searchQuery) {
//       filtered = filtered.filter(service =>
//         service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         service.description.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }
//     if (selectedCategory) {
//       filtered = filtered.filter(service => service.category === selectedCategory);
//     }
//     setFilteredServices(filtered);
//   }, [services, searchQuery, selectedCategory]);

//   useEffect(() => filterServices(), [filterServices]);
//   useEffect(() => extractCategories(), [extractCategories]);

//   useFocusEffect(
//     useCallback(() => {
//       setLoading(true);
//       fetchServices();
//     }, [])
//   );

//   const renderService = ({ item }) => (
//     <ServiceCard
//       service={item}
//       onPress={() => navigation.navigate('ServiceDetails', { serviceId: item._id })}
//     />
//   );

//   // const renderCategoryChip = (category, index) => (
//   //   <FilterChip
//   //     key={index}
//   //     label={category}
//   //     selected={selectedCategory === category}
//   //     onPress={() => setSelectedCategory(category)}
//   //   />
//   // );

//   if (loading) return <Loader />;

//   return (
//     <View style={styles.container}>
      
//       {/* HEADER */}
//       <View style={styles.header}>
//         <Text style={styles.title}>Arunalaya</Text>

//         <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
//           <Ionicons name="notifications-outline" size={26} color={colors.text} />
//         </TouchableOpacity>
//       </View>

//       {/* SEARCH */}
//       <SearchBar
//         value={searchQuery}
//         onChangeText={setSearchQuery}
//         placeholder="Search services..."
//         style={styles.searchBar}
//       />

//       {/* CATEGORIES */}
//       {/* <ScrollView
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         style={styles.categoriesContainer}
//         contentContainerStyle={styles.categoriesContent}
//       >
//         <FilterChip
//           label="All"
//           selected={selectedCategory === null}
//           onPress={() => setSelectedCategory(null)}
//         />

//         {categories.map(renderCategoryChip)}
//       </ScrollView> */}
//       {/* CATEGORIES */}
// {/* <ScrollView
//   horizontal
//   showsHorizontalScrollIndicator={false}
//   style={styles.categoriesContainer}
//   contentContainerStyle={{
//     paddingRight: 20,
//     flexDirection: "row",
//     alignItems: "center",
//   }}
// >
//   <FilterChip
//     label="All"
//     selected={selectedCategory === null}
//     onPress={() => setSelectedCategory(null)}
//   />

//   {categories.map(renderCategoryChip)}
// </ScrollView> */}


//       {/* SERVICES LIST */}
//       <FlatList
//         data={filteredServices}
//         renderItem={renderService}
//         keyExtractor={(item) => item._id}
//         contentContainerStyle={styles.list}
//         refreshControl={
//           <RefreshControl
//             refreshing={refreshing}
//             onRefresh={onRefresh}
//             tintColor={colors.primary}
//           />
//         }
//         ListEmptyComponent={
//           <View style={styles.emptyContainer}>
//             <Text style={styles.emptyText}>
//               {searchQuery || selectedCategory
//                 ? 'No services match your criteria'
//                 : 'No services available'
//               }
//             </Text>
//           </View>
//         }
//       />

//       <Toast
//         message={toast.message}
//         type={toast.type}
//         isVisible={toast.isVisible}
//         onHide={hideToast}
//       />
//     </View>
//   );
// };

// // STYLES
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.background,
//   },

//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 20,
//     paddingTop: 20,
//     paddingBottom: 10,
//   },

//   title: {
//     color: colors.text,
//     fontSize: 28,
//     fontWeight: 'bold',
//   },

//   searchBar: {
//     marginHorizontal: 20,
//     marginBottom: 10,
//   },

//   categoriesContainer: {
//     paddingLeft: 20,
//     marginTop: 5,
//     marginBottom: 10,
//   },

//   categoriesContent: {
//     paddingRight: 20,
//     alignItems: "center",
//     gap: 10,
//   },

//   list: {
//     paddingBottom: 20,
//     paddingHorizontal: 12,
//   },

//   emptyContainer: {
//     paddingVertical: 50,
//     alignItems: 'center',
//   },

//   emptyText: {
//     color: colors.gray,
//     fontSize: 16,
//   },
// });

// export default HomeScreen;
// import React, { useState, useEffect, useCallback } from 'react';
// import { View, Text, StyleSheet, FlatList, RefreshControl, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native';
// import { useFocusEffect } from '@react-navigation/native';
// import { Ionicons } from '@expo/vector-icons';

// import { servicesAPI } from '../../api/services';
// import ServiceCard from '../../components/ServiceCard';
// import SearchBar from '../../components/SearchBar';
// import Loader from '../../components/Loader';
// import Toast from '../../components/Toast';
// import colors from '../../utils/colors';

// // Get screen width for calculating slider item width
// const { width } = Dimensions.get('window');
// const SLIDER_ITEM_WIDTH = width * 0.35; // Show about 2.5 items

// // Category icons mapping (kept for Categories Grid)
// const categoryIcons = {
//   // ... (Your categoryIcons mapping remains here)
//   'Cleaning': 'broom-outline',
//   'Plumbing': 'water-outline',
//   'Electrical': 'flash-outline',
//   'Carpentry': 'hammer-outline',
//   'Painting': 'color-palette-outline',
//   'Gardening': 'leaf-outline',
//   'AC Repair': 'snow-outline',
//   'Pest Control': 'bug-outline',
//   'Moving': 'car-outline',
//   'Beauty': 'cut-outline',
//   'Salon': 'scissors-outline',
//   'Massage': 'hand-left-outline',
//   'Tutoring': 'book-outline',
//   'Photography': 'camera-outline',
//   'Catering': 'restaurant-outline',
//   'Pain Management': 'medkit-outline',
//   'Sports Injury': 'bicycle-outline',
//   'Post Surgery': 'bandage-outline',
//   'Elderly Care': 'accessibility-outline',
//   'General Therapy': 'body-outline',
//   'Joint Pain': 'walk-outline',
//   'Other': 'options-outline',
//   'default': 'apps-outline'
// };


// const HomeScreen = ({ navigation }) => {
//   const [services, setServices] = useState([]);
//   const [filteredServices, setFilteredServices] = useState([]);
//   const [featuredServices, setFeaturedServices] = useState([]); 
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [refreshing, setRefreshing] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [toast, setToast] = useState({ message: '', type: '', isVisible: false });

//   const showToast = (message, type) => setToast({ message, type, isVisible: true });
//   const hideToast = () => setToast({ message: '', type: '', isVisible: false });

//   // Fetch services
//   const fetchServices = async () => {
//     try {
//       const response = await servicesAPI.getAllServices();
//       const fetchedServices = response.data || [];
//       setServices(fetchedServices);
      
//       // LOGIC FOR FEATURED SERVICES: 
//       // Use the first 5 services as featured
//       setFeaturedServices(fetchedServices.slice(0, 5)); 

//     } catch (error) {
//       showToast(error.message || 'Failed to fetch services', 'error');
//     } finally {
//       setLoading(false);
//       setRefreshing(false);
//     }
//   };

//   const onRefresh = useCallback(() => {
//     setRefreshing(true);
//     fetchServices();
//   }, []);

//   // Extract categories
//   const extractCategories = useCallback(() => {
//     if (services.length > 0) {
//       const uniqueCategories = [...new Set(services.map(service => service.category))];
//       setCategories(uniqueCategories);
//     }
//   }, [services]);

//   // Filter services by search / category
//   const filterServices = useCallback(() => {
//     let filtered = [...services];
//     if (searchQuery) {
//       filtered = filtered.filter(service =>
//         service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         service.description.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }
    
//     // Apply category filter
//     if (selectedCategory) {
//       filtered = filtered.filter(service => service.category === selectedCategory);
//     }
    
//     setFilteredServices(searchQuery || selectedCategory ? filtered : services);

//   }, [services, searchQuery, selectedCategory]);

//   useEffect(() => filterServices(), [filterServices]);
//   useEffect(() => extractCategories(), [extractCategories]);

//   useFocusEffect(
//     useCallback(() => {
//       setLoading(true);
//       fetchServices();
//     }, [])
//   );

//   const handleCategoryPress = (category) => {
//     setSelectedCategory(selectedCategory === category ? null : category);
//   };

//   const handleServicePress = (item) => {
//     navigation.navigate('ServiceDetails', { serviceId: item._id });
//   }

//   // Render function for the main vertical FlatList
//   const renderService = ({ item }) => (
//     <ServiceCard
//       service={item}
//       onPress={() => handleServicePress(item)}
//     />
//   );
  
//   // Render function for the horizontal Slider FlatList (UPDATED UI)
//   const renderSliderService = ({ item }) => (
//     <TouchableOpacity
//       key={item._id}
//       style={sliderStyles.sliderItemWrapper}
//       onPress={() => handleServicePress(item)}
//       activeOpacity={0.8}
//     >
//         <Image 
//             source={{ uri: item.imageUrl }} 
//             style={sliderStyles.image} 
//             resizeMode="cover"
//         />
//         <Text 
//             style={sliderStyles.title} 
//             numberOfLines={2} 
//             adjustsFontSizeToFit
//         >
//             {item.title}
//         </Text>
//     </TouchableOpacity>
//   );

//   // Determine which list to display below the categories
//   const listData = (searchQuery || selectedCategory) ? filteredServices : services;
  
//   // Create a separate component for the main list's header, 
//   // which includes the Featured Slider
//   const ListHeaderComponent = () => (
//     <>
//       {/* CATEGORIES GRID */}
//       {categories.length > 0 && (
//         <View style={styles.categoriesSection}>
//           <View style={styles.categoriesHeader}>
//             <Text style={styles.sectionTitle}>Categories</Text>
//             {selectedCategory && (
//               <TouchableOpacity onPress={() => setSelectedCategory(null)}>
//                 <Text style={styles.clearText}>Clear</Text>
//               </TouchableOpacity>
//             )}
//           </View>
          
//           <ScrollView 
//             horizontal={false}
//             showsVerticalScrollIndicator={false}
//             nestedScrollEnabled={true}
//             style={styles.categoriesScrollView}
//             contentContainerStyle={styles.categoriesScrollContent}
//           >
//             <View style={styles.categoriesGrid}>
//               {categories.map((category) => {
//                 const isSelected = selectedCategory === category;
//                 const iconName = categoryIcons[category] || categoryIcons.default;
                
//                 return (
//                   <View key={category} style={styles.categoryWrapper}>
//                     <TouchableOpacity
//                       style={[styles.categoryCard, isSelected && styles.categoryCardSelected]}
//                       onPress={() => handleCategoryPress(category)}
//                       activeOpacity={0.7}
//                     >
//                       <View style={[styles.iconContainer, isSelected && styles.iconContainerSelected]}>
//                         <Ionicons 
//                           name={iconName} 
//                           size={32} 
//                           color={isSelected ? colors.white : colors.primary} 
//                         />
//                       </View>
//                     </TouchableOpacity>
//                   </View>
//                 );
//               })}
//             </View>
//           </ScrollView>
//         </View>
//       )}

//       {/* FEATURED SERVICES SLIDER (NEW SECTION - UC Style) */}
//       {featuredServices.length > 0 && !(searchQuery || selectedCategory) && (
//         <View style={sliderStyles.sliderSection}>
//           <Text style={styles.sectionTitle}>Popular Services</Text>
//           <FlatList
//             data={featuredServices}
//             renderItem={renderSliderService}
//             keyExtractor={(item) => item._id}
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             contentContainerStyle={sliderStyles.horizontalList}
//           />
//         </View>
//       )}
      
//       <Text style={styles.mainListTitle}>
//         {selectedCategory 
//             ? `${selectedCategory} Services` 
//             : searchQuery 
//             ? 'Search Results' 
//             : 'All Services'
//         }
//       </Text>
//     </>
//   );

//   if (loading) return <Loader />;

//   return (
//     <View style={styles.container}>
      
//       {/* HEADER */}
//       <View style={styles.header}>
//         <Text style={styles.title}>Arunalaya</Text>

//         <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
//           <Ionicons name="notifications-outline" size={26} color={colors.text} />
//         </TouchableOpacity>
//       </View>

//       {/* SEARCH */}
//       <SearchBar
//         value={searchQuery}
//         onChangeText={setSearchQuery}
//         placeholder="Search services..."
//         style={styles.searchBar}
//       />

//       {/* MAIN SERVICES LIST */}
//       <FlatList
//         data={listData}
//         renderItem={renderService}
//         keyExtractor={(item) => item._id}
//         contentContainerStyle={styles.list}
//         refreshControl={
//           <RefreshControl
//             refreshing={refreshing}
//             onRefresh={onRefresh}
//             tintColor={colors.primary}
//           />
//         }
//         ListHeaderComponent={ListHeaderComponent} 
//         ListEmptyComponent={
//           <View style={styles.emptyContainer}>
//             <Text style={styles.emptyText}>
//               {searchQuery || selectedCategory
//                 ? 'No services match your criteria'
//                 : 'No services available'
//               }
//             </Text>
//           </View>
//         }
//       />

//       <Toast
//         message={toast.message}
//         type={toast.type}
//         isVisible={toast.isVisible}
//         onHide={hideToast}
//       />
//     </View>
//   );
// };

// // STYLES (Existing styles remain the same for non-slider parts)
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.background,
//   },

//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 20,
//     paddingTop: 20,
//     paddingBottom: 10,
//   },

//   title: {
//     color: colors.text,
//     fontSize: 28,
//     fontWeight: 'bold',
//   },

//   searchBar: {
//     marginHorizontal: 20,
//     marginBottom: 10,
//   },

//   categoriesSection: {
//     paddingHorizontal: 20,
//     marginBottom: 15,
//     maxHeight: 180,
//   },

//   categoriesHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 12,
//   },

//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: colors.text,
//   },
  
//   mainListTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: colors.text,
//     paddingHorizontal: 20,
//     marginTop: 10,
//     marginBottom: 5,
//   },

//   clearText: {
//     fontSize: 14,
//     color: colors.primary,
//     fontWeight: '500',
//   },

//   categoriesScrollView: {
//     // Height is managed by categoriesSection maxHeight
//   },

//   categoriesScrollContent: {
//     paddingBottom: 5,
//   },

//   categoriesGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'flex-start',
//   },

//   categoryWrapper: {
//     width: '25%',
//     paddingHorizontal: 4,
//     marginBottom: 8,
//   },

//   categoryCard: {
//     width: '100%',
//     aspectRatio: 1,
//     backgroundColor: colors.white,
//     borderRadius: 12,
//     padding: 6,
//     alignItems: 'center',
//     justifyContent: 'center',
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.15,
//     shadowRadius: 3,
//   },

//   categoryCardSelected: {
//     backgroundColor: colors.primary,
//     elevation: 5,
//   },

//   iconContainer: {
//     width: 55,
//     height: 55,
//     borderRadius: 28,
//     backgroundColor: colors.lightPrimary || '#E3F2FD',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   iconContainerSelected: {
//     backgroundColor: 'rgba(255, 255, 255, 0.25)',
//   },

//   list: {
//     paddingBottom: 20,
//     paddingHorizontal: 12,
//   },

//   emptyContainer: {
//     paddingVertical: 50,
//     alignItems: 'center',
//   },

//   emptyText: {
//     color: colors.gray,
//     fontSize: 16,
//   },
// });

// // STYLES FOR THE NEW SLIDER SECTION (UC Style)
// const sliderStyles = StyleSheet.create({
//   sliderSection: {
//     marginTop: 15,
//     marginBottom: 5,
//     paddingLeft: 20, // Only padding left, rest managed by horizontalList padding
//   },
//   horizontalList: {
//     paddingVertical: 10,
//     paddingRight: 20, 
//   },
//   sliderItemWrapper: {
//     width: SLIDER_ITEM_WIDTH,
//     backgroundColor: colors.white,
//     borderRadius: 8,
//     marginRight: 12,
//     paddingBottom: 8,
//     // Add shadow/elevation for the card effect
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//   },
//   image: {
//     width: '100%',
//     height: SLIDER_ITEM_WIDTH * 0.75, // Adjust height based on width for proportion
//     borderTopLeftRadius: 8,
//     borderTopRightRadius: 8,
//     marginBottom: 5,
//   },
//   title: {
//     fontSize: 13,
//     fontWeight: '600',
//     color: colors.text,
//     textAlign: 'center',
//     paddingHorizontal: 5,
//   },
// });

// export default HomeScreen;
// import React, { useState, useEffect, useCallback } from 'react';
// import { View, Text, StyleSheet, FlatList, RefreshControl, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native';
// import { useFocusEffect } from '@react-navigation/native';
// import { Ionicons } from '@expo/vector-icons';
// import { LinearGradient } from 'expo-linear-gradient';

// import { servicesAPI } from '../../api/services';
// import ServiceCard from '../../components/ServiceCard';
// import SearchBar from '../../components/SearchBar';
// import Loader from '../../components/Loader';
// import Toast from '../../components/Toast';
// import colors from '../../utils/colors';

// // Get screen width for calculating slider item width
// const { width } = Dimensions.get('window');
// const SLIDER_ITEM_WIDTH = width * 0.35; // Show about 2.5 items

// // Category icons mapping
// const categoryIcons = {
//   'Cleaning': 'broom-outline',
//   'Plumbing': 'water-outline',
//   'Electrical': 'flash-outline',
//   'Carpentry': 'hammer-outline',
//   'Painting': 'color-palette-outline',
//   'Gardening': 'leaf-outline',
//   'AC Repair': 'snow-outline',
//   'Pest Control': 'bug-outline',
//   'Moving': 'car-outline',
//   'Beauty': 'cut-outline',
//   'Salon': 'scissors-outline',
//   'Massage': 'hand-left-outline',
//   'Tutoring': 'book-outline',
//   'Photography': 'camera-outline',
//   'Catering': 'restaurant-outline',
//   'Pain Management': 'medkit-outline',
//   'Sports Injury': 'bicycle-outline',
//   'Post Surgery': 'bandage-outline',
//   'Elderly Care': 'accessibility-outline',
//   'General Therapy': 'body-outline',
//   'Joint Pain': 'walk-outline',
//   'Other': 'options-outline',
//   'default': 'apps-outline'
// };

// const HomeScreen = ({ navigation }) => {
//   const [services, setServices] = useState([]);
//   const [filteredServices, setFilteredServices] = useState([]);
//   const [featuredServices, setFeaturedServices] = useState([]); 
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [refreshing, setRefreshing] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [toast, setToast] = useState({ message: '', type: '', isVisible: false });

//   const showToast = (message, type) => setToast({ message, type, isVisible: true });
//   const hideToast = () => setToast({ message: '', type: '', isVisible: false });

//   // Fetch services
//   const fetchServices = async () => {
//     try {
//       const response = await servicesAPI.getAllServices();
//       const fetchedServices = response.data || [];
//       setServices(fetchedServices);
      
//       // LOGIC FOR FEATURED SERVICES: 
//       // Use the first 5 services as featured
//       setFeaturedServices(fetchedServices.slice(0, 5)); 
//     } catch (error) {
//       showToast(error.message || 'Failed to fetch services', 'error');
//     } finally {
//       setLoading(false);
//       setRefreshing(false);
//     }
//   };

//   const onRefresh = useCallback(() => {
//     setRefreshing(true);
//     fetchServices();
//   }, []);

//   // Extract categories
//   const extractCategories = useCallback(() => {
//     if (services.length > 0) {
//       const uniqueCategories = [...new Set(services.map(service => service.category))];
//       setCategories(uniqueCategories);
//     }
//   }, [services]);

//   // Filter services by search / category
//   const filterServices = useCallback(() => {
//     let filtered = [...services];
//     if (searchQuery) {
//       filtered = filtered.filter(service =>
//         service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         service.description.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }
    
//     // Apply category filter
//     if (selectedCategory) {
//       filtered = filtered.filter(service => service.category === selectedCategory);
//     }
    
//     setFilteredServices(searchQuery || selectedCategory ? filtered : services);
//   }, [services, searchQuery, selectedCategory]);

//   useEffect(() => filterServices(), [filterServices]);
//   useEffect(() => extractCategories(), [extractCategories]);

//   useFocusEffect(
//     useCallback(() => {
//       setLoading(true);
//       fetchServices();
//     }, [])
//   );

//   const handleCategoryPress = (category) => {
//     setSelectedCategory(selectedCategory === category ? null : category);
//   };

//   const handleServicePress = (item) => {
//     navigation.navigate('ServiceDetails', { serviceId: item._id });
//   }

//   // Render function for the main vertical FlatList
//   const renderService = ({ item }) => (
//     <ServiceCard
//       service={item}
//       onPress={() => handleServicePress(item)}
//     />
//   );
  
//   // UPDATED RENDER SLIDER SERVICE FUNCTION (Urban Company Style)
//   const renderSliderService = ({ item }) => (
//     <TouchableOpacity
//       style={sliderStyles.sliderItemWrapper}
//       onPress={() => handleServicePress(item)}
//       activeOpacity={0.9}
//     >
//       <View style={sliderStyles.imageContainer}>
//         <Image 
//           source={{ uri: item.imageUrl }} 
//           style={sliderStyles.image} 
//           resizeMode="cover"
//         />
        
//         {/* Gradient Overlay for Premium Look */}
//         <LinearGradient
//           colors={['transparent', 'rgba(0,0,0,0.7)']}
//           style={sliderStyles.gradientOverlay}
//           start={{ x: 0, y: 0 }}
//           end={{ x: 0, y: 1 }}
//         />
        
//         {/* Title Overlay on Image */}
//         <View style={sliderStyles.imageTextOverlay}>
//           <Text style={sliderStyles.serviceTitleOverlay} numberOfLines={1}>
//             {item.title}
//           </Text>
//         </View>
//       </View>

//       {/* Card Content */}
//       <View style={sliderStyles.cardContent}>
//         <Text style={sliderStyles.serviceTitle} numberOfLines={1}>
//           {item.title}
//         </Text>
        
//         <Text style={sliderStyles.serviceCategory} numberOfLines={1}>
//           {item.category}
//         </Text>

//         {/* Rating Badge */}
//         <View style={sliderStyles.ratingContainer}>
//           <View style={sliderStyles.ratingBadge}>
//             <Ionicons name="star" style={sliderStyles.ratingIcon} />
//             <Text style={sliderStyles.ratingText}>4.8</Text>
//           </View>
//         </View>

//         {/* Price Section */}
//         <View style={sliderStyles.priceContainer}>
//           <Text style={sliderStyles.price}>₹{item.startingPrice || '299'}</Text>
//           {item.originalPrice && (
//             <Text style={sliderStyles.originalPrice}>₹{item.originalPrice}</Text>
//           )}
//         </View>
//       </View>
//     </TouchableOpacity>
//   );

//   // Determine which list to display below the categories
//   const listData = (searchQuery || selectedCategory) ? filteredServices : services;
  
//   // Create a separate component for the main list's header
//   const ListHeaderComponent = () => (
//     <>
//       {/* CATEGORIES GRID */}
//       {categories.length > 0 && (
//         <View style={styles.categoriesSection}>
//           <View style={styles.categoriesHeader}>
//             <Text style={styles.sectionTitle}>Categories</Text>
//             {selectedCategory && (
//               <TouchableOpacity onPress={() => setSelectedCategory(null)}>
//                 <Text style={styles.clearText}>Clear</Text>
//               </TouchableOpacity>
//             )}
//           </View>
          
//           <ScrollView 
//             horizontal={false}
//             showsVerticalScrollIndicator={false}
//             nestedScrollEnabled={true}
//             style={styles.categoriesScrollView}
//             contentContainerStyle={styles.categoriesScrollContent}
//           >
//             <View style={styles.categoriesGrid}>
//               {categories.map((category) => {
//                 const isSelected = selectedCategory === category;
//                 const iconName = categoryIcons[category] || categoryIcons.default;
                
//                 return (
//                   <View key={category} style={styles.categoryWrapper}>
//                     <TouchableOpacity
//                       style={[styles.categoryCard, isSelected && styles.categoryCardSelected]}
//                       onPress={() => handleCategoryPress(category)}
//                       activeOpacity={0.7}
//                     >
//                       <View style={[styles.iconContainer, isSelected && styles.iconContainerSelected]}>
//                         <Ionicons 
//                           name={iconName} 
//                           size={32} 
//                           color={isSelected ? colors.white : colors.primary} 
//                         />
//                       </View>
//                     </TouchableOpacity>
//                   </View>
//                 );
//               })}
//             </View>
//           </ScrollView>
//         </View>
//       )}

//       {/* FEATURED SERVICES SLIDER (Urban Company Style) */}
//       {featuredServices.length > 0 && !(searchQuery || selectedCategory) && (
//         <View style={sliderStyles.sliderSection}>
//           <Text style={sliderStyles.sectionTitle}>Popular Services</Text>
//           <FlatList
//             data={featuredServices}
//             renderItem={renderSliderService}
//             keyExtractor={(item) => item._id}
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             contentContainerStyle={sliderStyles.horizontalList}
//           />
//         </View>
//       )}
      
//       <Text style={styles.mainListTitle}>
//         {selectedCategory 
//           ? `${selectedCategory} Services` 
//           : searchQuery 
//           ? 'Search Results' 
//           : 'All Services'
//         }
//       </Text>
//     </>
//   );

//   if (loading) return <Loader />;

//   return (
//     <View style={styles.container}>
      
//       {/* HEADER */}
//       <View style={styles.header}>
//         <Text style={styles.title}>Arunalaya</Text>
//         <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
//           <Ionicons name="notifications-outline" size={26} color={colors.text} />
//         </TouchableOpacity>
//       </View>

//       {/* SEARCH */}
//       <SearchBar
//         value={searchQuery}
//         onChangeText={setSearchQuery}
//         placeholder="Search services..."
//         style={styles.searchBar}
//       />

//       {/* MAIN SERVICES LIST */}
//       <FlatList
//         data={listData}
//         renderItem={renderService}
//         keyExtractor={(item) => item._id}
//         contentContainerStyle={styles.list}
//         refreshControl={
//           <RefreshControl
//             refreshing={refreshing}
//             onRefresh={onRefresh}
//             tintColor={colors.primary}
//           />
//         }
//         ListHeaderComponent={ListHeaderComponent} 
//         ListEmptyComponent={
//           <View style={styles.emptyContainer}>
//             <Text style={styles.emptyText}>
//               {searchQuery || selectedCategory
//                 ? 'No services match your criteria'
//                 : 'No services available'
//               }
//             </Text>
//           </View>
//         }
//       />

//       <Toast
//         message={toast.message}
//         type={toast.type}
//         isVisible={toast.isVisible}
//         onHide={hideToast}
//       />
//     </View>
//   );
// };

// // EXISTING STYLES (unchanged)
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.background,
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 20,
//     paddingTop: 20,
//     paddingBottom: 10,
//   },
//   title: {
//     color: colors.text,
//     fontSize: 28,
//     fontWeight: 'bold',
//   },
//   searchBar: {
//     marginHorizontal: 20,
//     marginBottom: 10,
//   },
//   categoriesSection: {
//     paddingHorizontal: 20,
//     marginBottom: 15,
//     maxHeight: 180,
//   },
//   categoriesHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: colors.text,
//   },
//   mainListTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: colors.text,
//     paddingHorizontal: 20,
//     marginTop: 10,
//     marginBottom: 5,
//   },
//   clearText: {
//     fontSize: 14,
//     color: colors.primary,
//     fontWeight: '500',
//   },
//   categoriesScrollView: {
//     // Height is managed by categoriesSection maxHeight
//   },
//   categoriesScrollContent: {
//     paddingBottom: 5,
//   },
//   categoriesGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'flex-start',
//   },
//   categoryWrapper: {
//     width: '25%',
//     paddingHorizontal: 4,
//     marginBottom: 8,
//   },
//   categoryCard: {
//     width: '100%',
//     aspectRatio: 1,
//     backgroundColor: colors.white,
//     borderRadius: 12,
//     padding: 6,
//     alignItems: 'center',
//     justifyContent: 'center',
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.15,
//     shadowRadius: 3,
//   },
//   categoryCardSelected: {
//     backgroundColor: colors.primary,
//     elevation: 5,
//   },
//   iconContainer: {
//     width: 55,
//     height: 55,
//     borderRadius: 28,
//     backgroundColor: colors.lightPrimary || '#E3F2FD',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   iconContainerSelected: {
//     backgroundColor: 'rgba(255, 255, 255, 0.25)',
//   },
//   list: {
//     paddingBottom: 20,
//     paddingHorizontal: 12,
//   },
//   emptyContainer: {
//     paddingVertical: 50,
//     alignItems: 'center',
//   },
//   emptyText: {
//     color: colors.gray,
//     fontSize: 16,
//   },
// });

// // UPDATED SLIDER STYLES (Urban Company / Yes Madam Style)
// const sliderStyles = StyleSheet.create({
//   sliderSection: {
//     paddingHorizontal: 20,
//     marginBottom: 15,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: colors.text,
//     marginBottom: 12,
//   },
//   horizontalList: {
//     paddingVertical: 8,
//     paddingRight: 10,
//   },
//   sliderItemWrapper: {
//     width: SLIDER_ITEM_WIDTH,
//     marginRight: 12,
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.15,
//     shadowRadius: 8,
//     backgroundColor: colors.white,
//     borderRadius: 16,
//     overflow: 'hidden',
//   },
//   imageContainer: {
//     position: 'relative',
//     height: SLIDER_ITEM_WIDTH * 0.75,
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     borderTopLeftRadius: 16,
//     borderTopRightRadius: 16,
//   },
//   gradientOverlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'transparent',
//     borderTopLeftRadius: 16,
//     borderTopRightRadius: 16,
//   },
//   imageTextOverlay: {
//     position: 'absolute',
//     bottom: 12,
//     left: 12,
//     right: 12,
//   },
//   serviceTitleOverlay: {
//     fontSize: 14,
//     fontWeight: '700',
//     color: colors.white,
//     textShadowColor: 'rgba(0,0,0,0.7)',
//     textShadowOffset: { width: 0, height: 1 },
//     textShadowRadius: 2,
//   },
//   cardContent: {
//     padding: 12,
//     paddingTop: 8,
//   },
//   serviceTitle: {
//     fontSize: 14,
//     fontWeight: '700',
//     color: colors.text,
//     marginBottom: 4,
//     lineHeight: 18,
//   },
//   serviceCategory: {
//     fontSize: 11,
//     color: colors.gray,
//     marginBottom: 6,
//     fontWeight: '500',
//   },
//   ratingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 6,
//   },
//   ratingText: {
//     fontSize: 12,
//     fontWeight: '600',
//     color: colors.white,
//     marginLeft: 2,
//   },
//   ratingBadge: {
//     backgroundColor: '#4CAF50',
//     paddingHorizontal: 6,
//     paddingVertical: 2,
//     borderRadius: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   ratingIcon: {
//     color: colors.white,
//     fontSize: 10,
//     marginRight: 2,
//   },
//   priceContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   price: {
//     fontSize: 16,
//     fontWeight: '800',
//     color: colors.primary,
//   },
//   originalPrice: {
//     fontSize: 12,
//     color: colors.gray,
//     textDecorationLine: 'line-through',
//     marginLeft: 6,
//   },
// });

// export default HomeScreen;
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, RefreshControl, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import { servicesAPI } from '../../api/services';
import ServiceCard from '../../components/ServiceCard';
import SearchBar from '../../components/SearchBar';
import Loader from '../../components/Loader';
import Toast from '../../components/Toast';
import colors from '../../utils/colors';
import ArunalayaBanner from '../../components/BannerCarousel';
import { authAPI } from '../../api/auth';
import { use } from 'react';
import { userAPI } from '../../api/user';

// Get screen width for calculating slider item width
const { width } = Dimensions.get('window');
const SLIDER_ITEM_WIDTH = width * 0.35; // Show about 2.5 items

// Category icons mapping
const categoryIcons = {
  'Cleaning': 'broom-outline',
  'Plumbing': 'water-outline',
  'Electrical': 'flash-outline',
  'Carpentry': 'hammer-outline',
  'Painting': 'color-palette-outline',
  'Gardening': 'leaf-outline',
  'AC Repair': 'snow-outline',
  'Pest Control': 'bug-outline',
  'Moving': 'car-outline',
  'Beauty': 'cut-outline',
  'Salon': 'scissors-outline',
  'Massage': 'hand-left-outline',
  'Tutoring': 'book-outline',
  'Photography': 'camera-outline',
  'Catering': 'restaurant-outline',
  'Pain Management': 'medkit-outline',
  'Sports Injury': 'bicycle-outline',
  'Post Surgery': 'bandage-outline',
  'Elderly Care': 'accessibility-outline',
  'General Therapy': 'body-outline',
  'Joint Pain': 'walk-outline',
  'Other': 'options-outline',
  'default': 'apps-outline'
};

const HomeScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('Guest');
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [featuredServices, setFeaturedServices] = useState([]); 
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [toast, setToast] = useState({ message: '', type: '', isVisible: false });

  const showToast = (message, type) => setToast({ message, type, isVisible: true });
  const hideToast = () => setToast({ message: '', type: '', isVisible: false });


//   const fetchUserProfile = async () => {
//     try {
//       // Assuming authAPI.getUserProfile() returns { data: { name: 'User Name' } }
//       const response = await userAPI.getUserProfile();
//       console.log("User Profile Response:", response);
//       if (response.data && response.data.user.name) {
//         setUserName(response.data.user.name.split(' ')[0]); // Only show the first name
//       }
//     } catch (error) {
//       // Handle error or just keep 'Guest'
//       console.error("Failed to fetch user profile:", error);
//     }
//   };

const fetchUserProfile = async () => {
  try {
    const response = await userAPI.getUserProfile();
    console.log("User Profile Response:", response);
    
    // ✅ FIX: Access name directly from response.data (not response.data.user)
    if (response.data && response.data.name) {
      setUserName(response.data.name.split(' ')[0]); // Only show the first name
    }
  } catch (error) {
    console.error("Failed to fetch user profile:", error);
  }
};
  // Fetch services
  // const fetchServices = async () => {
  //   try {
  //     const response = await servicesAPI.getAllServices();
  //     const fetchedServices = response.data || [];
  //     setServices(fetchedServices);
  //     console.log("Fetched Services:", fetchedServices);
      
  //     // LOGIC FOR FEATURED SERVICES: 
  //     // Use the first 5 services as featured
  //     setFeaturedServices(fetchedServices.slice(0, 5)); 
  //   } catch (error) {
  //     showToast(error.message || 'Failed to fetch services', 'error');
  //   } finally {
  //     setLoading(false);
  //     setRefreshing(false);
  //   }
  // };
  const fetchServices = async () => {
  try {
    console.log("🔄 Starting to fetch services...");
    
    const response = await servicesAPI.getAllServices();
    
    // Log the entire response to see what we're getting
    console.log("📦 Full API Response:", JSON.stringify(response, null, 2));
    console.log("📦 Response.data:", response.data);
    
    // Try multiple possible data structures
    let fetchedServices = [];
    
    if (Array.isArray(response.data)) {
      // Case 1: response.data is directly an array
      fetchedServices = response.data;
      console.log("✅ Found services directly in response.data (array)");
    } else if (response.data?.services && Array.isArray(response.data.services)) {
      // Case 2: response.data.services is an array
      fetchedServices = response.data.services;
      console.log("✅ Found services in response.data.services");
    } else if (response.data?.data && Array.isArray(response.data.data)) {
      // Case 3: response.data.data is an array
      fetchedServices = response.data.data;
      console.log("✅ Found services in response.data.data");
    } else if (response?.services && Array.isArray(response.services)) {
      // Case 4: response.services is an array
      fetchedServices = response.services;
      console.log("✅ Found services directly in response.services");
    } else {
      console.log("❌ Could not find services array in response");
      console.log("Response structure:", Object.keys(response));
      if (response.data) {
        console.log("Response.data structure:", Object.keys(response.data));
      }
    }
    
    console.log(`✅ Fetched ${fetchedServices.length} services`);
    console.log("First service (if exists):", fetchedServices[0]);
    
    setServices(fetchedServices);
    setFeaturedServices(fetchedServices.slice(0, 5));
    
    if (fetchedServices.length === 0) {
      showToast('No services available', 'info');
    }
    
  } catch (error) {
    console.error("❌ SERVICES ERROR:", error);
    console.error("❌ Error message:", error.message);
    console.error("❌ Error response:", error.response);
    console.error("❌ Error response data:", error.response?.data);
    
    showToast(
      error.response?.data?.message || 
      error.message || 
      'Failed to fetch services', 
      'error'
    );
  } finally {
    setLoading(false);
    setRefreshing(false);
  }
};

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchServices();
    fetchUserProfile();
  }, []);

  // Extract categories
  const extractCategories = useCallback(() => {
    if (services.length > 0) {
      const uniqueCategories = [...new Set(services.map(service => service.category))];
      setCategories(uniqueCategories);
    }
  }, [services]);

  // Filter services by search / category
  const filterServices = useCallback(() => {
    let filtered = [...services];
    if (searchQuery) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply category filter
    if (selectedCategory) {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }
    
    setFilteredServices(searchQuery || selectedCategory ? filtered : services);
  }, [services, searchQuery, selectedCategory]);

  useEffect(() => filterServices(), [filterServices]);
  useEffect(() => extractCategories(), [extractCategories]);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      fetchServices();
      fetchUserProfile(); // <--- CALL USER PROFILE FETCH
    }, [])
  );

  const handleCategoryPress = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  const handleServicePress = (item) => {
    navigation.navigate('ServiceDetails', { serviceId: item._id });
  }

  // Render function for the main vertical FlatList
  const renderService = ({ item }) => (
    <ServiceCard
      service={item}
      onPress={() => handleServicePress(item)}
    />
  );
  
  // UPDATED RENDER SLIDER SERVICE FUNCTION (Urban Company Style)
  const renderSliderService = ({ item }) => (
    <TouchableOpacity
      style={sliderStyles.sliderItemWrapper}
      onPress={() => handleServicePress(item)}
      activeOpacity={0.9}
    >
      <View style={sliderStyles.imageContainer}>
        <Image 
          source={{ uri: item.imageUrl }} 
          style={sliderStyles.image} 
          resizeMode="cover"
        />
        
        {/* Gradient Overlay for Premium Look */}
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.7)']}
          style={sliderStyles.gradientOverlay}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        />
        
        {/* Title Overlay on Image */}
        <View style={sliderStyles.imageTextOverlay}>
          <Text style={sliderStyles.serviceTitleOverlay} numberOfLines={1}>
            {item.title}
          </Text>
        </View>
      </View>

      {/* Card Content */}
      <View style={sliderStyles.cardContent}>
        <Text style={sliderStyles.serviceTitle} numberOfLines={1}>
          {item.title}
        </Text>
        
        <Text style={sliderStyles.serviceCategory} numberOfLines={1}>
          {item.category}
        </Text>

        {/* Rating Badge */}
        <View style={sliderStyles.ratingContainer}>
          <View style={sliderStyles.ratingBadge}>
            <Ionicons name="star" style={sliderStyles.ratingIcon} />
            <Text style={sliderStyles.ratingText}>4.8</Text>
          </View>
        </View>

        {/* Price Section */}
        {/* <View style={sliderStyles.priceContainer}>
          <Text style={sliderStyles.price}>₹{item.startingPrices || '299'}</Text>
          {item.originalPrice && (
            <Text style={sliderStyles.originalPrice}>₹{item.originalPrice}</Text>
          )}
        </View> */}
      </View>
    </TouchableOpacity>
  );

  // Render banner item
  const renderBanner = ({ item, index }) => (
    <TouchableOpacity
      style={bannerStyles.bannerContainer}
      onPress={() => console.log(`Banner ${index} pressed`)}
      activeOpacity={0.9}
    >
      <Image
        source={{ uri: item.image }}
        style={bannerStyles.bannerImage}
        resizeMode="cover"
      />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.6)']}
        style={bannerStyles.bannerGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      />
      <View style={bannerStyles.bannerContent}>
        <Text style={bannerStyles.bannerTitle}>{item.title}</Text>
        <Text style={bannerStyles.bannerSubtitle}>{item.subtitle}</Text>
      </View>
    </TouchableOpacity>
  );

  // Determine which list to display below the categories
  const listData = (searchQuery || selectedCategory) ? filteredServices : services;
  
  // Create a separate component for the main list's header
  const ListHeaderComponent = () => (
    <>
      {/* BANNERS SECTION */}
      <View style={bannerStyles.bannersSection}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          style={bannerStyles.bannersScrollView}
        >
          {[
            {
              image: 'https://i.pinimg.com/1200x/32/0b/14/320b14bcf473ff8986b9998842ad3183.jpg',
              title: 'Special Offer',
              subtitle: 'Get 30% off on all services'
            },
            {
              image: 'https://i.pinimg.com/1200x/0a/dd/32/0add32f89b74669bb76f55c082040a39.jpg',
              title: 'New Services',
              subtitle: 'Check out our latest offerings'
            },
            {
              image: 'https://i.pinimg.com/1200x/8f/15/07/8f1507092c276ad06e3d6bb95af0ed49.jpg',
              title: 'Premium Packages',
              subtitle: 'Best value for your money'
            }
          ].map((banner, index) => (
            <View key={index} style={bannerStyles.bannerWrapper}>
              {renderBanner({ item: banner, index })}
            </View>
          ))}
        </ScrollView>
        <View style={bannerStyles.bannerIndicatorContainer}>
          {[1, 2, 3].map((i) => (
            <View
              key={i}
              style={[
                bannerStyles.bannerIndicator,
                i === 1 && bannerStyles.activeIndicator
              ]}
            />
          ))}
        </View>
        
      </View>

    
      {/* CATEGORIES GRID */}
     
      {categories.length > 0 && (
        <View style={styles.categoriesSection}>
          <View style={styles.categoriesHeader}>
            <Text style={styles.sectionTitle}>Categories</Text>
            {selectedCategory && (
              <TouchableOpacity onPress={() => setSelectedCategory(null)}>
                <Text style={styles.clearText}>Clear</Text>
              </TouchableOpacity>
            )}
          </View>
          
          <ScrollView 
            horizontal={false}
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true}
            style={styles.categoriesScrollView}
            contentContainerStyle={styles.categoriesScrollContent}
          >
            <View style={styles.categoriesGrid}>
              {categories.map((category) => {
                const isSelected = selectedCategory === category;
                const iconName = categoryIcons[category] || categoryIcons.default;
                
                return (
                  <View key={category} style={styles.categoryWrapper}>
                    <TouchableOpacity
                      style={[styles.categoryCard, isSelected && styles.categoryCardSelected]}
                      onPress={() => handleCategoryPress(category)}
                      activeOpacity={0.7}
                    >
                      <View style={[styles.iconContainer, isSelected && styles.iconContainerSelected]}>
                        <Ionicons 
                          name={iconName} 
                          size={32} 
                          color={isSelected ? colors.white : colors.primary} 
                        />
                      </View>
                      <Text style={[styles.categoryText, isSelected && styles.categoryTextSelected]}>
                        {category}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </ScrollView>
           
        </View>
      )}

      {/* FEATURED SERVICES SLIDER (Urban Company Style) */}
      {featuredServices.length > 0 && !(searchQuery || selectedCategory) && (
        <View style={sliderStyles.sliderSection}>
          <View style={sliderStyles.sectionHeader}>
            <Text style={sliderStyles.sectionTitle}>Popular Services</Text>
            <TouchableOpacity>
              <Text style={sliderStyles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={featuredServices}
            renderItem={renderSliderService}
            keyExtractor={(item) => item._id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={sliderStyles.horizontalList}
          />
        </View>
      )}
      
      <Text style={styles.mainListTitle}>
        {selectedCategory 
          ? `${selectedCategory} Services` 
          : searchQuery 
          ? 'Search Results' 
          : 'All Services'
        }
      </Text>
      
    </>
  );

  if (loading) return <Loader />;

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>How's your day going,</Text>
          <Text style={styles.title}>{userName || "Hanuman"}</Text>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate("Notifications")}>
            <Ionicons name="notifications-outline" size={24} color={colors.text} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="cart-outline" size={24} color={colors.text} />
          </TouchableOpacity>
        </View>
      </View>

      {/* SEARCH */}
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search for services..."
        style={styles.searchBar}
      />
      
      {/* MAIN SERVICES LIST */}
   
      <FlatList
        data={listData}
        renderItem={renderService}
        keyExtractor={(item) => item._id}
        contentContainerStyle={styles.list}
        refreshControl={
          
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={colors.primary}
          />
         
         
          
        }
        ListHeaderComponent={ListHeaderComponent} 
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              {searchQuery || selectedCategory
                ? 'No services match your criteria'
                : 'No services available'
              }
            </Text>
            
          </View>
        }
        
      />
      
      
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onHide={hideToast}
      />
      
       
    </View>
    

    
  );
};

// STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  greeting: {
    color: colors.gray,
    fontSize: 16,
    fontWeight: '500',
  },
  title: {
    color: colors.text,
    fontSize: 28,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 15,
  },
  searchBar: {
    marginHorizontal: 20,
    marginBottom: 15,
  },
  quickActionsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  quickActionItem: {
    alignItems: 'center',
  },
  quickActionIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.lightPrimary || '#E3F2FD',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  quickActionText: {
    fontSize: 12,
    color: colors.text,
    fontWeight: '500',
  },
  categoriesSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  categoriesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
  },
  mainListTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 5,
  },
  clearText: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '500',
  },
  categoriesScrollView: {
    // Height is managed by categoriesSection maxHeight
  },
  categoriesScrollContent: {
    paddingBottom: 5,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  categoryWrapper: {
    width: '25%',
    paddingHorizontal: 8,
    marginBottom: 15,
  },
  categoryCard: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryCardSelected: {
    // Removed background color change
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.lightPrimary || '#E3F2FD',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  iconContainerSelected: {
    backgroundColor: colors.primary,
  },
  categoryText: {
    fontSize: 12,
    color: colors.text,
    textAlign: 'center',
    fontWeight: '500',
  },
  categoryTextSelected: {
    color: colors.primary,
    fontWeight: '600',
  },
  list: {
    paddingBottom: 20,
    paddingHorizontal: 12,
  },
  emptyContainer: {
    paddingVertical: 50,
    alignItems: 'center',
  },
  emptyText: {
    color: colors.gray,
    fontSize: 16,
  },
});

// BANNER STYLES
const bannerStyles = StyleSheet.create({
  bannersSection: {
    height: 160,
    marginBottom: 20,
  },
  bannersScrollView: {
    height: '100%',
  },
  bannerWrapper: {
    width: width,
    paddingHorizontal: 20,
  },
  bannerContainer: {
    flex: 1,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  bannerGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '60%',
  },
  bannerContent: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 15,
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    // color: colors.white,
    color:'#fff',
    marginBottom: 5,
  },
  bannerSubtitle: {
    fontSize: 14,
    // color: colors.white,
    color:'#fff',
    opacity: 0.9,
  },
  bannerIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  bannerIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.gray,
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: colors.primary,
    width: 20,
  },
});

// SLIDER STYLES
const sliderStyles = StyleSheet.create({
  sliderSection: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
  },
  seeAllText: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '500',
  },
  horizontalList: {
    paddingLeft: 20,
    paddingRight: 10,
  },
  sliderItemWrapper: {
    width: SLIDER_ITEM_WIDTH,
    marginRight: 12,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    backgroundColor: colors.white,
    borderRadius: 16,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
    height: SLIDER_ITEM_WIDTH * 0.75,
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  imageTextOverlay: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    right: 12,
  },
  serviceTitleOverlay: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.white,
    textShadowColor: 'rgba(0,0,0,0.7)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  cardContent: {
    padding: 12,
    paddingTop: 8,
  },
  serviceTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
    lineHeight: 18,
  },
  serviceCategory: {
    fontSize: 11,
    color: colors.gray,
    marginBottom: 6,
    fontWeight: '500',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.white,
    marginLeft: 2,
  },
  ratingBadge: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingIcon: {
    color: colors.white,
    fontSize: 10,
    marginRight: 2,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.primary,
  },
  originalPrice: {
    fontSize: 12,
    color: colors.gray,
    textDecorationLine: 'line-through',
    marginLeft: 6,
  },
});

export default HomeScreen;