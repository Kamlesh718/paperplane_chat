import { router } from "expo-router";
import { ArrowLeft, LogOut, PencilIcon } from "lucide-react-native";
import React from "react";
import { Alert, Pressable, Text, View } from "react-native";

const SettingsHeader = () => {
  const confirmLogout = () => {
    Alert.alert("Log out", "Are you sure you want to log out?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Logout",
        style: "destructive",
        onPress: () => {
          console.log("Log out");
          router.push("/auth");
        },
      },
    ]);
  };
  return (
    <View className="flex-row justify-between px-4 py-3  border-b border-gray-300">
      <View className="flex-row items-center gap-4">
        <Pressable onPress={() => router.back()}>
          <ArrowLeft />
        </Pressable>
        <Text className="text-2xl font-bold">Settings</Text>
      </View>
      <View className="flex-row gap-4">
        <Pressable>
          <PencilIcon />
        </Pressable>
        <Pressable onPress={confirmLogout}>
          <LogOut />
        </Pressable>
      </View>
    </View>
  );
};

export default SettingsHeader;
