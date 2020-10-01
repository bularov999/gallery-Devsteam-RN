import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {store} from './src/store/store'
import GalleryScreen  from "./src/components/Galleryscreen";
import { DetailScreen } from "./src/components/Detailscreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Gallery">
          <Stack.Screen name="Gallery" component={GalleryScreen} options={{ title: 'Gallery screen'}}/>
          <Stack.Screen name="Image" component={DetailScreen} options={{ title: 'Detail Image' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
