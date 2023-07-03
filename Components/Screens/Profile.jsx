import React, {useLayoutEffect} from "react";

import { StyleSheet, Text, View , Image , TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

// import profile from "profile.jpg";

export default function Page({navigation}) {
     useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Icon
          name="ios-arrow-back-circle-sharp"
          size={30}
          color="black"
          style={{ marginLeft: 16 }}
          onPress={() => navigation.goBack()} // Example: open a drawer
        />
      ),
      headerRight: () => (
        <Icon
          name="ellipsis-vertical-circle-sharp"
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
      {/* <View style={[styles.titleBar , styles.shadowProp ]} > 
      <TouchableOpacity 

        onPress={() => navigation.goBack()}
      
      >
         <Ionicons name="ios-arrow-back" size={24} color="#000" ></Ionicons>
      </TouchableOpacity>
     
     
      <Ionicons name="ellipsis-vertical" size={24} color="#000"></Ionicons>
      
      </View> */}

      <View style={{alignSelf : 'center'}} >

        <View style={styles.profileImage} >
          <Image source={ require( '../images/ekow.webp')}  style={styles.image} />

        </View>
        <View style={styles.icon} >
          
        <Icon name="ios-camera-outline" size={15} color="#fff" ></Icon>

        </View>

      

      </View>




      <View  style={styles.profileDetail}>

        <View>

          <Text style={styles.line1}>School</Text>

          <View style={styles.line2}>

            <Text style={styles.lineText}>Codetrain</Text>
          
          </View>
          
        </View>

        <View>

          <View style={styles.line3}>

          <Text style={styles.line1}>Email</Text>
          <Icon name="add-outline" size={25} color="#000" ></Icon>
          
          </View>

          <Text style={[ styles.line2 , styles.lineText] }>ekowfirmino@yahoo.com</Text>
          
        </View>


        <View>

          <Text style={[styles.line1 , styles.line4]}>Name</Text>

          <View style={styles.line2}>

            <Text style={styles.lineText}>Enoch Ekow Enu</Text>
          
          </View>

          
          
        </View>


        <View>

          <Text style={[styles.line1 , styles.line4]}>Nickname</Text>

          <View style={styles.line2}>

            <Text style={styles.lineText}>Unavailable</Text>
          
          </View>
          
        </View>



        <View>

          <View style={styles.line3}>

          <Text style={[styles.line1 , styles.line4]}>Emergency Contact</Text>
          <Icon name="phone-portrait-outline" size={20} color="#000" ></Icon>
          
          </View>

          <Text style={[ styles.line2 , styles.lineText] }>+233-593-344-313</Text>
          
        </View>


        <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Update Profile</Text>
      </TouchableOpacity>


        </View>



    </View>



    
    
  );
}

const styles = StyleSheet.create({
  
  container : {
    flex : 1,
    // backgroundColor : "#fff",
    marginTop: 20,
    

  },

  titleBar:{
    flexDirection : "row",
    justifyContent : "space-between",
   
    paddingHorizontal : 20,
    marginVertical : 10,
    // backgroundColor : "#008F8C",
    paddingVertical : 10,
   

  },

  titleText:{
    color : "#fff",
    fontSize : 18,
    fontWeight : "700",


  },

  profileImage :{

    width : 120,
    height : 120,
    overflow : "hidden",
    borderRadius : 100,
    borderColor: '#000',
     borderWidth : 3,
     marginTop: 40,

  },

  image :{
    flex:1,
     width:undefined,
    resizeMode:'cover'
    
 
  },

  icon:{
    backgroundColor : "#242B2E",
    position : "absolute",
    height : 25,
    width : 25,
    borderRadius : 30,
    justifyContent: "center", 
    alignItems : "center",
    bottom : 10,
    right : 5,
    
  },

  profileDetail: {

  
    flexDirection : "column",
    marginHorizontal : 40,
    marginVertical : 50,
   gap:20,
  },


  line1: {

    fontSize : 15,
    color : "#000",
    fontWeight : '700',
    marginBottom : 3,


  },

  line2 :{

    flexDirection : "row",
    justifyContent : "space-between",
    borderBottomColor : "white",
    borderBottomWidth : 0.5,

  },

  line3 : {

    flexDirection : "row",
    justifyContent : "space-between",
      
    

  },

  line4 : {

    color : "#000",
  
  },

  lineText :{
    fontSize : 15,
    fontWeight : "normal",
    
    
  },

  texticon : {

    fontWeight : '300',

  },

  button: {
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 15,
    borderRadius : 20,
    marginHorizontal : 70,
    marginTop : 30 ,
    
    
  },

  buttonText : {
    color : '#fff',
    fontWeight : 'normal',
    fontSize : 15,

  }
});