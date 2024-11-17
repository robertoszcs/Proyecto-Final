import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import WebView from 'react-native-webview'

const directorio = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <WebView source={{uri: "https://www.cucei.udg.mx/", }} style={{flex: 1}} />
    </SafeAreaView> 
  )
}

export default directorio