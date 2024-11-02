import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Slider from '@react-native-community/slider';

const MusicPlayer = () => {
  const navigation = useNavigation();
  const [liked, setLiked] = useState(false); // State for like status
  const [playing, setPlaying] = useState(false); // State for play/pause status

  const navigateToSharePage = () => {
    navigation.navigate('SharePage');
  };

  const toggleLike = () => {
    setLiked(!liked); // Toggle the liked state
  };

  const togglePlayPause = () => {
    setPlaying(!playing); // Toggle the playing state
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={{ fontSize: 20, color: '#fff' }}>{'<'}</Text>
      </TouchableOpacity>
      <Text style={styles.songTitle}>Something Cool</Text>
      <Text style={styles.artistName}>Aunt T</Text>
      <Image source={{ uri: 'https://example.com/song_art.jpg' }} style={styles.albumArt} />
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        thumbTintColor="#FFFFFF"
        value={0.5}
        onValueChange={(value) => console.log('Slider Value:', value)}
      />
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>1:49</Text>
        <Text style={styles.timeText}>-5:34</Text>
      </View>
      <View style={styles.controlsContainer}>
        <TouchableOpacity onPress={togglePlayPause}>
          <Text style={styles.playButtonText}>{playing ? '⏸' : '▶'}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.controlButton}>|</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleLike}>
          <Text style={styles.controlButton}>{liked ? '❤️' : '🤍'}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.controlButton}>|</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToSharePage}>
          <Text style={styles.shareButtonText}>👥</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  songTitle: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 20,
  },
  artistName: {
    fontSize: 18,
    color: '#aaa',
  },
  albumArt: {
    width: 300,
    height: 300,
    marginTop: 20,
  },
  slider: {
    width: 300,
    marginTop: 20,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
  },
  timeText: {
    color: '#fff',
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 250,
    marginTop: 20,
  },
  controlButton: {
    fontSize: 24,
    color: '#fff',
  },
  playButtonText: {
    fontSize: 24,
    color: '#fff',
  },
  pauseButtonText: {
    fontSize: 20,
    color: '#fff',
    marginTop: 4
  },
  shareButtonText: {
    fontSize: 20,
    color: '#fff',
    marginTop: 4
  }
});

export default MusicPlayer;
