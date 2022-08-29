import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export default StyleSheet.create({
  inputContainer: {
    paddingVertical: 5,
  },

  wrapper: {
    height: 40,
    borderRadius: 5,
    borderColor: COLORS.grey,
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 5,
    alignItems: "center",
    marginTop: 5,
  },
  textInput: {
    flex: 1,
  },
  error: {
    color: COLORS.danger,
    paddingTop: 5,
    fontSize: 12,
  },
});
