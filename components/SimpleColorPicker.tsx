import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

interface AdvancedColorPickerProps {
  onColorSelect: (color: string) => void;
}

const colorOptions = [
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#96CEB4",
  "#FFEAA7",
  "#DDA0DD",
  "#98D8C8",
  "#F7DC6F",
  "#BB8FCE",
  "#85C1E9",
  "#F8C471",
  "#82E0AA",
  "#F1948A",
  "#85929E",
  "#A569BD",
];

const SimpleColorPicker = ({ onColorSelect }: AdvancedColorPickerProps) => {
  const [selectedColor, setSelectedColor] = useState("#FFFFFF");

  const handleSelectPress = () => {
    onColorSelect(selectedColor);
  };

  return (
    <View className="pt-24 px-4 flex-1">
      <Text className="text-xl font-semibold mb-6 text-gray-800">
        Pick a Color
      </Text>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
      >
        {colorOptions.map((color) => (
          <TouchableOpacity
            key={color}
            className="flex-row items-center mb-4 p-4 rounded-3xl bg-white"
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 2,
              minHeight: 80,
            }}
            onPress={() => onColorSelect(color)}
          >
            <View
              className="w-16 h-16 rounded-3xl mr-5"
              style={{ backgroundColor: color }}
            />
            <Text className="text-lg font-medium text-gray-700 flex-1">
              {color}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity
        className="w-52 h-16 mt-2 mb-2 rounded-xl flex items-center justify-center border border-gray-300"
        style={{
          backgroundColor: "#FFFFFF",
          shadowColor: selectedColor,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.4,
          shadowRadius: 8,
          elevation: 8,
        }}
        onPress={handleSelectPress}
      >
        <Text className="text-black font-semibold text-center">Select</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SimpleColorPicker;
