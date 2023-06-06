import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, StatusBar } from 'react-native';

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
});

export default styles;
