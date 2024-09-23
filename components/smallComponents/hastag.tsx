import { View, Text, ScrollView } from 'react-native'
import React, { useEffect } from 'react'

interface HastagProps {
    data: string[]
}

const Hastag = ({ data }:HastagProps) => {

    return (
        <View className='flex flex-row mt-5 ml-4'>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {data.map((item, index) => (
                    <View key={index} className='tmb-2 mr-4 border border-white rounded-3xl'>
                        <Text className='text-white px-4 text-lg font-bold'># {item}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default Hastag