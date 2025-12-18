import ChatList from "@/components/ChatList";
import FloatingActionMenu from "@/components/FloatingActionMenu";
import Header from "@/components/Header";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Chats() {
  return (
    <SafeAreaView className="relative flex-1">
      <View>
        <Header />
        <ChatList />
      </View>
      <FloatingActionMenu />
    </SafeAreaView>
  );
}

export default Chats;
