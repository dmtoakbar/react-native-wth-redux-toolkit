import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import WebView from "react-native-webview";
import Entypo from 'react-native-vector-icons/Entypo';


const NewsApp = () => {
    return(
     <View style={styles.container}>
        <WebView
        source={{ uri: 'https://public.app/' }}
        startInLoadingState
        javaScriptEnabled
        domStorageEnabled
        ></WebView>
        <View style={styles.bottomTab}>
         <TouchableOpacity>
         <Entypo name="home" size={24} color="#F44336" />
         </TouchableOpacity>
         <TouchableOpacity>

         </TouchableOpacity>
         <TouchableOpacity>

         </TouchableOpacity>
         <TouchableOpacity>

         </TouchableOpacity>
        </View>
     </View>
    );
};


export default NewsApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bottomTab: {
        width: Dimensions.get('window').width,
        height: 50,
        backgroundColor: 'grey'
    }
})