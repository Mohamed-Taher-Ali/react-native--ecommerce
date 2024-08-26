import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';

import { View } from '@/components/Themed';
import { colors } from '@/constants';
import { Render } from './Render';
import { Icons } from '@/types';

type BadgeProps = {
  icon: Icons
  iconColor?: string;
  main: string
  sub?: string
}

export default function Badge({ icon, iconColor = colors.icon, main, sub }: BadgeProps) {
  return (
    <View className='border-secondary rounded-md py-1 flex-row justify-start space-x-2 items-center border-2 px-3'>
    <Ionicons name={icon} size={20} color={iconColor} />
    <Text className='font-bold'>{main}</Text>
    <View>
      <Render ifCondition={sub}>
        <Text className='text-background text-xs'>{sub}</Text>
      </Render>
    </View>
  </View>
  );
}