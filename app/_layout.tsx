/* eslint-disable import/no-unresolved */
import { Tabs } from "expo-router";

import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { theme } from "@/theme";

export default function Layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colors.primary }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Search",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="wardrobe"
        options={{
          title: "Wardrobe",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="wardrobe-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="outfits"
        options={{
          title: "Outfits",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="favorite-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
