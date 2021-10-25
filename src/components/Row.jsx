import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import HomeStyles from "../styles/HomeStyles";
import Image from "./RenderImage";

export default function Row ({ item }) {
  return(
    <TouchableOpacity onPress={this.onPress}>
      <View style={HomeStyles.rowContainer}>
        <View style={HomeStyles.imageContainer}>{Image(item)}</View>
        <View style={HomeStyles.infoContainer}>
          <Text style={HomeStyles.categoryRow}>{item.categoryName}</Text>
          <Text style={HomeStyles.titleRow}>{item.name}</Text>
          <View style={HomeStyles.properties}>
            <View style={HomeStyles.cellRow}>
              <Text style={HomeStyles.cellText}>
                {item.duration}
                {' '}
                minutes
              </Text>
            </View>
            <View style={HomeStyles.cellRow}>
              <Text style={HomeStyles.cellText}>{item.complexity}</Text>
            </View>
            <View style={HomeStyles.cellRow}>
              <Text style={HomeStyles.cellText}>
                {item.people}
                {' '}
                people
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
};