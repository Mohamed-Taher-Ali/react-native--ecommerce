import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { Fragment, type ComponentProps } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, View } from 'react-native';

import { Icons } from '@/types';
import { Render } from './Render';
import { colors } from '@/constants';

type TabBarIconProps = Omit<IconProps<ComponentProps<typeof Ionicons>['name']>, 'name'> & {
  name: Icons;
}

export function TabBarIcon({ style, name, ...rest }: TabBarIconProps) {
  return (
    <Ionicons
      size={28}
      name={name}
      style={[{ marginBottom: -3, }, style]}
      {...rest}
  />
  );
}

export const getTabBarIcon = (name: Icons, badgeTitle?: number) => {
  return ({ focused }: {focused: boolean}) => {
    return (
      <Fragment>
        <TabBarIcon
          name={name}
          style={{color: focused? colors.primary : colors.secondary,}}
          />
          <Render ifCondition={badgeTitle}>
            <View className='justify-center items-center rounded-full absolute bg-black right-6 top-0 flex px-1'>
              <Text className=' text-white text-xs'>{badgeTitle}</Text>
            </View>
          </Render>
      </Fragment>
    )
  }
}

export const getTabBarLabel = () => {
  return ({ children, focused }: {children: string; focused: boolean}) => {
    return (
      <Text
        style={{
          color: focused? colors.black : colors.secondary,
          fontWeight: focused? '500' : '400',
        }}
      >{children}</Text>
    )
  }
}