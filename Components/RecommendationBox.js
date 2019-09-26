import React from "react";
import {View, Text, ScrollView} from "react-native";
import MiniRecipe from "./MiniRecipe";

import styles from "./Styles/RecommentationBoxStyle";


class RecommendationBox extends React.Component {
    renderScroll = () => {
        const {data} = this.props;
        console.log("render recommend");
        return(
            <ScrollView
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scroller} >
                    {data.map(item => {
                        return <MiniRecipe key={item.id} data={item} />;
                    })}
            </ScrollView>
        );
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.header}>Platillos recomendados</Text>
                {this.renderScroll()}
            </View>
        );
    }
}

export default RecommendationBox;

