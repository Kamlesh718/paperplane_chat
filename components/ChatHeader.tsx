import { router } from "expo-router";
import { ArrowLeft, EllipsisVertical } from "lucide-react-native";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

type Props = {
  name?: string;
  avatar?: string;
  bio?: string;
  lastSeen?: string;
  isOnline?: boolean;
};

export default function ChatHeader({
  name,
  avatar,
  bio,
  lastSeen,
  isOnline,
}: Props) {
  return (
    <View className="flex-row items-center justify-between px-4 py-3  border-b border-gray-300">
      <View className="flex-row items-center gap-4">
        <Pressable onPress={() => router.back()}>
          <ArrowLeft />
        </Pressable>
        <View className="relative ml-4">
          <Image source={{ uri: avatar }} className="size-12 rounded-full" />

          <View
            className={`absolute bottom-0 right-0 size-3 rounded-full border-2 border-white ${
              isOnline ? "bg-green-500" : "bg-gray-500"
            }`}
          />
        </View>

        <View className="ml-1">
          <Text className="text-2xl font-semibold">{name}</Text>
          <Text className="text-sm font-light">{lastSeen}</Text>
        </View>
      </View>
      <Pressable>
        <EllipsisVertical />
      </Pressable>
    </View>
  );
}
