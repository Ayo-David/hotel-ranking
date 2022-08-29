import React from "react";
import {
  Alert,
  ScrollView,
  StatusBar,
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
  handleEdit: () => void;
  chains: string[];
  setChains: (val: string[]) => void;
  editChain: (id: number, val: string) => void;
  edit: { id: number; edit: boolean };
  input: string;
}

const ChainsComponent = ({
  onChangeHandler,
  handleSubmit,
  handleEdit,
  setChains,
  editChain,
  chains,
  input,
  edit,
}: Props) => {
  const ListChain = ({ chain }: { chain: string }) => {
    return (
      <View>
        <View style={styles.listChain}>
          <View style={{ alignSelf: "stretch" }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: COLORS.dark,
                paddingRight: 10,
              }}
            >
              {chain}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.editDeleteBtn}
              onPressIn={() => editChain(chains.indexOf(chain), chain)}
            >
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
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="rgba(0,0,0,0)"
      />
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
            title={edit.edit ? "Edit Chain" : "Add Chain"}
            style={{ paddingHorizontal: 20, marginLeft: 10 }}
            onPress={edit.edit ? handleEdit : handleSubmit}
          />
        </View>
        <View style={{ height: "auto" }}>
          <ScrollView contentContainerStyle={{ marginVertical: 20 }}>
            <View style={styles.wrapper}>
              {chains.map((chain, i) => (
                <ListChain key={i} chain={chain} />
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </MainContainer>
  );
};

export default ChainsComponent;
