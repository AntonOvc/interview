import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabScreen1 from '../screens/TabScreen1';
import NoTabBarScreen from '../screens/NoTabBarScreen';

const Stack = createNativeStackNavigator();

export default function Stack1() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TabScreen1" component={TabScreen1} />
      <Stack.Screen name="NoTabBarScreen" component={NoTabBarScreen} />
    </Stack.Navigator>
  );
}