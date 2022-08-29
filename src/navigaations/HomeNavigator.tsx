import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import CreateHotel from "../screens/CreateHotel";
import HotelDetails from "../screens/HotelDetails";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="CreateHotel" component={CreateHotel} />
      <Stack.Screen name="HotelDetails" component={HotelDetails} />
    </Stack.Navigator>
  );
};
export default HomeNavigator;
