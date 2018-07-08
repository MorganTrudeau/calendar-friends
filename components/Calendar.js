import React from "react";
import { StyleSheet, View } from "react-native";
import { Calendar, Agenda } from "react-native-calendars";

const initialState = {
  "2018-07-14": {
    periods: [
      {
        startingDay: true,
        endingDay: false,
        color: "red"
      },
      { startingDay: true, endingDay: true, color: "blue" },
      { startingDay: true, endingDay: true, color: "green" }
    ]
  },
  "2018-07-15": {
    periods: [
      { startingDay: true, endingDay: true, color: "red" },
      { color: "transparent" },
      { startingDay: false, endingDay: false, color: "blue" }
    ]
  },
  "2018-07-16": {
    periods: [
      { startingDay: true, endingDay: false, color: "red" },
      { startingDay: true, endingDay: true, color: "green" },
      { startingDay: false, endingDay: false, color: "blue" }
    ]
  },
  "2018-07-17": {
    periods: [{ startingDay: false, endingDay: true, color: "red" }]
  }
};

export default class CalendarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: "",
      selectedDays: {}
    };
    this.onSelectDay = this.onSelectDay.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <Calendar
          onDayPress={this.onSelectDay}
          markedDates={this.state.selectedDays}
          // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
          markingType="multi-period"
          current={"2018-07-16"}
          // Specify style for calendar container element. Default = {}
          style={{
            width: "100%"
          }}
          // Specify theme properties to override specific styles for calendar parts. Default = {}
          theme={{
            textSectionTitleColor: "#b6c1cd",
            selectedDayBackgroundColor: "#ff0000",
            selectedDayTextColor: "white",
            todayTextColor: "#ff0000",
            dayTextColor: "black",
            weekTextColor: "#00ff99",
            textDisabledColor: "#d9e1e8",
            dotColor: "#00adf5",
            selectedDotColor: "#ffffff",
            arrowColor: "orange",
            monthTextColor: "black",
            textMonthFontWeight: "bold",
            textDayFontSize: 16,
            textDayFontWeight: "bold",
            textMonthFontSize: 16
          }}
        />
      </View>
    );
  }

  onSelectDay(day) {
    let selectedDays = this.state.selectedDays;
    let previousSelectedDay = {};
    let selectedDay = {};
    if (selectedDays[this.state.selectedDay]) {
      previousSelectedDay[this.state.selectedDay] = Object.assign(
        {},
        selectedDays[this.state.selectedDay],
        {
          selected: false
        }
      );
    }
    selectedDay[day.dateString] = Object.assign(
      {},
      selectedDays[day.dateString],
      { selected: true }
    );
    let newState = Object.assign(
      {},
      selectedDays,
      previousSelectedDay,
      selectedDay
    );
    this.setState({
      selectedDays: newState,
      selectedDay: day.dateString
    });
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center"
  }
});
