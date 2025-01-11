import { View, Text, Pressable } from "react-native";
import React from "react";

interface Props {
  title: string;
  size: "text-lg" | "text-xl" | "text-2xl";
  label: string;
  action: () => void;
}
export default function Section({ action, label, size, title }: Props) {
  return (
    <View className="w-full flex flex-row items-center justify-between px-1">
      <Text className={`${size} font-semibold my-4 self-start`}>{title}</Text>

      <Pressable onPress={action}>
        <Text>{label}</Text>
      </Pressable>
    </View>
  );
}
