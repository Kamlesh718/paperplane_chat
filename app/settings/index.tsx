import SettingsHeader from "@/components/SettingsHeader";
import {
  AtSign,
  HatGlasses,
  LucideInfo,
  Mail,
  Trash2,
} from "lucide-react-native";
import React from "react";
import { Alert, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Settings() {
  const dummyProfile = "https://i.pravatar.cc/150?img=6";

  const confirmDelete = () => {
    Alert.alert(
      "Delete Account",
      "Are you sure you want to delete your account?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            console.log("Account deleted");
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView className="flex-1">
      {/* MAIN LAYOUT */}
      <View className="flex-1 justify-between">
        {/* TOP CONTENT */}
        <View className="gap-6">
          <SettingsHeader />

          <View className="items-center">
            <Image
              source={{ uri: dummyProfile }}
              className="size-48 rounded-full border border-violet-300"
            />
            <Text className="text-2xl font-semibold mt-6">John Doe</Text>
            <Text className="text-sm mt-1">Last seen 25 minutes ago</Text>
          </View>

          <View className="mx-4">
            <View className="flex-row items-center border-b border-gray-300 pb-1">
              <View className="p-4">
                <AtSign />
              </View>
              <View>
                <Text className="text-lg font-semibold">John224</Text>
                <Text className="text-sm">Username</Text>
              </View>
            </View>

            <View className="flex-row items-center border-b border-gray-300 pb-1">
              <View className="p-4">
                <LucideInfo />
              </View>
              <View>
                <Text className="text-lg font-semibold">Bio</Text>
                <Text className="text-sm">Yoo....</Text>
              </View>
            </View>

            <View className="flex-row items-center border-b border-gray-300 pb-1">
              <View className="p-4">
                <Mail />
              </View>
              <View>
                <Text className="text-lg font-semibold w-36">
                  john@email.com
                </Text>
                <Text className="text-sm">email</Text>
              </View>
            </View>

            <View className="flex-row items-center border-b border-gray-300 pb-1">
              <View className="p-4">
                <HatGlasses />
              </View>
              <View>
                <Text className="text-lg font-semibold w-36">Private</Text>
                <Text className="text-sm">Chat</Text>
              </View>
            </View>
          </View>
        </View>

        {/* FOOTER (BOTTOM) */}
        <View className="flex-row justify-center items-center gap-2">
          <Trash2 size={20} color="red" />
          <Pressable onPress={confirmDelete}>
            <Text className="text-red-500 font-semibold">Delete Account</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
