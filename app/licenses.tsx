import { Header } from "@/components/header";
import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Text, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { Asset } from "expo-asset";
import { readAsStringAsync } from "expo-file-system";

export default function Licenses() {
  const theme = useTheme();
  const router = useRouter();

  const [licenses, setLicenses] = useState("");

  async function readLicenses() {
    const name = "texts/licenses.txt";
    try {
      const nodeRequire = require(`@/assets/${name}`);
      const asset = Asset.fromModule(nodeRequire);
      await asset.downloadAsync();
      if (asset.localUri) {
        const fileContent = await readAsStringAsync(asset.localUri);
        setLicenses(fileContent);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    readLicenses();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
    >
      <Stack.Screen
        name="licenses"
        options={{
          header: (props) =>
            Header(props, { title: "Open source licenses", router }),
        }}
      />
      <Text>{licenses}</Text>
    </SafeAreaView>
  );
}
