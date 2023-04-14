import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const DashboardScreen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome back, John!</Text>
        <Image source={require('../assets/profile.png')} style={styles.profileImage} />
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Total Sales</Text>
          <Text style={styles.cardValue}>$10,000</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>New Orders</Text>
          <Text style={styles.cardValue}>25</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Pending Orders</Text>
          <Text style={styles.cardValue}>10</Text>
        </View>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});
export default DashboardScreen;