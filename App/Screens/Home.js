import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import Header from "../Components/Home/Header";
import GoogleMapView from "../Components/Home/GoogleMapView";
import CategoryList from "../Components/Home/CategoryList";
import GlobalApi from "../Services/GlobalApi";
import PlaceList from "../Components/Home/PlaceList";

export default function Home() {
  const [placeList, setPlaceList] = useState([]);

  useEffect(() => {
    GetNearBySearchPlace();
  }, []);

  const GetNearBySearchPlace = () => {
    GlobalApi.nearByPlace().then((res) => {
      setPlaceList(res.data.results);
    });
  };
  return (
    <ScrollView style={{ padding: 20 }}>
      <Header />
      <GoogleMapView />
      <CategoryList />
      {placeList ? <PlaceList placeList={placeList} /> : null}
    </ScrollView>
  );
}
