import { router } from "expo-router";
import { Menu, Settings2 } from "lucide-react-native";
import React, { useState } from "react";
import { Image, Modal, Pressable, Text, TextInput, View } from "react-native";

export default function Header() {
  const [menu, setMenu] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const dummyProfile = "https://i.pravatar.cc/150?img=6";

  const handleInputSearch = (text: string) => {
    setSearch(text);
  };

  return (
    <View className="flex-row items-center gap-8 mx-3 border-b border-gray-300 py-4">
      {/* Menu + Dropdown wrapper */}
      <View className="relative">
        <Pressable onPress={() => setMenu((m) => !m)}>
          <Menu size={30} />
        </Pressable>

        {/* Dropdown */}
        {menu && (
          <Modal
            transparent
            animationType="fade"
            visible={menu}
            onRequestClose={() => setMenu(false)}
          >
            {/* Outside click */}
            <Pressable className="flex-1" onPress={() => setMenu(false)}>
              {/* Dropdown */}
              <View
                onStartShouldSetResponder={() => true}
                className="absolute top-16 left-4 w-44 rounded-md bg-gray-100 py-2 px-3 shadow-lg border border-gray-300"
              >
                <View className="flex-row gap-4 items-center p-2 rounded-md border-b border-gray-300">
                  {/* <CircleUser size={20} /> */}
                  <Image
                    source={{ uri: dummyProfile }}
                    className="size-6 rounded-full border border-violet-300"
                  />
                  <Text className="text-md font-semibold">John</Text>
                </View>

                <Pressable
                  onPress={() => {
                    setMenu(false);
                    router.navigate("/settings");
                  }}
                  className="flex-row gap-4 items-center p-2 rounded-md active:bg-gray-200"
                >
                  <Settings2 size={18} />
                  <Text className="text-md font-semibold">Settings</Text>
                </Pressable>
              </View>
            </Pressable>
          </Modal>
        )}
      </View>

      {/* Search input */}
      <TextInput
        placeholder="Search"
        className="border px-4 border-gray-400 rounded-full flex-1"
        onChangeText={handleInputSearch}
        // onChange={handleInputSearch}
        value={search}
      />
    </View>
  );
}
