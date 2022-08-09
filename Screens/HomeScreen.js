import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,ScrollView,Button} from 'react-native';
import React from 'react';
import { useEffect,state } from 'react';
import { useState } from 'react';
// import { Popover,NativeBaseProvider,Center,Button,Box } from 'native-base';

import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider } from "native-base";
import { Data } from '../Componenet/Data';



const HomeScreen = () => {
const [load,setLoad]=useState("Lernen")
// const image={uri:Data.img}

   
   
   return (
    <View style={styles.container}>
<ScrollView >
  { Data.map(({title,name,img,click})=>(
   
    <Box style={styles.box}  alignItems="center">
  <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
  borderColor: "coolGray.600",
  backgroundColor: "gray.700"
}} _web={{
  shadow: 2,
  borderWidth: 0
}} _light={{
  backgroundColor: "gray.50"
}}>
    <Box>
      <AspectRatio w="100%" ratio={16 / 9}>
        <Image source={{uri:img}}  />
      </AspectRatio>
      <Center bg="violet.500" _dark={{
      bg: "violet.400"
    }} _text={{
      color: "warmGray.50",
      fontWeight: "700",
      fontSize: "xs"
    }} position="absolute" bottom="0" px="3" py="1.5">
       {title}
      </Center>
    </Box>
    <Stack p="4" space={3}>
      <Stack space={2}>
        <Heading size="md" ml="-1">
         {title}
        </Heading>
        <Text fontSize="xs" _light={{
        color: "violet.500"
      }} _dark={{
        color: "violet.400"
      }} fontWeight="500" ml="-0.5" mt="-1">
          {name}
        </Text>
      </Stack>
      <Text fontWeight="400">
        Bengaluru (also called Bangalore) is the center of India's high-tech
        industry. The city is also known for its parks and nightlife.
      </Text>
      <HStack alignItems="center" space={4} justifyContent="space-between">
        <HStack alignItems="center">
       <Button onPress={()=>{
        setLoad("Bitte warten....")
      
        click()

        setTimeout(()=>{

          setLoad(load)

        },3000)
       }
      
      } title={load} />
        </HStack>
      </HStack>
    </Stack>
  </Box>
</Box>))
    }
</ScrollView>
</View>
)
 
          };
          
    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={4} px="3">
                <HomeScreen />
            </Center>
          </NativeBaseProvider>
        );
    };
    
    const styles = StyleSheet.create({
        container: {
          flex: 2,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop:20,
        },
        box:{
      marginTop:20
        }
      });