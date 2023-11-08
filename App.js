import { StatusBar } from "expo-status-bar";

import NoteListsView from "./Screens/NoteListsView";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: "#b7e3c8" },
          }}
        >
          <Stack.Screen name="NoteList" component={NoteListsView} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
