import ChatHeader from "@/components/ChatHeader";
import { chats } from "@/constants/mock";
import { useLocalSearchParams } from "expo-router";
import { ImageIcon, Lock, SendIcon } from "lucide-react-native";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Chat() {
  const { id, locked } = useLocalSearchParams<{
    id: string;
    locked?: string;
  }>();

  const isLocked = locked === "true";
  const [pin, setPin] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  const chatInfo = chats.find((c) => c.id === id);

  if (isLocked && !unlocked) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center px-6 bg-white">
        <View className="flex-row gap-4 items-center">
          <Lock size={20} />
          <Text className="text-2xl font-bold mb-2">Locked Chat</Text>
        </View>
        <Text className="text-gray-500 mb-6 text-center">
          Enter your PIN to view this conversation
        </Text>

        <TextInput
          value={pin}
          onChangeText={setPin}
          keyboardType="number-pad"
          secureTextEntry
          maxLength={4}
          className="border w-1/2 border-gray-300 rounded-xl px-6 py-4 text-center text-xl tracking-widest mb-6"
        />

        <Pressable
          className="bg-blue-600 rounded-xl px-10 py-4"
          onPress={() => {
            if (pin === "1234") {
              setUnlocked(true);
            }
          }}
        >
          <Text className="text-white font-semibold">Unlock</Text>
        </Pressable>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-white">
      {/* HEADER */}
      <ChatHeader
        name={chatInfo?.name}
        avatar={chatInfo?.avatar}
        bio={chatInfo?.bio}
        lastSeen={chatInfo?.lastSeen}
        isOnline={chatInfo?.isOnline}
      />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
      >
        {/* MESSAGES */}
        <View className="flex-1 px-4">
          <Text>{id}</Text>
        </View>

        {/* INPUT */}
        <View className="flex-row items-center px-3 py-2 border-t border-gray-300 bg-white">
          <Pressable className="p-2">
            <ImageIcon />
          </Pressable>

          <TextInput
            className="flex-1 mx-2 px-4 py-4 rounded-full bg-gray-100"
            placeholder="Message"
            multiline
            textAlignVertical="top"
          />

          <Pressable className="p-2">
            <SendIcon />
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
