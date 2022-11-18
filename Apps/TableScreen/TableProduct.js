import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableHighlight,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {ImageIcon} from '../../contains/image';
import {FontSize, Color} from '../../contains';
import ButtonChose from './ButtonChose';

export default function TableProduct({props, navigation}) {
  const [Table, setTable] = useState([
    {
      name: 'Bàn 1',
      url: require('../../asets/table.png'),
    },
    {
      name: 'Bàn 2',
      url: require('../../asets/table.png'),
    },
    {
      name: 'Bàn 3',
      url: require('../../asets/table.png'),
    },
    {
      name: 'Bàn 4',
      url: require('../../asets/table.png'),
    },
    {
      name: 'Bàn 5',
      url: require('../../asets/table.png'),
    },
    {
      name: 'Bàn 6',
      url: require('../../asets/table.png'),
    },
    {
      name: 'Bàn 7',
      url: require('../../asets/table.png'),
    },
    {
      name: 'Bàn 8',
      url: require('../../asets/table.png'),
    },
    {
      name: 'Bàn 9',
      url: require('../../asets/table.png'),
    },
    {
      name: 'Bàn 10',
      url: require('../../asets/table.png'),
    },
    {
      name: 'Bàn 11',
      url: require('../../asets/table.png'),
    },
    {
      name: 'Bàn 12',
      url: require('../../asets/table.png'),
    },
  ]);
  const {navigate, goBack} = navigation;
  return (
    <View style={{flex: 1, backgroundColor: '#33CCFF'}}>
      <View style = {{height:40, width:'100%', backgroundColor:'#FFCC66'}}>
        <Text style={styles.TxtDanhmuc}>
          Danh Sách Bàn{' '}
        </Text>
      </View>
      <FlatList
        data={Table}
        keyExtractor={item => item.name}
        numColumns={2}
        renderItem={({item}) => {
          return (
            <View style={styles.ViewList}>
              {/* <ButtonChose/ > */}
              <TouchableOpacity onPress={() => Alert.alert('thông báo')}>
                
                <Image
                  style={styles.ImageList}
                  source={require('../../asets/table.png')}
                />
                
              </TouchableOpacity>
              <Text
                style={{
                  color: 'black',
                  fontSize: 18,
                }}>
                {item.name}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  ViewList: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:1,
    borderRadius:30,
    marginHorizontal:10,
    marginBottom:10
    // marginBottom:10
  },
  ViewChild: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageList: {
    height: 85,
    width:95,
    resizeMode: 'cover',
    borderRadius: 25,
    
  },
  TxtDanhmuc:{
    fontSize: 25, 
    color: 'black', 
    alignSelf: 'center'
}
});
