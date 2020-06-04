import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather, FontAwesome } from '@expo/vector-icons';

import { 
  Wrapper,
  Container,
  BackButton,
  PointImage,
  PointName,
  PointItems,
  Address,
  AddressTitle,
  AddressContent,
  Footer,
  Button,
  ButtonText

} from './styles';

const Detail = () => {
  const navigation = useNavigation()

  function handleNavigateBack() {
    navigation.goBack()
  }

  return (
    <Wrapper>
      <Container>
        <BackButton onPress={handleNavigateBack}>
          <Feather name="arrow-left" color="#34cb79" size={20}/>
        </BackButton>

        <PointImage source={{ uri: 'https://avatars3.githubusercontent.com/u/47665775?s=460&u=e4062bf713af7ec7b12c42ced5efcd3b73584fcb&v=4' }} />
      
        <PointName>Mercadinho genérico</PointName>
        <PointItems>Lampadas, Baterias e pilhas</PointItems>

        <Address>
          <AddressTitle>Endereço</AddressTitle>
          <AddressContent>Campina Grande</AddressContent>
        </Address>

      </Container>
      <Footer>
        <Button onPress={() => {}}>
          <FontAwesome name="whatsapp" size={20} color="#fff" />
          <ButtonText>Whatsapp</ButtonText>
        </Button>

        <Button onPress={() => {}}>
          <Feather name="mail" size={20} color="#fff" />
          <ButtonText>E-mail</ButtonText>
        </Button>
      </Footer>
    </Wrapper>
  )
}

export default Detail;