import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import CreateHotelComponent from "../components/CreateHotelComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDataLayer } from "../context/Provider";
import {
  CREATE_HOTELS_SUCCESSFUL,
  GET_HOTELS_SUCCESSFUL,
} from "../constants/actionTypes";
import { hotel } from "../models/IHotel";
import {
  CreateHotelRouteProp,
  HotelScreenProp,
  RouteParams,
} from "../navigaations/types";
import createHotel from "../context/actions/hotels/createHotels";
import editHotel from "../context/actions/hotels/editHotels";

const CreateHotel = () => {
  const { navigate } = useNavigation<HotelScreenProp>();
  const [form, setForm] = useState<hotel>({});
  const [edit, setEdit] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [hotelChains, setHotelChains] = useState<string[]>([]);
  const {
    hotelDispatch: dispatch,
    hotelStates: {
      getHotels: { data },
    },
  } = useDataLayer();
  //console.log(`data = `, data);
  const { params } = useRoute<CreateHotelRouteProp>();

  const onChangeHandler = ({ val, name }: { val: string; name: string }) => {
    setForm({ ...form, [name]: val });
  };

  const submitForm = async () => {
    setLoading(true);
    if (params?.hotel) {
      const { id } = params?.hotel;
      editHotel(id, data, form);
      setEdit(false);
      navigate("Home");
    } else {
      let existingHotels: any[] = [];
      let hotel: hotel = [];
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
      //createHotel(data, form)(dispatch);

      dispatch({ type: CREATE_HOTELS_SUCCESSFUL, payload: hotel });
      navigate("Home");
    }

    // console.log(`form = `, hotelList);
    setLoading(false);
  };

  useEffect(() => {
    (async () => {
      let existingChains: any[] = [];
      // console.log(`foo = `, param?.hotelChains);
      // if (param?.hotelChains) {
      //   setHotelChains(params.hotelChains);
      // } else {
      try {
        existingChains = JSON.parse(
          (await AsyncStorage.getItem("hotelChains")) as string
        );
        //console.log(`existingChains = `, existingChains);
        setHotelChains([...existingChains]);
      } catch (error) {
        console.log(`error = `, error);
      }
    })();
    //}
    if (params?.hotel) {
      const { name, city, country, address, chain } = params.hotel;
      setForm({ name, city, country, address, chain });
      setEdit(true);
    }
  }, []);

  return (
    <CreateHotelComponent
      hotelChains={hotelChains}
      form={form}
      onChangeHandler={onChangeHandler}
      submitForm={submitForm}
      loading={loading}
      edit={edit}
    />
  );
};

export default CreateHotel;
