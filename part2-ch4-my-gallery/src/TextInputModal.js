import { View, Text, Modal, TextInput, SafeAreaView, KeyboardAvoidingView, Platform, Pressable } from 'react-native'
import React from 'react'

export default ({textInputModalVisible, albumTitle, setAlbumTitle, onSubmitEditing, onPressBackdrop}) => {
	return (
		<Modal
			animationType="fade"
			transparent={true}
			visible={textInputModalVisible}
		>
			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				style={{flex: 1}}>
			<Pressable onPress={onPressBackdrop} style={{ flex:1 }}>
				<SafeAreaView
					style={{
						width: '100%',
						position: 'absolute',
						bottom: 0
					}}
				>
					<TextInput
						placeholder='앨범 명을 입력해 주세요'
						style={{ width: '100%', padding: 10, borderWidth: 0.5, borderColor: 'lightgray' }}
						value={albumTitle}
						onChangeText={setAlbumTitle}
						onSubmitEditing={onSubmitEditing}
						autoFocus={true}
					/>
				</SafeAreaView>
			</Pressable>
			</KeyboardAvoidingView>
		</Modal>
	)
}