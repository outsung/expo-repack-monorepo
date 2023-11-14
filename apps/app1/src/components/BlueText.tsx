import { Text } from 'react-native';

interface BlueTextProps {
  children: string
}
export default function BlueText({ children }: BlueTextProps) {
  return (
    <Text style={{ color: 'blue', fontWeight: 'bold' }}>{children}</Text>
  );
}