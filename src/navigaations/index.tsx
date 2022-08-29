import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from "./HomeNavigator";

const AppNavContainer = () => {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
};

export default AppNavContainer;
