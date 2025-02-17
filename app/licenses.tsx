import { Header } from "@/components/header";
import { readTextAsset } from "@/utils/readTextAsset";
import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Text, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Licenses() {
  const theme = useTheme();
  const router = useRouter();

  const [licenses, setLicenses] = useState("");

  async function readLicenses() {
    const licenses = await readTextAsset("texts/licenses.txt");
    setLicenses(licenses);
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
