import { View, Text, Platform } from 'react-native'
import React from 'react'

const Logo = () => {
  return (
    <View className='bg-black pb-1 flex'>
     {
         Platform.OS === 'ios' ? (
            <View className='mt-20 bg-gray-800 pt-2'>
              <Text className='text-cyan-600 text-5xl font-bold pl-3'>LAHELU</Text>
            </View>
         ) : (
            <View className='mt-8 bg-gray-800 pt-2'>
                <Text className='text-cyan-600 text-5xl font-bold pl-3'>LAHELU</Text>
            </View>
         )
     }

    </View>
  )
}

export default Logo