import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Alert,
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { COLORS } from "../../constants/colors";
import deleteHotel from "../../context/actions/hotels/deleteHotels";
import { hotel } from "../../models/IHotel";
import { HotelScreenProp } from "../../navigaations/types";
import styles from "./styles";

const Card = ({ hotel }: hotel) => {
  //console.log(`hotel = `, hotel);
  const { width } = useWindowDimensions();
  const { navigate } = useNavigation<HotelScreenProp>();
  return (
    <View>
      <View style={[styles.card, { width: (width * 85) / 100 }]}>
        <TouchableOpacity
          onPress={() => {
            navigate("HotelDetails", hotel);
          }}
        >
          <View style={styles.city}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              {hotel.city}
            </Text>
          </View>
          <Image source={{ uri: hotel.image }} style={styles.cardImage} />
        </TouchableOpacity>
        <View style={styles.cardDetails}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                {hotel.name}
              </Text>
              <Text style={{ color: COLORS.grey, fontSize: 12 }}>
                {hotel.chain}
              </Text>
            </View>
            <Icon name="bookmark-border" size={26} color={COLORS.primary} />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Icon name="star" size={15} color={COLORS.orange} />
              <Icon name="star" size={15} color={COLORS.orange} />
              <Icon name="star" size={15} color={COLORS.orange} />
              <Icon name="star" size={15} color={COLORS.orange} />
              <Icon name="star" size={15} color={COLORS.grey} />
            </View>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.editDeleteBtn}
                onPressIn={() => {
                  navigate("CreateHotel", { hotel });
                }}
              >
                <Icon name="edit" size={18} color={COLORS.primary} />
                <Text style={{ fontSize: 12, color: COLORS.grey }}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.editDeleteBtn}
                onPressIn={() => {
                  Alert.alert(
                    "Delete!",
                    "Are you sure you want to remove " + hotel.name,
                    [
                      {
                        text: "Cancel",
                        onPress: () => {},
                      },

                      {
                        text: "OK",
                        onPress: () => {
                          deleteHotel(hotel.id);
                        },
                      },
                    ]
                  );
                }}
              >
                <Icon name="delete" size={18} color={COLORS.danger} />
                <Text style={{ fontSize: 12, color: COLORS.grey }}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;
