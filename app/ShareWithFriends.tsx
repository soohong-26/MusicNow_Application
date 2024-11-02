import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const friendsData = [
  {
    id: '1',
    user: 'Todoroki',
    song: 'Hunting For Your Dream',
    artist: 'Galneryus',
    avatarUri: 'https://example.com/avatar1.png'
  },
  {
    id: '2',
    user: 'All Might',
    song: 'Drive Safe',
    artist: 'Rich Brian',
    avatarUri: 'https://example.com/avatar2.png'
  },
  {
    id: '3',
    user: 'Pinky',
    song: 'Judas',
    artist: 'Lady Gaga',
    avatarUri: 'https://example.com/avatar3.png'
  },
];

const ShareWithFriends = () => {
  const navigation = useNavigation();
  const [likedFriends, setLikedFriends] = useState({}); // Track liked state for each friend

  const handleNav = (screen) => {
    navigation.navigate(screen);
  };

  const toggleLike = (id) => {
    setLikedFriends((prevLikedFriends) => ({
      ...prevLikedFriends,
      [id]: !prevLikedFriends[id] // Toggle like state for the specific friend
    }));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Share with Friends</Text>
      <FlatList
        data={friendsData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.avatarUri }} style={styles.avatar} />
            <View style={styles.songDetails}>
              <Text style={styles.username}>{item.user} shared</Text>
              <Text style={styles.song}>{item.song} • {item.artist}</Text>
            </View>
            <TouchableOpacity onPress={() => toggleLike(item.id)}>
              <Text style={styles.likeButton}>{likedFriends[item.id] ? '❤️' : '🤍'}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      
      {/* <View style={styles.bottomNav}>
        {['Home', 'Friends'].map((label, index) => (
          <TouchableOpacity key={index} style={styles.navItem} onPress={() => handleNav(label === 'Home' ? 'HomeScreen' : 'ShareWithFriends')}>
            <Text style={styles.navText}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  songDetails: {
    flex: 1,
  },
  username: {
    fontSize: 16,
    color: '#fff',
  },
  song: {
    fontSize: 14,
    color: '#aaa',
  },
  likeButton: {
    fontSize: 24,
    color: '#fff',
  },
  bottomNav: {
    height: 60,
    backgroundColor: '#232323',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: 'white',
    fontSize: 12,
  }
});

export default ShareWithFriends;
