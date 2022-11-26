import React from 'react';
import {View, ScrollView , Image , StyleSheet} from 'react-native';





export default function BestChefs() {
    const img1 = require('../assets/intro.png')
   
  return (
    <View style={{marginTop:15}}>
    <ScrollView horizontal={true} >
    <View>
      <Image style={styles.img} source={img1}/>
    </View>
    <View>
       <Image style={styles.img} source={img1}/>
    </View>
    <View>
       <Image style={styles.img} source={img1}/>
    </View>
    <View>
      <Image style={styles.img} source={img1}/>
    </View>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    img:{
        resizeMode: 'center',
        width:80,
        height:80,
        marginLeft:5,
        borderRadius:20
    }
  
  });