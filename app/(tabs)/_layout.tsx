import { Tabs } from 'expo-router';
import React from 'react';

import { getTabBarIcon, getTabBarLabel } from '@/components/TabBarIcon';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { colors } from '@/constants';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {borderTopWidth: 0, backgroundColor: colors.white},
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarLabel: getTabBarLabel(),
        headerShown: false,
      }}>
      <Tabs.Screen
        name="home"
        options={{ tabBarIcon: getTabBarIcon('home-outline') }}
      />
      <Tabs.Screen
        name="catalog"
        options={{ tabBarIcon: getTabBarIcon('search-outline') }}
      />
      <Tabs.Screen
        name="cart"
        options={{ tabBarIcon: getTabBarIcon('cart-outline', 2) }}
      />
      <Tabs.Screen
        name="favorites"
        options={{ tabBarIcon: getTabBarIcon('heart-outline') }}
      />
      <Tabs.Screen
        name="profile"
        options={{ tabBarIcon: getTabBarIcon('person-circle-outline') }}
      />                  
    </Tabs>
  );
}
