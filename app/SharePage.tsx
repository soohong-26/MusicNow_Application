import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const sharedByUsers = [
  { id: '1', name: 'No. 8', avatarUrl: 'https://example.com/avatar1.jpg' },
  { id: '2', name: 'Andy', avatarUrl: 'https://example.com/avatar2.jpg' },
  { id: '3', name: 'Annie', avatarUrl: 'https://example.com/avatar3.jpg' },
  { id: '4', name: 'Alex', avatarUrl: 'https://example.com/avatar4.jpg' }
];

const SharePage = () => {
  const navigation = useNavigation();

  const handlePress = (name) => {
    if (name === 'Andy') {
      navigation.navigate('AndyHere'); // Navigate to the new AndyHere screen
    } else {
      console.log(name + ' was clicked');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>{'<'}</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Shared By</Text>
      <ScrollView contentContainerStyle={styles.sharedUsersContainer} showsVerticalScrollIndicator={false}>
        {sharedByUsers.map(user => (
          <TouchableOpacity key={user.id} style={styles.userContainer} onPress={() => handlePress(user.name)}>
            <Image source={{ uri: user.avatarUrl }} style={styles.userAvatar} />
            <Text style={styles.userName}>{user.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 20,
    paddingHorizontal: 20
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10
  },
  backButtonText: {
    color: '#fff',
    fontSize: 24
  },
  headerTitle: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center'
  },
  sharedUsersContainer: {
    alignItems: 'center'
  },
  userContainer: {
    alignItems: 'center',
    marginBottom: 20
  },
  userAvatar: {
    width: 70,
    height: 70,
    borderRadius: 35
  },
  userName: {
    color: '#fff',
    fontSize: 18,
    marginTop: 5
  }
});

export default SharePage;
