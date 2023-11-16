import { StatusBar } from "expo-status-bar";

import NoteListsView from "./Screens/NoteListsView";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Colors } from "./Util/Colors";
import { store } from "./store";
import { Provider } from "react-redux";
import NewNoteForm from "./Screens/NewNoteForm";
import NewNoteView from "./Screens/NewNoteView";
import ViewNote from "./Screens/ViewNote";
import EditNoteView from "./Screens/EditNoteView";
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
            <Stack.Screen
              name="NewNoteView"
              component={NewNoteView}
              options={{ gestureEnabled: false }}
            />
            <Stack.Screen name="ViewNote" component={ViewNote} />
            <Stack.Screen name="EditNote" component={EditNoteView} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
