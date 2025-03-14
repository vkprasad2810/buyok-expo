import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";

import React, { useState } from "react";
import TextCust from "./TextCust";

export default function Cart() {
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

  const [focused, seatFocused] = useState(false);
  const [isPromoVisible, setIsPromoVisible] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  return (
    <View style={style.container}>
      <View style={{ padding: 8 }}>
        {/* item */}
        {array.map((product, i) => {
          return (
            <View style={style.itemContainer} key={i}>
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
                  <View
                    style={{ display: "flex", gap: 4, flexDirection: "row" }}
                  >
                    <TextCust style={{ color: "#AFAFAF" }}>Size:</TextCust>
                    <TextCust>{product.size}</TextCust>
                  </View>

                  <View
                    style={{ display: "flex", gap: 4, flexDirection: "row" }}
                  >
                    <TextCust style={{ color: "#AFAFAF" }}>Qty:</TextCust>
                    <TextCust>{product.qty}</TextCust>
                  </View>
                </View>
              </View>

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
            </View>
          );
        })}

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
              <Image source={require("../../assets/images/badge-check.png")} />
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
            <Image source={require("../../assets/images/tag.png")} />
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
              if (!promoCode) return;
              setPromoCode("");
              seatFocused(false);
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
              {promoCode ? "Delete" : "Apply"}
            </TextCust>
          </Pressable>
        </View>
      )}
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
