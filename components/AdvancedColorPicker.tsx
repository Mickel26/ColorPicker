import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ColorPicker from "react-native-wheel-color-picker";

const AdvancedColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState('##FFFFFF');

  return (
    <View className="flex-1 p-10">
      <ColorPicker
        color={selectedColor}
        onColorChangeComplete={setSelectedColor}
        thumbSize={30}
        sliderSize={40}
        noSnap={true}
        row={false}
      />
      <View className="items-center mt-8">
        <TouchableOpacity
          className="w-48 h-16 mt-2 rounded-xl flex items-center justify-center border border-gray-100"
          style={{
            backgroundColor: '#FFFFFF',
            shadowColor: selectedColor,
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.4,
            shadowRadius: 8,
            elevation: 8
          }}
          onPress={() => {

          }}
        >
          <Text className="text-black font-semibold text-center" style={{ color: selectedColor }}>
            Select
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AdvancedColorPicker;
