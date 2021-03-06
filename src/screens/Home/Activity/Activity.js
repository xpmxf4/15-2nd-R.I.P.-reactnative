import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import RIP from "../components/RIP";
import { GET_MAIN_DATA } from "../../../config";

const Activity = ({ navigation }) => {
  const [surfingData, setSurfingData] = useState("");
  useEffect(() => {
    fetch(GET_MAIN_DATA("-price", 8))
      .then((res) => res.json())
      .then((res) => {
        setSurfingData(res.product_list);
      });
  }, []);
  return (
    <RIP
      navigation={navigation}
      isHomeCall={false}
      title="서핑"
      navigation={navigation}
      mainData={surfingData}
    />
  );
};

export default Activity;
