import { NavigationProp, RouteProp } from "@react-navigation/native";
import { hotel } from "../models/IHotel";

export type HomeStackParamList = {
  Home:undefined;
  CreateHotel:{
    hotel?:hotel,
    hotelChains?:string[]
  }
}

export type HotelScreenProp = NavigationProp<HomeStackParamList>

export type CreateHotelRouteProp = RouteProp<HomeStackParamList,'CreateHotel'>