import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import React from 'react';

import { colors } from '@/constants';
import { Icons } from '@/types';

export type IconButtonProps = {
    onPress?: () => void;
    bgColor?: string;
    color?: string
    name?: Icons;
    iconSize?: number;
    pressableClassName?: string
}

export const IconButton = ({
    bgColor=colors.surface,
    onPress = () => {},
    name='cog-outline',
    pressableClassName,
    iconSize=20
}: IconButtonProps) => (
    <Pressable
        onPress={onPress}
        style={{
            backgroundColor: bgColor,
            borderRadius: 100,
            padding: 10,
        }}
        className={pressableClassName}
    >
        <Ionicons name={name} size={iconSize} color={colors.black} />
    </Pressable>
);
