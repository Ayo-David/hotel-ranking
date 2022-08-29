import React from "react";
import { StyleSheet, View } from "react-native";
import { COLORS } from "../constants/colors";

interface Prop {
  children: React.ReactNode;
}
const MainContainer = ({ children }: Prop) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: COLORS.white,
    flex: 1,
  },
});

export default MainContainer;
