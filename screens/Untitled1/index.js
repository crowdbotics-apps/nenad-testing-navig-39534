import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable onPress={() => {
        navigation.navigate("login");
      }}><Text style={styles.iYiynEEV}>Lorem ipsum…</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("Login");
      }}><Text style={styles.oolYNOIB}>Lorem ipsum…</Text></Pressable><Text style={styles.WzJuCRBU}>Lorem ipsum…</Text><Pressable onPress={() => {
        navigation.navigate("login");
      }}><Text style={styles.dXFRgRRy}>Lorem ipsum…</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("login2");
      }}><Text style={styles.jCimrCQq}>Lorem ipsum…</Text></Pressable></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  iYiynEEV: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  oolYNOIB: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  WzJuCRBU: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  dXFRgRRy: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  jCimrCQq: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Untitled1;