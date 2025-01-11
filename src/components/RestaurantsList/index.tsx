import { FlatList, View } from "react-native";
import React, { useEffect, useState } from "react";
import ItemList from "./ListItem";
export interface RestaurantsListProps {
  id: string;
  name: string;
  image: string;
}

export default function RestaurantsList() {
  const [restaurantsList, setRestaurantsList] = useState<RestaurantsListProps[]>([]);

  useEffect(() => {
    async function getRestaurantsList() {
      const response = await fetch("http://192.168.100.34:3000/restaurants");
      const data = await response.json();
      setRestaurantsList(data);
    }

    getRestaurantsList();
  }, []);

  return (
   <View className="flex-1 w-full h-full mb-11 gap-4">
    {restaurantsList.map(item => (
      <ItemList item={item} key={item.id} />
    ))}
   </View>
  );
}
