import * as React from 'react'
import { View , Text} from 'react-native'

const PreferedScreen = ({navigation}) => {
  return ( 
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text
            onPress={()=>navigation.navigate('Prefered')}
            style={{fontSize:26,fontWeight:'bold'}}
            > 
           Prefered
            </Text>
    </View>
  )
}

export default  PreferedScreen