import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const PaymentsScreen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Payments</Text>
      </View>
      <View style={styles.content}>
        <Image source={require('../assets/payment.png')} style={styles.image} />
        <Text style={styles.text}>No payments made yet</Text>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    height: 80,
    backgroundColor: '#2f95dc',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  text: {
    fontSize: 18,
    color: '#888'
  }
});
export default PaymentsScreen;