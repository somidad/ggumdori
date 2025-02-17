import { Header } from "@/components/header";
import { Stack, useRouter } from "expo-router";
import { Text, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { Asset } from "expo-asset";
import { readAsStringAsync } from "expo-file-system";

export default function Terms() {
  const theme = useTheme();
  const router = useRouter();

  const [terms, setTerms] = useState("");

  async function readTerms() {
    const name = "texts/terms.txt";
    try {
      const nodeRequire = require(`@/assets/${name}`);
      const asset = Asset.fromModule(nodeRequire);
      await asset.downloadAsync();
      if (asset.localUri) {
        const fileContent = await readAsStringAsync(asset.localUri);
        setTerms(fileContent);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    readTerms();
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
        name="terms"
        options={{
          header: (props) =>
            Header(props, { title: "Terms and conditions", router }),
        }}
      />
      <Text>{terms}</Text>
    </SafeAreaView>
  );
}
