import { Header } from "@/components/header";
import { Stack, useRouter } from "expo-router";
import { Text, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { readTextAsset } from "@/utils/readTextAsset";

export default function Terms() {
  const theme = useTheme();
  const router = useRouter();

  const [terms, setTerms] = useState("");

  async function readTerms() {
    const terms = await readTextAsset("texts/terms.txt");
    setTerms(terms);
  }

  useEffect(() => {
    readTerms();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
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
