import React from "react";
import { Text, TouchableOpacity, useWindowDimensions } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import { HotelScreenProp } from "../../navigaations/types";
import { useNavigation } from "@react-navigation/native";

interface Props {
  scrolled?: boolean;
  hotelChains: string[];
}

const ButtonAdd = ({ scrolled, hotelChains }: Props) => {
  //console.log(`hotelins = `, hotelChains);
  const { navigate } = useNavigation<HotelScreenProp>();
  const { height } = useWindowDimensions();

  const handleOnpress = () => {
    navigate("CreateHotel", { hotelChains });
  };

  return (
    <TouchableOpacity
      style={[
        styles.addBtn,
        {
          bottom: (height * 5) / 100,
          width: scrolled ? 52 : 115,
        },
      ]}
      onPress={handleOnpress}
    >
      <Icon name="add" style={styles.icon} size={24} />
      {!scrolled && <Text style={styles.addTxt}>Add Hotel</Text>}
    </TouchableOpacity>
  );
};

export default ButtonAdd;
