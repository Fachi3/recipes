import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import GenericScreen from "../Cointeiners/GenericScreen";
import ExploreScreen from "../Cointeiners/ExploreScreen";
import CategoryScreen from "../Cointeiners/CategoryScreen";
import RecipeDetailsScreen from "../Cointeiners/RecipeDetailsScreen";

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
        Details: { screen: RecipeDetailsScreen }
    },
    {
        headerMode: "none"
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;