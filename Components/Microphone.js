import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export const Microphone = () => (
    <View>
        <Icon name="microphone" size={34} color={'#E7DECC'}
            style={styles.mic} />
    </View>

);

const styles = StyleSheet.create({
    mic: {
        flex: 1,
    },
})