import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import ChainsComponent from "../components/ChainsComponent";
import { hotelChains } from "../constants/hotels";

const Chains = () => {
  type edit = {
    id: number;
    edit: boolean;
  };
  const [chains, setChains] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState<edit>({ id: 0, edit: false });

  const getChains = async () => {
    let chain: any = "";
    try {
      //await AsyncStorage.removeItem("hotelChains");
      chain = JSON.parse((await AsyncStorage.getItem("hotelChains")) as string);
      if (!chain) {
        chain = [];
        setChains(hotelChains);
      } else {
        setChains(chain);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeHandler = (val: string) => {
    setInput(val);
  };

  const editChain = (id: number, val: string) => {
    setInput(val);
    setEdit({ id: id, edit: true });
  };

  const handleSubmit = async () => {
    let newChain: any = [];
    try {
      let existingChain = JSON.parse(
        (await AsyncStorage.getItem("hotelChains")) as string
      );
      !existingChain && (existingChain = []);
      if (existingChain.length == 0) {
        input != ""
          ? (newChain = [input, ...hotelChains])
          : (newChain = [...hotelChains]);
      } else {
        input != ""
          ? (newChain = [input, ...existingChain])
          : (newChain = [...existingChain]);
      }

      await AsyncStorage.setItem("hotelChains", JSON.stringify(newChain));
    } catch (error) {
      console.log(`error = `, error);
    }
    setChains(newChain);
    setInput("");
  };

  const handleEdit = async () => {
    input != "" && chains.splice(edit.id, 1, input);
    await AsyncStorage.setItem("hotelChains", JSON.stringify(chains));
    setEdit({ ...edit, edit: false });
    setInput("");
  };

  useEffect(() => {
    getChains();
  }, []);

  return (
    <ChainsComponent
      onChangeHandler={onChangeHandler}
      handleSubmit={handleSubmit}
      handleEdit={handleEdit}
      chains={chains}
      edit={edit}
      editChain={editChain}
      setChains={setChains}
      input={input}
    />
  );
};
export default Chains;
