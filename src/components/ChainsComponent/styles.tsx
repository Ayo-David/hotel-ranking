import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

const styles = StyleSheet.create({
  header: {
    marginTop: 40,
    paddingTop: 40,
    flexDirection: "column",
  },
  addChain: {
    marginTop: 40,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  wrapper: {
    justifyContent: "center",
    alignContent: "center",
    flex: 1,
    paddingLeft: 10,
    paddingRight: 60,
  },
  listChain: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },
  editDeleteBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    zIndex: 1,
  },
  inputTxt: {
    borderColor: COLORS.grey,
    width: 200,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});
export default styles;
