import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer, StackActions } from "@react-navigation/native";
import HomeScreen from '../screen';
import CounterScreen from '../screen/counter/counter';
import LoginScreen from '../screen/auth/login';
import { useSelector } from 'react-redux';
import SingleProductScreen from '../screen/single-products';
import CartScreen from '../screen/cartScreen';
import WebView from 'react-native-webview';
import WebViewScreen from '../screen/webView/webview';
import NewsApp from '../screen/webView/new-website';
import MyModalExample from '../screen/modal/modal-example';
import MyBottomSheetExample from '../screen/bottom_sheet/bottom_sheet';
import MyToastExample from '../screen/toast/toast';

const Stack = createNativeStackNavigator();



const StackNavigator = () => {

    const {userData} = useSelector(state => state.auth);
    return (
      <Stack.Navigator >
       <Stack.Screen name="Mymodalexample" component={MyModalExample} options={{headerShown: false}}/>
       <Stack.Screen name="MyToast" component={MyToastExample} options={{headerShown: false}}/>
      <Stack.Screen name="Mybottomsheet" component={MyBottomSheetExample} options={{headerShown: false}}/>
      <Stack.Screen name="Webview" component={WebViewScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Newsapp" component={NewsApp} options={{headerShown: false}}/>

        {/* {userData ? 
       (
        
        <Stack.Screen name="Home" component={HomeScreen}  options={{headerShown: false}}/> 

       )
        : 
        ( 
          
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
      )
       } */}

      
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