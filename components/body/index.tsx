import { View, Text, FlatList, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PostItem from '../smallComponents/postItem'
import { Post } from '../../types'

const index = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const getData = async () => {
        if (isLoading || !hasMore) return;
        setIsLoading(true);

        try {
            const res = await  axios.get(`https://lahelu.com/api/post/get-posts?feed=1&page=${currentPage}`);

            if(res.data.postInfos.length > 0) {
                setPosts([...posts, ...res.data.postInfos]);
                setCurrentPage(currentPage + 1);
            }else {
                setHasMore(false);
            }
          
        } catch (error) {
            console.error('Error fetching items:', error);
        }

        setIsLoading(false);
    };

    useEffect(() => {
        getData()
    }, [])

    const renderLoader = () => {
        return isLoading ?
        (
          <View className='p-3 items-center'>
            <ActivityIndicator size="large" color="#aaa " />
          </View>
        ) : null;
      };

    return (
        <View className='w-full'>
            <FlatList
                data={posts}
                keyExtractor={(item, index) => index.toString()}
                renderItem={PostItem}
                onEndReached={getData}
                ListFooterComponent={renderLoader}
                onEndReachedThreshold={0.5}
            />
        </View>
    )
}

export default index;