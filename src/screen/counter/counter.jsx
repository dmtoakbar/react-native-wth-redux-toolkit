import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { decrement, increment } from "../../redux/features/counter";
import { useDispatch, useSelector } from "react-redux";


const CounterScreen = () => {
// hoocks
const dispatch = useDispatch();
const count = useSelector(state => state.counter);

    return (
        <View style={styles.page}>
            <Text style={styles.logo}>Counter App</Text>
            <View style={styles.container}>
             <Text style={styles.countValue}>{count.Value}</Text>
             <View style={styles.actions}>
                <TouchableOpacity style={styles.button}
                 onPress={() => {
                    dispatch(increment());
                 }}
                >
                    <Text style={styles.buttonText}>Increment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, {backgroundColor: 'red'}]}
                 onPress={() => {
                    dispatch(decrement());
                 }}
                >
                    <Text style={styles.buttonText}>Decrement</Text>
                </TouchableOpacity>
             </View>
          </View>
        </View>
    )
}


export default CounterScreen;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'orange'
    },
    logo: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'green',
    textTransform: 'uppercase'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    countValue: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    actions: {
        gap: 50,
        flexDirection: 'row'
    },
    button: {
        marginTop: 20,
        width: 100,
        height: 40,
        backgroundColor: 'blue',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
    }
})