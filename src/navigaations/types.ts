import { NavigationProp, RouteProp } from "@react-navigation/native";
import { hotel } from "../models/IHotel";

export type HomeStackParamList = {
  Home:undefined;
  CreateHotel:{
    hotel?:hotel,
    hotelChains?:string[]
  };
  HotelDetails:{
    hotel?:hotel,
  }
}

export type HotelScreenProp = NavigationProp<HomeStackParamList>

export type CreateHotelRouteProp = RouteProp<HomeStackParamList,'CreateHotel'>
export type HotelDetailsRouteProp = RouteProp<HomeStackParamList,'HotelDetails'>