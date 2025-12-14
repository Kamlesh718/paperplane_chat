import Header from "@/components/Header";
import { chats } from "@/constants/mock";
import { router } from "expo-router";
import {
  Lock,
  LockKeyhole,
  PencilIcon,
  Search,
  UsersRound,
} from "lucide-react-native";
import React, { useState } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ChatItem = {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  avatar: string;
};

function Chats() {
  const [showFabActions, setShowFabActions] = useState<boolean>(false);
  return (
    <SafeAreaView className="relative flex-1">
      <View>
        <Header />

        <FlatList<any>
          data={chats}
          contentContainerClassName="pb-24"
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            const isLocked = item.isLocked;
            return (
              <Pressable
                onPress={() =>
                  router.push({
                    pathname: `/chats/[id]`,
                    params: {
                      id: item.id,
                      ...(isLocked && { locked: "true" }),
                    },
                  })
                }
                className="flex-row items-center px-4 py-3"
              >
                {/* Avatar */}
                <Image
                  source={{ uri: item.avatar }}
                  className="w-12 h-12 rounded-full mr-3"
                />

                {/* Content */}
                <View className="flex-1">
                  <View className="flex-row items-center justify-between">
                    <Text className="font-semibold text-base">{item.name}</Text>
                    <Text className="text-xs text-gray-400">{item.time}</Text>
                  </View>

                  <View className="flex-row items-center justify-between mt-1">
                    <Text
                      className={`text-sm ${
                        isLocked ? "text-gray-400 italic" : "text-gray-500"
                      }`}
                      numberOfLines={1}
                    >
                      {isLocked ? (
                        <LockKeyhole size={14} color="#9CA3AF" />
                      ) : (
                        item.lastMessage
                      )}
                    </Text>

                    {isLocked && <Lock size={14} color="#9CA3AF" />}
                  </View>
                </View>
              </Pressable>
            );
          }}
        />
      </View>

      <View className="absolute bottom-5 right-3 items-center">
        {/* Floating actions above */}
        {showFabActions && (
          <View className="gap-3 mb-4 items-center">
            <Pressable className="bg-violet-400 w-14 h-14 rounded-full items-center justify-center active:bg-violet-500">
              <UsersRound size={24} color="white" />
            </Pressable>

            <Pressable className="bg-violet-400 w-14 h-14 rounded-full items-center justify-center active:bg-violet-500">
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
    </SafeAreaView>
  );
}

export default Chats;
