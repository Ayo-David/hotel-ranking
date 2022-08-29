import AsyncStorage from "@react-native-async-storage/async-storage";
import { hotel } from "../../../models/IHotel";

const deleteHotel = async (id: number) => {
  let existingHotels = [];

  try {
    const hotels: any = await AsyncStorage.getItem("hotelList");
    existingHotels = JSON.parse(hotels);
    if (!existingHotels) {
      existingHotels = [];
    }

    const index = existingHotels.findIndex((item: hotel) => item.id == id);
    existingHotels.splice(index, 1);

    await AsyncStorage.setItem("hotelList", JSON.stringify(existingHotels));
  } catch (error) {
    console.log(`error = `, error);
  }
};

export default deleteHotel;
