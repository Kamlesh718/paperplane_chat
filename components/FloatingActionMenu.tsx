import { router } from "expo-router";
import { PencilIcon, Search, UsersRound } from "lucide-react-native";
import React, { useState } from "react";
import { Pressable, View } from "react-native";

const FloatingActionMenu = () => {
  const [showFabActions, setShowFabActions] = useState<boolean>(false);
  return (
    <View className="absolute bottom-5 right-3 items-center">
      {/* Floating actions above */}
      {showFabActions && (
        <View className="gap-3 mb-4 items-center">
          <Pressable
            className="bg-violet-400 w-14 h-14 rounded-full items-center justify-center active:bg-violet-500"
            onPress={() => router.push("/create-group")}
          >
            <UsersRound size={24} color="white" />
          </Pressable>

          <Pressable
            className="bg-violet-400 w-14 h-14 rounded-full items-center justify-center active:bg-violet-500"
            onPress={() => router.push("/search")}
          >
            <Search size={24} color="white" />
          </Pressable>
        </View>
      )}

      {/* Main pencil FAB */}
      <Pressable
        className="bg-violet-500 w-16 h-16 rounded-full items-center justify-center active:bg-violet-600"
        onPress={() => setShowFabActions((f) => !f)}
      >
        <PencilIcon size={26} color="white" />
      </Pressable>
    </View>
  );
};

export default FloatingActionMenu;
