import { View } from 'react-native';
import { Fragment } from 'react';

import { DiscountBanner } from '@/components/DiscountBanner';
import ScreenLayout from '@/components/ScreenLayout';
import { Categories } from '@/components/Categories';
import { FlashSale } from '@/components/FlashSale';
import { SearchBox } from '@/components/SearchBox';
import { colors } from '@/constants';

export default function HomeScreen() {
  return (
    <ScreenLayout
      topBody={
        <Fragment>
          <View className='mb-4'>
            <SearchBox onChangeText={(t) => {}} />
          </View>
          <DiscountBanner discount='50%' />
        </Fragment>
      }
      bottomBody={
        <Fragment>
          <Categories
            data={[
              {iconName: 'phone-portrait', title: 'Phones'},
              {iconName: 'logo-playstation', title: 'Consoles'},
              {iconName: 'laptop', title: 'Laptops'},
              {iconName: 'camera', title: 'Cameras'},
              {iconName: 'headset', title: 'Audios'},
              {iconName: 'fast-food', title: 'Foods'},
            ]}
          />
          <FlashSale />
        </Fragment>
      }
      headerOptions={{
        leftIcon: {name: 'cog-outline', bgColor: colors.primary, onPress: () => {}},
        rightIcon: {name: 'notifications-outline',  onPress: () => {}},
        title: {
          main: '92 High street, London',
          sub: 'Delivery address',
        }
      }}
    />
  );
}