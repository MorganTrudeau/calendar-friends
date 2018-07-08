import { createStackNavigator } from "react-navigation";
//Screens
import HomeScreen from "../screens/HomeScreen";

export default createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    }
  },
  {
    initialRouteName: "Home"
  }
);
