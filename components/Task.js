import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

export default function Task(props) {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    position: 'absolute',
    width: '335px',
    height: '53px',
    left: '20px',
    top: '152px',

    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#F7F7F7',
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    width: 200,
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#2F69FF',
    opacity: 0.4,
    borderRadius: 5,
  },
  itemText: {
    maxWidth: "80%",
    //fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 16,
    color: '#1A1A1A',
    marginLeft: 20,

  },
  circular: {
    width: 12,
    height: 12,

    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#2F69FF',
    borderRadius: 5,
  },
})