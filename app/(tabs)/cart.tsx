import { Fragment, useEffect, useMemo, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Text, View } from 'react-native';
import CheckBox from 'expo-checkbox';


import { getProductDetails, getSingleCart } from '@/services';
import { CartProducts } from '@/components/CartProducts';
import { ProductType } from '@/components/FlashSale';
import ScreenLayout from '@/components/ScreenLayout';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '@/components/Button';
import { colors } from '@/constants';

type DeliveredProductType = ProductType & {
  isSelected: boolean
  quantity: number;
}

export default function CartScreen() {
  const [products, setProducts] = useState<DeliveredProductType[]>([])
  const { cartId } = (useRoute().params || {}) as {cartId: string}

  useEffect(() => {
    getSingleCart()
    .then(({data}) => {
      if(data.products?.length)
        Promise.all(data.products?.map(({productId}: {productId: string}) => getProductDetails(productId)))
        .then((prods) => { 
          setProducts(prods.map(({data}) => ({...data, quantity: 0, isSelected: false})))
        })
    })
  }, [cartId])

  const isSelectedAll = useMemo(() => products.every(({isSelected}) => isSelected), [products])

  const onSelectAll = (val: boolean) => {
    const prods = products.map(p => ({...p, isSelected: val}))
    setProducts(prods)
  }

  const onSelect = (id: string) => {
    const prods = products.map(p => p.id !== id ?  (p): ({...p, isSelected: !p.isSelected}))
    setProducts(prods)
  }

  return (
    <ScreenLayout
      headerOptions={{
        title: {main: 'Cart'},
        rightIcon: {name: 'ellipsis-horizontal'},
      }}

      topBody={
        <Fragment>
          <View className='flex-row justify-between bg-surface p-3 rounded-lg items-center'>
            <View className='flex-row space-x-2 items-center'>
              <Ionicons name={'location-outline'} size={20} color={colors.background} />
              <Text className='font-medium'>92 High street, London</Text>
            </View>
            <Ionicons name={'chevron-forward-outline'} size={20} color={colors.background} />
          </View>
        </Fragment>
      }

      bottomBody={
        <View className='flex-1 pb-4'>
          <View className='flex-grow'>
            <View className='flex-row justify-between items-center mb-6'>
              <View className='flex-row space-x-4'>
                <CheckBox
                  value={isSelectedAll}
                  onValueChange={(val) => onSelectAll(val)}
                  color={isSelectedAll ? colors.icon : undefined}
                />
                <Text className='font-bold'>Select all</Text>
              </View>
              <View className='flex-row justify-between items-center space-x-2'>
                <Ionicons name={'cloud-outline'} size={20} color={colors.black} />
                <Ionicons name={'create-outline'} size={20} color={colors.black} />
              </View>
            </View>
            <CartProducts products={products} onSelect={onSelect} />
          </View>
          <Button title='Checkout' onPress={() => {}}/>
        </View>
      }
    />
  );
}