import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

const CustomButton = ({ name, color, size, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View>
        <Ionicons name={name} color={color} size={size} />
      </View>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 5,
  },
});
