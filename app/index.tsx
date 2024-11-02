import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  const navigateToMusicPlayer = () => {
    navigation.navigate('MusicPlayer');
  };

  const handleNav = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Home</Text>
      </View>
      <TouchableOpacity style={styles.searchBox}>
        <Text style={styles.searchText}>Search by music</Text>
      </TouchableOpacity>
      <View style={styles.menu}>
        <MenuItem title="Genres" icon="record-vinyl" color="#FFA500" navigation={navigation} screenName="JazzScreen" />
        <MenuItem title="Podcasts" icon="microphone" color="#FF6347" navigation={navigation} screenName="JazzScreen" />
        <MenuItem title="Jazz" icon="music" color="#6A5ACD" navigation={navigation} screenName="JazzScreen" />
        <MenuItem title="Cafe" icon="coffee" color="#2E8B57" navigation={navigation} screenName="JazzScreen" />
      </View>

      

      <TouchableOpacity style={styles.heartButton} onPress={navigateToMusicPlayer}>
      <View style={styles.textContainer}>
        <Text style={styles.songTitle}>Something Cool</Text>
        <Text style={styles.artistName}>Aunt T</Text>
      </View>
      
        <Text style={styles.heartText}>🤍 ▶</Text>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        {['Home', 'Friends'].map((label, index) => (
          <TouchableOpacity key={index} style={styles.navItem} onPress={() => handleNav(label === 'Home' ? 'HomeScreen' : 'ShareWithFriends')}>
            <Text style={styles.navText}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const MenuItem: React.FC<{ title: string; icon: string; color: string; navigation: any; screenName: string }> = ({ title, icon, color, navigation, screenName }) => {
  const handlePress = () => {
    navigation.navigate(screenName);
  };

  return (
    <TouchableOpacity
      style={[styles.menuItem, { backgroundColor: color }]}
      onPress={handlePress}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
  },
  searchBox: {
    margin: 20,
    padding: 10,
    backgroundColor: 'grey',
    borderRadius: 5,
  },
  searchText: {
    color: 'white',
  },
  menu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  menuItem: {
    width: '48%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
  },
  bottomNav: {
    height: 60,
    backgroundColor: '#232323',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 50,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: 'white',
    fontSize: 12,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  songTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  artistName: {
    color: '#fff',
    fontSize: 12,
  },
  heartButton: {
    marginRight: 10,
  },
  heartText: {
    fontSize: 24,
    color: '#fff',
    marginLeft: 20,
  }
});

export default HomeScreen;
