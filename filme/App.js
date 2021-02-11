import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import TextScreen from "./src/screens/TextScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components : ComponentsScreen,
    List : ListScreen,
    ImageTela : ImageScreen,
    CurrentCount : CounterScreen,
    ColorTela : ColorScreen,
    TextTela : TextScreen,

  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Filmes App"
    }
  }
);

export default createAppContainer(navigator);
