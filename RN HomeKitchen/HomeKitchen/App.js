// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Login from "./pages/Login";
// import Registeration from "./pages/registration";
// import Intro from "./pages/Intro";

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Intro" component={Intro} />
//         <Stack.Screen name="Registeration" component={Registeration} />
//         <Stack.Screen name="Login">
//           {(props) => <Login {...props} />}
//         </Stack.Screen>
//       </Stack.Navigator>

//     </NavigationContainer>
//   );
// }



import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingScreen';
import PreferedScreen from './screens/PreferedScreen';
import {Header} from './components/Header'
import Colors from './constants/Colors';

//Screen names
const homeName = "Home";
const detailsName = "Details";
const settingsName = "Orders";
const preferedName = 'Prefered'

const Tab = createBottomTabNavigator();

function App() {
 
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === detailsName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === settingsName) {
              iconName = focused ? 'basket' : 'basket-outline';
            }
            else if(rn === preferedName){
              iconName = focused ? 'heart' :'heart-outline'
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: Colors.primaryColor,
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={HomeScreen}  options={({navigation}) => ({title: homeName, header: () => <Header navigation={navigation} />})}/>
        <Tab.Screen name={detailsName} component={DetailsScreen}   options={({navigation}) => ({title: detailsName, header: () => <Header navigation={navigation} />})}/>
        <Tab.Screen  name ={preferedName} component={PreferedScreen} options={({navigation}) => ({title: preferedName, header: () => <Header navigation={navigation} />})}/>
        <Tab.Screen name={settingsName} component={SettingsScreen} options={({navigation}) => ({title: settingsName, header: () => <Header navigation={navigation} />})}/>

      </Tab.Navigator>
    
    </NavigationContainer>
    
  );
}

export default App;