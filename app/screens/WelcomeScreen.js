import React from "react";
import { ImageBackground, View, StyleSheet, Image, Text } from "react-native";
import Button from "../components/Button";
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={6}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Sell What you don't need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Login' onPress={() => navigation.navigate("Login")} />
        <Button
          title='Register'
          color='secondary'
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },

  logoContainer: {
    position: "absolute",
    alignItems: "center",
    top: 70,
  },

  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default WelcomeScreen;
