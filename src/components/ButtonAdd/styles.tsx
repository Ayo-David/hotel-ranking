import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  addBtn: {
    backgroundColor: "rgba(255, 87, 51, 1.0)",
    flexDirection: "row",
    justifyContent: "center",
    right: 25,
    height: 47,
    borderRadius: 100,
    alignItems: "center",
    position: "absolute",
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  addTxt: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 16,
    paddingRight: 10,
  },
  icon: {
    color: "white",
  },
});

export default styles;
