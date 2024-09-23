import { View, Text, FlatList, Image, ActivityIndicator, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PostItem from '../smallComponents/postItem'
import { Post } from '../../types'

const index = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [activeTab, setActiveTab] = useState("1");

    const changeTab = (tab:string) => {
        setActiveTab(tab);
        setCurrentPage(1); // Reset page number
        setHasMore(true); // Reset hasMore to true
        setPosts([]); // Clear current posts
    }

    const getData = async () => {
        if (isLoading || !hasMore) return;
        setIsLoading(true);

        try {
            const res = await  axios.get(`https://lahelu.com/api/post/get-posts?feed=${activeTab}&page=${currentPage}`);

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
    }, [activeTab])

    const renderLoader = () => {
        return isLoading ?
        (
          <View className='p-3 items-center'>
            <ActivityIndicator size="large" color="#aaa " />
          </View>
        ) : null;
    };

    

    return (
        <View className='w-full bg-black flex'>
            <View className='bg-gray-800 flex-row mt-11 items-center justify-start pt-5'>
                <View className={`w-1/3 border-b-2 ${activeTab === "1" ? 'border-cyan-600' : ''}`}>
                    <TouchableOpacity className='h-10 pt-1' activeOpacity={1} onPress={() => { changeTab("1") }}>
                        <Text className='text-gray-400 text-center text-xl'>Home</Text>
                    </TouchableOpacity>
                </View>

                <View className={`w-1/3 border-b-2 ${activeTab === "0" ? ' border-cyan-600' : ''}`}>
                    <TouchableOpacity className='h-10 pt-1' activeOpacity={1} onPress={() => { changeTab("0") }}>
                        <Text className='text-gray-400 text-center text-xl'>Fresh</Text>
                    </TouchableOpacity>
                </View>

                <View className={`w-1/3 border-b-2 ${activeTab === "2" ? ' border-cyan-600' : ''}`}>
                    <TouchableOpacity className='h-10 pt-1' activeOpacity={1} onPress={() => { changeTab("2") }}>
                        <Text className='text-gray-400 text-center text-xl'>Trending</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View className='mt-1 min-h-full'>
                <FlatList
                    data={posts}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <PostItem item={item} />}
                    onEndReached={getData}
                    ListFooterComponent={renderLoader}
                    onEndReachedThreshold={0.5}
                />
            </View>
        </View>
    )
}

export default index;