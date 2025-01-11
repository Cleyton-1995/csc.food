import { ScrollView, StatusBar, Text, View } from "react-native";
import React from "react";
import { Header } from "../components/Header";

import { getStatusBarHeight } from "react-native-iphone-x-helper";
import Banner from "../components/Banner";
import Search from "../components/Search";
import Section from "../components/Section";
import TrendingFoods from "../components/Trending";
import Restaurants from "../components/Restaurants";
import RestaurantsList from "../components/RestaurantsList";

export default function Index() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#E2E8F0"
        translucent
      />
      <ScrollView
        className="bg-slate-200"
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}
      >
        <View
          className="w-full px-4"
          style={{ marginTop: getStatusBarHeight() + 17 }}
        >
          <Header />

          <Banner />

          <Search />

          <Section
            title="Comidas em alta"
            label="Veja mais"
            size="text-2xl"
            action={() => console.log("CLICOU NO VEJA MAIS")}
          />

          <TrendingFoods/>

          <Section
            title="Famosos do CSC.Food"
            label="Veja todos"
            size="text-xl"
            action={() => console.log("CLICOU NO Famosos")}
          />
          <Restaurants/>
          
          <Section
            title="Restaurantes"
            label="Veja todos"
            size="text-xl"
            action={() => console.log("CLICOU NO RESTAURANTE")}
          />
          <RestaurantsList/>
        </View>
      </ScrollView>
    </>
  );
}
