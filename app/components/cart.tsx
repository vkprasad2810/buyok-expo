import { View, Image, StyleSheet, Pressable, Text } from "react-native";

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
    <View
      style={{
        padding: 12,
        backgroundColor: "black",
        borderRadius: 8,
        marginBottom: 8,
        flex: 1,
        flexDirection: "row",
      }}
    >
      <View>
        <Image source={require("../../assets/images/cart_img.png")} />
      </View>
      <View
        style={{
          flex: 1,
          marginLeft: 16,
          flexDirection: "column",
        }}
      >
        {/* title and delete image */}
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text style={{ flex: 1, color: "white" }} numberOfLines={2}>
            {product.title}
          </Text>
          <Pressable onPress={() => removeItem(product.id)}>
            <View
              style={{
                backgroundColor: "#2C3033",
                height: 25,
                width: 25,
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
        <Text style={{ flex: 1, color: "#D0FFF0", fontWeight: "bold" }}>
          ₹ {product.price}
        </Text>
        <Text style={{ flex: 1, color: "#AFAFAF" }}>
          Size: <Text style={{ color: "white" }}>{product.size}</Text>
        </Text>
        <Text style={{ flex: 1, color: "#AFAFAF" }}>
          Qty: <Text style={{ color: "white" }}>{product.qty}</Text>
        </Text>
      </View>
    </View>
  );
}
