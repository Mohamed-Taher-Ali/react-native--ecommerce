import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';

type ButtonProps =  {title: string; textClassName?: string;buttonClassName?: string; onPress: () => void}

export function Button({onPress, title, buttonClassName, textClassName}:ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} className={`bg-primary p-3 items-center rounded-lg ${buttonClassName}`}>
      <Text className={`font-bold ${textClassName}`}>{title}</Text>
    </TouchableOpacity>
  );
}