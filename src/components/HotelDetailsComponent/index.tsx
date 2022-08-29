import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import MainContainer from "../MainContainer";
import { COLORS } from "../../constants/colors";
import styles from "./styles";

import { HotelScreenProp } from "../../navigaations/types";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { hotel } from "../../models/IHotel";
import { hotelChains as chains } from "../../constants/hotels";
import MapView, { Marker } from "react-native-maps";

interface Props {
  hotel: hotel;
}

interface IGeolocation {
  latitude: number;
  longitude: number;
}

const HotelDetailsComponent = ({ hotel }: Props) => {
  //console.log(`hotelier = `, hotel);
  const { navigate } = useNavigation<HotelScreenProp>();

  const [location, setLocation] = useState<IGeolocation>({
    latitude: 37.78825,
    longitude: -122.4324,
  });

  useEffect(() => {}, []);

  return (
    <MainContainer>
      <View style={styles.header}>
        <Text style={{ fontSize: 30, fontWeight: "bold", color: COLORS.dark }}>
          {/* {hotel.name} */}
        </Text>
        <Text
          style={{ fontSize: 30, fontWeight: "bold", color: COLORS.primary }}
        >
          {/* {hotel.city} */}
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onRegionChange={(region) => {
            setLocation({
              latitude: region.latitude,
              longitude: region.longitude,
            });
          }}
          onRegionChangeComplete={(region) => {
            setLocation({
              latitude: region.latitude,
              longitude: region.longitude,
            });
          }}
        >
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="this is a marker"
            description="this is a marker example"
          />
        </MapView>
      </View>
    </MainContainer>
  );
};

export default HotelDetailsComponent;
