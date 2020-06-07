import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';

import { 
  Container,
  Logo,
  Input,
  Select,
  Main,
  Title,
  Description,
  Footer,
  Button,
  ButtonIcon,
  ButtonText,
  Wrapper,
} from './styles';

const logo = require('../../assets/logo.png');
const background = require('../../assets/home-background.png');

const Home = () => {
  const [uf, setUf] = useState('')
  const [city, setCity] = useState('')

  const navigation = useNavigation();

  function handleNavigateToPoints() {
    navigation.navigate('points', {
      uf,
      city
    })
  }

  return (
    <Wrapper
      showsVerticalScrollIndicator={false}
    >
      <Container 
        source={background}
        imageStyle={{ width: 274, height: 368  }}   
      >
        <Main>
          <Logo source={logo} />
          <View>
            <Title>Seu marketplace de coleta de residuos</Title>
            <Description>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</Description>
          </View>
        </Main>

        <Footer>
          <Input 
            placeholder="Digite a UF"
            maxLength={2}
            autoCapitalize="characters"
            autoCorrect={false}
            value={uf}
            onChangeText={setUf}
          />
          <Input 
            placeholder="Digite a cidade"
            autoCorrect={false}
            value={city}
            onChangeText={setCity}
          />
          <Button onPress={handleNavigateToPoints}>
            <ButtonIcon>
              <Feather name="arrow-right" color="#fff" size={24} />
            </ButtonIcon>

            <ButtonText>Entrar</ButtonText>
          </Button>
        </Footer>
      </Container>
    </Wrapper>
  )
}

export default Home;