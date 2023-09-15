import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import PlaceItem from "./PlaceItem";

export default function PlaceList({ placeList }) {
  return (
    <View>
      <Text
        style={{ fontSize: 20, fontFamily: "raleway-SemiBold", marginTop: 10 }}
      >
        Found {placeList.length} Places
      </Text>
      <FlatList
        data={placeList}
        renderItem={({ item, index }) => (
          <TouchableOpacity key={index} onPress={() => onPlaceClick(item)}>
            {index % 4 == 0 ? (
              <PlaceItemBig place={item} />
            ) : (
              <PlaceItem place={item} />
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
