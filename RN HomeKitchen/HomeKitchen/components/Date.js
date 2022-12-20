import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import RGB_HEX_Colors from "../constants/Colors";

export default function DateComp() {
  const [datePicker, setDatePicker] = useState(false);

  const [date, setDate] = useState(new Date());

  const [timePicker, setTimePicker] = useState(false);

  const [time, setTime] = useState(new Date(Date.now()));

  function showDatePicker() {
    setDatePicker(true);
  }

  function showTimePicker() {
    setTimePicker(true);
  }

  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  }

  function onTimeSelected(event, value) {
    setTime(value);
    setTimePicker(false);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styleSheet.MainContainer}>
        {datePicker && (
          <DateTimePicker
            value={date}
            mode={"date"}
            display={Platform.OS === "ios" ? "spinner" : "default"}
            is24Hour={true}
            onChange={onDateSelected}
            style={styleSheet.datePicker}
          />
        )}

        {timePicker && (
          <DateTimePicker
            value={time}
            mode={"time"}
            display={Platform.OS === "ios" ? "spinner" : "default"}
            is24Hour={false}
            onChange={onTimeSelected}
            style={styleSheet.datePicker}
          />
        )}

        <View style={{ flexDirection: "row" }}>
          {!datePicker && (
            <TouchableOpacity onPress={showDatePicker}>
              <View style={{ margin: 10 }}>
                {/* <Button title="Show Date Picker" color="green" onPress={showDatePicker} /> */}
                <View style={styleSheet.box}>
                  <Text style={{ width: 55, height: 40 }}>
                    {date.toDateString()}
                  </Text>
                  <Ionicons name="calendar-outline" size={25} />
                </View>
              </View>
            </TouchableOpacity>
          )}

          {!timePicker && (
            <TouchableOpacity onPress={showTimePicker}>
              <View style={{ margin: 10 }}>
                <View style={styleSheet.box}>
                  <Text style={{ width: 55, height: 40 }}>
                    {time.toLocaleTimeString("en-US")}
                  </Text>
                  <Ionicons name="alarm-outline" size={25} />
                </View>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styleSheet = StyleSheet.create({
  box: {
    width: 150,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
    borderWidth: 1,
    borderColor: RGB_HEX_Colors.gray,
    borderStyle: "solid",
    borderRadius: 10,
    padding: 10,
  },
  MainContainer: {
    flex: 1,
    padding: 6,
    alignItems: "center",
    backgroundColor: "white",
  },

  text: {
    fontSize: 25,
    color: "red",
    padding: 3,
    marginBottom: 10,
    textAlign: "center",
  },

  // Style for iOS ONLY...
  datePicker: {
    justifyContent: "center",
    alignItems: "flex-start",
    width: 320,
    height: 260,
    display: "flex",
  },
});
