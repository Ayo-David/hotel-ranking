import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants/colors";

interface Props {
  hotelChains: string[];
  selectedChain: string;
  setSelectedChain: (val: string) => void;
}

const ChainList = ({ hotelChains, selectedChain, setSelectedChain }: Props) => {
  return (
    <View style={{ marginVertical: 10, flexDirection: "column" }}>
      <Text style={{ fontSize: 16, color: COLORS.primary }}>Hotel Chains</Text>
      <View
        style={{
          marginVertical: 3,
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {["All", ...hotelChains].map((item, i) => (
          <TouchableOpacity key={i} onPress={() => setSelectedChain(item)}>
            <Text
              style={
                selectedChain == item ? styles.chainBack : styles.chainStyle
              }
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ChainList;

const styles = StyleSheet.create({
  chainStyle: {
    fontSize: 14,
    fontWeight: "400",
    color: COLORS.grey,
    marginRight: 20,
  },
  chainBack: {
    fontWeight: "bold",
    paddingVertical: 3,
    paddingHorizontal: 3,
    borderWidth: 1,
    marginRight: 20,
    borderRadius: 10,
  },
});
