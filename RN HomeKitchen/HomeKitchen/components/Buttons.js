import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import Colors from '../constants/Colors';

const PrimaryButton = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnContainer}>
       <View style={{flexDirection:'row',justifyContent:'space-between'}}>
       <Ionicons name={"star-outline"} size={15} color={Colors.white} />
        <Text style={{marginLeft:15,color:Colors.white}}>4.2</Text>
       </View>
      </View>
    </TouchableOpacity>
  );
};


const Fellow = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} >
      <View style={style.follow}>
       <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{color:"rgba(101, 193, 140, 0.55)"}}>{title}</Text>
       </View>
      </View>
    </TouchableOpacity>
  );
};

const PreOrder = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} >
      <View style={style.btnContainer}>
       <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{color:Colors.white}}>{title}</Text>
       </View>
      </View>
    </TouchableOpacity>
  );
};

const AddToCart = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.addToCart}>
        <Text style={style.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};


const style = StyleSheet.create({
  title: {color: Colors.white, fontWeight: 'bold', fontSize: 18},
  btnContainer: {
    backgroundColor: Colors.red,
    height: 30,
    width:80,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  follow:{
    backgroundColor: "rgba(101, 193, 140, 0.22)",
    height: 30,
    width:60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCart:{
      backgroundColor: Colors.primaryColor,
      height: 60,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',

  }
});

export {
  PrimaryButton,
  Fellow,
  PreOrder ,
  AddToCart
};
