import React from "react";
import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MainContainer from "../MainContainer";
import { COLORS } from "../../constants/colors";
import styles from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import CommonButton from "../CommonButton";

interface Props {
  onChangeHandler: (val: string) => void;
  handleSubmit: () => void;
  chains: string[];
  setChains: (val: string[]) => void;
  input: string;
}

const ChainsComponent = ({
  onChangeHandler,
  handleSubmit,
  setChains,
  chains,
  input,
}: Props) => {
  const ListChain = ({ chain }: { chain: string }) => {
    return (
      <View>
        <View style={styles.listChain}>
          <View style={{ alignSelf: "stretch" }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: COLORS.dark,
                paddingRight: 10,
              }}
            >
              {chain}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.editDeleteBtn} onPressIn={() => {}}>
              <Icon name="edit" size={14} color={COLORS.primary} />
              <Text style={{ fontSize: 14, color: COLORS.grey }}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.editDeleteBtn}
              onPressIn={() => {
                Alert.alert(
                  "Delete!",
                  "Are you sure you want to remove " + chain,
                  [
                    {
                      text: "Cancel",
                      onPress: () => {},
                    },

                    {
                      text: "OK",
                      onPress: () => {
                        chains.splice(chains.indexOf(chain), 1);
                        setChains([...chains]);
                      },
                    },
                  ]
                );
              }}
            >
              <Icon name="delete" size={16} color={COLORS.danger} />
              <Text style={{ fontSize: 14, color: COLORS.grey }}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <MainContainer>
      <View style={styles.header}>
        <Text style={{ fontSize: 30, fontWeight: "bold", color: COLORS.dark }}>
          Hotel
        </Text>
        <Text
          style={{ fontSize: 30, fontWeight: "bold", color: COLORS.primary }}
        >
          Chains
        </Text>
      </View>
      <View>
        <View style={styles.addChain}>
          <TextInput
            style={styles.inputTxt}
            placeholder="Enter Hotel Chain"
            onChangeText={(val) => {
              onChangeHandler(val);
            }}
            value={input}
          />
          <CommonButton
            primary
            title="Add Chain"
            style={{ paddingHorizontal: 20, marginLeft: 10 }}
            onPress={handleSubmit}
          />
        </View>
        <ScrollView contentContainerStyle={{ marginVertical: 20 }}>
          <View style={styles.wrapper}>
            {chains.map((chain, i) => (
              <ListChain key={i} chain={chain} />
            ))}
          </View>
        </ScrollView>
      </View>
    </MainContainer>
  );
};

export default ChainsComponent;
