import React from 'react';
import {
  Text, View, SafeAreaView, StatusBar,
} from 'react-native';

import HomeStyles from '../../styles/HomeStyles';
import List from '../../components/List';


export default function ExploreScreen (){
    return (
      <SafeAreaView style={HomeStyles.mainScreen}>
        <StatusBar barStyle="dark-content" />
        <View style={HomeStyles.navBar}>
          <View style={HomeStyles.titleWrapper}>
            <Text style={HomeStyles.title}>Recipes</Text>
          </View>
        </View>
        <View style={HomeStyles.container}>{List()}</View>
      </SafeAreaView>
    );
}

