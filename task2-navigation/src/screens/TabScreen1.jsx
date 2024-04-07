import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TabScreen1() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Welcome to Tab1</Text>
      <Button
        title='Go to No Tab Bar Screen'
        onPress={() => navigation.navigate('NoTabBarScreen')}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});