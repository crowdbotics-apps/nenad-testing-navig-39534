import { Text } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled6 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Text style={styles.MljvSVwc}>Terms</Text><Text style={styles.sIsvneyu}>Privacy</Text><Text style={styles.ZNpkPJeD}>Log out</Text></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  MljvSVwc: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 30,
    borderRadius: 0
  },
  sIsvneyu: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 30,
    borderRadius: 0
  },
  ZNpkPJeD: {
    width: 135,
    height: 60,
    lineHeight: 14,
    fontSize: 30,
    borderRadius: 0
  }
});
export default Untitled6;