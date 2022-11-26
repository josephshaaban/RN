import React from 'react'
import { View ,Text} from 'react-native'
import ScrollBar from './ScrollBar'

const Categories = () => {
  return (
    <View style={{marginLeft:15,marginTop:15}}>
        <View >
            <Text style={{marginLeft:15}}>Categories</Text>
        </View>
        <View style={{marginTop:5}}>
            <ScrollBar />
        </View>


    </View>
  )
}

export default Categories