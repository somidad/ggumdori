import { Header } from "@/components/header";
import { Asset } from "expo-asset";
import { readAsStringAsync } from "expo-file-system";
import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Text, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Privacy() {
  const theme = useTheme();
  const router = useRouter();

  const [privacy, setPrivacy] = useState("");

  async function readPrivacy() {
    const name = "texts/privacy.txt";
    try {
      const nodeRequire = require(`@/assets/${name}`);
      const asset = Asset.fromModule(nodeRequire);
      await asset.downloadAsync();
      if (asset.localUri) {
        const fileContent = await readAsStringAsync(asset.localUri);
        setPrivacy(fileContent);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    readPrivacy();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        padding: 12,
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
