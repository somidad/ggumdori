import { supabase } from "@/utils/supabase";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useRouter } from "expo-router";
import { View } from "react-native";
import { Button, List, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Settings() {
  const theme = useTheme();
  const router = useRouter();

  const goToTerms = () => router.push("/terms");
  const goToPrivacy = () => router.push("/privacy");
  const goToLicenses = () => router.push("/licenses");

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <View>
        <List.Item title="Terms and conditions" onPress={goToTerms} />
        <List.Item title="Privacy policy" onPress={goToPrivacy} />
        <List.Item title="Open source licenses" onPress={goToLicenses} />
      </View>
      <View
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          onPress={() => {
            supabase.auth.signOut();
            router.dismissTo("/");
          }}
        >
          Signout
        </Button>
      </View>
    </SafeAreaView>
  );
}
