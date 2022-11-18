import React from 'react';
import {TabBarIOSItem, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Product from '../Apps/Products/Product';
import TableProduct from '../Apps/TableScreen/TableProduct';
import User from '../Apps/User/User';

const screenOptions = ({route})=>({
  headerShown :false,
  tabBarActiveTintColor:'red',
  // tabBarActiveTintColor:colors.Orgent,
  tabBarInactiveTintColor:'red',
  tabBarIcon:({focused,name,color})=>{
      let screemName = route.name

      let iconName = ''
      if (screemName == 'ProductGridView'){
          iconName =''
      }else if(screemName =='FoodList'){
          iconName='' }
  else if( screemName =='Settings'){
      iconName = ''
  }
  else if( screemName =='Muitichoice'){
      iconName = ''
  }
  else if( screemName =='SingleChoice'){
      iconName = ''
  }
  return(//chỉ dùng dk 1 image
  <Image  style={{
            marginStart: 10,
            marginEnd: 5,
            width: 30,
            height: 30,
            tintColor:  focused? 'red':'blue',
          }} source={iconName}
           />
         
)
}
})
function UITab(props) {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={screenOptions} >
      <Tab.Screen name="Đặt Bàn" component={TableProduct} />
      <Tab.Screen name="Sản Phẩm" component={Product} />
      {/* {/* <Tab.Screen name="Home" component={TableProduct} /> */}
      <Tab.Screen name="Cá nhân" component={User} /> 
    </Tab.Navigator>
  );
}
export default UITab
