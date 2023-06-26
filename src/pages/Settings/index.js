import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ConfiguracoesScreen = () => {
  const PrivacidadePress = () => {
   
  };

  const NotificacoesPress = () => {
    
  };

  const SairPress = () => {
  
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={PrivacidadePress}>
        <View style={styles.iconContainer}>
          <Ionicons name="md-lock-closed-outline" size={40} color="black" />
        </View>
        <Text style={styles.itemText}>Privacidade</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.item} onPress={NotificacoesPress}>
        <View style={styles.iconContainer}>
          <Ionicons name="md-notifications-outline" size={40} color="black" />
        </View>
        <Text style={styles.itemText}>Notificações</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.item} onPress={SairPress}>
        <View style={styles.iconContainer}>
          <Ionicons name="md-log-out-outline" size={40} color="black" />
        </View>
        <Text style={styles.itemText}>Sair</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    margin: 16,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  iconContainer: {
    marginRight: 10,
  },
  itemText: {
    fontSize: 33,
  },
});

export default ConfiguracoesScreen;
