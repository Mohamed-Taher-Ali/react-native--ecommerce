import { Image, StatusBar, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Dimensions, Text } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

import { IconButton } from '@/components/IconButton';
import { View } from '@/components/Themed';
import { colors } from '@/constants';
import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { getProductDetails } from '@/services';
import { ProductType } from '@/components/FlashSale';
import { Ionicons } from '@expo/vector-icons';
import Badge from '@/components/Badge';
import { Button } from '@/components/Button';

export default function ProductModalScreen() {
  const { productId } = (useRoute().params || {}) as {productId: string}
  const [product, setProduct] = useState<Partial<ProductType>>({})
  const width = Dimensions.get('window').width;
  const { back, navigate } = useRouter()
  

  useEffect(() => {
    if(productId) {
      getProductDetails(productId)
      .then(({data}) => {
        setProduct(data)
      })
    }
  }, [productId])

  const onAddToCart = () => {
    navigate({ pathname: '/cart' });
  }

  return (
    !product ? <View /> :
    <View className='flex-1 bg-surface'>
      <StatusBar backgroundColor={colors.surface} />
      <View className='flex-1 bg-surface'>
        <View className='flex-row justify-between bg-surface mt-2 mb-8  px-4'>
            <IconButton name='chevron-back-outline' color='black' bgColor='white' onPress={back} />

            <View className='flex-row justify-between items-center bg-surface'>
              <IconButton pressableClassName='mr-2' name='heart-outline' color='black' bgColor='white'/>
              <IconButton name='cloud-upload-outline' color='black' bgColor='white' />
            </View>
        </View>
        {
          !product ?
          <View /> :
          <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={[...new Array(6).fill(product?.image)]}
                renderItem={({ item }) => (
                  <View className='bg-surface flex-1 justify-center items-center'>
                    <Image style={{width: 180, height: 180}} source={{uri: item}}/>
                  </View>
                )}
            />
        }
      </View>
      <View className='flex-1 rounded-t-2xl px-4 space-y-4'>
         <Text className='text-lg font-extrabold mt-6'>{product?.title}</Text>
         <View className='flex-row justify-start space-x-2'>
          <View>
            <Badge
            icon='star'
            main={product?.rating?.rate?.toString() || '33.33'}
            sub={`${product.rating?.count?.toString()} reviews`}
          />
          </View>
          <View>
            <Badge
            icon='thumbs-up'
            iconColor={colors.primary}
            main={product.rating?.rate?.toString() || '30' + '%'}
          />
          </View>
          <View>
            <Badge
            icon='chatbox-ellipses'
            iconColor={colors.background}
            main={product.rating?.rate?.toString() || '33'}
          />
          </View>
         </View>

         <View className='flex-row justify-between bg-surface p-3 rounded-lg'>
          <View className='bg-surface flex-row justify-start items-baseline space-x-2'>
            <Text className='font-extrabold'>{`£${product.price}`}</Text>
            <Text className='text-background text-xs'>from £14 per month</Text>
          </View>
          <Ionicons name={'alert-circle-outline'} size={20} color={colors.background} />
         </View>
         <View className='flex-grow bg-red'>
         <View className='flex-grow'>
          <Text>
            asdasa asd asdasdasda as da asdasasd asdfsdfasdf asdfasd fasdfas dfasdf asdfas dfasdf asdf asdfasdasdf
          </Text>
         </View>
         <View className='flex space-y-2 items-stretch w-full pb-2'>
          <Button onPress={onAddToCart} title='Add to cart' />
            <Text className='text-center text-xs'>Delivery on 26 October</Text>
         </View>
         </View>
      </View>
    </View>
  );
}