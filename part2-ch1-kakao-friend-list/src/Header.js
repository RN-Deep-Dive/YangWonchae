import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const IconButton = ({name, bgColor}) => {
    return (
        <TouchableOpacity hitSlop={{top: 10, bottom: 10}} style={{paddingHorizontal: 6, backgroundColor: bgColor}}>
            <Ionicons name={name} size={24} color="black" />
        </TouchableOpacity>
    )
}

export default () => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10}}>
      <Text style={styles.title}>친구</Text>

      <View style={{flexDirection: 'row'}}>
        <IconButton name="search-outline" />
        <IconButton name="person-add-outline" />
        <IconButton name="md-musical-notes-outline" />
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