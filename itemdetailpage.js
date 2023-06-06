import React from 'react';
import { View, Text } from 'react-native';

export default function ItemDetailPage({ route }) {
  const { item } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{item.text}</Text>
    </View>
  );
}
