import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity } from "react-native";
import { TextInput } from 'react-native-paper';

const image = require('../assets/background.png');

const Login = () => {
    const [text, setText] = React.useState("");
    return (
        <View style={styles.container}>
        <Image source={image} resizeMode="cover" style={styles.image}></Image>
        <Text style={styles.text}>Login</Text>
            <TextInput
                label="Email"
                type='flat'
                value={text}
                onChangeText={text => setText(text)}
                underlineColor='#E4E4E4'
                outlineColor='#E4E4E4'
                style={{ marginTop:'30%', width:'80%', alignSelf:'center', backgroundColor:'#E4E4E4'}}
                />
                <TextInput
                label="Email"
                type='flat'
                value={text}
                onChangeText={text => setText(text)}
                underlineColor='#E4E4E4'
                outlineColor='#E4E4E4'
                style={{ marginTop:'3%', width:'80%', alignSelf:'center', backgroundColor:'#E4E4E4'}}
                />
                <TouchableOpacity>
                    <Text style={styles.textPass}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={console.log} style={styles.login}> 
                    <Text style={styles.button}>
                        Login
                    </Text>
                </TouchableOpacity >

                <View style={{marginTop:'7%', flexDirection: 'row'}}>
                <View style={{backgroundColor: 'black', height: 1, flex: 1, alignSelf: 'center'}} />
                    <Text style={{alignSelf:'center',paddingHorizontal:10}}>Or sign up with</Text>
                    <View style={{backgroundColor: 'black', height: 1, flex: 1, alignSelf: 'center'}} />
          
                </View>
            {/* <Text style={styles.text}>Login</Text>
            <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input2}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      /> */}

        
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    text:{
        alignSelf: "center",
        color:'#1A1A1A',
        marginTop:'30%',
        fontSize: 40,
        fontWeight: "bold",
    },
    textPass:{
        alignSelf: "flex-end",
        
        color:'#1A1A1A',
        marginTop:'5%',
        marginRight:'10%',
        fontWeight: "bold",
        fontSize: 12,
    },
    image: {
      flex: 1,
      height:'50%',
      width:'100%',
      opacity:0.2,
      alignSelf: "center",
      position: 'absolute',
    },
    input: {
        alignSelf: "center",
        width:'80%',
        height: 40,
        placeholderTextColor:'#1A1A1A',
        marginTop: '35%',
        borderWidth: 1,
        padding: 10,
      },
      input2: {
        alignSelf: "center",
        width:'80%',
        height: 40,
        margin: '4%',
        borderWidth: 1,
        padding: 10,
      },
      login:{
        alignItems: "center",
        marginTop:'30%'
        
    },
    button:{
        borderWidth: 3,
        width:"80%",
        backgroundColor:"#FAC835",
        fontSize: 16,
        fontWeight: "bold",
        textAlign:'center',
        padding:15,
        borderRadius: 15,
        color:'#fff',
        borderColor: "#FAC835", //button background/border color
        overflow: "hidden",
        
    }
  });

export default Login;