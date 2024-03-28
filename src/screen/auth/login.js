import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  Animated,
  SafeAreaView,
} from "react-native";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Spinner from "react-native-loading-spinner-overlay";

const logo = require("../../../assets/icon/login.png");

const FormLogin = () => {
  this.imageHeight = new Animated.Value(10);

  const [keyboardStatus, setKeyboardStatus] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const { isLoading, login } = useContext(AuthContext);

  const validationForm = () => {
    let errors = {};

    if (!username) errors.username = "Username required";
    if (!password) errors.password = "Password required";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validationForm()) {
      console.log({ username, password });
      setUsername("");
      setPassword("");
      setErrors({});
      login(username, password);
    }
  };

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  keyboardDidShow = (event) => {
    Animated.timing(this.imageHeight, {
      duration: 1000,
      toValue: 0,
    }).start();
  };

  keyboardDidHide = (event) => {
    Animated.timing(this.imageHeight, {
      duration: 1000,
      toValue: 1,
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#24406d"
        barStyle="light-content"
        showHideTransition="slide"
      />
      <Spinner visible={isLoading}></Spinner>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "100" : "0"}
        style={styles.container}
      >
        <View style={styles.form}>
          {!keyboardStatus ? (
            <Image source={logo} style={styles.img}></Image>
          ) : (
            ""
          )}
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Tulis unsername"
            value={username}
            onChangeText={setUsername}
          ></TextInput>
          {errors.username ? (
            <Text style={styles.errorText}>{errors.username}</Text>
          ) : null}
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Tulis Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          ></TextInput>
          {errors.password ? (
            <Text style={styles.errorText}>{errors.password}</Text>
          ) : null}
          <Button title="Login" onPress={handleSubmit}></Button>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default FormLogin;

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
