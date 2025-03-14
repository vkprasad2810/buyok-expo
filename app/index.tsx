import { Stack } from "expo-router";
import { Button, Pressable, ScrollView, Text, View } from "react-native";
import Cart from "./components/cart";
import TextCust from "./components/TextCust";
import { LinearGradient } from "expo-linear-gradient";

export default function Product() {
  const array = [
    {
      id: 1,
      title: "Burberry T-shirt",
      price: 2500,
      size: "Medium",
      qty: 2,
      sellerName: "Blueberry store",
    },
    {
      id: 2,
      title: "Burberry T-shirt",
      price: 2500,
      size: "Medium",
      qty: 2,
      sellerName: "Blueberry store",
    },
    {
      id: 3,
      title: "Burberry T-shirt",
      price: 2500,
      size: "Medium",
      qty: 2,
      sellerName: "Blueberry store",
    },
    {
      id: 4,
      title: "Burberry T-shirt",
      price: 2500,
      size: "Medium",
      qty: 2,
      sellerName: "Blueberry store",
    },
  ];

  const tax = 192;
  const totalValue = array.reduce((acc, number) => acc + number.price, 0);

  return (
    <View
      style={{
        backgroundColor: "#1F2326",
        paddingInline: 16,

        paddingBottom: 30,
      }}
    >
      <Stack.Screen
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: { color: "white" },
          title: "Your Shopping Cart", // Change this to your desired title
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* {array.map((element, i) => {
          return <Cart product={element} key={i} />;
        })} */}
        <Cart />

        {/* cart item calculation Ui */}

        <View style={{ paddingBlock: 19 }}>
          <View
            style={{
              padding: 16,
              backgroundColor: "#35393C",
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }}
          >
            <View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingBottom: 16,
                }}
              >
                <TextCust style={{ color: "#AFAFAF" }}>Price</TextCust>
                <TextCust
                  style={{ color: "#FFFEFE" }}
                >{`₹ ${totalValue}`}</TextCust>
              </View>

              <View
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  paddingBottom: 16,
                }}
              >
                <TextCust style={{ color: "#AFAFAF" }}>
                  Delivery Charge
                </TextCust>
                <TextCust style={{ color: "#FFFEFE" }}>Free</TextCust>
              </View>

              <View
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  paddingBottom: 16,
                }}
              >
                <TextCust style={{ color: "#AFAFAF" }}>
                  Coupon Discount
                </TextCust>
                <TextCust style={{ color: "#FFFEFE" }}>- ₹ 0</TextCust>
              </View>

              <View
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  paddingBottom: 8,
                }}
              >
                <TextCust style={{ color: "#AFAFAF" }}>Tax</TextCust>
                <TextCust style={{ color: "#FFFEFE" }}>{`₹ ${tax}`}</TextCust>
              </View>
            </View>
          </View>
          <View
            style={{
              borderTopWidth: 0.5,
              backgroundColor: "#35393C",
              borderColor: "#AFAFAF50",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 16,
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
            }}
          >
            <TextCust>Total</TextCust>
            <TextCust style={{ color: "#D0FFF0" }}>
              {`₹ ${totalValue + tax}`}{" "}
            </TextCust>
          </View>
        </View>

        <LinearGradient
          colors={["#81FBB9", "#BEFD4F"]}
          style={{ borderRadius: 4 }}
        >
          <Pressable
            style={{
              padding: 14,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, lineHeight: 24, color: "#0D0D0D" }}>
              Proceed to checkout
            </Text>
          </Pressable>
        </LinearGradient>
      </ScrollView>
    </View>
  );
}
