import React, { useState } from "react";
import { StyleProp, Text, TextInput, TextInputProps, View } from "react-native";
import { COLORS } from "../../constants/colors";
import styles from "./styles";

interface Props {
  style?: StyleProp<TextInputProps>;
  label?: string;
  icon?: string;
  value: any;
  iconPosition?: string;
  error?: string;
  placeholder?: string;
  onChangeText?: (val: string) => void;
}

const Input = ({
  style,
  label,
  icon,
  value,
  iconPosition,
  error,
  ...prop
}: Props) => {
  const [focused, setFocused] = useState(false);

  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === "left") {
        return "row";
      } else {
        return "row-reverse";
      }
    } else {
      return "row";
    }
  };

  const getBorderColor = () => {
    if (error) {
      return COLORS.danger;
    }
    if (focused) {
      return COLORS.primary;
    } else {
      return COLORS.grey;
    }
  };

  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}
      <View
        style={[
          styles.wrapper,
          { flexDirection: getFlexDirection(), borderColor: getBorderColor() },
        ]}
      >
        {icon && <View>{icon}</View>}
        <TextInput
          style={[styles.textInput, style]}
          value={value}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          {...prop}
        />
      </View>
      {error && (
        <View>
          <Text style={styles.error}>{error}</Text>
        </View>
      )}
    </View>
  );
};

export default Input;
