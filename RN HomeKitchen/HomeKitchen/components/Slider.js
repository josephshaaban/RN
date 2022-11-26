import React, {useState} from 'react'

import {
    SaveAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
    Image
}
from 'react-native'


const images = [
  'https://th.bing.com/th/id/OIP.rrIexnGdFPT4c3MHAzoFgwHaE8?pid=ImgDet&rs=1)',
  "https://th.bing.com/th/id/OIP.Ig4G56JjbFFnEGzgS88higHaE9?pid=ImgDet&w=1500&h=1004&rs=1",
  'https://th.bing.com/th/id/OIP.rrIexnGdFPT4c3MHAzoFgwHaE8?pid=ImgDet&rs=1)'
]

const WIDTH = Dimensions.get('window').width;
const HEIGHT=Dimensions.get('window').height;


export function Slider({navigation})  {
 console.log("naviage",navigation)
  const [imgActive,setImgeActive] = useState(0)

  const onChange = (nativeEvent)=>{
     if(nativeEvent){
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if(slide != imgActive){
        setImgeActive(slide)
      }
     }
  }


  return (
    // <ScrollView
    //              onScroll={({nativeEvent})=>onChange(nativeEvent)}
    //              showsHorizontalScrollIndicator={false}
    //              pagingEnabled
    //              horizontal
    //              style={styles.wrap}
    //             >
    //                 {
    //                     images.map((e,index)=>
    //                     <Image 
    //                       key={e}
    //                       resizeMode='stretch'
    //                       style={styles.wrap}
    //                       source={{uri:e}}
    //                     />
    //                     )
    //                 }
                
    //             </ScrollView>



   <View style={styles.container}>
      <View style={styles.wrap}>
            <ScrollView
             onScroll={({nativeEvent})=>onChange(nativeEvent)}
             showsHorizontalScrollIndicator={false}
             pagingEnabled
             horizontal
             style={styles.wrap}
            >
                {
                    images.map((e,index)=>
                    <Image 
                      key={e}
                      resizeMode='stretch'
                      style={styles.wrap}
                      source={{uri:e}}
                    />
                    )
                }
            
            </ScrollView>

    <View style={styles.wrapOot}>
        {
          images.map((e,index)=>
          <Text key={e} style={imgActive == index ? styles.dotActive:styles.dot}>
            O
          </Text>
          )
        }
    </View>

      </View>
   </View>
  )
}


const styles = StyleSheet.create({
     container:{
        flex:1,
     },
     wrap:{
        width:WIDTH,
        height:HEIGHT * 0.25
     },
     wrapOot:{
      position:"absolute",
      bottom:0,
      flexDirection:'row',
      alignSelf:"center",
     },
     dotActive:{
      margin:3,
      color:'black'
     },
     dot:{
      margin:3,
      color:'white'
     }
})
   


