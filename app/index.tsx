import { Stack } from "expo-router";
import {
  Button,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Cart from "./components/cart";
import TextCust from "./components/TextCust";
import { LinearGradient } from "expo-linear-gradient";
import { useCallback, useMemo, useState } from "react";

export default function Product() {
  const array = [
    {
      id: 1,
      title: "Burberry T-shirt 1",
      price: 2500,
      size: "Medium",
      qty: 2,
      sellerName: "Blueberry store",
    },
    {
      id: 2,
      title: "Burberry T-shirt 2",
      price: 2500,
      size: "Medium",
      qty: 2,
      sellerName: "Blueberry store",
    },
    {
      id: 3,
      title: "Burberry T-shirt 3",
      price: 2500,
      size: "Medium",
      qty: 2,
      sellerName: "Blueberry store",
    },
    {
      id: 4,
      title: "Burberry T-shirt 4",
      price: 2500,
      size: "Medium",
      qty: 2,
      sellerName: "Blueberry store",
    },
  ];
  const [focused, seatFocused] = useState(false);
  const [isPromoVisible, setIsPromoVisible] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [isPromoCodeAppplied, setIsPromoCodeApplied] = useState(false);

  const [cart, setCart] = useState(array);

  const tax = 192;
  const totalValue = useMemo(
    () => cart.reduce((acc, item) => acc + item.price, 0),
    [cart]
  );

  function removeItem(id: number) {
    const updateCart = cart.filter((item) => item.id !== id);

    setCart(updateCart);
  }
  return (
    <View
      style={{
        backgroundColor: "#1F2326",
        paddingInline: 16,
        height: "100%",
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
        <View style={style.container}>
          <View style={{ padding: 8 }}>
            {/* item */}
            {cart.length > 0 ? (
              cart.map((product, i) => {
                return (
                  <Cart product={product} key={i} removeItem={removeItem} />
                );
              })
            ) : (
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <TextCust
                  style={{
                    paddingLeft: 2,
                    color: "#AFAFAF",
                    fontSize: 20,
                    padding: 16,
                  }}
                >
                  Empty Cart
                </TextCust>
              </View>
            )}

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingBlock: 16,
              }}
            >
              <View
                style={{
                  paddingInline: 3,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TextCust>Blueberry store</TextCust>
                <View style={{ paddingLeft: 7 }}>
                  <Image source={require("../assets/images/badge-check.png")} />
                </View>

                <TextCust style={{ paddingLeft: 2, color: "#AFAFAF" }}>
                  buyok verifed
                </TextCust>
              </View>
              <TextCust>ETA 5-7 working days</TextCust>
            </View>
          </View>
          {!isPromoVisible ? (
            <Pressable
              onPress={() => setIsPromoVisible(true)}
              style={{
                borderWidth: 0,
                borderTopWidth: 0.5,
                borderTopColor: "#AFAFAF50",

                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: 16,
              }}
            >
              <View style={{ paddingRight: 4 }}>
                <Image source={require("../assets/images/tag.png")} />
              </View>
              <TextCust>Apply promo code</TextCust>
            </Pressable>
          ) : (
            <View
              style={{
                padding: 16,
                position: "relative",
                borderWidth: 0,
                borderTopWidth: 0.5,
                borderTopColor: "#AFAFAF50",
              }}
            >
              <TextInput
                value={promoCode}
                onChangeText={(value) => setPromoCode(value)}
                onFocus={() => {
                  if (promoCode) {
                    seatFocused(true);
                    return;
                  }
                  seatFocused(!focused);
                }}
                onBlur={() => {
                  if (promoCode !== "") return;
                  seatFocused(!focused);
                }}
                style={{
                  borderColor: promoCode ? "#81FBB9" : "#82A090",
                  borderWidth: 1,
                  borderRadius: 8,
                  padding: 16,
                  color: promoCode ? "#81FBB9" : "#82A090",
                }}
              />

              <TextCust
                style={{
                  position: "absolute",
                  left: 32,
                  top: focused ? 10 : 32,
                  backgroundColor: "#35393C",
                  color: promoCode ? "#81FBB9" : "#82A090",
                  transitionDuration: "500ms",
                  transitionProperty: "all",
                  transitionTimingFunction: "ease-in",
                }}
              >
                Promo Code
              </TextCust>

              <Pressable
                onPress={() => {
                  if (!isPromoCodeAppplied) {
                    setIsPromoCodeApplied(true);
                  } else {
                    setPromoCode("");
                    seatFocused(false);
                    setIsPromoCodeApplied(false);
                  }
                }}
                style={{
                  position: "absolute",
                  top: 16,
                  right: 32,
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TextCust
                  style={{
                    color: "#81FBB9",
                    textDecorationLine: "underline",
                  }}
                >
                  {isPromoCodeAppplied ? "Remove" : "Apply"}
                </TextCust>
              </Pressable>
            </View>
          )}
        </View>

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
                <TextCust style={{ color: "#FFFEFE" }}>
                  {isPromoCodeAppplied ? "- ₹ 50" : "- ₹ 0"}
                </TextCust>
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
              {`₹ ${totalValue + tax - (isPromoCodeAppplied ? 50 : 0)}`}{" "}
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
