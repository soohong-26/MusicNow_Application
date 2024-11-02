import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation if not directly receiving props

const songsData = [
  { id: '1', title: 'Smooth Rock', artist: 'Bakugo' },
  { id: '2', title: 'Fly Me To The Moon', artist: 'Frank Sinatra' },
  { id: '3', title: 'Blue Train', artist: 'John Coltrane' },
  { id: '4', title: 'Don\'t Know Why', artist: 'Norah Jones' },
  { id: '5', title: 'The Sky Is Crying', artist: 'Gary B.B. Coleman' },
  { id: '6', title: 'King Of Swag', artist: 'Big Band Blues Brothers' }
];

const JazzScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigation = useNavigation(); // Use the useNavigation hook to get the navigation prop

  // Filter songs based on search term
  const filteredSongs = songsData.filter(song =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>{'<'}</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Jazz</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search songs or artists..."
        placeholderTextColor="#aaa"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <FlatList
        data={filteredSongs}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.songItem}>
            <Text style={styles.songTitle}>{item.title}</Text>
            <Text style={styles.songArtist}>{item.artist}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20
  },
  backButton: {
    marginBottom: 20
  },
  backButtonText: {
    color: '#fff',
    fontSize: 24
  },
  headerTitle: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20
  },
  searchBar: {
    fontSize: 16,
    color: '#fff',
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20
  },
  songItem: {
    backgroundColor: '#3A3A55',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10
  },
  songTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },
  songArtist: {
    fontSize: 16,
    color: '#aaa'
  }
});

export default JazzScreen;
