import { View, Text, Image, Button } from 'react-native'
import React, { memo, useEffect, useRef } from 'react'
import { Video, ResizeMode } from 'expo-av'
import { Post } from '../../types'
import Hastag from './hastag'


const PostItem = ({ item }: { item: Post }) => {
    const videoRef = useRef<Video>(null);

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
            {
            item.mediaType === 0 ?

                <Image
                    className='w-full'
                    style={{ aspectRatio: item.mediaWidth / item.mediaHeight }} 
                    source={
                        item.media ? 
                            { uri: `https://cache.lahelu.com/${item.media}` } 
                        : 
                            {uri: `https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg`}} 
                />
            :
                <View>
                    <Video
                        ref={videoRef}
                        className='w-full'
                        source={{ uri: `https://cache.lahelu.com/${item.media}` }}
                        useNativeControls
                        resizeMode={ResizeMode.CONTAIN}
                        isLooping
                        style={{ aspectRatio: item.mediaWidth / item.mediaHeight }}
                    />
                </View>
            }
            
            <Hastag data={item.hashtags} />
        </View>
    )
}

export default memo(PostItem)