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
import db from '../config'

class Donate extends Component {
  constructor(props) {
    super(props);
    this.state = { userId:firebase.auth().currentUser.email,
      requestedBooks:[ ]
    };

    this.requestref=null
  }
 getRequestedBooks = () => {
   this.requestref = db.collection('requestbook').onSnapshot( (snapshot)=>{
     var bookList = snapshot.docs.map( (doc) => { doc.data() })
     console.log(bookList)
     this.setState({
       requestedBooks:bookList
     })
   } )

 }
 componentDidMount(){
   this.getRequestedBooks()
 }
 componentWillUnmount(){
   this.requestref() 
 }

 keyExtractor=(item,index)=>{
  index.toString()
}
renderItem=({item,i})=>{
  return(
      <ListItem key={i} title={item.bookName} subtitle={item.reasonForRequest} titleStyle={{
      color:'black'
      }}rightElement={<TouchableOpacity style={styles.container} onPress={()=>{
    
      }}>
      <Text>
      View
      </Text>
      </TouchableOpacity>} bottomDivider/>
  )
}

  render() {
    return (
      <View>
{
this.state.requestedBooks.length ==0?
(
    <View>
    <Text>
No Requested books
    </Text>
    </View>
) :(
  <FlatList data={this.state.requestedBooks} keyExtractor={this.keyExtractor} renderItem={this.renderItem}/>
)

}
      </View>
    );
  }
}

export default Donate;
