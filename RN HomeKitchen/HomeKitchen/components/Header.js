import React from  'react'

import {View , Text , StyleSheet} from 'react-native';
// import { CartContext } from '../screens/CartContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
export function Header({navigation}){
    // const {getItemsCount} = useContext(CartContext);
    console.log("yesssssssssss")
    return (
        <View style={styles.container}>
			<View style={styles.header }>
		      <View >		
					<Text style={styles.text} onPress={()=>{navigation.navigate("Cart")}}> 
					<Ionicons name={"list-outline"} size={25} color={"black"} />
					</Text>
			 </View>
			<View>
				<Text style={styles.text}>Home</Text>
			</View>
			<View>
				<Text style={styles.text}>
				<Ionicons name={"notifications-outline"} size={25} color={"black"} />
				</Text>
			</View>
			</View>
        </View>
    )
}

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 8,
		padding:20,
		marginTop:35,
		height: 50,
		padding: 12,
		borderRadius: 32,
		alignItems: 'center',
		justifyContent: 'center'
	},
	header:{
		display:"flex",
		width:"100%",
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center',
	},
	text: {
		color: 'black',
		fontWeight: 'bold',
		fontSize: 13
	}
})