import { StatusBar } from "expo-status-bar";

import NoteListsView from "./Screens/NoteListsView";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Colors } from "./Util/Colors";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: Colors.background },
          }}
        >
          <Stack.Screen name="NoteList" component={NoteListsView} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
