import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { SvgUri } from 'react-native-svg';

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
} from './styles';

const Points = () => {
  const navigation = useNavigation()

  function handleNavigateBack() {
    navigation.goBack()
  }

  function handleNavigateToDetail() {
    navigation.navigate('detail')
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
          <Item onPress={() => {}}>
            <SvgUri width={42} height={42} uri="https://3333-beeeb93e-7bba-4a92-b5a9-b1f6f1e7b7c9.ws-eu01.gitpod.io/uploads/lampadas.svg" />
          </Item>

          <Item onPress={() => {}}>
            <SvgUri width={42} height={42} uri="https://3333-beeeb93e-7bba-4a92-b5a9-b1f6f1e7b7c9.ws-eu01.gitpod.io/uploads/lampadas.svg" />
          </Item>

          <Item onPress={() => {}}>
            <SvgUri width={42} height={42} uri="https://3333-beeeb93e-7bba-4a92-b5a9-b1f6f1e7b7c9.ws-eu01.gitpod.io/uploads/lampadas.svg" />
          </Item>

          <Item onPress={() => {}}>
            <SvgUri width={42} height={42} uri="https://3333-beeeb93e-7bba-4a92-b5a9-b1f6f1e7b7c9.ws-eu01.gitpod.io/uploads/lampadas.svg" />
          </Item>

          <Item onPress={() => {}}>
            <SvgUri width={42} height={42} uri="https://3333-beeeb93e-7bba-4a92-b5a9-b1f6f1e7b7c9.ws-eu01.gitpod.io/uploads/lampadas.svg" />
          </Item>

          <Item onPress={() => {}}>
            <SvgUri width={42} height={42} uri="https://3333-beeeb93e-7bba-4a92-b5a9-b1f6f1e7b7c9.ws-eu01.gitpod.io/uploads/lampadas.svg" />
          </Item>
        </ItemsWrapper>
      </ItemsContainer>
    </Wrapper>
  )
}

export default Points;