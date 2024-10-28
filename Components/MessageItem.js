import { StyleSheet, Text, View } from "react-native"

export const MessageItem = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#ddd',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 32,
        alignSelf:'flex-end'
    },
    title: {
        textAlign: 'right',
        fontSize: 16,
    },
});