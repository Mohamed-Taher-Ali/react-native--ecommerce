import { View } from 'react-native';
import { ReactNode } from 'react';

import { Header, HeaderProps } from '@/components/Header';

type ScreenLayoutProps = {
  headerOptions?: HeaderProps;
  bottomBody: ReactNode,
  topBody: ReactNode,
}

export default function ScreenLayout({
  topBody,
  bottomBody,
  headerOptions
}: ScreenLayoutProps) {
  return (
    <View className='flex-1 gap-2'> 
      <View className='flex flex-col justify-center rounded-b-2xl bg-white px-4 pb-4 pt-2'>
        {
          !headerOptions
          ? <View />
          : <View className='mb-4'>
            <Header {...headerOptions} />
          </View>
        }

        {topBody}
      </View>
      <View className='flex-grow bg-white rounded-t-2xl px-4 pt-4'>
        {bottomBody}
      </View>
    </View>
  );
}