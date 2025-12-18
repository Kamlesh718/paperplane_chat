import { chats } from "@/constants/mock";
import { router } from "expo-router";
import { Lock, LockKeyhole } from "lucide-react-native";
import React from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";

type ChatItem = {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  avatar: string;
};

const ChatList = () => {
  return (
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
  );
};

export default ChatList;
