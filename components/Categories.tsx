import { FlatList, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { SeeAll } from '@/components/SeeAll';
import { colors } from '@/constants';
import { Icons } from '@/types';

type CategoryType = {title: string; iconName: Icons}

type CategoriesProps = {
  data: Array<CategoryType>
}

export function Categories({data}: CategoriesProps) {
  return (
    <View>
    <SeeAll title='Categories' />
    <FlatList 
      horizontal
      data={data}
      keyExtractor={({title}) => title}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View className='w-4' />}

      renderItem={({item: {title, iconName}})=> {
        return (
          <View className='flex items-center'>
            <View className='bg-surface p-4 rounded-full mb-2'>
              <Ionicons name={iconName} size={20} color={colors.black} />
            </View>
            <Text className='text-xs font-semibold'>{title}</Text>
          </View>
        )
      }}
    />
  </View>
  );
}