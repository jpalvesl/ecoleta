import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { SvgUri } from 'react-native-svg';
import { StyleSheet } from 'react-native';

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

const Points = () => {
  const [items, setItems] = useState<Item[]>([])
  const [selectedItems, setSelectedItems] = useState<number[]>([])

  const navigation = useNavigation();

  useEffect(() => {
    api.get('/items').then(response => {
      setItems(response.data)
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
          <Map initialRegion={{
            latitude: -7.2489341,
            longitude: -35.9165846,
            latitudeDelta: 0.014,
            longitudeDelta: 0.014,
            }}
          >
          
          <MapMarker
            onPress={handleNavigateToDetail}
            coordinate={{
              latitude: -7.2489341,
              longitude: -35.9165846,
            }}
          >

            <MapMarkerContainer>
              <MapMarkerTitle>Mercado</MapMarkerTitle>
              <MapMarkerImage source={{ uri: 'https://avatars3.githubusercontent.com/u/47665775?s=460&u=e4062bf713af7ec7b12c42ced5efcd3b73584fcb&v=4' }}/>
            </MapMarkerContainer>
          </MapMarker>
          </Map>
          
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