import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import ChainsComponent from "../components/ChainsComponent";
import { hotelChains } from "../constants/hotels";

const Chains = () => {
  const [chains, setChains] = useState<string[]>([]);
  const [input, setInput] = useState("");

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

  useEffect(() => {
    getChains();
  }, []);

  return (
    <ChainsComponent
      onChangeHandler={onChangeHandler}
      handleSubmit={handleSubmit}
      chains={chains}
      setChains={setChains}
      input={input}
    />
  );
};
export default Chains;
