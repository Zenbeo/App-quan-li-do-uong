import { View, Text,FlatList, } from 'react-native'
import React ,{ useState,useEffect}from 'react'
const [drinkCafe, setDrinkCafe] = useState([
    {
      name: ' Phin nâu đá',
      url: 'https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/PHIN-SUA-DA.png',
    
      price: 25000,
      size: 'M , L '
    },
    {
        name: 'Phin đen đá',
        url: 'https://www.highlandscoffee.com.vn/vnt_upload/product/05_2018/CFD.png',
      
        price: 25000,
        size: 'M , L '
      },
      {
        name: 'bạc xỉu',
        url: 'https://cdn.tgdd.vn/2021/03/content/13-800x549.jpg',
      
        price: 25000,
        size: 'M , L '
      },
      {
        name: 'caffe cốt dừa',
        url: 'https://img.meta.com.vn/Data/image/2018/12/06/tu-pha-che-ca-phe-cot-dua-cuc-thom-ngon-va-hap-dan-ngay-tai-nha-nd0.jpg',
      
        price: 55000,
        size: 'M , L '
      },
      {
        name: 'sữa chua đánh đá cafe',
        url: 'hhttps://dungcuphache.com/wp-content/uploads/2022/01/thanh-pham-ly-sua-chua-danh-da-ca-phe.jpg',
      
        price: 35000,
        size: 'M , L '
      },
])
const [drinkTea, setDrinkTea] = useState([
    {
      name: 'Trà Vải',
      url: 'https://www.highlandscoffee.com.vn/vnt_upload/product/04_2020/TRATHACHVAI_1.png',
    
      price: 25000,
      size: 'M , L '
    },
    {
        name: 'Trà sen vàng',
        url: 'https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_TRASENVANG.png',
      
        price: 25000,
        size: 'M , L '
      },
      {
        name: 'Trà đào',
        url: 'https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/TRATHANHDAO.png',
      
        price: 25000,
        size: 'M , L '
      },
      {
        name: 'Trà thạch đào',
        url: 'https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/TRATHACHDAO.png',
        price: 55000,
        size: 'M , L '
      },
      {
        name: 'Trà xoài nhiệt đới',
        url: 'https://www.highlandscoffee.com.vn/vnt_upload/product/06_2022/TRA-XOAI-NHIET-DOI.jpg',
      
        price: 35000,
        size: 'M , L '
      },
    ])
      const [drinkFreeze, setDrinkFreeze] = useState([
        {
          name: 'Freeze trà xanh',
          url: 'https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/GTF.png',
        
          price: 25000,
          size: 'M , L '
        },
        {
            name: 'Freeze choco',
            url: 'https://www.highlandscoffee.com.vn/vnt_upload/product/05_2018/thumbs/270_crop_CHOCOLATE-FREEZE.png',
          
            price: 25000,
            size: 'M , L '
          },
          {
            name: 'Freeze Caramel',
            url: 'https://www.highlandscoffee.com.vn/vnt_upload/product/05_2018/thumbs/270_crop_CHOCOLATE-FREEZE.png',
            price: 25000,
            size: 'M , L '
          },
         
])
const [cake, setCake] = useState([
  {
    name: 'Bánh chuối',
    url: 'https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_MOUSSEDAO.png',
  
    price: 25000,
    size: 'M , L '
  },
  {
      name: 'Bánh cacao',
      url: 'https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/MOUSSECACAO.png',
    
      price: 25000,
      size: 'M , L '
    },
    {
      name: 'Bánh trà xanh',
      url: 'https://d1sag4ddilekf6.azureedge.net/compressed/items/VNITE20220403063442028427/photo/c830ef89ad4a427a92b80f58ab403c0e_1648967682363586985.jpg',
      price: 25000,
      size: 'M , L '
    },
   
])
export default function CategoryScreen() {
  const [seach, setSeach] = useState('');
  const fillteredFood = () =>
    food.filter(eachfood =>
      eachfood.name.toLowerCase().includes(seach.toLowerCase()),
    );
  return (
    <View>
      <Text>CategoryScreen</Text>
      <View
        style={{
          marginVertical: 10, //cách khoảng xung quanh
          marginHorizontal: 10,
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TextInput
          autoCorrect={false} // tắt tự động sửa
          onChangeText={text => {
            //nhập tìm kiếm=> lưu gtri và gán vào setSeach
            setSeach(text);
          }}
          //blurOnSubmit={true}//ẩn bàn phím khi ko muons ấn
          //onSubmitEditing={()=>{Keyboard.dismiss()}}
          style={{
            height: 40,
            flex: 1,
            marginEnd: 5,
            backgroundColor: 'blue',
            borderRadius: 7,
            fontSize: 15,
            paddingStart: 10,
          }}
          placeholder="nhập món ăn bạn chọn"
          placeholderTextColor={'black'}
        />
        {/* <Image
          style={{
            marginHorizontal: 5,
            height: 35,
            width: 35,
          }}
          source={icons.menu}
        /> */}
      </View>
      {fillteredFood().length ? (
        <FlatList
          data={fillteredFood()}
          ListFooterComponent={() => {
            return <View style={{flex:1}} />;
          }}
          renderItem={({item}) => (
            <FoodItem
              onPress={() => {
                alert(`Bạn muốn chọn ' ${item.name} '`);
              }}
              food={item}
            />
          )}
          keyExtractor={eachfood => eachfood.name}
        />) : (<View
          style={{
            flex: 1,

            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 20
            }}>
            No food found
          </Text>
        </View>
      )}
    </View>
  )
}