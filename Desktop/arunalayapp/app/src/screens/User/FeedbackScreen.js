
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, ActivityIndicator } from 'react-native';
import { feedbackAPI } from '../../api/feedback';
import { bookingsAPI } from '../../api/bookings'; 
import Button from '../../components/Button';
import Input from '../../components/Input';
import colors from '../../utils/colors';
import Toast from '../../components/Toast';
import { LinearGradient } from 'expo-linear-gradient';

const FeedbackScreen = ({ route, navigation }) => {
  const { bookingId } = route.params;
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [loading, setLoading] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);
  const [loadingBooking, setLoadingBooking] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [toast, setToast] = useState({ message: '', type: '', isVisible: false });

  const showToast = (message, type) => {
    setToast({ message, type, isVisible: true });
  };

  const hideToast = () => {
    setToast({ message: '', type: '', isVisible: false });
  };

  const getBookingDetails = async (id) => {
    if (!id) {
        setFetchError('Error: Booking ID is missing.');
        setLoadingBooking(false);
        return;
    }
    
    setLoadingBooking(true);
    setFetchError(null);
    try {
      const bookingResponse = await bookingsAPI.getBookingDetails(id);
      if (bookingResponse && bookingResponse.data) {
        setBookingDetails(bookingResponse.data);
      } else {
         setFetchError('Booking details not found for this ID.');
      }
    } catch (error) {
      console.error("Failed to fetch booking details:", error);
      setFetchError(error.message || 'Failed to load service details.');
    } finally {
      setLoadingBooking(false);
    }
  };

  useEffect(() => {
    getBookingDetails(bookingId);
  }, [bookingId]);

  const handleRating = (value) => {
    setRating(value);
  };

  const handleSubmit = async () => {
    if (rating === 0) {
      showToast('Please select a rating', 'error');
      return;
    }

    if (!review.trim()) {
      showToast('Please write a review', 'error');
      return;
    }

    setLoading(true);
    try {
      const feedbackData = {
        bookingId,
        rating,
        review,
      };
      await feedbackAPI.submitFeedback(feedbackData);
      showToast('Feedback submitted successfully!', 'success');
      
      setTimeout(() => {
        navigation.goBack();
      }, 1500);
    } catch (error) {
      showToast(error.message || 'Failed to submit feedback', 'error');
    } finally {
      setLoading(false);
    }
  };

  const renderStars = () => {
    const stars = [];
    const ratingDescriptions = ['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity
          key={i}
          style={styles.starButton}
          onPress={() => handleRating(i)}
          activeOpacity={0.8}
        >
          <View style={[
            styles.starContainer,
            i <= rating && styles.starContainerActive
          ]}>
            <Text style={[
              styles.starText, 
              { color: i <= rating ? colors.primary : '#3A3A3A' }
            ]}>
              {i <= rating ? '★' : '☆'}
            </Text>
          </View>
        </TouchableOpacity>
      );
    }
    return (
      <View style={styles.starsWrapper}>
        <View style={styles.starsContainer}>
          {stars}
        </View>
        {rating > 0 && (
          <Text style={styles.ratingDescription}>{ratingDescriptions[rating]}</Text>
        )}
      </View>
    );
  };

  if (loadingBooking) {
    return (
      <View style={styles.loadingContainer}>
        <View style={styles.loadingCard}>
          <View style={styles.loaderWrapper}>
            <ActivityIndicator size="large" color={colors.primary} />
          </View>
          <Text style={styles.loadingText}>Loading booking details...</Text>
        </View>
      </View>
    );
  }

  if (fetchError || !bookingDetails) {
    return (
      <View style={styles.errorContainer}>
        <View style={styles.errorCard}>
          <View style={styles.errorIconContainer}>
            <Text style={styles.errorIcon}>⚠️</Text>
          </View>
          <Text style={styles.errorTitle}>{fetchError || 'Details unavailable'}</Text>
          {/* <Text style={styles.bookingIdLabel}>Booking #{bookingId}</Text> */}
          <Button 
            title="Retry"
            onPress={() => getBookingDetails(bookingId)}
            buttonStyle={styles.retryButton}
          />
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  const { agentId, serviceId, selectedDate, selectedTime } = bookingDetails;
  const serviceName = serviceId?.title || 'Unknown Service';
  const providerName = agentId?.name || 'Unknown Provider';
  const serviceImageUrl = serviceId?.imageUrl || '';
  const serviceDescription = serviceId?.description || '';
  const scheduledDateTime = selectedDate && selectedTime ? 
    `${new Date(selectedDate).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })} • ${selectedTime}` : 'N/A';

  return (
    <View style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Premium Header with Gradient */}
        <View style={styles.header}>
          <View style={styles.headerGlow} />
          <Text style={styles.title}>Rate Your{'\n'}Experience</Text>
          <Text style={styles.subtitle}>Your feedback helps us improve</Text>
        </View>
        
        {/* Premium Service Card */}
        <View style={styles.serviceCard}>
          <View style={styles.imageContainer}>
            {serviceImageUrl ? (
              <Image 
                source={{ uri: serviceImageUrl }} 
                style={styles.serviceImage} 
                resizeMode="cover"
              />
            ) : (
              <View style={styles.imagePlaceholder}>
                <Text style={styles.imagePlaceholderText}>📦</Text>
              </View>
            )}
            <View style={styles.imageOverlay} />
          </View>
          
          <View style={styles.cardContent}>
            <View style={styles.serviceHeader}>
              <View style={styles.serviceInfo}>
                <Text style={styles.serviceName}>{serviceName}</Text>
                <View style={styles.providerRow}>
                  <View style={styles.providerDot} />
                  <Text style={styles.providerName}>{providerName}</Text>
                </View>
              </View>
              {/* <View style={styles.bookingBadge}>
                <Text style={styles.bookingBadgeText}>#{bookingId}</Text>
              </View> */}
            </View>
            
            <View style={styles.metaRow}>
              <View style={styles.dateTimeChip}>
                <Text style={styles.dateTimeIcon}>📅</Text>
                <Text style={styles.dateTimeText}>{scheduledDateTime}</Text>
              </View>
            </View>
            
            {serviceDescription ? (
              <Text style={styles.description} numberOfLines={2}>{serviceDescription}</Text>
            ) : null}
          </View>
        </View>
        
        {/* Rating Section - Enhanced */}
        <View style={styles.ratingCard}>
          <View style={styles.ratingHeader}>
            <Text style={styles.sectionTitle}>How was it?</Text>
            <Text style={styles.sectionSubtitle}>Tap stars to rate</Text>
          </View>
          {renderStars()}
        </View>
        
        {/* Review Section - Modern Design */}
        <View style={styles.reviewCard}>
          <View style={styles.reviewHeader}>
            <Text style={styles.sectionTitle}>Share Details</Text>
            <Text style={styles.reviewCount}>{review.length}/500</Text>
          </View>
          <Text style={styles.reviewHint}>Tell us what made this experience special or what we could improve</Text>
          <View style={styles.inputWrapper}>
            <Input
              value={review}
              onChangeText={(text) => text.length <= 500 && setReview(text)}
              placeholder="Write your review here..."
              multiline
              numberOfLines={6}
              style={styles.reviewInput}
              placeholderTextColor="#666"
              maxLength={500}
            />
          </View>
        </View>
        
        {/* Submit Button with Gradient */}
        <TouchableOpacity 
          onPress={handleSubmit}
          disabled={loading || rating === 0}
          activeOpacity={0.9}
          style={[
            styles.submitButton,
            (loading || rating === 0) && styles.submitButtonDisabled
          ]}
        >
          <View style={styles.submitButtonContent}>
            {loading ? (
              <>
                <ActivityIndicator size="small" color="#000" />
                <Text style={styles.submitButtonText}>Submitting...</Text>
              </>
            ) : (
              <>
                <Text style={styles.submitButtonText}>Submit Feedback</Text>
                <Text style={styles.submitButtonIcon}>→</Text>
              </>
            )}
          </View>
        </TouchableOpacity>

        <View style={styles.bottomSpacer} />
      </ScrollView>

      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onHide={hideToast}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  scrollContent: {
    padding: 20,
  },
  
  // Loading State
  loadingContainer: {
    flex: 1,
    backgroundColor: '#0A0A0A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingCard: {
    backgroundColor: '#1A1A1A',
    padding: 40,
    borderRadius: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  loaderWrapper: {
    marginBottom: 20,
  },
  loadingText: {
    fontSize: 16,
    color: '#999',
    fontWeight: '600',
  },

  // Error State
  errorContainer: {
    flex: 1,
    backgroundColor: '#0A0A0A',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorCard: {
    backgroundColor: '#1A1A1A',
    padding: 32,
    borderRadius: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2A2A2A',
    width: '100%',
  },
  errorIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#2A2A2A',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  errorIcon: {
    fontSize: 40,
  },
  errorTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 8,
  },
  bookingIdLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 24,
  },
  retryButton: {
    marginBottom: 16,
    backgroundColor: colors.primary,
    borderRadius: 16,
  },
  backText: {
    color: '#999',
    fontSize: 16,

    fontWeight: '600',
  },

  // Header
  header: {
    alignItems: 'center',
    marginBottom: 32,
    marginTop: 20,
    position: 'relative',
  },
  headerGlow: {
    position: 'absolute',
    top: -20,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: colors.primary,
    opacity: 0.1,
    blur: 60,
  },
  title: {
    fontSize: 36,
    fontWeight: '900',
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 8,
    lineHeight: 42,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    fontWeight: '500',
  },

  // Service Card
  serviceCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 24,
    overflow: 'hidden',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  imageContainer: {
    position: 'relative',
    height: 180,
  },
  serviceImage: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    background: 'linear-gradient(to top, rgba(26,26,26,0.9), transparent)',
  },
  imagePlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#2A2A2A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholderText: {
    fontSize: 48,
  },
  cardContent: {
    padding: 20,
  },
  serviceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  serviceInfo: {
    flex: 1,
  },
  serviceName: {
    fontSize: 22,
    fontWeight: '800',
    color: '#FFF',
    marginBottom: 6,
    letterSpacing: -0.3,
  },
  providerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  providerDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.primary,
    marginRight: 8,
  },
  providerName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#999',
  },
  bookingBadge: {
    backgroundColor: colors.primary + '22',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.primary + '44',
  },
  bookingBadgeText: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '700',
  },
  metaRow: {
    marginBottom: 12,
  },
  dateTimeChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2A2A2A',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  dateTimeIcon: {
    fontSize: 14,
    marginRight: 6,
  },
  dateTimeText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#CCC',
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },

  // Rating Card
  ratingCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 24,
    padding: 24,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  ratingHeader: {
    alignItems: 'center',
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFF',
    marginBottom: 4,
    letterSpacing: -0.3,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  starsWrapper: {
    alignItems: 'center',
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  starButton: {
    marginHorizontal: 4,
  },
  starContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#2A2A2A',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#3A3A3A',
  },
  starContainerActive: {
    backgroundColor: colors.primary + '22',
    borderColor: colors.primary + '44',
  },
  starText: {
    fontSize: 32,
  },
  ratingDescription: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primary,
    marginTop: 16,
    letterSpacing: 0.5,
  },

  // Review Card
  reviewCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 24,
    padding: 24,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  reviewCount: {
    fontSize: 13,
    color: '#666',
    fontWeight: '600',
  },
  reviewHint: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
    lineHeight: 20,
  },
  inputWrapper: {
    position: 'relative',
  },
  reviewInput: {
    minHeight: 140,
    textAlignVertical: 'top',
    backgroundColor: '#0A0A0A',
    borderWidth: 1,
    borderColor: '#2A2A2A',
    borderRadius: 16,
    padding: 16,
    fontSize: 15,
    color: '#FFF',
    lineHeight: 22,
  },

  // Submit Button
  submitButton: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 18,
    marginTop: 8,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 12,
  },
  submitButtonDisabled: {
    opacity: 0.5,
  },
  submitButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
    fontSize: 17,
    fontWeight: '800',
    color: '#000',
    marginRight: 8,
    letterSpacing: 0.3,
  },
  submitButtonIcon: {
    fontSize: 20,
    color: '#000',
    fontWeight: '800',
  },
  bottomSpacer: {
    height: 40,
  },
});

export default FeedbackScreen;