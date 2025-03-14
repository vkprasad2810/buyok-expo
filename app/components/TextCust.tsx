import React from "react";
import { Text, TextStyle } from "react-native";

export default function TextCust({
  children,
  style = { color: "white" },
}: {
  children: React.ReactNode;
  style?: TextStyle;
}) {
  return <Text style={style}>{children}</Text>;
}
