import { View, Image, StyleSheet, Pressable } from "react-native";
import TextCust from "./TextCust";

export default function Cart({
  product,
  removeItem,
}: {
  product: {
    id: number;
    title: string;
    price: number;
    size: string;
    qty: number;
    sellerName: string;
  };
  removeItem: any;
}) {
  return (
    <View style={style.itemContainer}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Image
          style={style.image}
          source={require("../../assets/images/cart_img.png")}
        />

        <View style={style.textConatiner}>
          <TextCust>{product.title}</TextCust>
          <TextCust
            style={{
              color: "#D0FFF0",
              fontWeight: "700",
              fontSize: 14,
            }}
          >
            {`₹ ${product.price}`}
          </TextCust>
          <View style={{ display: "flex", gap: 4, flexDirection: "row" }}>
            <TextCust style={{ color: "#AFAFAF" }}>Size:</TextCust>
            <TextCust>{product.size}</TextCust>
          </View>

          <View style={{ display: "flex", gap: 4, flexDirection: "row" }}>
            <TextCust style={{ color: "#AFAFAF" }}>Qty:</TextCust>
            <TextCust>{product.qty}</TextCust>
          </View>
        </View>
      </View>

      <Pressable onPress={() => removeItem(product.id)}>
        <View
          style={{
            backgroundColor: "#2C3033",
            height: 23,
            width: 23,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 23,
          }}
        >
          <Image source={require("../../assets/images/trash.png")} />
        </View>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#35393C",
    marginTop: 16,
    borderRadius: 8,
  },
  itemContainer: {
    padding: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#1F2326",
    borderRadius: 8,
    marginBottom: 8,
  },
  image: { width: 98, height: 98, borderRadius: 8 },
  textConatiner: {
    paddingLeft: 16,
    display: "flex",
    justifyContent: "space-between",
  },
});
