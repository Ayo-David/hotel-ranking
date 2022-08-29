import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { ComponentProps, FunctionComponent } from "react";
import Hotels from "../screens/Hotels";
import Chains from "../screens/Chains";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          if (route.name === "Hotels") {
            return <FontAwesome name="building" size={24} color={color} />;
          } else {
            return <Ionicons name="ios-list" size={24} color={color} />;
          }
        },
        headerShown: false,
      })}
    >
      <Tab.Screen component={Hotels} name="Hotels" />
      <Tab.Screen component={Chains} name="Hotel Chains" />
    </Tab.Navigator>
  );
};

export default TabNavigator;
