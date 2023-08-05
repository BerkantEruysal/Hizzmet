import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import MapLogo from "../../assets/icons/mapIcon.svg"

const MapButton = ({width = 20, height = 20}) => {
  return (
    <TouchableOpacity>
        <MapLogo width={width} height={height}></MapLogo>
    </TouchableOpacity>
  )
}

export default MapButton

const styles = StyleSheet.create({})