import { ScrollView, StatusBar, Text, View } from "react-native";
import React from "react";
import { Header } from "../components/Header";

import { getStatusBarHeight } from "react-native-iphone-x-helper";

export default function Index() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#E2E8F0"
        translucent
      />
      <ScrollView
        className="bg-slate-200 px-0.5"
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View
          className="w-full px-4"
          style={{ marginTop: getStatusBarHeight() + 17 }}
        >
          <Header />
        </View>
      </ScrollView>
    </>
  );
}
