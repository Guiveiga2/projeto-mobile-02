import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function HomePage() {
  const navigation = useNavigation();
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    fetchItems();
  }, []);

  function fetchItems() {
    axios
      .get('https://647e6f17c246f166da8f14e7.mockapi.io/veigalol/items')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function addItem() {
    axios
      .post('https://647e6f17c246f166da8f14e7.mockapi.io/veigalol/items', { text: newItem })
      .then(response => {
        const newItem = { id: response.data.id, text: response.data.text };
        setItems([...items, newItem]);
        setNewItem('');
      })
      .catch(error => {
        console.log(error);
      });
  }

  function deleteItem(id) {
    axios
      .delete(`https://647e6f17c246f166da8f14e7.mockapi.io/veigalol/items/${id}`)
      .then(() => {
        setItems(items.filter(item => item.id !== id));
      })
      .catch(error => {
        console.log(error);
      });
  }

  function navigateToItemDetail(item) {
    navigation.navigate('ItemDetail', { item });
  }

  function navigateToContactPage() {
    navigation.navigate('Contact');
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite um item para a sua lista!"
          value={newItem}
          onChangeText={text => setNewItem(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={addItem}>
          <Feather name="plus" size={24} color="white" />
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => navigateToItemDetail(item)}>
            <Text style={styles.itemText}>{item.text}</Text>
            <TouchableOpacity style={styles.deleteButton} onPress={() => deleteItem(item.id)}>
              <Feather name="trash" size={24} color="white" />
              <Text style={styles.deleteButtonText}>Excluir</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />
      <TouchableOpacity style={styles.contactButton} onPress={navigateToContactPage}>
        <Text style={styles.contactButtonText}>Contato</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#800fff',
    paddingTop: StatusBar.currentHeight,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 48,
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: '#f2f2f2',
    marginRight: 16,
  },
  addButton: {
    flexDirection: 'row',
    height: 48,
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: '#2ecc71',
    alignItems: 'center',
  },
  addButtonText: {
    marginLeft: 8,
    color: 'white',
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
    padding: 16,
  },
  itemText: {
    flex: 1,
    fontSize: 16,
  },
  deleteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#c0392b',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  deleteButtonText: {
    marginLeft: 8,
    color: 'white',
    fontWeight: 'bold',
  },
  contactButton: {
    backgroundColor: '#3498db',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  contactButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
