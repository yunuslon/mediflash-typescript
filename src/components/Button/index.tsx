import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '@utils/Style'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'


interface ButtonProps {
    onPress?: () => void,
    enable?: boolean,
    title?: string,

}

const Button: React.FC<ButtonProps> = ({ title, onPress, enable = false }) => {
    if (enable) {
        return (
            <TouchableOpacity style={styles.page} onPress={onPress}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={[styles.page, { backgroundColor: colors.grey }]}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.primary, height: hp(7), borderRadius: wp(2), justifyContent: 'center',
        alignItems: 'center', elevation: 1
    },
    title: { fontFamily: fonts.Medium, color: colors.white, fontSize: 16 }
})