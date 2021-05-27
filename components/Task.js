import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

function Task(props) {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <TouchableOpacity style={styles.circular} onPress={() => { props.removeTask(props.text) }}/>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    width: 335,
    height: 53,

    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#F7F7F7',
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
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
    borderColor: '#c2403d',
    borderRadius: 5,
  },
})

export default Task;