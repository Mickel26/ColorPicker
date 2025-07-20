import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ColorPicker from "react-native-wheel-color-picker";

interface AdvancedColorPickerProps {
  onColorSelect: (color: string) => void;
}

const AdvancedColorPicker: React.FC<AdvancedColorPickerProps> = ({ onColorSelect }) => {
  const [selectedColor, setSelectedColor] = useState('#FFFFFF');

  const handleSelectPress = () => {
    onColorSelect(selectedColor);
  };

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
      <View className="mt-8 items-center">
        {/* <Text className="text-gray-600 mb-2">Selected Color:</Text> */}
        <View
          className="w-20 h-20 rounded-lg border border-gray-300"
          style={{ backgroundColor: selectedColor }}
        />
        <Text className="mt-2 font-mono text-sm">{selectedColor}</Text>
      </View>
      <View className="items-center mt-4">
        <TouchableOpacity
          className="w-48 h-16 mt-2 rounded-xl flex items-center justify-center border border-gray-300"
          style={{
            backgroundColor: '#FFFFFF',
            shadowColor: selectedColor,
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.4,
            shadowRadius: 8,
            elevation: 8
          }}
          onPress={handleSelectPress}
        >
          <Text className="text-black font-semibold text-center">
            Select
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AdvancedColorPicker;