import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

const styles = StyleSheet.create({
  header: {
    marginTop: 5,
    paddingTop: 40,
    flexDirection: "column",
  },
  chainList: {
    marginVertical: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  card: {
    height: 280,
    elevation: 15,
    borderRadius: 15,
    backgroundColor: COLORS.white,
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginRight: 20,
    marginBottom: 20,
  },
  cardImage: {
    height: 200,
    width: "100%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  cardDetails: {
    height: 100,
    borderRadius: 15,
    backgroundColor: COLORS.white,
    position: "absolute",
    bottom: 0,
    padding: 20,
    width: "100%",
  },
  city: {
    height: 60,
    width: 80,
    backgroundColor: COLORS.primary,
    position: "absolute",
    zIndex: 1,
    right: 0,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
