import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../utils/colors';

const StarRating = ({ rating, size = 20, interactive = false, onRatingChange }) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <TouchableOpacity
            key={i}
            disabled={!interactive}
            onPress={() => interactive && onRatingChange(i)}
          >
            <Text style={[styles.star, { color: colors.primary, fontSize: size }]}>
              ★
            </Text>
          </TouchableOpacity>
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <TouchableOpacity
            key={i}
            disabled={!interactive}
            onPress={() => interactive && onRatingChange(i)}
          >
            <Text style={[styles.star, { color: colors.primary, fontSize: size }]}>
              ☆
            </Text>
          </TouchableOpacity>
        );
      } else {
        stars.push(
          <TouchableOpacity
            key={i}
            disabled={!interactive}
            onPress={() => interactive && onRatingChange(i)}
          >
            <Text style={[styles.star, { color: colors.border, fontSize: size }]}>
              ☆
            </Text>
          </TouchableOpacity>
        );
      }
    }
    
    return stars;
  };

  return (
    <View style={styles.container}>
      {renderStars()}
      {interactive && (
        <Text style={styles.ratingText}>
          {rating ? `${rating} / 5` : 'Select rating'}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    marginHorizontal: 2,
  },
  ratingText: {
    color: colors.text,
    marginLeft: 10,
    fontSize: 14,
  },
});

export default StarRating;