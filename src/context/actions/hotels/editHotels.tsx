import AsyncStorage from "@react-native-async-storage/async-storage";
import { hotel } from "../../../models/IHotel";

const editHotel = async (id: number, data: hotel, form: hotel) => {
  let existingHotels: any[] = [];
  let editData: hotel = data[id];
  editData = {
    id: id,
    name: form.name,
    city: form.city,
    country: form.country,
    address: form.address,
    chain: form.chain,
  };
  try {
    const hotels = (await AsyncStorage.getItem("hotelList")) as string;
    existingHotels = JSON.parse(hotels);
    if (!existingHotels) {
      existingHotels = [];
    }

    const index = existingHotels.findIndex((item: hotel) => item.id == id);
    existingHotels.splice(index, 1, editData);

    await AsyncStorage.setItem("hotelList", JSON.stringify(existingHotels));
  } catch (error) {
    console.log(`error = `, error);
  }
};

export default editHotel;
