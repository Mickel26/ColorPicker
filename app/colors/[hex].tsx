import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const ColorPage = () => {
    const { hex } = useLocalSearchParams<{ hex: string }>();
    const router = useRouter();

    const colorValue = hex ? `#${hex}` : '#FFFFFF';

    return (
        <View className="flex-1 items-center p-10">
            <View
                className="w-64 h-64 rounded-3xl mb-8 border-2 border-gray-200"
                style={{ backgroundColor: colorValue }}
            />

            {/* <Text className="text-2xl font-bold mb-2">Color Details</Text> */}
            <Text className="text-lg font-mono mb-8">{colorValue}</Text>

            <TouchableOpacity
                className="w-48 h-16 rounded-xl flex items-center justify-center border border-gray-300"
                style={{
                    backgroundColor: '#FFFFFF',
                    shadowColor: colorValue,
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.4,
                    shadowRadius: 8,
                    elevation: 8
                }}
                onPress={() => router.back()}
            >
                <Text className="text-black font-semibold">Choose Another Color</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ColorPage;