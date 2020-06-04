import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { 
  Container,
  Logo,
  Main,
  Title,
  Description,

  Footer,
  Button,
  ButtonIcon,
  ButtonText,


} from './styles';

const logo = require('../../assets/logo.png');
const background = require('../../assets/home-background.png');

const Home = () => {
  const navigation = useNavigation();

  function handleNavigateToPoints() {
    navigation.navigate('points')
  }

  return (
    <Container 
      source={background}
      imageStyle={{ width: 274, height: 368  }}   
    >
      <Main>
        <Logo source={logo} />
        <Title>Seu marketplace de coleta de residuos</Title>
        <Description>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</Description>
      </Main>

      <Footer>
        <Button onPress={handleNavigateToPoints}>
          <ButtonIcon>
            <Feather name="arrow-right" color="#fff" size={24} />
          </ButtonIcon>

          <ButtonText>Entrar</ButtonText>
        </Button>
      </Footer>
    </Container>
  )
}

export default Home;