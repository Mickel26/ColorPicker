import React, { useState } from "react";
import { View } from "react-native";
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
      {/* <Text style={{ marginTop: 20, textAlign: 'center', fontSize: 18 }}>
        Selected Color: {selectedColor}
      </Text>
      <View style={{
        height: 50,
        marginTop: 10,
        backgroundColor: selectedColor,
        borderRadius: 10
      }} /> */}
    </View>
  );
};

export default AdvancedColorPicker;
