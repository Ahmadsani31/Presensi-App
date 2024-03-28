import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Dashboard = () => {
  const { userInfo, isLoading, logout } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#24406d"
        barStyle="light-content"
        showHideTransition="slide"
      />
      <View style={styles.form}>
        <Text>Halaman Home</Text>
      </View>
      <Button title="LogOut" color="red"></Button>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5",
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
  form: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  img: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginBottom: 50,
    marginTop: 50,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
    marginTop: -15,
    marginLeft: 5,
  },
});
