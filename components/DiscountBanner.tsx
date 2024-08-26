import { LinearGradient } from 'expo-linear-gradient';
import { Image, Text, View } from 'react-native';

import { colors } from '@/constants';

export function DiscountBanner({discount}: {discount: string}) {
  return (
    <View className='relative bg-surface rounded-lg'>
      <LinearGradient
        className="flex-row items-center p-2 rounded-lg"
        colors={[colors.surface, colors.icon]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text className='text-xs font-semibold'>Delivery is</Text>
        <Text className='text-xs font-semibold rounded-md bg-white px-2 py-1 mx-2'>{discount}</Text>
        <Text className='text-xs font-semibold'>cheaper</Text>
        <Image
          className='absolute w-16 h-12 right-8 bottom-0'
          source={require('../assets/images/flower-icon.png')}
        />
      </LinearGradient>
    </View>
  );
}