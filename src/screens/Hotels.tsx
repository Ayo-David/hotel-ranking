import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HotelsComponent from "../components/HotelsComponent";
import { hotel } from "../models/IHotel";

const Hotels: React.FC = () => {
  const [hotels, setHotels] = useState<hotel>([]);
  const [hotelChains, setHotelChains] = useState<string[]>([]);
  const [selectedChain, setSelectedChain] = useState<string>("All");

  const getHotels = async () => {
    let hotelList: any[] = [];
    try {
      //await AsyncStorage.removeItem("hotelList");
      hotelList = JSON.parse(
        (await AsyncStorage.getItem("hotelList")) as string
      );
      if (!hotelList) {
        hotelList = [];
      } else {
        if (selectedChain != "All") {
          hotelList = hotelList.filter((item) => item.chain == selectedChain);
        }
      }
      //console.log(`hotelList = `, hotelList);
    } catch (error) {
      console.log(`error = `, error);
    }
    setHotels(hotelList);
  };

  useEffect(() => {
    //setHotels([]);
    getHotels();
  }, [hotels]);

  return (
    <HotelsComponent
      hotels={hotels}
      hotelChains={hotelChains}
      setHotelChains={setHotelChains}
      selectedChain={selectedChain}
      setSelectedChain={setSelectedChain}
    />
  );
};

export default Hotels;
