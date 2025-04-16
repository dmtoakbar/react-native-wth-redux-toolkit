import { useState } from "react";
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View,  } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/features/authSlice";

const LoginScreen = () => {
 // states
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const {userData, isLoading} = useSelector(state => state.auth);

 const dispatch = useDispatch();


 // functions
 const handlingLogin  = () => {
       const params = {
        username: email,
        password: password
       };
       console.log('params', params);
       dispatch(login(params));
 }

    return (
        <View style={styles.page}>
          <Text style={styles.logo}>Login</Text>
          <TextInput
          placeholder="Enter email" value={email} onChangeText={setEmail} style = {styles.textInput}
          ></TextInput>
           <TextInput
          placeholder="Enter password" value={password} onChangeText={setPassword} style = {styles.textInput}
          ></TextInput>
          <TouchableOpacity style={styles.loginButton}  onPress={() => handlingLogin()} >
            <Text style={styles.loginText}>Login Now</Text>
          </TouchableOpacity>
        </View>
    )
}


export default LoginScreen;


const styles = StyleSheet.create({
   page: {
    flex: 1,
    paddingTop: 120,
   },
   logo: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold'
   },
   textInput: {
    marginTop: 20,
    width: Dimensions.get('window').width - 100,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 15,
   },
   loginButton: {
    width: Dimensions.get('window').width  * .52,
    height: 45,
    backgroundColor: 'blue',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 15,
    justifyContent: 'center'
   },
   loginText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
   }
})