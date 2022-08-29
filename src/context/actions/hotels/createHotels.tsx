import AsyncStorage from "@react-native-async-storage/async-storage";
import { CREATE_HOTELS_SUCCESSFUL } from "../../../constants/actionTypes";
import { hotel } from "../../../models/IHotel";

const createHotel = async (data: hotel, form: hotel) => async (dispatch) => {
  let existingHotels: any[] = [];
  let hotel: any[] = [];
  try {
    const hotels = (await AsyncStorage.getItem("hotelList")) as string;
    existingHotels = JSON.parse(hotels);
    if (!existingHotels) {
      existingHotels = [];
    }

    let id: number = ++data.length;
    let image: string = "https://picsum.photos/700";
    hotel = { id: id, ...form, image: image };

    const hotelList = [...existingHotels, hotel];

    const hotelJson = JSON.stringify(hotelList);
    await AsyncStorage.setItem("hotelList", hotelJson);
  } catch (error) {
    console.log(`error = `, error);
  }

  dispatch({ type: CREATE_HOTELS_SUCCESSFUL, payload: hotel });
};

export default createHotel;
