import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, StyleSheet, View } from "react-native";

type Props = {
  onPress: () => void;
};

export default function CircleButton({ onPress }: Props) {
  return (
    <View style={styles.circleButtonContainer}>
      <Pressable style={styles.circleButton} onPress={onPress}>
        <MaterialIcons name="add" size={38} color="#25292e" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButtonContainer: {
    borderColor: "#ffd33d",
    borderRadius: "50%",
    borderWidth: 4,
    height: 84,
    padding: 3,
    width: 84,
    // marginHorizontal: 60,
  },
  circleButton: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: "50%",
    flex: 1,
    justifyContent: "center",
  },
});
