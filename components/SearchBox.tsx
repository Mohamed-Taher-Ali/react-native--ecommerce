import { Text, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';

import { Render } from '@/components/Render';
import { colors } from '@/constants';

export function SearchBox({onChangeText}: {onChangeText: (text: string) => void}) {
  const [text, setText] = useState('')

  useEffect(() => {
    onChangeText(text)
  }, [text])

  return (
    <View className='relative bg-surface rounded-lg p-1'>
    <Render ifCondition={!text}>
      <View className='flex-row justify-center absolute w-full pt-2'>
        <Ionicons name={'search-outline'} size={20} color={colors.background} />
        <Text className='text-background'>Search the entire shop</Text>
      </View>
    </Render>
    <TextInput value={text} onChangeText={setText} className={`w-full text-center`} />
  </View>
  );
}