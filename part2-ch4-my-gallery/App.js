import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View, Text, Image, FlatList, SafeAreaView, Platform, Dimensions, TouchableOpacity, Alert } from 'react-native';
import { useGallery } from './src/use-gallery';
import MyDropDownPicker from './src/MyDropDownPicker';
import TextInputModal from './src/TextInputModal';
import BigImgModal from './src/BigImgModal';

const width = Dimensions.get('screen').width;
const columnSize = width / 3;

export default function App() {
  const {
    imagesWithAddButton,
    pickImage,
    deleteImage,
    selectedAlbum,
		textInputModalVisible,
		openTextInputModal,
		closeTextInputModal,
    albumTitle,
    setAlbumTitle,
    addAlbum,
    resetAlbumTitle,
		isDropdownOpen,
		openDropdown,
		closeDropdown,
    albums,
    selectAlbum,
    deleteAlbum,
		bigImgModalVisible,
		openBigImgModal,
		closeBigImgModal,
    selectImage,
    selectedImage
  } = useGallery();

  const onPressOpenGallery = () => {
    pickImage();
  }
  
  const onLongPressImage = (imageId) => deleteImage(imageId);
  const onPressImage = (image) => {
    //TODO: image
    selectImage(image);
    openBigImgModal();
  }

  const renderItem = ({ item: image, index }) => {
    const {id, uri} = image;
    if (id === -1) {
      return (
        <TouchableOpacity onPress={onPressOpenGallery} style={{width: columnSize, height: columnSize, backgroundColor: "lightgray", justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontWeight: '100', fontSize: 45}}>+</Text>
        </TouchableOpacity>
      )
    }
    return (
      <TouchableOpacity
        onPress={() => onPressImage(image)}
        onLongPress={() => onLongPressImage(id)}
      >
        <Image
          source={{ uri }}
          style={{ width: columnSize, height: columnSize }}
        />
      </TouchableOpacity>
    )
  }

  const onPressAddAlbum = () => {
    openTextInputModal();
  }

  const onSubmitEditing = () => {
    if(!albumTitle) return;
    //1. 앨범에 타이틀 추가
    addAlbum();
    //2. 모달 닫기 & textinput 초기화
    closeTextInputModal();
    resetAlbumTitle();
  }

  const onPressTextInputBackdrop = () => {
    closeTextInputModal();
  }
  const onPressBigImgModalBackDrop = () => {
    closeBigImgModal();
  }

  const onPressHeader = () => {
    if(isDropdownOpen) {
      closeDropdown();
    } else {
      openDropdown();
    }
  }

  const onPressAlbum = (album) => {
    selectAlbum(album);
    closeDropdown();
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <Button title="갤러리 열기" onPress={onPressOpenGallery} /> */}
      <MyDropDownPicker
        onPressHeader={onPressHeader}
        isDropdownOpen={isDropdownOpen}
        selectedAlbum={selectedAlbum}
        onPressAddAlbum={onPressAddAlbum}
        albums={albums}
        onPressAlbum={onPressAlbum}
        onLongPressAlbum={deleteAlbum}
      />
      <TextInputModal textInputModalVisible={textInputModalVisible} albumTitle={albumTitle} setAlbumTitle={setAlbumTitle} onSubmitEditing={onSubmitEditing} onPressBackdrop={onPressTextInputBackdrop} />
      <BigImgModal
        modalVisible={bigImgModalVisible}
        onPressBackDrop={onPressBigImgModalBackDrop}
        selectedImage={selectedImage}
      />
      <FlatList
        data={imagesWithAddButton}
        renderItem={renderItem}
        numColumns={3}
        style={{zIndex: -1}}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Platform.OS === 'android' ? 30 : 0
  },
});
