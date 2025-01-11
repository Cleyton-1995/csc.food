import { ScrollView, StatusBar, Text, View } from "react-native";
import React from "react";
import { Header } from "../components/Header";

import { getStatusBarHeight } from "react-native-iphone-x-helper";
import Banner from "../components/Banner";
import Search from "../components/Search";
import Section from "../components/Section";
import TrendingFoods from "../components/Trending";

export default function Index() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#E2E8F0"
        translucent
      />
      <ScrollView
        className="bg-slate-200 px-0.5 flex-1"
        showsVerticalScrollIndicator={false}
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
        </View>
      </ScrollView>
    </>
  );
}
