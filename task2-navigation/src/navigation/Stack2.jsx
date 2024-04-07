import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabScreen2 from '../screens/TabScreen2';
import NoTabBarScreen from '../screens/NoTabBarScreen';

const Stack = createNativeStackNavigator();

export default function Stack2() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TabScreen2" component={TabScreen2} />
      <Stack.Screen name="NoTabBarScreen" component={NoTabBarScreen} />
    </Stack.Navigator>
  );
}