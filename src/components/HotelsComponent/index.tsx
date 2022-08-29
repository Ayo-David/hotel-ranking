import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import MainContainer from "../MainContainer";
import { COLORS } from "../../constants/colors";
import styles from "./styles";

import ButtonAdd from "../ButtonAdd";
import ChainList from "../ChainList";
import { HotelScreenProp } from "../../navigaations/types";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Card from "../HotelCard";
import { hotel } from "../../models/IHotel";
import { hotelChains as chains } from "../../constants/hotels";

interface Props {
  hotels: hotel;
  hotelChains: string[];
  selectedChain: string;
  setHotelChains: (val: string[]) => void;
  setSelectedChain: (val: string) => void;
}

const HotelsComponent = ({
  hotels,
  hotelChains,
  setHotelChains,
  selectedChain,
  setSelectedChain,
}: Props) => {
  const { navigate } = useNavigation<HotelScreenProp>();

  const [scrolled, setScrolled] = useState<boolean>(false);
  const [newScroll, setNewScroll] = useState<number>(0);

  useEffect(() => {
    (async () => {
      let existingChains: any[] = [];
      //await AsyncStorage.removeItem("hotelChains");
      try {
        existingChains = JSON.parse(
          (await AsyncStorage.getItem("hotelChains")) as string
        );

        if (!existingChains) {
          existingChains = [];
          setHotelChains(chains);
        } else {
          setHotelChains([...existingChains]);
        }
      } catch (error) {
        console.log(`error = `, error);
      }
    })();
  }, []);

  const handleScroll = (e) => {
    const scrollY = e.nativeEvent.contentOffset.y;
    scrollY > 0 ? setScrolled(true) : setScrolled(false);
    newScroll >= scrollY && setScrolled(false);
    setNewScroll(scrollY);
  };

  return (
    <MainContainer>
      <View style={styles.header}>
        <Text style={{ fontSize: 30, fontWeight: "bold", color: COLORS.dark }}>
          Top Ranked
        </Text>
        <Text
          style={{ fontSize: 30, fontWeight: "bold", color: COLORS.primary }}
        >
          Hotels
        </Text>
      </View>
      <ChainList
        hotelChains={hotelChains}
        selectedChain={selectedChain}
        setSelectedChain={setSelectedChain}
      />

      {hotels.length == 0 ? (
        <View>
          <Text style={{ color: COLORS.grey, fontSize: 24 }}>
            Oops! No hotel yet!
          </Text>
          <TouchableOpacity
            onPressIn={() => {
              navigate("CreateHotel");
            }}
          >
            <Text style={{ color: COLORS.primary, fontSize: 24 }}>
              Add Hotel
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={hotels}
          onScroll={handleScroll}
          contentContainerStyle={{
            paddingVertical: 10,
            paddingHorizontal: 10,
          }}
          renderItem={({ item, index }) => <Card hotel={item} index={index} />}
          inverted
        />
      )}
      <ButtonAdd scrolled={scrolled} hotelChains={hotelChains} />
    </MainContainer>
  );
};

export default HotelsComponent;
