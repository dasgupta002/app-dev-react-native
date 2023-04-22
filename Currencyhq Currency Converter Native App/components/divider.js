import { View, StyleSheet } from 'react-native'
import colors from '../constants/colors'

export const Separator = () => {
    return <View style = {{ borderBottomColor: colors.border, borderBottomWidth: StyleSheet.hairlineWidth }} />
}