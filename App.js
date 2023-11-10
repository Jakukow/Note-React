import { StatusBar } from "expo-status-bar";

import NoteListsView from "./Screens/NoteListsView";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Colors } from "./Util/Colors";
import { store } from "./store";
import { Provider } from "react-redux";
import NewNoteForm from "./Screens/NewNoteForm";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: Colors.background },
            }}
          >
            <Stack.Screen name="NoteList" component={NoteListsView} />
            <Stack.Screen name="NewNoteForm" component={NewNoteForm} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
