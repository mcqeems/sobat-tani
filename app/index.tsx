import { Text, View } from 'react-native';

export default function Home() {
  return (
    <View className="dark-mode" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text className="text-5xl dark-mode">Home Screen</Text>
    </View>
  );
}
