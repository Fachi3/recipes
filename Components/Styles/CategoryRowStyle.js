import { StyleSheet } from "react-native";
import { Metrics, Colors, Fonts } from "../../Theme";

export default StyleSheet.create({
    container: {
        marginHorizontal: Metrics.baseSpace,
        marginBottom: Metrics.baseSpace,
        justifyContent: "center",
        alignItems: "stretch",
        backgroundColor: Colors.whiteFull,
        overflow:"hidden",
        borderRadius: Metrics.borderRadius,
    },
    categoryText: {
        ...Fonts.style.h3
    },
    properties: {
        paddingBottom: 10,
        paddingTop: 10,
        justifyContent: "flex-start",
        alignItems: "stretch",
        flexDirection: "row"
    },
    cell: {
        marginLeft: 130,
        marginRight: 130,
        justifyContent: "center",
        alignContent: "stretch",
        alignItems: "stretch",
        marginRight: Metrics.smallSpace,
        flexDirection: "row"
    },
    cellIcon: {
        fontSize: Metrics.icons.small,
        color: Colors.blackFull,
        marginRight: Metrics.smallSpace
    },
    cellText: {
        paddingLeft: 20,
        fontFamily: Fonts.family.base,
        fontSize: 13,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0.5,
        color: Colors.blackFull
    },
});