import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (text: string) => void;
  onSearchSubmit: (query: string) => void; // Zmiana: przekazywanie zapytania jako argument
  onClearSearch: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
  onSearchSubmit,
  onClearSearch,
}) => {
  const handleSearchSubmit = () => {
    const trimmedQuery = searchQuery.trim(); // Przycinanie spacji
    if (trimmedQuery.length > 0) {
      onSearchChange(trimmedQuery); // Aktualizacja zapytania
      onSearchSubmit(trimmedQuery); // Wykonanie wyszukiwania z przyciętym tekstem
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Location"
          value={searchQuery}
          onChangeText={(text) => {
            onSearchChange(text);
            if (text.length === 0) {
              onClearSearch(); // Czyść wyszukiwanie, gdy tekst jest pusty
            }
          }}
        />
        <TouchableOpacity onPress={handleSearchSubmit}>
          <FontAwesome5 name="search-location" size={24} color="white" />
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
    borderColor: "white",
    borderRadius: 5,
    padding: 5,
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    color: "white",
    fontWeight: "bold",
  },
});
