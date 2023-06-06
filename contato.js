import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function ContactPage() {
  return (
    <View style={styles.container}>
      <View style={styles.infoBar}>
        <Text style={styles.infoText}>Nome: Guilherme Veiga</Text>
        <Text style={styles.infoText}>Idade: 19</Text>
        <Text style={styles.infoText}>Matrícula: 01523970</Text>
        <Text style={styles.infoText}>Turma: 3MA</Text>
        <Text style={styles.infoText}>Email: guigarveiga@gmail.com</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#800fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    infoBar: {
      shadowOffset: { width: -2, height: 4 },
      shadowColor: '#171717',
      shadowOpacity: 0.8,
      shadowRadius: 2,
      position: 'absolute',
      padding: 16,
      backgroundColor: '#ffffff',
      borderRadius: 8,
      elevation: 3,
    },
    infoText: {
      fontSize: 16,
      marginBottom: 8,
    },
  });
  
  
