import { StyleSheet, Text } from "react-native"
import Animated, { Easing, ZoomIn } from "react-native-reanimated";

export const MessageItem = ({ title }) => (
    <Animated.View style={styles.item}
        entering={ZoomIn.duration(450).easing(Easing.bezier(0.05, 0.7, 0.1, 1))}>
        <Text style={styles.title}>{title}</Text>
    </Animated.View>
);

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#ddd',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 32,
        alignSelf: 'flex-end'
    },
    title: {
        textAlign: 'right',
        fontSize: 16,
    },
});