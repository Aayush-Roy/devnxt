
// import React from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { LinearGradient } from 'expo-linear-gradient';


// export default function OffersScreen() {
//   const copyCode = (code) => {
//     // In a real app use Clipboard.setStringAsync(code)
//     Alert.alert("Copied!", `Promo code "${code}" copied to clipboard.`);
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView showsVerticalScrollIndicator={false}>
        
//         {/* Header */}
//         <LinearGradient colors={['#F88310', '#E86E00']} style={styles.header}>
//           <Text style={styles.headerTitle}>Special Offers 🎉</Text>
//           <Text style={styles.headerSubtitle}>Save more on your bookings</Text>
//         </LinearGradient>

        
//         {/* Terms & Conditions */}
//         <View style={styles.termsContainer}>
//           <Text style={styles.termsTitle}>Terms & Conditions</Text>
//           <Text style={styles.termsText}>• Offers are valid for a limited period only</Text>
//           <Text style={styles.termsText}>• Cannot be combined with other offers</Text>
//           <Text style={styles.termsText}>• Applicable on first booking only (for FIRST50)</Text>
//           <Text style={styles.termsText}>• Standard booking terms apply</Text>
//         </View>

//         <View style={{ height: 20 }} />
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#141413',
//   },
//   header: {
//     padding: 25,
//     paddingBottom: 40,
//     borderBottomLeftRadius: 25,
//     borderBottomRightRadius: 25,
//     shadowColor: '#F88310',
//     shadowOpacity: 0.4,
//     shadowOffset: { width: 0, height: 10 },
//     shadowRadius: 15,
//   },
//   headerTitle: {
//     fontSize: 28,
//     fontWeight: '800',
//     color: '#fff',
//     marginBottom: 5,
//     letterSpacing: 0.5,
//   },
//   headerSubtitle: {
//     fontSize: 15,
//     color: '#fff9',
//   },
//   offerCard: {
//     marginHorizontal: 20,
//     marginVertical: 12,
//     borderRadius: 16,
//     padding: 20,
//     position: 'relative',
//     overflow: 'hidden',
//     borderWidth: 0.5,
//     borderColor: '#3A3A3A',
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: 10,
//     shadowOffset: { width: 0, height: 5 },
//   },
//   discountBadge: {
//     position: 'absolute',
//     top: 15,
//     right: 15,
//     paddingHorizontal: 14,
//     paddingVertical: 7,
//     borderRadius: 18,
//   },
//   discountText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 13,
//   },
//   offerContent: {
//     paddingRight: 80,
//   },
//   offerTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#fff',
//     marginBottom: 8,
//   },
//   validText: {
//     fontSize: 13,
//     color: '#bbb',
//     marginBottom: 15,
//   },
//   codeContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 10,
//   },
//   codeBox: {
//     flex: 1,
//     backgroundColor: '#141413',
//     padding: 12,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#F88310',
//     borderStyle: 'dashed',
//   },
//   codeLabel: {
//     fontSize: 11,
//     color: '#aaa',
//     marginBottom: 3,
//   },
//   codeText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#F88310',
//     letterSpacing: 1,
//   },
//   copyButton: {
//     borderRadius: 10,
//     overflow: 'hidden',
//   },
//   copyGradient: {
//     width: 45,
//     height: 45,
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   decorGlow: {
//     position: 'absolute',
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     backgroundColor: '#F88310',
//     opacity: 0.07,
//     top: -40,
//     left: -30,
//   },
//   termsContainer: {
//     margin: 20,
//     padding: 20,
//     backgroundColor: '#1E1E1D',
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: '#2A2A29',
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 3 },
//   },
//   termsTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 12,
//   },
//   termsText: {
//     fontSize: 13,
//     color: '#999',
//     marginBottom: 8,
//     lineHeight: 20,
//   },
// });
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

// --- Data Structure for Offers ---
const OFFERS_DATA = [
  {
    id: 'o1',
    title: 'Flat 50% OFF on First Booking',
    description: 'Applicable on all services for new customers. Max discount $50.',
    code: 'FIRST50',
    discount: '50% OFF',
    validUntil: 'Dec 31, 2025',
    cardColors: ['#6D28D9', '#9333EA'], // Purple/Violet gradient
    icon: 'star',
  },
  {
    id: 'o2',
    title: '$10 OFF on Bookings over $100',
    description: 'Use this code for a fixed discount on any repair or cleaning service.',
    code: 'SAVE10NOW',
    discount: '$10 OFF',
    validUntil: 'Nov 30, 2025',
    cardColors: ['#047857', '#059669'], // Emerald/Green gradient
    icon: 'cash',
  },
  {
    id: 'o3',
    title: 'Free Deep Cleaning on Third Booking',
    description: 'Book 3 times and get a free deep cleaning service, up to $150 value.',
    code: 'CLEANFREE',
    discount: 'FREE CLEAN',
    validUntil: 'Limited Period',
    cardColors: ['#D97706', '#F59E0B'], // Gold/Yellow gradient
    icon: 'sparkles',
  },
];

// --- Reusable Offer Card Component ---
const OfferCard = ({ offer, onCopy }) => {
  return (
    <LinearGradient 
      colors={offer.cardColors} 
      style={styles.offerCard}
    >
      <View style={styles.decorGlow} /> 
      
      {/* Discount Badge */}
      <View style={[styles.discountBadge, { backgroundColor: offer.cardColors[1] }]}>
        <Text style={styles.discountText}>{offer.discount}</Text>
      </View>

      {/* Offer Content */}
      <View style={styles.offerContent}>
        <Ionicons name={offer.icon} size={28} color="#fff" style={{ marginBottom: 10 }} />
        <Text style={styles.offerTitle}>{offer.title}</Text>
        <Text style={styles.offerDescription}>{offer.description}</Text>
        <Text style={styles.validText}>Valid until: {offer.validUntil}</Text>
      </View>

      {/* Code and Copy Button */}
      <View style={styles.codeContainer}>
        <View style={styles.codeBox}>
          <Text style={styles.codeLabel}>PROMO CODE</Text>
          <Text style={styles.codeText}>{offer.code}</Text>
        </View>
        <TouchableOpacity style={styles.copyButton} onPress={() => onCopy(offer.code)}>
          <LinearGradient colors={['#F88310', '#E86E00']} style={styles.copyGradient}>
            <Ionicons name="copy-outline" size={20} color="#fff" />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};


// --- Main Screen Component ---
export default function OffersScreen() {
  const copyCode = (code) => {
    // In a real app, replace this with Clipboard.setStringAsync(code)
    Alert.alert(
      "Code Copied!", 
      `The promo code "${code}" is now copied to your clipboard. Apply it at checkout!`
    );
  };
  
  const handleRefer = () => {
    // In a real app, trigger sharing sheet with a unique link
    Alert.alert(
      "Share & Earn!", 
      "A unique referral link has been copied. Share it with friends to earn credits when they book!"
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <LinearGradient colors={['#F88310', '#E86E00']} style={styles.header}>
          <Text style={styles.headerTitle}>Special Offers 🎉</Text>
          <Text style={styles.headerSubtitle}>Discover amazing savings on all our premium services.</Text>
        </LinearGradient>

        {/* --- 1. Refer & Earn Card --- */}
        <View style={styles.referCardContainer}>
            <View style={styles.referContent}>
              <Ionicons name="gift-outline" size={36} color="#F88310" />
              <View style={{ flex: 1, marginLeft: 15 }}>
                <Text style={styles.referTitle}>Refer a Friend, Get $50</Text>
                <Text style={styles.referSubtitle}>Share the magic. Earn credit for every successful referral.</Text>
              </View>
            </View>
            <TouchableOpacity onPress={handleRefer} style={styles.referButton}>
              <Text style={styles.referButtonText}>Refer Now <Ionicons name="arrow-forward-outline" size={14} color="#141413" /></Text>
            </TouchableOpacity>
        </View>

        {/* --- 2. Offer List --- */}
        <View style={styles.sectionTitleContainer}>
          <Text style={styles.sectionTitle}>Available Promotions</Text>
        </View>
        {OFFERS_DATA.map(offer => (
          <OfferCard key={offer.id} offer={offer} onCopy={copyCode} />
        ))}
        
        {/* --- 3. Terms & Conditions --- */}
        <View style={styles.termsContainer}>
          <Text style={styles.termsTitle}>Important Terms</Text>
          <Text style={styles.termsText}><Ionicons name="checkmark-circle-outline" size={14} color="#999" /> Offers are valid for a limited period only.</Text>
          <Text style={styles.termsText}><Ionicons name="checkmark-circle-outline" size={14} color="#999" /> Cannot be combined with other promotional codes.</Text>
          <Text style={styles.termsText}><Ionicons name="checkmark-circle-outline" size={14} color="#999" /> Applicable on first booking only (for FIRST50).</Text>
          <Text style={styles.termsText}><Ionicons name="checkmark-circle-outline" size={14} color="#999" /> Standard booking terms and conditions apply.</Text>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141413', // Deep Dark Background
  },
  header: {
    padding: 25,
    paddingTop: 60, // Space for status bar
    paddingBottom: 40,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    // Intense glow effect for premium look
    shadowColor: '#F88310',
    shadowOpacity: 0.8,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    elevation: 15,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '900',
    color: '#fff',
    marginBottom: 5,
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    fontSize: 15,
    color: '#fff9',
  },
  
  // --- Section Title ---
  sectionTitleContainer: {
    paddingHorizontal: 20,
    marginTop: 25,
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },

  // --- 1. Refer & Earn Card Styles ---
  referCardContainer: {
    marginHorizontal: 20,
    marginTop: -20, // Pulls the card slightly under the header
    backgroundColor: '#1E1E1D',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#F8831030', // Subtle orange border
    shadowColor: '#F88310',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  referContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  referTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  referSubtitle: {
    fontSize: 13,
    color: '#bbb',
    marginTop: 2,
  },
  referButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  referButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#141413',
  },

  // --- 2. Offer Card Styles ---
  offerCard: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 16,
    padding: 20,
    position: 'relative',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)', // Light border for definition
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 8 },
    elevation: 10,
  },
  discountBadge: {
    position: 'absolute',
    top: 15,
    right: 15,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    zIndex: 10,
  },
  discountText: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 14,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  offerContent: {
    paddingRight: 80,
    marginBottom: 15,
  },
  offerTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 5,
  },
  offerDescription: {
    fontSize: 14,
    color: '#fffb',
    marginBottom: 10,
  },
  validText: {
    fontSize: 13,
    color: '#fffa',
    fontWeight: '600',
  },
  codeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
  },
  codeBox: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.15)', // Semi-transparent black on gradient
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderStyle: 'dashed',
  },
  codeLabel: {
    fontSize: 11,
    color: '#fff7',
    marginBottom: 3,
  },
  codeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 2,
  },
  copyButton: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  copyGradient: {
    width: 55,
    height: 55,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  decorGlow: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    opacity: 0.1,
    top: -50,
    left: -50,
    zIndex: 1,
  },
  // --- 3. Terms & Conditions Styles ---
  termsContainer: {
    margin: 20,
    marginTop: 30,
    padding: 20,
    backgroundColor: '#1E1E1D',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#3A3A39',
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  termsTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#3A3A39',
    paddingBottom: 10,
  },
  termsText: {
    fontSize: 13,
    color: '#999',
    marginBottom: 10,
    lineHeight: 20,
  },
});