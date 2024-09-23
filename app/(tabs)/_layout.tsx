import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { Tabs } from 'expo-router'

import {MaterialCommunityIcons, Entypo} from '@expo/vector-icons';

const TabsLayout = () => {
  return (
    <Tabs
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: Colors.primary,
        }}
    >
        <Tabs.Screen
            name="index"
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" size={24} color={color} />
                ),
            }}
        />
        <Tabs.Screen
            name="topic"
            options={{
                tabBarLabel: 'Topic',
                tabBarIcon: ({ color }) => (
                    <Entypo name="chat" size={24} color={color} />
                ),
            }}
        />
        <Tabs.Screen
            name="addPost"
            options={{
                tabBarLabel: 'Add Post',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="plus" size={24} color={color} />
                ),
            }}
        />
        <Tabs.Screen
            name="profile"
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account" size={24} color={color} />
                ),
            }}
        />
       

    </Tabs>
  )
}

export default TabsLayout