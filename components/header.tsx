import { Router } from "expo-router";
import { Appbar } from "react-native-paper";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

type HeaderProps = {
  title: string;
  router?: Router;
};

export function Header(
  props: NativeStackHeaderProps,
  { title, router }: HeaderProps
) {
  return (
    <Appbar.Header {...props}>
      {router?.canGoBack() && (
        <Appbar.BackAction onPress={() => router.back()} />
      )}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
}
