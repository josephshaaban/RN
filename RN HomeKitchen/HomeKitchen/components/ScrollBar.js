import React from 'react';
import {View, ScrollView,Image,StyleSheet ,Text, ImageBackground} from 'react-native';
import Colors from '../constants/Colors';



export default function ScrollBar() {
  const img1 = require('../assets/intro.png')
 
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
     <View >
        <ImageBackground style={styles.img} source={img1}>
           <Text style={styles.text}>Desert Desert</Text>
        </ImageBackground>
        {/* <Text>Hello</Text>  */}
         {/* <View style={styles.overlay} />
        <View style={{border:'2px solid red'}}>
        </View> */}
  </View>


  <View >
        <ImageBackground style={styles.img} source={img1}>
           <Text style={styles.text}>Desert</Text>
        </ImageBackground>
        {/* <Text>Hello</Text>  */}
  </View>


  <View >
        <ImageBackground style={styles.img} source={img1}>
           <Text style={styles.text}>Desert</Text>
        </ImageBackground>
        {/* <Text>Hello</Text>  */}
        
  </View>


  

  
    </ScrollView>
  );
}

const styles = StyleSheet.create({
 
  img:{
      resizeMode: 'center',
      width:150,
      height:150,
      marginLeft:10,
      borderRadius:25,
      
  },

  overlay:{
   position:'absolute',
   top:0,
   left:8,
   right:0,
   bottom:0,
   backgroundColor:'rgba(150,0,0,0.1)',
   borderRadius:20
  },
  text:{
    textAlign:'center',
    color:Colors.primaryColor,
    top:'70%',
    fontSize:20,
  
   }

});