import { View, Text, Image } from 'react-native'
import React, { memo } from 'react'
import { Post } from '../../types'
import Hastag from './hastag'


const PostItem = ({ item }: { item: Post }) => {
    return (
        <View className='mt-1 py-4 mb-3 bg-gray-800'>
            <View className='flex flex-row px-3 mb-4'>
                <Image
                    className='w-8 h-8 rounded-full'
                    source={{ uri: `https://cache.lahelu.com/${item.userAvatar}` }}
                />
                <Text className='text-white px-3 mb-1 text-2xl'>{item.userUsername}</Text>
            </View>
            <Text className='text-white px-3 text-xl mb-2'>{item.title}</Text>
            <Image
                className='w-full'
                style={{ aspectRatio: item.mediaWidth / item.mediaHeight }} 
                source={
                    item.mediaThumbnail ? 
                        { uri: `https://cache.lahelu.com/${item.mediaThumbnail}` } 
                    : 
                        {uri: `https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg`}} 
            />
            <Hastag data={item.hashtags} />
        </View>
    )
}

export default memo(PostItem)