import { View, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../Shared/Colors";

export default function PlaceItem({ place }) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        marginTop: 20,
      }}
    >
      <Image
        source={{
          uri:
            "https://maps.googleapis.com/maps/api/place/photo" +
            "?maxwidth=400" +
            "&photo_reference=" +
            place?.photos[0]?.photo_reference +
            "&key=AIzaSyAlIDUiTW6M9p6qb7mHsMCvqk0_OMO3MV0",
        }}
        style={{ width: 110, height: 110, borderRadius: 15 }}
      />
      <View style={{ flex: 1 }}>
        <Text
          numberOfLines={2}
          style={{
            fontSize: 18,
            fontFamily: "raleway-SemiBold",
            marginBottom: 5,
          }}
        >
          {place.name}
        </Text>
        <Text numberOfLines={2} style={{ fontSize: 18, marginBottom: 10 }}>
          {place.vicinity}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <AntDesign name="star" size={20} color={Colors.black} />
          <Text>{place.rating}</Text>
        </View>
      </View>
    </View>
  );
}
