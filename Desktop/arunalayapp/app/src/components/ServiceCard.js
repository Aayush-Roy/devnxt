
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../utils/colors';

const ServiceCard = ({ service, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      
      {/* IMAGE */}
      <View style={styles.imageWrapper}>
        <Image source={{ uri: service.imageUrl }} style={styles.image} />

        {/* VERIFIED BADGE */}
        <View style={styles.verifiedBadge}>
          <MaterialIcons name="verified" size={16} color="#fff" />
          <Text style={styles.verifiedText}>Verified</Text>
        </View>
      </View>

      {/* DETAILS */}
      <View style={styles.details}>
        
        <Text style={styles.title}>{service.title}</Text>

        {/* CATEGORY PILL */}
        <View style={styles.categoryPill}>
          <MaterialCommunityIcons name="tag-outline" size={14} color={colors.primary} />
          <Text style={styles.categoryText}>{service.category}</Text>
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          {/* PRICE */}
          <View style={styles.priceRow}>
            <MaterialCommunityIcons name="currency-inr" size={18} color={colors.primary} />
            <Text style={styles.price}>{service.price}</Text>
          </View>

          {/* RATING */}
          <View style={styles.ratingRow}>
            <Ionicons name="star" size={16} color="#facc15" />
            <Text style={styles.ratingText}>{service.avgRating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 16,
    overflow: 'hidden',
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 4,
  },

  imageWrapper: {
    position: 'relative',
  },

  image: {
    width: '100%',
    height: 170,
  },

  verifiedBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: colors.primary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  verifiedText: {
    color: "#fff",
    fontSize: 11,
    marginLeft: 4,
    fontWeight: '600',
  },

  details: {
    padding: 15,
  },

  title: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },

  categoryPill: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: colors.background,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
  },

  categoryText: {
    marginLeft: 6,
    color: colors.gray,
    fontSize: 13,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },

  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  price: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 4,
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  ratingText: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
});

export default ServiceCard;
