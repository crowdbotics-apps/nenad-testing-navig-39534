import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled6 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable onPress={() => {
        navigation.navigate("termsAndConditions");
      }}><Text style={styles.MljvSVwc}>Terms</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("privacyPolicy");
      }}><Text style={styles.sIsvneyu}>Privacy</Text></Pressable><Text style={styles.ZNpkPJeD}>Log out</Text><Pressable onPress={() => {
        navigation.navigate("addCardDetails");
      }}><Text style={styles.uTUcdNgH}>Payments</Text></Pressable></ScrollView>
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
  },
  uTUcdNgH: {
    width: 169,
    height: 68,
    lineHeight: 14,
    fontSize: 30,
    borderRadius: 0
  }
});
export default Untitled6;