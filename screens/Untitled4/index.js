import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const SubscriptionPlanScreen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Choose a Subscription Plan</Text>
      </View>
      <View style={styles.planContainer}>
        <View style={styles.plan}>
          <Text style={styles.planTitle}>Basic</Text>
          <Image source={require('../assets/basic.png')} style={styles.planImage} />
          <Text style={styles.planPrice}>$9.99/month</Text>
          <Text style={styles.planDescription}>Access to basic features</Text>
          <TouchableOpacity style={styles.planButton}>
            <Pressable onPress={() => {
            navigation.navigate("Untitled5");
          }}><Text style={styles.planButtonText}>Choose Plan</Text></Pressable>
          </TouchableOpacity>
        </View>
        <View style={styles.plan}>
          <Text style={styles.planTitle}>Premium</Text>
          <Image source={require('../assets/premium.png')} style={styles.planImage} />
          <Text style={styles.planPrice}>$19.99/month</Text>
          <Text style={styles.planDescription}>Access to premium features</Text>
          <TouchableOpacity style={styles.planButton}>
            <Pressable onPress={() => {
            navigation.navigate("Untitled5");
          }}><Text style={styles.planButtonText}>Choose Plan</Text></Pressable>
          </TouchableOpacity>
        </View>
        <View style={styles.plan}>
          <Text style={styles.planTitle}>Ultimate</Text>
          <Image source={require('../assets/ultimate.png')} style={styles.planImage} />
          <Text style={styles.planPrice}>$29.99/month</Text>
          <Text style={styles.planDescription}>Access to all features</Text>
          <TouchableOpacity style={styles.planButton}>
            <Pressable onPress={() => {
            navigation.navigate("Untitled5");
          }}><Text style={styles.planButtonText}>Choose Plan</Text></Pressable>
          </TouchableOpacity>
        </View>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  planContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20
  },
  plan: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: '30%'
  },
  planTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  planImage: {
    width: 100,
    height: 100,
    marginBottom: 10
  },
  planPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  planDescription: {
    fontSize: 14,
    marginBottom: 10
  },
  planButton: {
    backgroundColor: '#007aff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  planButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default SubscriptionPlanScreen;