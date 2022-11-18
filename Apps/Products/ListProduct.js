// import React, {useState, useEffect} from 'react';
// import {
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
//   ImageBackground,
//   TextInput,
//   KeyboardAvoidingView,
//   Platform,
//   Keyboard,
//   ScrollView,
//   FlatList,
//   Dimensions
// } from 'react-native';
// // import {Colors} from 'react-native/Libraries/NewAppScreen';
// // import {images, icons, fontSize} from '../../constaints';
// // import { colors } from '../../constaints/colors';

// import {isValidEmail, isValidPassword} from '../../utilies/validation';
// import FoodItem from './FoodItems';

// function ListProduct(props) {
//   const [food, setFood] = useState([
//     {
//       name: 'bún cá',
//       url: 'https://cdn.tgdd.vn/Files/2021/09/11/1381884/cach-nau-bun-ca-ha-noi-thom-ngon-chuan-vi-202109111452323215.jpg',
//       status: 'Opening soon',
//       price: 123.22,
//       website: 'huhfui@gmail.com',
//       sociaNetworks: {
//         facebook: 'https://facebook.com/havau',
//         instagram: 'https:/ww.instagram.com/hahaha/',
//         gmail: 'https:/gmail.com/haivuaa2gmail.com',
//       },
//     },
//     {
//       name: 'bún bò',
//       url: 'https://file.hstatic.net/200000395159/article/nau-bun-bo-hue-chuan-vi-tai-nha-voi-cot-co-dac-quoc-viet-foods_59b7ba1543004e67967af718d8afc32b.jpg',
//       status: 'Closeing soon',
//       price: 231.32,
//       website: 'huhfui@gmail.com',
//       sociaNetworks: {
//         facebook: 'https://facebook.com/havau',
//       },
//     },
//     {
//       name: 'bún cá chấm',
//       url: 'https://s1.media.ngoisao.vn/resize_580/news/2022/02/12/bun-ca-cham-5-ngoisaovn-w960-h721.jpg',
//       status: 'Opening soon',
//       price: 443.2,
//       website: 'huhfui@gmail.com',
//       sociaNetworks: {
//         instagram: 'https:/ww.instagram.com/hahaha/',
//         gmail: 'https:/gmail.com/haivuaa2gmail.com',
//       },
//     },
//     {
//       name: 'bún bò Huế',
//       url: 'https://bep360.net/wp-content/uploads/2021/05/bun-bo-hue.jpg',
//       status: 'Coming soon',
//       price: 3232,
//       website: 'huhfui@gmail.com',
//       sociaNetworks: {
//         facebook: 'https://facebook.com/havau',
//         instagram: 'https:/ww.instagram.com/hahaha/',
//       },
//     },
//     {
//       name: 'bún lươn chấm',
//       url: 'https://nghengu.vn/uploads/news/2020_07/cach-nau-mien-luon-nghe-an.jpg',
//       status: 'Opening soon',
//       price: 4344,
//       website: 'huhfui@gmail.com',
//       sociaNetworks: {
//         facebook: 'https://facebook.com/havau',
//         gmail: 'https:/gmail.com/haivuaa2gmail.com',
//       },
//     },
//     {
//       name: 'miến lươn ',
//       url: 'https://nghengu.vn/uploads/news/2020_07/cach-nau-mien-luon-nghe-an.jpg',
//       status: 'Opening soon',
//       price: 4344,
//       website: 'huhfui@gmail.com',
//       sociaNetworks: {
//         facebook: 'https://facebook.com/havau',
//         gmail: 'https:/gmail.com/haivuaa2gmail.com',
//       },
//     },
//   ]);
//   // const [categories, setCategories] = useState([
//   //   {
//   //     name: 'bánh mì',
//   //     url: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/B%C3%A1nh_m%C3%AC_th%E1%BB%8Bt_n%C6%B0%E1%BB%9Bng.png',
//   //   },
//   //   {
//   //     name: 'trà sữa',
//   //     url: 'https://cdn.dayphache.edu.vn/wp-content/uploads/2020/02/mon-tra-sua-tran-chau.jpg',
//   //   },
//   //   {
//   //     name: 'cơm',
//   //     url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/C%C6%A1m_T%E1%BA%A5m%2C_Da_Nang%2C_Vietnam.jpg/375px-C%C6%A1m_T%E1%BA%A5m%2C_Da_Nang%2C_Vietnam.jpg',
//   //   },
//   //   {
//   //     name: 'bún-phở',
//   //     url: 'https://bep360.net/wp-content/uploads/2021/05/bun-bo-hue.jpg',
//   //   },
//   //   {
//   //     name: 'cà phê',
//   //     url: 'https://nld.mediacdn.vn/2020/9/19/intro-1594766282-1600504778592231123885.jpg',
//   //   },
//   //   {
//   //     name: 'nước ép',
//   //     url: 'https://cdn.hellobacsi.com/wp-content/uploads/2021/11/nuoc-ep-hoa-qua-650x434.jpg',
//   //   },
//   //   {
//   //     name: 'đồ ăn vặt',
//   //     url: 'https://kenh14cdn.com/2018/9/17/met-do-chien-4-1537147860271397731701.jpg',
//   //   },
//   //   {
//   //     name: 'hoa quả',
//   //     url: 'https://hoaquafuji.com/storage/app/media/NEWS/cac-loai-trai-cay-nhap-khau.jpg',
//   //   },
//   //   {
//   //     name: 'Gà rán',
//   //     url: 'https://ameovat.com/wp-content/uploads/2016/05/cach-lam-ga-ran.jpg',
//   //   },
//   // ]);
//   const [seach, setSeach] = useState('');
//   const fillteredFood = () =>
//     food.filter(eachfood =>
//       eachfood.name.toLowerCase().includes(seach.toLowerCase()),
//     );
//   return (
//     <View style={{flex: 1, backgroundColor: 'white'}}>
//       <View
//         style={{
//           marginVertical: 10, //cách khoảng xung quanh
//           marginHorizontal: 10,
//           alignItems: 'center',
//           flexDirection: 'row',
//         }}>
//         <TextInput
//           autoCorrect={false} // tắt tự động sửa
//           onChangeText={text => {
//             //nhập tìm kiếm=> lưu gtri và gán vào setSeach
//             setSeach(text);
//           }}
//           //blurOnSubmit={true}//ẩn bàn phím khi ko muons ấn
//           //onSubmitEditing={()=>{Keyboard.dismiss()}}
//           style={{
//             height: 40,
//             flex: 1,
//             marginEnd: 5,
//             backgroundColor: 'blue',
//             borderRadius: 7,
//             fontSize: 15,
//             paddingStart: 10,
//           }}
//           placeholder="nhập món ăn bạn chọn"
//           placeholderTextColor={'black'}
//         />
//         {/* <Image
//           style={{
//             marginHorizontal: 5,
//             height: 35,
//             width: 35,
//           }}
//           source={icons.menu}
//         /> */}
//       </View>
//       <View style={{height: 1, backgroundColor: 'black'}} />
//       <View
//         style={{
//           height: 100,
//         }}>
//         <FlatList
//           data={categories}
//           keyExtractor={item => item.name}
//           horizontal
//           renderItem={({item}) => {
//             return (
//               <View
//                 style={{
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                 }}>
//                 <Image
//                   style={{
//                     height: 45,
//                     width: 45,
//                     resizeMode: 'cover',
//                     borderRadius: 25,
//                     margin: 15,
//                   }}
//                   source={{
//                     uri: item.url,
//                   }}
//                 />
//                 <Text
//                   style={{
//                     color: 'black',
//                   }}>
//                   {item.name}
//                 </Text>
//               </View>
//             );
//           }}
//           style={{
//             flex: 1,
//           }}
//         />

//         <View
//           style={{
//             height: 1,
//             backgroundColor: 'black',
//           }}
//         />
//       </View>
//       <View>
//         <ScrollView>
//           <View style ={{
//            padding:15
//           }}>
//             <Text
//               style={{
//                 fontSize: fontSize.h0,
//                 color: 'red',
//                 alignSelf: 'center',
//                 textDecorationLine: 'underline',
//               }}>
//               Bun-pho-mien
//             </Text>
//           </View>
//           {food.map(eachfood => (
//             <FoodItem food={eachfood} key={eachfood.name} />
//           ))}
//         </ScrollView>
//       </View>
//       {fillteredFood().length ? (
//         <FlatList
//           data={fillteredFood()}
//           ListFooterComponent={() => {
//             return <View style={{flex:1}} />;
//           }}
//           renderItem={({item}) => (
//             <FoodItem
//               onPress={() => {
//                 alert(`Bạn muốn chọn ' ${item.name} '`);
//               }}
//               food={item}
//             />
//           )}
//           keyExtractor={eachfood => eachfood.name}
//         />) : (<View
//           style={{
//             flex: 1,

//             justifyContent: 'center',
//             alignItems: 'center',
//           }}>
//           <Text
//             style={{
//               color: 'black',
//               fontSize: 20
//             }}>
//             No food found
//           </Text>
//         </View>
//       )}
//     </View>
//   );
// }
// export default ListProduct
