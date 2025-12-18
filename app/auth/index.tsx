import { router } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GoogleIcon from "../../assets/images/google_logo.png";

export default function AuthScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center px-6">
        <Pressable
          className="flex-row items-center justify-center gap-3
               border border-gray-300 rounded-2xl
               bg-white py-4
               active:scale-[0.98]"
          onPress={() => router.push("/chats")}
        >
          <Image source={GoogleIcon} className="w-5 h-5" />

          <Text className="text-base font-semibold text-gray-800">
            Continue with Google
          </Text>
        </Pressable>

        {/* Subtle legal text */}
        <Text className="text-xs text-gray-400 text-center mt-4 leading-4">
          By continuing, you agree to our{" "}
          <Text className="underline">Terms</Text> and{" "}
          <Text className="underline">Privacy Policy</Text>.
        </Text>
      </View>
    </SafeAreaView>
  );
}
