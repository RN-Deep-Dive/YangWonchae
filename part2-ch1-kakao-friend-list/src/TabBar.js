import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Fontisto, Ionicons } from '@expo/vector-icons';
import { getBottomSpace } from 'react-native-iphone-x-helper';

const bottomSpace = getBottomSpace()

const TabButton = ({ isSelected, onPress, activeIconName, inactiveIconName, isIconFontisto, isIconIonicons }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 10}}>
            {isIconFontisto && <Fontisto name={isSelected ? activeIconName : inactiveIconName} size={24} color="black" />}
            {isIconIonicons && <Ionicons name={isSelected ? activeIconName : inactiveIconName} size={24} color= "black" />}
        </TouchableOpacity>
    )
}
export default ({ selectedTabIdx, onPressFooterIcon }) => {
    return (
        <View style={{ width: '100%', borderTopWidth: 0.5, borderTopColor: 'grey', flexDirection: 'row', paddingBottom: bottomSpace }}>
            <TabButton
                isSelected={selectedTabIdx === 0}
                onPress={() => onPressFooterIcon(0)}
                activeIconName={"persons"}
                inactiveIconName={"person"}
                isIconFontisto
            />
            <TabButton
                isSelected={selectedTabIdx === 1}
                onPress={() => onPressFooterIcon(1)}
                activeIconName={"chatbubble"}
                inactiveIconName={"chatbubble-outline"}
                isIconIonicons
            />
            <TabButton
                isSelected={selectedTabIdx === 2}
                onPress={() => onPressFooterIcon(2)}
                activeIconName={"ios-pricetag"}
                inactiveIconName={"ios-pricetag-outline"}
                isIconIonicons
            />
            <TabButton
                isSelected={selectedTabIdx === 3}
                onPress={() => onPressFooterIcon(3)}
                activeIconName={"add-circle"}
                inactiveIconName={"add-circle-outline"}
                isIconIonicons
            />
        </View>
    )
}