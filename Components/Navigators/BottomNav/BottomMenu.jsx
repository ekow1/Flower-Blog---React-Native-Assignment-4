// import * as React from 'react';
import {Text, View , Button , Platform, StyleSheet, TouchableOpacity} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../Screens/Home';
import Profile from '../../Screens/Profile';
// import Contact from '../../Screens/Contact';
import Settings from '../../Screens/Settings';
// import {Ionicons , AntDesign} from '@expo/vector-icons';
import Icon from "react-native-vector-icons/Ionicons";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import Preview from '../../Screens/Preview';
// import ProductScreen from '../../Screens/Data';
import ListOfFlowers from '../../Screens/Data';


const Tab = createBottomTabNavigator();

const BottomNavigation = ({navigation}) =>{
  return(

    <View style={{flex:1, flexDirection:'row',}}>
     <Tab.Navigator
      initialRouteName="Data"
      screenOptions={{
             
       tabBarStyle: { position: 'absolute', backgroundColor:'transparent' ,  top: 100,
              bottom: 320,
              left: 0,
              right: 0,},
        tabBarActiveTintColor: '#242B2E', // Change the active tab color
          tabBarInactiveTintColor: 'gray', // Change the inactive tab color
          tabBarStyle: {
            backgroundColor: '#fff', // Change the background color of the bottom menu
            // borderTopWidth: 5, // Add a top border to the bottom menu
            // borderTopColor: 'lightgray',
            paddingVertical : 5,
            height : 70,
          },
          tabBarLabelStyle: {
            fontSize: 14, // Change the font size of the tab labels
            fontWeight: 'bold', // Apply a bold font weight to the tab labels
            marginBottom: 5, // Adjust the spacing between the tab labels and icons
           
          },
      
       
      }}
    >
        
      <Tab.Screen
        name="ListOfFlowers"
        component={ListOfFlowers}
        options={{

         headerLeft: () => (

        <TouchableOpacity
       
        >
            <Icons
          name="dots-grid"
          size={24}
          color="black"
          style={{ marginLeft: 16 }}
           
          
           
          // Example: open a drawer
        />
        </TouchableOpacity>
        ),
         headerRight: () => (
        <Icon
          name="search-outline"
          size={24}
          color="black"
          style={{ marginRight: 16 }}
           // Example: open a drawer
        />),
            title: "Discover",
            headerTintColor: "#000",
            headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => (
            <Icon name={Platform.OS === 'ios' ? "ios-home" : "md-home"} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Preview"
        component={Preview}
        options={{

        //  headerLeft: ({navigation}) => (

        // <TouchableOpacity

        //  onPress={() => navigation.goBack()} 
        
        // >

        //     <Icon
        //   name="ios-arrow-back-circle-sharp"
        //   size={30}
        //   color="black"
        //   style={{ marginLeft: 16 }}
        //    // Example: open a drawer
        // />
        // </TouchableOpacity>
        // ),
        headerRight: () => (

        <View style={{flex:1 , flexDirection:'row' , alignItems:'center'}}>
          <Icon
          name="headset"
          size={24}
          color="black"
          style={{ marginRight: 16 }}
           // Example: open a drawer
        />
          <Icon
          name="heart-outline"
          size={24}
          color="black"
          style={{ marginRight: 16 }}
           // Example: open a drawer
        />
          <Icon
          name="share-social"
          size={24}
          color="black"
          style={{ marginRight: 16 }}
           // Example: open a drawer
        />
        </View>
        
        
        ),

       
          title: "Explore",
            headerTintColor: "#000",
            headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => (
           <Icon name={Platform.OS === 'ios' ? "ios-folder-open" : "md-folder-open"} color={color} size={size} />

          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
             headerTintColor: "#000",
            headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => (
            <Icon name={Platform.OS === 'ios' ? "ios-person-circle" : "md-person-circle"} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: "Settings",
             headerTintColor: "#000",
            headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => (
            <Icon name={Platform.OS === 'ios' ? "ios-settings" : "md-settings"} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
    </View>

  )
}


export default BottomNavigation ;


const styles = StyleSheet.create({
  tabBar: {
    
    
  },
  tabLabel: {
    fontSize: 10, // Change the font size of the tab labels
    fontWeight: 'bold', // Apply a bold font weight to the tab labels
    marginBottom: 5, // Adjust the spacing between the tab labels and icons
  },})