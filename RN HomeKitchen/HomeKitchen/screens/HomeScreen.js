import * as React from 'react'
import { View , Text, StyleSheet, TextInput , ScrollView} from 'react-native'
import ScrollBar from '../components/ScrollBar'
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import BestChefs from '../components/BestChefs'
import TrendingDishesCart from '../components/TrendingDishesCart';
const HomeScreen = ({navigation}) => {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);
  return ( 
    <ScrollView >
           

            <View style={{width:"100%",marginTop:5 ,marginLeft:15}}>
             
                 <SearchBar />

            </View>

            <View style={styles.marginLeftTop}>
              <View style={styles.chiefs}>
                <View>
                  <Text style={{marginLeft:15,fontSize:15}}>The best chefs</Text>
                </View>

                <View>
                  <Text style={{fontSize:15,color:"#F9A85D",marginRight:15}}>view All</Text>
                </View>
              </View>
              <BestChefs />
            </View>
         
         <View >
              <Categories />
         </View>
            
        <View style={{marginTop:15}}>
        <View style={{marginLeft:25}}>
          <Text>Trending Dishes</Text>
          </View>
          <TrendingDishesCart navigation={navigation}/>
        </View>
           
           
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width:"80%",
    marginLeft:"auto",
    marginRight:"auto",
    borderRadius:25,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  chiefs:{
    display:"flex",
    flexDirection:"row",
    justifyContent:'space-between',

  },
  marginLeftTop:{
    marginTop:15,
    marginLeft:15
  }
});

export default HomeScreen