import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import GenericScreen from "../Cointeiners/GenericScreen";
import ExploreScreen from "../Cointeiners/ExploreScreen";
import CategoriesScreen from "../Cointeiners/CategoriesScreen";
import RecipeDetailsScreen from "../Cointeiners/RecipeDetailsScreen";
import FavoritesScreen from "../Cointeiners/FavoriteScreen";
import CategoryScreen from "../Cointeiners/CategoryScreen";

const TabNav = createBottomTabNavigator(
    {
        Explore: {screen: ExploreScreen},
        Categories: {screen: CategoriesScreen},
        Favorites: {screen: FavoritesScreen},
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
        Details: {screen: RecipeDetailsScreen},
        Category: {screen: CategoryScreen}
    },
    {
        headerMode: "none"
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;