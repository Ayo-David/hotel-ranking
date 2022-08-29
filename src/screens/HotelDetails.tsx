import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { hotel } from "../models/IHotel";
import HotelDetailsComponent from "../components/HotelDetailsComponent";
import { useRoute } from "@react-navigation/native";
import { HotelDetailsRouteProp } from "../navigaations/types";

const HotelDetails: React.FC = () => {
  const { params } = useRoute<HotelDetailsRouteProp>();

  console.log(`params.hotel = `, params.hotel);
  const [hotel, setHotel] = useState<hotel>([]);

  useEffect(() => {}, []);

  return <HotelDetailsComponent hotel={params?.hotel} />;
};

export default HotelDetails;
