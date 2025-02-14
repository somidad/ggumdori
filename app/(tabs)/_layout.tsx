import { Tabs } from "expo-router";
import React from "react";
import { BottomNavigation, Icon } from "react-native-paper";
import { CommonActions } from "@react-navigation/native";

export default function TabLayout() {
  return (
    <Tabs
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 });
            }

            return null;
          }}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.title;

            return label;
          }}
        />
      )}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="statements"
        options={{
          title: "Statements",
          tabBarLabel: "Statements",
          tabBarIcon: ({ color }) => (
            <Icon size={28} source="chart-areaspline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          title: "Transactions",
          tabBarLabel: "Transactions",
          tabBarIcon: ({ color }) => (
            <Icon size={28} source="chart-bar" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="accounts"
        options={{
          title: "Accounts",
          tabBarLabel: "Accounts",
          tabBarIcon: ({ color }) => (
            <Icon size={28} source="wallet" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="currencies"
        options={{
          title: "Currencies",
          tabBarLabel: "Currencies",
          tabBarIcon: ({ color }) => (
            <Icon size={28} source="currency-krw" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <Icon size={28} source="cog" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
