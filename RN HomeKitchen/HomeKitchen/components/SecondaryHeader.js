import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { View ,Text ,StyleSheet} from 'react-native'

const SecondaryHeader = ({navigation}) => {
  return (
    <View style={style.header}>
    <Ionicons name="arrow-back-outline" size={28} onPress={navigation.goBack} />
    <Ionicons name={"notifications-outline"} size={25} color={"black"} />
  </View>
  )
}
const style = StyleSheet.create({
    header: {
      paddingVertical: 20,
      marginTop:20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'space-between',
      marginHorizontal: 20,
    },

})

export default SecondaryHeader