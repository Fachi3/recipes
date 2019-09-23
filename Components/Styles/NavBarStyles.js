import {StyleSheet} from 'react-native';
import {Metrics, Colors, Fonts} from '../../Theme/';

export default StyleSheet.create({
    navBar: {
        paddingTop: Metrics.statusBarHeight,
        height: Metrics.navBarHeight,
        backgroundColor: Colors.whiteFull,
        backgroundColor: Colors.mainBackground,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    title:{
        ...Fonts.style.recipeNameCard,
        fontWeight: 'bold'
    },
    leftContainer: {
        width: Metrics.buttonSize,
        alignItems: "center",
        justifyContent: "center"
    },
    rightContainer: {
        width: Metrics.buttonSize,
        alignItems: "center",
        justifyContent: "center"
    },
    titleWrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    favorite: {
        color: Colors.darkOrange
    }
});