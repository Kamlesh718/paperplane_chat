import { router } from "expo-router";
import { ArrowLeft, BanIcon, EllipsisVertical } from "lucide-react-native";
import React, { useState } from "react";
import { Image, Modal, Pressable, Text, View } from "react-native";

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
  const [dropdown, setDropdown] = useState<boolean>(false);
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
      <View>
        <Pressable onPress={() => setDropdown((d) => !d)}>
          <EllipsisVertical />
        </Pressable>

        {dropdown && (
          <Modal
            transparent
            animationType="fade"
            visible={dropdown}
            onRequestClose={() => setDropdown(false)}
          >
            {/* Backdrop */}
            <Pressable className="flex-1" onPress={() => setDropdown(false)}>
              {/* Dropdown */}
              <Pressable
                onPress={() => {}}
                className="absolute top-16 right-3 w-32 rounded-md bg-gray-100 py-2 px-3 shadow-lg border border-gray-300"
              >
                <View className="flex-row gap-2 items-center p-2 rounded-md">
                  <BanIcon size={20} color="red" />
                  <Text className="text-md font-semibold">Block</Text>
                </View>
              </Pressable>
            </Pressable>
          </Modal>
        )}
      </View>
    </View>
  );
}
