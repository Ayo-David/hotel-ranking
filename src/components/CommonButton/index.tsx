import React from "react";
import {
  ActivityIndicator,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { COLORS } from "../../constants/colors";
import styles from "./styles";

interface Props {
  title?: string;
  secondary?: boolean;
  primary?: boolean;
  danger?: boolean;
  loading?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const CommonButton = ({
  title,
  secondary,
  primary,
  danger,
  loading,
  disabled,
  style,
  ...props
}: Props) => {
  const getBackground = () => {
    if (disabled) {
      return COLORS.grey;
    }
    if (secondary) {
      return COLORS.secondary;
    } else if (primary) {
      return COLORS.primary;
    } else if (danger) {
      return COLORS.danger;
    } else {
      return COLORS.grey;
    }
  };
  return (
    <View>
      <TouchableOpacity
        style={[styles.wrapper, { backgroundColor: getBackground() }, style]}
        disabled={disabled}
        {...props}
      >
        <View style={styles.loadingSection}>
          {loading && (
            <ActivityIndicator
              color={disabled ? "black" : COLORS.white}
              style={{ paddingRight: 5 }}
            />
          )}
          {title && (
            <Text
              style={{
                color: COLORS.white,
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {loading ? "Processing" : title}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CommonButton;
