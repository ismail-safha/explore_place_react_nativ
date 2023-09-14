import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
} from "react-native";
import Colors from "../../Colors";

export default function Headre() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        gap: 10,
        // justifyContent: "space-between",
      }}
    >
      <Image
        source={require("./../../../assets/logo.png")}
        style={styles.logo}
      />
      <View>
        <TextInput style={styles.searchBar} placeholder="Search"></TextInput>
      </View>
      <Image
        style={styles.userImage}
        source={require("../../../assets/placeholder.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: Colors.black,
    padding: 4,
    borderRadius: 50,
    paddingLeft: 10,
    // width: 210,
    width: Dimensions.get("screen").width * 0.6,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
});
