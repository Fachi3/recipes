import {StyleSheet} from 'react-native';
import {Metrics, Colors, Fonts} from '../../Theme';

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
    alternate: {
        color: Colors.whiteFull
    },
    transparent: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "transparent",
        zIndex: 10
    },
    title:{
        ...Fonts.style.recipeNameCard,
        fontWeight: 'bold'
    },
    favIco: {
        color: Colors.blackFull,
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
    },
    cellIcon: {
        fontSize: Metrics.icons.small,
        color: Colors.blackFull,
        marginRight: Metrics.smallSpace
    },
});