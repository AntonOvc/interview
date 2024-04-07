import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabScreen1 from '../screens/TabScreen1';
import TabScreen2 from '../screens/TabScreen2';
import Stack1 from './Stack1';
import Stack2 from './Stack2';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Stack1" component={Stack1} />
      <Tab.Screen name="Stack2" component={Stack2} />
    </Tab.Navigator>
  );
}