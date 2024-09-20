import { View, Text, Image } from 'react-native'
import React from 'react'
import { Post } from '../../types'

const PostItem = ({ item }: { item: Post }) => {
    return (
        <View className='mt-1 pb-5 px-2 border-b-[1px] border-gray-400'>
            <Text>{item.title}</Text>
            <Text>{item.userUsername}</Text>
            <Image
                className='w-full'
                style={{ aspectRatio: item.mediaWidth / item.mediaHeight }} 
                source={
                    item.mediaThumbnail ? 
                        { uri: `https://cache.lahelu.com/${item.mediaThumbnail}` } 
                    : 
                        {uri: `https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg`}} 
            />
        </View>
    )
}

export default PostItem