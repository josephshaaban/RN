import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { ImageBackground, SafeAreaView,StyleSheet,View ,Text, FlatList} from 'react-native'
import Colors from '../constants/Colors'
import foods from '../constants/foods'
import { PrimaryButton } from './Buttons'

const TrendingDishesCart = () => {
  const img1 = require('../assets/intro.png')

  const CartCard = ({item}) => {
    return (
      <View style={{height:240}}>
      <View style={styles.cartCard}>
          <ImageBackground source={img1} style={{width:'100%',height:'100%'}} resizeMode='stretch' >
             <Ionicons name={"heart-outline"} size={25} color={Colors.primaryColor} />
             <View style={styles.bottomCart}>
                <View style={{flexDirection:'row'}}>
                <Ionicons name={"person-outline"} size={25} color={Colors.primaryColor} />
                <Text style={{marginLeft:10}}>avatar</Text>
                </View>
                <View>
                        <PrimaryButton
                        onPress={() => navigation.navigate('Home')}
                        title="Get Started"
                        />
                </View>
             </View>
          </ImageBackground>

      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <View style={{flexDirection:'row'}}>
          <Text>suchi</Text>
          </View>
      <View style={{marginLeft:15}}>
      {/* <Ionicons name={"heart"} size={25} color={Colors.primaryColor} /> */}
      <Text style={{color:Colors.red}}>lorem ipsum lorem ipsum</Text>
      </View>
    </View>
      <View >
        <Text style={{color:Colors.gray}}>lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum</Text>
        </View>
      </View>
      </View>
    );
  };
  return (
    <SafeAreaView>
       <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={1}
        data={foods}
        renderItem={({item}) => <CartCard />}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
   
    cartCard: {
      height: 150,
      elevation: 15,
      borderRadius: 10,
      backgroundColor: Colors.white,
      
      marginVertical: 10,
      marginHorizontal: 20,
      paddingHorizontal: 10,
      // flexDirection: 'row',
      // alignItems: 'center',
      
    },
    bottomCart:{
      flexDirection:'row',
      justifyContent:'space-between',
      top:70,
    }

})

export default TrendingDishesCart