import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ImageBackground`
  flex: 1;
  padding: 32px;
`;

export const Wrapper = styled.ScrollView`
  flex: 1;
`;

export const Logo = styled.Image``;

export const Main = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #322153;
  font-size: 32px;
  font-family: 'Ubuntu_700Bold';
  max-width: 260px;
  margin-top: 64px;
`;

export const Description = styled.Text`
  color: #6C6C80;
  font-size: 16px;
  margin-top: 16px;
  font-family: 'Roboto_400Regular';
  max-width: 260px;
  line-height: 24px;
`;

export const Footer = styled.View``;

export const Select = styled.View``;

export const Input = styled.TextInput`
  height: 60px;
  background-color: #FFF;
  border-radius: 10px;
  margin-bottom: 8px;
  padding: 0 24px;
  font-size: 16px;
`;

export const Button = styled(RectButton)`
  background-color: #34CB79;
  height: 60px;
  flex-direction: row;
  border-radius: 10px;
  overflow: hidden;
  align-items: center;
  margin-top: 8px;
`;

export const ButtonIcon = styled.View`
  height: 60px;
  width: 60px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  flex: 1;
  justify-content: center;
  text-align: center;
  color: #FFF;
  font-family: 'Roboto_500Medium';
  font-size: 16px;
`;