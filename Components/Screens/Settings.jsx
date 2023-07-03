import { Text, View, StyleSheet,Switch, TouchableOpacity, Platform} from 'react-native';
import React, {useLayoutEffect, useState } from "react";
// import Constants from 'expo-constants';
import Icon from "react-native-vector-icons/Ionicons";
import Icons from "react-native-vector-icons/AntDesign";

export default function Settings({navigation}) {

    const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

   const handleLogout = () => {
    // Handle logout logic here
    console.log('Logout');
  };

      useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Icon
          name={Platform.OS === 'ios' ? "ios-arrow-back-circle-sharp" : "arrow-back-circle-sharp"}
          size={30}
          color="black"
          style={{ marginLeft: 16 }}
          onPress={() => navigation.goBack()} // Example: open a drawer
        />
      ),
      headerRight: () => (
        <Icon
          name={Platform.OS === 'ios' ? "ios-share-sharp" : "share-social"}
          size={30}
          color="black"
          style={{ marginRight: 16 }}
        //   onPress={() => navigation.goBack()} // Example: open a drawer
        />
      ),
    });
  }, [navigation]);


  return (
   <View style={styles.container}>
      <View style={styles.section}>
        <Text style={[styles.sectionTitle , styles.item]}>Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={toggleNotifications}
          
          style={[styles.sectionTitle , styles.item]}

        />
      </View>
      <View style={styles.section}>
        
        <Text style={[styles.sectionTitle , styles.item]}>Profile</Text>
         <Icon
          name={Platform.OS === 'ios' ? "ios-chevron-forward-outline" : "chevron-forward-outline"}
          size={30}
          color="black"
          style={[{ marginRight: 16 } , styles.item]}
        //   onPress={() => navigation.goBack()} // Example: open a drawer
        />
      </View>
      <View style={styles.section}>
        <Text style={[styles.sectionTitle , styles.item]}>Category</Text>
         <Icon
          name={Platform.OS === 'ios' ? "ios-chevron-forward-outline" : "chevron-forward-outline"}
          size={30}
          color="black"
          style={[{ marginRight: 16 } , styles.item]}
        //   onPress={() => navigation.goBack()} // Example: open a drawer
        />
      </View>
      <View style={styles.section}>
        <Text style={[styles.sectionTitle , styles.item]}>Latest News</Text>
         <Icon
          name= {Platform.OS === 'ios' ? "ios-chevron-forward-outline" : "chevron-forward-outline"}
          size={30}
          color="black"
          style={[{ marginRight: 16 } , styles.item]}
        //   onPress={() => navigation.goBack()} // Example: open a drawer
        />
      </View>
      <View style={styles.section}>
        <Text style={[styles.sectionTitle , styles.item]}>Tags</Text>
         <Icon
          name={Platform.OS === 'ios' ? "ios-chevron-forward-outline" : "chevron-forward-outline"}
          size={30}
          color="black"
          style={[{ marginRight: 16 } , styles.item]}
        //   onPress={() => navigation.goBack()} // Example: open a drawer
        />
      </View>
      <View style={styles.section}>
        <Text style={[styles.sectionTitle , styles.item]}>Layout</Text>
         <Icon
          name={Platform.OS === 'ios' ? "ios-chevron-forward-outline" : "chevron-forward-outline"}
          size={30}
          color="black"
          style={[{ marginRight: 16 } , styles.item]}
        //   onPress={() => navigation.goBack()} // Example: open a drawer
        />
      </View>
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
        <Icons name='logout' size={24} color={"#fff"}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 50,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    // borderBottomColor: "#242B2E",
    // borderBottomWidth: 0.2,
  },

  item:{
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '400',
  },
  logoutButton: {
    backgroundColor: '#242B2E',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
    alignSelf: 'center',
  },
  logoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
