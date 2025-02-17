import { Header } from "@/components/header";
import { readTextAsset } from "@/utils/readTextAsset";
import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Text, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Privacy() {
  const theme = useTheme();
  const router = useRouter();

  const [privacy, setPrivacy] = useState("");

  async function readPrivacy() {
    const privacy = await readTextAsset("texts/privacy.txt");
    setPrivacy(privacy);
  }

  useEffect(() => {
    readPrivacy();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
    >
      <Stack.Screen
        name="privacy"
        options={{
          header: (props) => Header(props, { title: "Privacy policy", router }),
        }}
      />
      <Text>{privacy}</Text>
    </SafeAreaView>
  );
}
