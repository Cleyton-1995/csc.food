import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { FoodProps } from "..";
import { Ionicons } from "@expo/vector-icons";

export default function FoodItem({ food }: { food: FoodProps }) {
  return (
    <Pressable>
      <Image
        source={{ uri: food.image }}
        className="relative w-44 h-36 rounded-xl"
      />

      <View className="flex flex-row bg-neutral-900/90 gap-1 rounded-full absolute top-2 right-3 px-2 py-1">
        <Ionicons name="star" size={14} color="#CA8A04" />
        <Text className="text-white text-sm">{food.rating}</Text>
      </View>

      <Text className="text-green-700 font-medium text-lg">
        R$ {food.price}
      </Text>
      <Text className="text-black mt-1">{food.name}</Text>
      <Text className="text-neutral-600 text-sm">
        {food.time} - R$ {food.delivery}
      </Text>
    </Pressable>
  );
}
