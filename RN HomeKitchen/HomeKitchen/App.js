import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Ionicons from "react-native-vector-icons/Ionicons";

import Login from "./pages/Login";
import Registeration from "./pages/registration";
import Intro from "./pages/Intro";

// Screens

import Colors from "./constants/Colors";
import DetailTrendingFood from "./screens/DetailTrendingFood";
import SecondaryHeader from "./components/SecondaryHeader";
import DetailsOneDish from "./screens/DetailsOneDish";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./TabNavigtorFooter/Home";

//Screen names

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Registeration" component={Registeration} />
        <Stack.Screen name="Login">
          {(props) => <Login {...props} />}
        </Stack.Screen>

        <Stack.Screen
          name={"DetailsTrendingFood"}
          component={DetailTrendingFood}
          options={({ navigation }) => ({
            // title: settingsName,
            header: () => <SecondaryHeader navigation={navigation} />,
          })}
        />

        <Stack.Screen
          name={"DetailsOneDish"}
          component={DetailsOneDish}
          options={{ headerShown: false }}
          // options={({navigation}) => ({
          // title: settingsName, header: () => <SecondaryHeader navigation={navigation} />})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
