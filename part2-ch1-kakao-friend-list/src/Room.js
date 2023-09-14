import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const RoomTitle = ({name, time}) => (
    <View style={styles.roomTitleContainer}>
        <Text style={styles.roomTitle}>
            {name.length > 15 ? name.substring(0, 15) + '...' : name}
        </Text>
        <Text style={styles.roomTime}>{time}</Text>
    </View>
)
const RoomProfile = ({uri}) => (
    <Image source={{uri}} style={styles.roomProfile} />
)
const RoomDesc = ({desc}) => (
    <Text style={styles.roomDesc} numberOfLines={2}>
        {desc.length > 40 ? desc.substring(0, 40) + '...' : desc}
    </Text>
)

export default function Room({uri, name, desc, time}) {
  return (
    <View style={styles.roomContainer}>
        <RoomProfile uri={uri} />
        <TouchableOpacity style={styles.roomContent}>
            <RoomTitle
                name={name}
                time={time}
            />
            <RoomDesc desc={desc} />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    roomContainer: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    roomContent: {
        flexDirection: 'column',
        flex: 1
    },

    roomTitleContainer: {
        flexDirection: 'row',
        paddingVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'baseline'
    },
    roomTitle: {
        fontSize: 20,
        fontWight: '600',
    },
    roomTime: {
        fontSize: 10,
        textAlign: 'bottom'
    },

    roomProfile: {
        width: 60,
        height: 60,
        borderRadius: 60 * 0.4,
        marginRight: 20
    },

    roomDesc: {
        fontSize: 15,
        color: 'grey',
        width: 200,
    }
})