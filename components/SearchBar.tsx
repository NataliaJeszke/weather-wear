import React, { useState } from "react";
import { View, 
        TextInput, 
        StyleSheet, 
        TouchableOpacity,
        Alert,
        Button } from "react-native";

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locations, setLocations] = useState("");

  const showAlert = () => {
    Alert.alert(
      "Location is empty",
      "Write down your location.",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  };

  const handleSearch = () => {
    if (!searchQuery) {
        showAlert();
    } 

    if (searchQuery) {
    setLocations(searchQuery);
    }
   }

  console.log(searchQuery);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Location"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <TouchableOpacity onPress={handleSearch}>
        <FontAwesome5 name="search-location" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 5,
    marginBottom: 20,
  },
  searchBar: {
    flex: 1, 
    height: 40,
    borderColor: "#ccc",
    paddingHorizontal: 10,
  },
});


