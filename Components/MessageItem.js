import { KeyboardAvoidingView, StyleSheet, Text, Platform } from "react-native"
import Animated, { Easing, ZoomIn } from "react-native-reanimated";

export const MessageItem = ({ title }) => (

    <Animated.View style={styles.item}
        entering={ZoomIn.duration(450).easing(Easing.bezier(0.05, 0.7, 0.1, 1))}>
        <Text style={styles.title}>{title}</Text>
    </Animated.View>

);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#2f2f2f',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 35,
        alignSelf: 'flex-end'
    },
    title: {
        textAlign: 'right',
        fontSize: 16,
        color: 'white'
    },
});