import React, { Component } from 'react';
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
import {
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
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import firebase from 'firebase'
import db from '../config'
import { ViewComponent } from 'react-native';
class Request extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: firebase.auth().currentUser.email,
      bookName: '',
      reasonForRequest: '',
    };
  }
createUniqueId(){
  return Math.random().toString(36).substring(7)
}
addRequest = (bookName,reasonForRequest)=>{
var userid=this.state.userid
var requestId=this.createUniqueId()
if (bookName!==''&& reasonForRequest !==''){

db.collection('requestbook').add({
  'userId':userid,
  'requestId': requestId,
  'bookName':bookName,
  'reasonForRequest':reasonForRequest,
})
this.setState ({
  bookName:'', 
  reasonForRequest:''
})
return alert('Your Request Has Been Updated Succesfuly!')}
else {return alert ('Your Input Is Empty')}
}
  render() {
    return (
      <SafeAreaProvider> 
      <View>
        <View>
        <Input
          placeholder="Book Name"
          leftIcon={{ type: 'font-awesome', name: 'book' }}
          value = {this.state.bookName}
          onChangeText={value => this.setState({ bookName: value })}
        /> 
         </View>
         <View>
        <Input
          placeholder="Request Reason"
          leftIcon={{ type: 'font-awesome', name: 'comment' }}
          value = {this.state.reasonForRequest}
          onChangeText={value => this.setState({ reasonForRequest: value })}
        />
        </View>
        <View>

       <TouchableOpacity onPress={() => {
         this.addRequest(this.state.bookName, this.state.reasonForRequest)
        }}>

          <Text>
        Submit
          </Text>

        </TouchableOpacity>
        </View>
      </View>
      </SafeAreaProvider>
    );
  }
}

export default Request;
