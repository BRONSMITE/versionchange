import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    FlatList,
    Image,
    KeyBoardAvoidingView,
    ScrollView,
} from 'react-native';
import{
    Avatar,
    Badge,
    Input,
    Card,
    Header,
    Icon,
    ListItem,
    SearchBar,
    Tile
} from 'react-native-elements'

import firebase from 'firebase'
import Donate from '../screens/Donate';
import Request from '../screens/Request';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export const TabNavigator = createBottomTabNavigator({
    Donate:{
        screen:Donate,
        navigationOptions:{
            tabBarIcon:<Image source={require('../images/donatepic.png')} style={{width:20, height:20}}/>,
            tabBarLabel:'Donate' 
        }
    },

    Request:{
        screen:Request,
        navigationOptions:{
            tabBarIcon:<Image source={require('../images/request.png')} style={{width:20, height:20}} />,
            tabBarLabel:'Request' 
        }
    }


})