import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SimpleLineIcons } from '@expo/vector-icons';

const headerHeight = 50;

export default ({selectedAlbum, onPressAddAlbum, onPressHeader, isDropdownOpen, albums, onPressAlbum, onLongPressAlbum}) => {
	return (
		<View>
		<TouchableOpacity
			activeOpacity={1}
			onPress={onPressHeader}
			style={{
				height: headerHeight,
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'row'
			}}
		>
			<Text style={{ fontWeight: 'bold' }}>{selectedAlbum.title}</Text>
			<SimpleLineIcons
				name={isDropdownOpen ? 'arrow-up' : 'arrow-down'}
				size={12}
				color='black'
				style={{marginLeft: 8}}
			/>
			
			<TouchableOpacity
				onPress={onPressAddAlbum}
				style={{
					position: 'absolute',
					right: 0,
					height: headerHeight,
					justifyContent: 'center',
					alignItems: 'center',
					paddingHorizontal: 10,
				}}
			>
				<Text style={{fontSize: 12}}>앨범 추가</Text>
			</TouchableOpacity>
		</TouchableOpacity>
		{isDropdownOpen && (
			<View
				style={{
					position: 'absolute',
					top: headerHeight,
					width: '100%',
					borderTopWidth: 0.2,
					borderBottomColor: 'light-grey',
					borderBottomWidth: 0.5,
				}}>
					{albums.map((album, index) => {
						const isSelecedAlbum = album.id === selectedAlbum.id
						return (
							<TouchableOpacity
								style={{
									paddingVertical: 12,
									width: '100%',
									justifyContent: 'center',
									alignItems: 'center',
									backgroundColor: 'white'
								}}
								onPress={() => onPressAlbum(album)}
								onLongPress={() => onLongPressAlbum(album.id)}
								activeOpacity={1}
								key={`album-${index}`}
								>
								<Text style={{fontWeight: isSelecedAlbum ? "bold" : undefined}}>{album.title}</Text>
							</TouchableOpacity>
							)
					})}
			</View>
		)}
		</View>
	)
}