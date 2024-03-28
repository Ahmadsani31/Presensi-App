import React, { useContext } from "react";
import { Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../screen/home/dashboard";
import FormLogin from "../screen/auth/login";
import { AuthContext } from "../context/AuthContext";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { userInfo } = useContext(AuthContext);
  console.log(userInfo);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userInfo.userId ? (
          <Stack.Screen name="Home" component={Dashboard} />
        ) : (
          <Stack.Screen
            name="Login"
            component={FormLogin}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
