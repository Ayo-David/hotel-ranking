import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "../../constants/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import Input from "../Input";
import CommonButton from "../CommonButton";
import SelectDropdown from "react-native-select-dropdown";
import { HotelScreenProp } from "../../navigaations/types";
import { hotel } from "../../models/IHotel";

type onChange = {
  val: string;
  name: string;
};

interface Props {
  form: hotel;
  onChangeHandler: ({ val, name }: onChange) => void;
  submitForm: () => {};
  loading: boolean;
  edit: boolean;
  hotelChains: string[];
}

const CreateHotelComponent = ({
  form,
  onChangeHandler,
  submitForm,
  loading,
  edit,
  hotelChains,
}: Props) => {
  const navigation = useNavigation<HotelScreenProp>();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: COLORS.white,
        paddingBottom: 20,
      }}
    >
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="rgba(0,0,0,0)"
      />
      <ImageBackground
        style={styles.headerImage}
        source={require("../../assets/hotel2.jpg")}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back-ios" size={28} color={COLORS.white} />
          </TouchableOpacity>
          <Icon name="bookmark-border" size={28} color={COLORS.white} />
        </View>
      </ImageBackground>
      <View>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons
            name="office-building-marker"
            color={COLORS.white}
            size={30}
          />
        </View>
        <View
          style={{ marginTop: 20, paddingHorizontal: 20, marginHorizontal: 20 }}
        >
          <Input
            label="Hotel Name"
            placeholder="Enter Hotel Name"
            onChangeText={(val) => {
              onChangeHandler({ val, name: "name" });
            }}
            value={form.name || ""}
          />
          <Input
            label="City"
            placeholder="Enter City"
            onChangeText={(val) => {
              onChangeHandler({ val, name: "city" });
            }}
            value={form.city || ""}
          />

          <Input
            label="Country"
            placeholder="Enter Country"
            onChangeText={(val) => {
              onChangeHandler({ val, name: "country" });
            }}
            value={form.country || ""}
          />
          <Input
            label="Address"
            placeholder="Enter Address"
            onChangeText={(val) => {
              onChangeHandler({ val, name: "address" });
            }}
            value={form.address || ""}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Text style={{ paddingRight: 20 }}>Hotel Chain</Text>

            <SelectDropdown
              data={hotelChains}
              onSelect={(val, index) => {
                onChangeHandler({ val, name: "chain" });
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
            />
          </View>
          <CommonButton
            title={edit ? "Edit Hotel" : "Add Hotel"}
            primary
            onPress={submitForm}
            loading={loading}
            disabled={loading}
            style={styles.btn}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default CreateHotelComponent;
