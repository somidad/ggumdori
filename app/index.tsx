import { useRouter } from "expo-router";
import { View } from "react-native";
import { Button, useTheme } from "react-native-paper";

export default function Landing() {
  const theme = useTheme();
  const router = useRouter();

  const goToMain = () => router.push('/statements')

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button onPress={goToMain}>Go to main</Button>
    </View>
  );
}
