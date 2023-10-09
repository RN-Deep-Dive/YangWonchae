import { Modal, Pressable, Image } from 'react-native'
import React from 'react'

export default ({
  modalVisible,
  onPressBackDrop,
  selectedImage
}) => {
  return (
    <Modal
			animationType="fade"
			transparent={true}
			visible={modalVisible}
		>
      <Pressable
        onPress={onPressBackDrop}
        style={{
          flex: 1,
          // backgroundColor: 'lightblue',
          // opacity: 0.5,
          backgroundColor: `rgba(115,115,115,0.5)`,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Pressable>
            <Image
              source={{uri: selectedImage?.uri}}
              style={{ width: 200, height: 200, backgroundColor: 'white' }}
              resizeMode='contain' />
          </Pressable>
      </Pressable>
		</Modal>
  )
} 