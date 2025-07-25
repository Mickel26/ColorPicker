import { icons } from "@/constants/icons";
import { Tabs } from "expo-router";
import { useColorScheme } from "nativewind";
import React from "react";
import { Image, View } from "react-native";

const _layout = () => {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: isDark ? "#0c0d0d" : "#f2f2f7",
        },
        tabBarStyle: {
          backgroundColor: isDark ? "#0c0d0d" : "#f2f2f7",
          borderTopWidth: 0,
          height: 65,
          paddingBottom: 5,
          paddingTop: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="flex-1 justify-center items-center">
              <Image
                source={icons.home}
                className="w-8 h-8"
                style={{
                  tintColor: focused ? (isDark ? "#fff" : "#000") : "#666",
                }}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="flex-1 justify-center items-center">
              <Image
                source={icons.settings}
                className="w-8 h-8"
                style={{
                  tintColor: focused ? (isDark ? "#fff" : "#000") : "#666",
                }}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
