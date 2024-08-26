import { Dimensions, FlatList, Image, Text, View } from 'react-native';
import CheckBox from 'expo-checkbox';

import { ProductType } from '@/components/FlashSale';
import { IconButton } from '@/components/IconButton';
import { colors } from '@/constants';

type DeliveredProductType = ProductType & {
  isSelected: boolean
  quantity: number;
}

export const CartProducts = ({products, onSelect}: {
  products: DeliveredProductType[]
  onSelect: (id: string) => void
}) => {
  return (
    <FlatList
    data={products}
    style={{ marginBottom: 6}}
    ItemSeparatorComponent={() =>
      <View
        className='bg-background self-end'
        style={{height: .4, width: Dimensions.get('window').width - 150}}
      />
    }
    keyExtractor={({id}) => id }
    renderItem={({item: {id, image, title, price, isSelected, quantity }})=> (
      <View className='flex-row my-2 justify-center space-x-4'>
        <View className='flex items-center justify-center'>
          <CheckBox
            value={isSelected}
            onValueChange={(val) => onSelect(id)}
            color={isSelected ? colors.icon : undefined}
          />
        </View>
        <View className='bg-surface p-4 rounded-lg'>
          <Image source={{uri: image}} style={{width: 30, height: 30}} />
        </View>
        <View className='flex-grow flex justify-between'>
          <Text style={{width: Dimensions.get('window').width - 150}}>{title}</Text>
          <View className='flex-row justify-between'>
            <Text className='font-bold'>{price}</Text>
            <View className='flex-row items-center'>
              <IconButton name='remove-outline' iconSize={12} pressableClassName='p-1' />
              <Text className='font-medium mx-2'>{quantity}</Text>
              <IconButton name='add-outline' iconSize={12} pressableClassName='p-1' />
            </View>
          </View>
        </View>
      </View>
    )}
  />
  )
}