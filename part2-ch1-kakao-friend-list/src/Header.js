import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const IconButton = ({name}) => {
    return (
        <TouchableOpacity hitSlop={{top: 10, bottom: 10}} style={{paddingHorizontal: 6}}>
            <Ionicons name={name} size={24} color="black" />
        </TouchableOpacity>
    )
}

export default ({title}) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10, backgroundColor: 'white'}}>
      <Text style={styles.title}>{title}</Text>

      <View style={{flexDirection: 'row'}}>
        <IconButton name="search-outline" />
        {title === '친구' && <IconButton name="person-add-outline" />}
        {title === '친구' && <IconButton name="md-musical-notes-outline" />}
        {title === '채팅' && <IconButton name="ios-chatbubbles-outline" />}
        <IconButton name="ios-settings-outline" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: 'bold'
    }
})