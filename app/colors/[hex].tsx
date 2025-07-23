import { icons } from "@/constants/icons";
import chroma from "chroma-js";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type RGB = [number, number, number];

const ColorPage = () => {
  const { hex } = useLocalSearchParams<{ hex: string }>();
  const router = useRouter();

  const colorValue = hex ? `#${hex}` : "#FFFFFF";

  const targetRgb: [number, number, number] = chroma(colorValue).rgb();

  type RGB = [number, number, number];

  function mixColors(colors: RGB[]): RGB {
    const n = colors.length;
    const [r, g, b] = colors.reduce(
      (acc, [r, g, b]) => [acc[0] + r, acc[1] + g, acc[2] + b],
      [0, 0, 0]
    );
    return [Math.round(r / n), Math.round(g / n), Math.round(b / n)];
  }

  function findColorPair(target: RGB): [RGB, RGB] | null {
    const candidates: RGB[] = [];

    for (let r = 0; r <= 255; r += 51) {
      for (let g = 0; g <= 255; g += 51) {
        for (let b = 0; b <= 255; b += 51) {
          candidates.push([r, g, b]);
        }
      }
    }

    let bestPair: [RGB, RGB] | null = null;
    let bestDistance = Infinity;

    for (const c1 of candidates) {
      for (const c2 of candidates) {
        const mixed = mixColors([c1, c2]);
        const distance = chroma.distance(
          chroma.rgb(...mixed),
          chroma.rgb(...target)
        );

        if (distance < bestDistance) {
          bestDistance = distance;
          bestPair = [c1, c2];
        }
      }
    }

    return bestPair;
  }

  const pair = findColorPair(targetRgb);
  let color1Rgb: RGB = [0, 0, 0];
  let color2Rgb: RGB = [0, 0, 0];

  if (pair) {
    [color1Rgb, color2Rgb] = pair;
    console.log("Approximate base colors:", color1Rgb, color2Rgb);
  }

  const color1 = `rgb(${color1Rgb[0]}, ${color1Rgb[1]}, ${color1Rgb[2]})`;
  const color2 = `rgb(${color2Rgb[0]}, ${color2Rgb[1]}, ${color2Rgb[2]})`;

  return (
    <View className="flex-1 items-center p-10">
      <View
        className="w-64 h-64 rounded-3xl mb-8 border-2 border-gray-200"
        style={{ backgroundColor: colorValue }}
      />

      {/* <Text className="text-2xl font-bold mb-2">Color Details</Text> */}
      <Text className="text-lg font-mono mb-8">{colorValue}</Text>

      <View className="flex-row items-center justify-between w-full mb-8">
        <View
          className="w-32 h-32 rounded-3xl mb-8 border-2 border-gray-200"
          style={{ backgroundColor: color1 }}
        />
        <Image source={ icons.plus } className="w-16 h-16 mb-8" style={{ tintColor: 'lightgray' }}/>
        <View
          className="w-32 h-32 rounded-3xl mb-8 border-2 border-gray-200"
          style={{ backgroundColor: color2 }}
        />
      </View>

      <TouchableOpacity
        className="w-48 h-16 rounded-xl flex items-center justify-center border border-gray-300"
        style={{
          backgroundColor: "#FFFFFF",
          shadowColor: colorValue,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.4,
          shadowRadius: 8,
          elevation: 8,
        }}
        onPress={() => router.back()}
      >
        <Text className="text-black font-semibold">Choose Another Color</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ColorPage;
