import { Text, Pressable, Image } from "react-native";
import React from "react";
import { RestaurantsProps } from "..";

export default function RestaurantsItem({ item }: { item: RestaurantsProps }) {
  return (
    <Pressable
      className="flex flex-col items-center justify-center"
      onPress={() => console.log("CLICOU NO RESTAURANTE" + item.name)}
    >
      <Image source={{ uri: item.image }} className="w-20 h-20 rounded-full justify-center items-center" />
      <Text
        className="text-black mt-4 w-20 text-center leading-4"
        numberOfLines={2}
      >
        {item.name}
      </Text>
    </Pressable>
  );
}
