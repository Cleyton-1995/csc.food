import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import FoodItem from "./FoodItem";

export interface FoodProps {
  id: string;
  name: string;
  price: number;
  time: string;
  delivery: number;
  rating: number;
  image: string;
  restaurantId: string;
}

export default function TrendingFoods() {
  const [foods, setFoods] = useState<FoodProps[]>([]);

  useEffect(() => {
    async function getFoods() {
      const response = await fetch("http://192.168.100.34:3000/foods");
      const data = await response.json();
      setFoods(data);
    }

    getFoods();
  }, []);

  return (
    <FlatList
      horizontal={true}
      data={foods}
      renderItem={({ item }) => <FoodItem food={item} />}
      contentContainerStyle={{gap: 14, marginHorizontal: 4}}
      showsHorizontalScrollIndicator={false}
    />
  );
}
