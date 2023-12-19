import React from 'react'
import { ScrollView } from 'react-native'
import Cities from '../components/Cities'
import Footer from '../components/Footer'

const Location = () => {
  return (
    <ScrollView>
      <Cities/>
      <Footer/>
    </ScrollView>
  )
}

export default Location