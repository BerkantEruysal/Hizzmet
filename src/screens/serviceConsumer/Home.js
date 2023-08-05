import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../utils/styles/DarkTheme'

const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor: colors.secondaryBackground
  }
})