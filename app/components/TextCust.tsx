import React from "react";
import { Text, TextStyle, View } from "react-native";

export default function TextCust({
  children,
  style = { color: "white" },
}: {
  children: React.ReactNode;
  style?: TextStyle;
}) {
  return (
    <View style={{ flexShrink: 1 }}>
      <Text style={style}>{children}</Text>
    </View>
  );
}
