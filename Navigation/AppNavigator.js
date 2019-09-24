import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import GenericScreen from "../Cointeiners/GenericScreen";
import ExploreScreen from "../Cointeiners/ExploreScreen";
import CategoryScreen from "../Cointeiners/CategoryScreen";

const TabNav = createBottomTabNavigator(
    {
        Explore: {screen: ExploreScreen},
        Categories: {screen: CategoryScreen},
        Favorites: {screen: GenericScreen},
    },
    {
        headerMode: "none",
        initialRouteName: "Explore",
        defaultNavigationOptions: {tabBarVisible: false}
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