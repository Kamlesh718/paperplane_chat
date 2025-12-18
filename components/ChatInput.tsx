import { ImageIcon, SendIcon } from "lucide-react-native";
import React from "react";
import { Pressable, TextInput, View } from "react-native";

export default function ChatInput() {
  return (
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
  );
}
