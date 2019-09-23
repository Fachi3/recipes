import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import GenericScreen from "../Cointeiners/GenericScreen";
import ExploreScreen from "../Cointeiners/ExploreScreen";

const TabNav = createBottomTabNavigator(
    {
        Explore: {screen: ExploreScreen},
        Categories: {screen: GenericScreen},
        Favorites: {screen: GenericScreen},
    },
    {
        headerMode: "none",
        initialRouteName: "Explore"
    }
);

const AppNavigator = createStackNavigator(
    {
        Home: {screen: TabNav},
    },
    {
        headerMode: "none"
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;