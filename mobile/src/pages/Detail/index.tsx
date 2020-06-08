import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

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

import api from '../../services/api';

interface Params {
  point_id: number;
}

interface Data {
  point: {
    image: string;
    image_url: string;
    name: string;
    email: string;
    whatsapp: string;
    city: string;
    uf: string;
  };
  items: {
    title: string;
  }[];
}

const Detail = () => {
  const [data, setData] = useState<Data>({} as Data)

  const navigation = useNavigation()
  const route = useRoute()

  const routeParams = route.params as Params

  useEffect(() => {
    api.get(`/points/${routeParams.point_id}`).then(response => {
      setData(response.data)
    })
  }, [])

  function handleNavigateBack() {
    navigation.goBack()
  }

  function handleComposeMail() {
    MailComposer.composeAsync({
      subject: 'Interesse na coleta de resíduos',
      recipients: [data.point.email]
    })
  }

  function handleWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${data.point.whatsapp}&text=Tenho interesse na coleta de resíduos`)
  }

  if (!data.point) {
    return null
  }

  return (
    <Wrapper>
      <Container>
        <BackButton onPress={handleNavigateBack}>
          <Feather name="arrow-left" color="#34cb79" size={20}/>
        </BackButton>

        <PointImage source={{ uri: data.point.image_url }} />
      
        <PointName>{data.point.name}</PointName>
        <PointItems>
          {data.items.map(item => item.title).join(', ')}
        </PointItems>

        <Address>
          <AddressTitle>Endereço</AddressTitle>
          <AddressContent>{data.point.city}, {data.point.uf}</AddressContent>
        </Address>

      </Container>
      <Footer>
        <Button onPress={handleWhatsapp}>
          <FontAwesome name="whatsapp" size={20} color="#fff" />
          <ButtonText>Whatsapp</ButtonText>
        </Button>

        <Button onPress={handleComposeMail}>
          <Feather name="mail" size={20} color="#fff" />
          <ButtonText>E-mail</ButtonText>
        </Button>
      </Footer>
    </Wrapper>
  )
}

export default Detail;