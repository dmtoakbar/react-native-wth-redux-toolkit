import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer, StackActions } from "@react-navigation/native";
import HomeScreen from '../screen';
import CounterScreen from '../screen/counter/counter';
import LoginScreen from '../screen/auth/login';
import { useSelector } from 'react-redux';
import SingleProductScreen from '../screen/single-products';
import CartScreen from '../screen/cartScreen';

const Stack = createNativeStackNavigator();



const StackNavigator = () => {

    const {userData} = useSelector(state => state.auth);
    return (
      <Stack.Navigator>
        {userData ? 
       ( <Stack.Screen name="Home" component={HomeScreen}  options={{headerShown: false}}/> )
        : 
        ( <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />)
       }
        <Stack.Screen name="Counter" component={CounterScreen} options={{headerShown: false}} />
        <Stack.Screen name="SingleProduct" component={SingleProductScreen} options={{headerShown: false}} />
        <Stack.Screen name="Cart" component={CartScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    );
  };


  const AppNavigation = () => {
    return (
        <NavigationContainer>
        <StackNavigator></StackNavigator>
    </NavigationContainer>
    )
}


export default AppNavigation;