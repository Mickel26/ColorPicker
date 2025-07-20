import AdvancedColorPicker from "@/components/AdvancedColorPicker";
import { useRouter } from "expo-router";
import { View } from "react-native";

export default function Index() {
  const router = useRouter();

  const handleColorSelect = (color: string) => {
    const hexValue = color.replace('#', '');
    router.push({
      pathname: "/colors/[hex]",
      params: { hex: hexValue }
    });
  };

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <AdvancedColorPicker onColorSelect={handleColorSelect} />
    </View>
  );
}