import React from "react";
import { View, Text } from "react-native";

import DateComp from "./Date";

const SelectTime = () => {
  return (
    <View>
      {/* <Text>Select Date and Time</Text> */}
      <View>
        <DateComp />
      </View>
    </View>
  );
};

export default SelectTime;
