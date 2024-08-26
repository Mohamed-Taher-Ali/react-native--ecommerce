
import { SeeAll } from '@/components/SeeAll';
import { colors } from '@/constants';
import { getAllProducts } from '@/services';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import { Image, Pressable, Text, View } from 'react-native';

export type ProductType = {
  id: string,
  title: string,
  image: string,
  price: string,
  discount?: string
  rating: {count: number, rate: number}
}

export function FlashSale() {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({})
  const [products, setProducts] = useState<ProductType[]>([])
  const router = useRouter();

  useEffect(() => {
    getAllProducts()
    .then(({data}) => {
      const prods = data.map(({id, title, image, price, discount= '£730.00'}: ProductType) => ({
        discount,
        title,
        image,
        price,
        id,
      }));

      setProducts(prods)
    })
  }, [])

  const onFavorite = useCallback((id: string) => () => {
    if(!favorites[id]) setFavorites({...favorites, [id]: true})
    else setFavorites({...favorites, [id]: false})
  }, [favorites])

  const onShowProduct = useCallback((id: string) => () => {
    router.push({
      pathname: '/product-modal',
      params: { productId: id},
    });
  }, [])

  return (
    <View className='mt-6'>
    <SeeAll title='Flash Sale' sub='02:59:23' />
    <View>
      <View className='flex-row gap-4'>
        {
          products.map(({
            id,
            image: uri,
            price,
            title,
            discount
          }) => (
            <View key={id} className='flex flex-grow'>
              <View className='bg-surface p-8 rounded-lg flex justify-center items-center'>
                <Image source={{uri}} className='w-20 h-20' />
                <Pressable
                  onPress={onFavorite(id)}
                  style={{
                    position: 'absolute',
                    right: 40,
                    top: 20,
                  }}
                >
                  <Ionicons
                    size={16}
                    color={favorites[id] ? colors.red: colors.background}
                    name={`heart${favorites[id] ? '': '-outline'}`}
                    style={{
                      backgroundColor:colors.white,
                      borderRadius: 100,
                      padding: 4,
                    }}
                  />
                </Pressable>
              </View>
              
              <TouchableOpacity onPress={onShowProduct(id)} className='flex mt-2'>
                <Text
                  className='text-xs font-semibold mb-3'
                  style={{width: (Dimensions.get('window').width - 50) / 2}}
                >{title}</Text>
                <View className='flex-row space-x-2 text-wrap items-baseline'>
                  <Text className='font-extrabold'>{`£${price}`}</Text>
                  <Text className='text-background text-xs line-through'>{discount}</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))
        }
      </View>
    </View>
  </View>
  );
}