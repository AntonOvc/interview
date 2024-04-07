import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TabScreen2() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Welcome to Tab2</Text>
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