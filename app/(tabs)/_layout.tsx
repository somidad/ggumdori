import { Tabs } from "expo-router";
import React from "react";
import { Icon } from "react-native-paper";

const ICON_SIZE = 24;

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Icon size={ICON_SIZE} source="home" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
