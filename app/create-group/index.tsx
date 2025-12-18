import { router } from "expo-router";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreateGroupModal() {
  return (
    <SafeAreaView className="flex-1 bg-white px-6">
      {/* Header */}
      <View className="flex-row items-center justify-between py-4">
        <Text className="text-xl font-semibold">New Group</Text>
        <Pressable onPress={() => router.back()}>
          <Text className="text-violet-500 font-medium">Cancel</Text>
        </Pressable>
      </View>

      {/* Group name */}
      <Text className="text-gray-500 mb-2">Group name</Text>
      <TextInput
        placeholder="Enter group name"
        className="border border-gray-300 rounded-xl px-4 py-3 mb-6"
      />

      {/* Next / Create */}
      <Pressable className="bg-violet-500 rounded-xl py-4">
        <Text className="text-white text-center font-semibold">Next</Text>
      </Pressable>
    </SafeAreaView>
  );
}
