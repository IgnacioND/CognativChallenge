import React from "react"
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import recommendations from "../mocks/recommendations";
import HomeStyles from "../styles/HomeStyles";
import ImageBox from "./ImageBox";

export default function Recommended () {
    return (
    <View style={HomeStyles.recommendedContainer}>
      <Text style={HomeStyles.header}>Recommended</Text>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={HomeStyles.scroller}
      >
        {recommendations.map((item) => (
          <TouchableOpacity onPress={this.onPress}>
            <View style={HomeStyles.recipeImageBox}>{ImageBox(item)}</View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}