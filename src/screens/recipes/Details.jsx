import React from 'react';
import DetailsStyles from '../../styles/DetailsStyles';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Colors from '../../theme/Colors';
import Metrics from '../../theme/Metrics';

const data = {
  _id: '52944',
  name: 'Escovitch Fish',
  categoryId: '1',
  categoryName: 'Fish',
  duration: 11,
  complexity: 'Hard',
  people: 3,
  recommended: 1,
  ingredients: '2 eggs\r\n4 tomatoes\r\nsalt\r\npepper',
  description:
      'Rinse fish; rub with lemon or lime, seasoned with salt and pepper or use your favorite seasoning. I used creole seasoning. Set aside or place in the oven to keep it warm until sauce is ready.\r\n\r\nIn large skillet heat oil over medium heat, until hot, add the fish, cook each side- for about 5-7 minutes until cooked through and crispy on both sides. Remove fish and set aside. Drain oil and leave about 2-3 tablespoons of oil\r\nAdd, bay leave, garlic and ginger, stir-fry for about a minute making sure the garlic does not burn\r\nThen add onion, bell peppers, thyme, scotch bonnet, sugar, all spice-continue stirring for about 2-3 minutes. Add vinegar, mix an adjust salt and pepper according to preference. Let it simmer for about 2 more minutes. \r\n\r\nDiscard bay leave, thyme spring and serve over fish with a side of this bammy. You may make the sauce about 2 days in advance.',
  photo: 'https://www.themealdb.com/images/media/meals/1520084413.jpg',
};

export default function Details () {
  // render() {
  //   let imageUrl = 'http://via.placeholder.com/640x360';
  //   if (data && data.photo) {
  //     imageUrl = data.photo;
  //   }

    return (
      <SafeAreaView style={DetailsStyles.mainScreen}>
        <StatusBar barStyle="dark-content" />
        <View style={DetailsStyles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={DetailsStyles.imageContainer}>
              <Image source={{ uri: imageUrl }} style={DetailsStyles.recipeImage} />
              <View style={DetailsStyles.darkener} />
            </View>
            <View style={DetailsStyles.infoContainer}>
              <Text style={DetailsStyles.category}>{data.categoryName}</Text>
              <Text style={DetailsStyles.title}>{data.name}</Text>
              <View style={DetailsStyles.properties}>
                <View style={DetailsStyles.cell}>
                  <Text style={DetailsStyles.cellText}>
                    {data.duration}
                    {' '}
                    minutes
                  </Text>
                </View>
                <View style={DetailsStyles.cell}>
                  <Text style={DetailsStyles.cellText}>{data.complexity}</Text>
                </View>
                <View style={DetailsStyles.cell}>
                  <Text style={DetailsStyles.cellText}>
                    {data.people}
                    {' '}
                    people
                  </Text>
                </View>
              </View>
            </View>
            <View style={DetailsStyles.infoBox}>
              <Text style={DetailsStyles.header}>Ingredients</Text>
              <Text style={DetailsStyles.description}>{data.ingredients}</Text>
            </View>
            <View style={DetailsStyles.infoBox}>
              <Text style={DetailsStyles.header}>Info</Text>
              <Text style={DetailsStyles.description}>{data.description}</Text>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }


