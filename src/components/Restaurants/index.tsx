import { FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import RestaurantsItem from "./RestaurantsItem";

export interface RestaurantsProps {
  id: string;
  name: string;
  image: string;
}

export default function Restaurants() {
  const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([]);

  useEffect(() => {
    async function getRestaurants() {
      const response = await fetch("http://192.168.100.34:3000/restaurants");
      const data = await response.json();
      setRestaurants(data);
    }

    getRestaurants();
  }, []);

  return (
    <FlatList
      horizontal={true}
      data={restaurants}
      renderItem={({ item }) => <RestaurantsItem item={item} />}
      contentContainerStyle={{gap: 14, marginHorizontal: 4}}
      showsHorizontalScrollIndicator={false}
    />
  );
}
