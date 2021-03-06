import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';
import React from 'react';
import { StyleSheet, View } from 'react-native';

LocaleConfig.locales['kr'] = {
    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    dayNames: ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'],
    dayNamesShort: ['월', '화', '수', '목', '금', '토', '일'],
    today: '오늘'
};
LocaleConfig.defaultLocale = 'kr';

const CalendarView = () => {
    return (
        <View>
            <Calendar style={styles.calendarContainer}
                onDayPress={(day) => { console.log(day) }}
                monthFormat={'yyyy MM'} />
        </View>
    );
};

const styles = StyleSheet.create({
    calendarContainer: {
        marginTop: 40,
    }
});

export default Calendar;