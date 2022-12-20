import "react-native-gesture-handler";
// see https://stackoverflow.com/a/70623877/8737047
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { Provider } from "react-redux";

// Screens
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LogBox, TouchableOpacity } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import SideBarNavigator from "./components/TabNavigators/SideBarNavigator";
import { CHEF_USER_DATA } from "./constants/staticData";
import { store } from "./redux-toolkit/store";
import CategoryDishesScreen from "./screens/CategoryDishesScreen";
import ChefProfileScreen from "./screens/ChefProfileScreen";
import Chefs from "./screens/ChefsScreen";
import DetailsOneDish from "./screens/DetailsOneDish";
import Intro from "./screens/LogScreens/Intro";
import LogIn from "./screens/LogScreens/LogIn";
import Registeration from "./screens/LogScreens/Registration";
import OrderDetails from "./screens/OrderDetails";

// Ignore log notification by message:
LogBox.ignoreLogs(["Warning: ..."]);
const Stack = createNativeStackNavigator();

function App() {
  // see https://dev.to/easybuoy/combining-stack-tab-drawer-navigations-in-react-native-with-react-navigation-5-da
  const queryClient = new QueryClient();
  return (
    <NavigationContainer>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={({ route, navigation }) => ({
              headerTransparent: true,
              headerShadowVisible: false,
              headerTitleAlign: "center",
              // headerTitle: "",
              headerRight: (props) => (
                <TouchableOpacity
                  {...props}
                  style={[props.style, { marginHorizontal: 11 }]}
                  onPress={() => navigation.navigate("FAQ")}
                >
                  <Ionicons
                    name={"notifications-outline"}
                    size={24}
                    color={"black"}
                    style={{ margin: 3 }}
                  />
                </TouchableOpacity>
              ),
            })}
          >
            <Stack.Screen
              name="SideBarNavigator"
              component={SideBarNavigator}
              options={{ headerShown: false, title: "Home" }}
            />
            <Stack.Screen
              name="Intro"
              component={Intro}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Registeration"
              component={Registeration}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Login" options={{ headerShown: false }}>
              {(props) => <LogIn {...props} />}
            </Stack.Screen>

            <Stack.Screen name={"ChefProfileScreen"}>
              {(props) => (
                <ChefProfileScreen {...props} chefInfo={CHEF_USER_DATA} />
              )}
            </Stack.Screen>
            <Stack.Screen
              name="Chefs"
              component={Chefs}
              options={({ navigation, route }) => {
                const { params } = route;
                return {
                  // title: title ? title : "All chefs",
                  // header: () => <SecondaryHeader navigation={navigation} />,
                };
              }}
            />
            <Stack.Screen
              name={"CategoryDishesScreen"}
              options={({ navigation, route }) => {
                const { params } = route;
                const { title } = params;
                return {
                  // title: title ? title : "Unknown Category",
                };
              }}
            >
              {(props) => <CategoryDishesScreen {...props} />}
            </Stack.Screen>
            <Stack.Screen
              name={"DetailsOneDish"}
              component={DetailsOneDish}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={"orderDetails"}
              component={OrderDetails}
              options={({ navigation }) => ({
                // header: () => <SecondaryHeader navigation={navigation} />,
              })}
            />
          </Stack.Navigator>
        </QueryClientProvider>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
