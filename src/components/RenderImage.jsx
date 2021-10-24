import React from "react"
import { Image } from "react-native";
import HomeStyles from "../styles/HomeStyles";

export default function RenderImage(item){
    let imageUrl = 'http://via.placeholder.com/640x360';
    if (item && item.photo) {
      imageUrl = item.photo;
    }
    return <Image source={{ uri: imageUrl }} style={HomeStyles.recipeImage} />;
  };