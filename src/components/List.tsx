import React from "react";
import { FlatList } from "react-native";
import fakeRecipes from "../mocks/fakeRecipes";
import Recommended from "./Recommended";
import Row from "./Row";

export default function List () {
    return (
        <FlatList
          ListHeaderComponent={Recommended}
          showsVerticalScrollIndicator={false}
          data={fakeRecipes}
          renderItem={Row}
        />

    )
};