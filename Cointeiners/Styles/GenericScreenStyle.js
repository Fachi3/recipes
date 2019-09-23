import {StyleSheet} from 'react-native';
import {Metrics, Colors, Fonts} from '../../Theme/';

const BARHEIGHT = 56;

export default StyleSheet.create({
    navBar:{
        height: Metrics.navBarHeight,
        backgroundColor: Colors.whiteFull,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        ...Fonts.style.recipeNameCard,
        fontWeight: 'bold'
    },
    redBar:{
        backgroundColor: Colors.redFull,
        height: BARHEIGHT * 1.5,
    }
});