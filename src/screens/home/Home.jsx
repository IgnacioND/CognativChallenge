import React, { Component } from 'react';
import {
  Text, View, FlatList, TouchableOpacity, SafeAreaView, Image, ScrollView, StatusBar,
} from 'react-native';

import recommendations from '../../mocks/recommendations';
import fakeRecipes from '../../mocks/fakeRecipes';
import HomeStyles from '../../styles/HomeStyles';


class ExploreScreen extends Component {
  renderImage = (item) => {
    let imageUrl = 'http://via.placeholder.com/640x360';
    if (item && item.photo) {
      imageUrl = item.photo;
    }
    return <Image source={{ uri: imageUrl }} style={HomeStyles.recipeImage} />;
  };

  renderImageBox = (item) => {
    let imageUrl = 'http://via.placeholder.com/640x360';
    if (item && item.photo) {
      imageUrl = item.photo;
    }
    return <Image source={{ uri: imageUrl }} style={HomeStyles.scrollerRecipe} />;
  };

  renderRow = ({ item }) => (
    <TouchableOpacity onPress={this.onPress}>
      <View style={HomeStyles.rowContainer}>
        <View style={HomeStyles.imageContainer}>{this.renderImage(item)}</View>
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
  );

  keyExtractor = (item) => item._id;

  renderList = () => (
    <FlatList
      ListHeaderComponent={this.renderRecommended}
      showsVerticalScrollIndicator={false}
      keyExtractor={this.keyExtractor}
      data={fakeRecipes}
      renderItem={this.renderRow}
    />
  );

  renderRecommended = () => (
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
            <View style={HomeStyles.recipeImageBox}>{this.renderImageBox(item)}</View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );

  render() {
    return (
      <SafeAreaView style={HomeStyles.mainScreen}>
        <StatusBar barStyle="dark-content" />
        <View style={HomeStyles.navBar}>
          <View style={HomeStyles.titleWrapper}>
            <Text style={HomeStyles.title}>Recipes</Text>
          </View>
        </View>
        <View style={HomeStyles.container}>{this.renderList()}</View>
      </SafeAreaView>

    );
  }
}
export default ExploreScreen;

