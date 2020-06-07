import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { SvgUri } from 'react-native-svg';
import { StyleSheet, Alert } from 'react-native';
import * as Location from 'expo-location';

import { 
  Wrapper,
  Container,
  Button, 
  Title,
  Description,
  MapContainer,
  Map,
  ItemsWrapper,
  ItemsContainer,
  Item,
  MapMarker,
  MapMarkerImage,
  MapMarkerContainer,
  MapMarkerTitle,
  ItemTitle,
} from './styles';

import api from '../../services/api';

interface Item {
  id: number;
  title: string;
  image_url: string;
}

interface Point {
  id: number;
  image: string;
  name: string;
  latitude: number;
  longitude: number;
}

const Points = () => {
  const [items, setItems] = useState<Item[]>([])
  const [points, setPoints] = useState<Point[]>([])
  const [selectedItems, setSelectedItems] = useState<number[]>([])

  const [initialPosition, setInitialPosition] = useState<[number, number]>([0,0])

  const navigation = useNavigation();

  useEffect(() => {
    async function loadPosition() {
      const { status } = await Location.requestPermissionsAsync()

      if (status !== "granted") {
        Alert.alert('Ooops', 'Precisamos de sua permissão para obter a localização')
        
        return;
      } 

      const location = await Location.getCurrentPositionAsync()

      const { latitude, longitude } = location.coords
      setInitialPosition([latitude, longitude])
    }

    loadPosition()
  }, [])

  useEffect(() => {
    api.get('/items').then(response => {
      setItems(response.data)
    })
  }, [])

  useEffect(() => {
    api.get('points', {
      params: {
        city: 'Campina Grande',
        uf: 'PB',
        items: [1]

      }
    }).then(response => {
      setPoints(response.data)
    })
  }, [])

  function handleNavigateBack() {
    navigation.goBack()
  }

  function handleNavigateToDetail() {
    navigation.navigate('detail')
  }

  function handleSelectItem(id: number) {
    const alredySelected = selectedItems.findIndex(item => item === id)

    if (alredySelected >= 0) {
      const filteredItems = selectedItems.filter(item => item !== id)

      setSelectedItems(filteredItems)
    } else {
        setSelectedItems([...selectedItems, id])    
    }
  }

  return (
    <Wrapper>
      <Container>
        <Button onPress={handleNavigateBack}>
          <Feather name="arrow-left" color="#34cb79" size={20}/>
        </Button>

        <Title>Bem vindo</Title>
        <Description>Encontre no mapa um ponto de coleta</Description>

        <MapContainer>
          {initialPosition[0] !== 0 && (
            <Map initialRegion={{
              latitude: initialPosition[0],
              longitude: initialPosition[1],
              latitudeDelta: 0.014,
              longitudeDelta: 0.014,
              }}
            >
            
            {points.map(point => (
              <MapMarker key={String(point.id)}
                onPress={handleNavigateToDetail}
                coordinate={{
                  latitude: point.latitude,
                  longitude: point.longitude,
                }}
              >
                <MapMarkerContainer>
                  <MapMarkerTitle>{point.name}</MapMarkerTitle>
                  <MapMarkerImage source={{ uri: 'https://avatars3.githubusercontent.com/u/47665775?s=460&u=e4062bf713af7ec7b12c42ced5efcd3b73584fcb&v=4' }}/>
                </MapMarkerContainer>
              </MapMarker>
            ))}
          </Map>
          )}

          
        </MapContainer>
      </Container>
      

      <ItemsContainer>
        <ItemsWrapper 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          {items.map(item => (
            <Item 
              key={String(item.id)} 
              style={selectedItems.includes(item.id) ? styles.selectedItem : {}}
              onPress={() => handleSelectItem(item.id)}
              activeOpacity={0.65}
            >
              <SvgUri width={42} height={42} uri={item.image_url} />
              <ItemTitle>{item.title}</ItemTitle>
            </Item>
          ))}
        </ItemsWrapper>
      </ItemsContainer>
    </Wrapper>
  )
}

const styles = StyleSheet.create({
  selectedItem: {
    borderColor: '#34CB79',
    borderWidth: 2,
  }
})

export default Points;