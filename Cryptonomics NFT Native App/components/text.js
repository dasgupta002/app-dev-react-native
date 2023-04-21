import { Text } from 'react-native'
import { Colors } from '../constants/theme'

const CustomText = ({ font, color, children }) => {
    if(color === undefined) {
        color = Colors.primary
    }
    
    return <Text style = {{ fontFamily: 'TrashHand', marginLeft: 4, textAlign: 'justify', color: color, fontSize: font }}>{ children }</Text>
}

export default CustomText