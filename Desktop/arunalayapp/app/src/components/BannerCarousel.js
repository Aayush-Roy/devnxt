import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');
const BANNER_WIDTH = width - 40;
const BANNER_HEIGHT = 180;

const BannerCarousel = () => {
  const scrollViewRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const banners = [
    {
      id: 1,
      title: 'Expert Physiotherapy',
      subtitle: 'At Your Doorstep',
      description: 'Book certified physios',
      gradient: ['#FF6B35', '#FF8C42'],
      icon: '🏥',
      offer: '40% OFF',
    },
    {
      id: 2,
      title: 'Pain Relief Therapy',
      subtitle: 'Specialized Treatment',
      description: 'Back, neck & joint pain',
      gradient: ['#4ECDC4', '#44A08D'],
      icon: '💪',
      offer: 'New User',
    },
    {
      id: 3,
      title: 'Sports Injury Care',
      subtitle: 'Recovery Programs',
      description: 'Get back to your game',
      gradient: ['#667EEA', '#764BA2'],
      icon: '⚡',
      offer: 'Premium',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % banners.length;
      setActiveIndex(nextIndex);
      scrollViewRef.current?.scrollTo({
        x: nextIndex * (BANNER_WIDTH + 16),
        animated: true,
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / (BANNER_WIDTH + 16));
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollContent}
        snapToInterval={BANNER_WIDTH + 16}
        decelerationRate="fast"
      >
        {banners.map((banner, index) => (
          <TouchableOpacity
            key={banner.id}
            activeOpacity={0.95}
            style={styles.bannerWrapper}
          >
            <LinearGradient
              colors={banner.gradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.banner}
            >
              {/* Decorative Circles */}
              <View style={[styles.decorCircle, styles.circle1]} />
              <View style={[styles.decorCircle, styles.circle2]} />
              <View style={[styles.decorCircle, styles.circle3]} />

              {/* Content */}
              <View style={styles.bannerContent}>
                <View style={styles.leftContent}>
                  <View style={styles.offerBadge}>
                    <Text style={styles.offerText}>{banner.offer}</Text>
                  </View>
                  <Text style={styles.bannerTitle}>{banner.title}</Text>
                  <Text style={styles.bannerSubtitle}>{banner.subtitle}</Text>
                  <Text style={styles.bannerDescription}>{banner.description}</Text>
                  
                  <View style={styles.ctaButton}>
                    <Text style={styles.ctaText}>Book Now</Text>
                    <Text style={styles.ctaArrow}>→</Text>
                  </View>
                </View>

                <View style={styles.rightContent}>
                  <View style={styles.iconCircle}>
                    <Text style={styles.iconText}>{banner.icon}</Text>
                  </View>
                  <View style={styles.glowEffect} />
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        {banners.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              activeIndex === index && styles.activeDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

// Main Arunalaya Banner Component with Multiple Styles
const ArunalayaBanner = () => {
  return (
    <View style={styles.mainContainer}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Arunalaya</Text>
          <Text style={styles.headerSubtitle}>Physiotherapy at Home</Text>
        </View>
        <TouchableOpacity style={styles.notificationButton}>
          <Text style={styles.notificationIcon}>🔔</Text>
          <View style={styles.notificationBadge} />
        </TouchableOpacity>
      </View>

      {/* Carousel Banners */}
      <BannerCarousel />

      {/* Featured Services Grid */}
      {/* <View style={styles.servicesSection}>
        <Text style={styles.sectionTitle}>Our Services</Text>
        <View style={styles.servicesGrid}>
          <TouchableOpacity style={styles.serviceCard}>
            <View style={[styles.serviceIcon, { backgroundColor: '#FF6B3522' }]}>
              <Text style={styles.serviceEmoji}>🦴</Text>
            </View>
            <Text style={styles.serviceTitle}>Orthopedic</Text>
            <Text style={styles.serviceSubtitle}>Joint care</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.serviceCard}>
            <View style={[styles.serviceIcon, { backgroundColor: '#4ECDC422' }]}>
              <Text style={styles.serviceEmoji}>🧘</Text>
            </View>
            <Text style={styles.serviceTitle}>Rehabilitation</Text>
            <Text style={styles.serviceSubtitle}>Recovery</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.serviceCard}>
            <View style={[styles.serviceIcon, { backgroundColor: '#667EEA22' }]}>
              <Text style={styles.serviceEmoji}>⚡</Text>
            </View>
            <Text style={styles.serviceTitle}>Sports Injury</Text>
            <Text style={styles.serviceSubtitle}>Athletes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.serviceCard}>
            <View style={[styles.serviceIcon, { backgroundColor: '#FF8C4222' }]}>
              <Text style={styles.serviceEmoji}>🎯</Text>
            </View>
            <Text style={styles.serviceTitle}>Pain Relief</Text>
            <Text style={styles.serviceSubtitle}>Therapy</Text>
          </TouchableOpacity>
        </View>
      </View> */}

      {/* Single Promotional Banner */}
      <TouchableOpacity style={styles.promoBanner} activeOpacity={0.9}>
        <LinearGradient
          colors={['#1A1A1A', '#2A2A2A']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.promoGradient}
        >
          <View style={styles.promoContent}>
            <View style={styles.promoLeft}>
              <View style={styles.newBadge}>
                <Text style={styles.newBadgeText}>NEW</Text>
              </View>
              <Text style={styles.promoTitle}>Home Visit Package</Text>
              <Text style={styles.promoDescription}>
                10 sessions • Personalized care
              </Text>
              <View style={styles.promoPrice}>
                <Text style={styles.priceStrike}>₹5000</Text>
                <Text style={styles.priceActual}>₹2999</Text>
              </View>
            </View>
            <View style={styles.promoRight}>
              <View style={styles.promoIconBg}>
                <Text style={styles.promoIcon}>🏠</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },

  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: '#FFF',
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
    marginTop: 2,
  },
  notificationButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#1A1A1A',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2A2A2A',
    position: 'relative',
  },
  notificationIcon: {
    fontSize: 20,
  },
  notificationBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF6B35',
  },

  // Carousel Container
  container: {
    marginBottom: 24,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  bannerWrapper: {
    marginRight: 16,
  },

  // Banner Card
  banner: {
    width: BANNER_WIDTH,
    height: BANNER_HEIGHT,
    borderRadius: 24,
    overflow: 'hidden',
    position: 'relative',
  },
  decorCircle: {
    position: 'absolute',
    borderRadius: 1000,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  circle1: {
    width: 120,
    height: 120,
    top: -40,
    right: -20,
  },
  circle2: {
    width: 80,
    height: 80,
    bottom: -20,
    left: 40,
  },
  circle3: {
    width: 60,
    height: 60,
    top: 60,
    right: 80,
  },

  // Banner Content
  bannerContent: {
    flex: 1,
    flexDirection: 'row',
    padding: 24,
    justifyContent: 'space-between',
  },
  leftContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  offerBadge: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  offerText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
  },
  bannerTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#FFF',
    marginTop: 8,
    letterSpacing: -0.5,
  },
  bannerSubtitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFF',
    opacity: 0.9,
  },
  bannerDescription: {
    fontSize: 13,
    color: '#FFF',
    opacity: 0.8,
    fontWeight: '600',
    marginTop: 4,
  },
  ctaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 16,
    alignSelf: 'flex-start',
    marginTop: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  ctaText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '800',
    marginRight: 6,
  },
  ctaArrow: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '800',
  },

  // Right Content (Icon)
  rightContent: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  iconText: {
    fontSize: 36,
  },
  glowEffect: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    opacity: 0.5,
  },

  // Pagination
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#333',
    marginHorizontal: 4,
  },
  activeDot: {
    width: 24,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FF6B35',
  },

  // Services Section
  servicesSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFF',
    marginBottom: 16,
    letterSpacing: -0.3,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceCard: {
    width: (width - 52) / 2,
    backgroundColor: '#1A1A1A',
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  serviceIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  serviceEmoji: {
    fontSize: 28,
  },
  serviceTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#FFF',
    marginBottom: 2,
  },
  serviceSubtitle: {
    fontSize: 12,
    color: '#666',
    fontWeight: '600',
  },

  // Promo Banner
  promoBanner: {
    marginHorizontal: 20,
    marginBottom: 24,
    borderRadius: 24,
    overflow: 'hidden',
  },
  promoGradient: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    borderRadius: 24,
  },
  promoContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  promoLeft: {
    flex: 1,
  },
  newBadge: {
    backgroundColor: '#FF6B3522',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#FF6B3544',
  },
  newBadgeText: {
    color: '#FF6B35',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
  },
  promoTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFF',
    marginBottom: 4,
    letterSpacing: -0.3,
  },
  promoDescription: {
    fontSize: 13,
    color: '#666',
    fontWeight: '600',
    marginBottom: 12,
  },
  promoPrice: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceStrike: {
    fontSize: 14,
    color: '#666',
    textDecorationLine: 'line-through',
    marginRight: 8,
  },
  priceActual: {
    fontSize: 20,
    fontWeight: '900',
    color: '#FF6B35',
  },
  promoRight: {
    marginLeft: 16,
  },
  promoIconBg: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#FF6B3522',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FF6B3544',
  },
  promoIcon: {
    fontSize: 32,
  },
});

export default ArunalayaBanner;