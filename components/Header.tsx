
import { IconButton, IconButtonProps } from '@/components/IconButton';
import { Text, View } from 'react-native';
import { Render } from './Render';

export type HeaderProps = {
    title?: {main: string; sub?: string}
    leftIcon?:IconButtonProps
    rightIcon:IconButtonProps
}

export function Header({
  title,
  leftIcon,
  rightIcon
}: HeaderProps) {

  return (
    <View className='relative flex-row justify-between items-center bg-white'>
      <Render ifCondition={leftIcon}>
        <IconButton {...leftIcon} />
      </Render>
      <Render ifCondition={title}>
        <View className={`flex-column justify-between ${leftIcon ? 'grow items-center' : ''}`}>
          <Render ifCondition={title?.sub}><Text className='text-xs text-secondary'>{title?.sub}</Text></Render>
          <Text className={`${!title?.sub && !leftIcon ? 'text-xl font-bold' : 'text-sm font-semibold'} `}>{title?.main}</Text>
        </View>
      </Render>
      <IconButton {...rightIcon} />
    </View>
  );
}
