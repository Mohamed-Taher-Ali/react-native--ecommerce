
import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

import { colors } from '@/constants';
import { Render } from './Render';

type SeeAllProps = {title: string; sub?: string}

export function SeeAll({title, sub}: SeeAllProps) {
  return (
    <View className='flex-row justify-between mb-4'>
      <View className='flex-row items-center'>
        <Text className='font-black text-2xl'>{title}</Text>
        <Render ifCondition={sub}>
          <Text className='text-xs py-1 ml-2 bg-primary rounded-md px-2 font-semibold'>{sub}</Text>
        </Render>
      </View>
      <View className='flex-row justify-between items-center'>
        <Text className='mr-2 text-background'>see all</Text>
        <View className='rounded-full bg-surface flex justify-center items-center p-1'>
          <Ionicons name={'chevron-forward-outline'} size={20} color={colors.background} />
        </View>
      </View>
    </View>
  );
}