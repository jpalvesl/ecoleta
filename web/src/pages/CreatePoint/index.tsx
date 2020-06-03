import React, { useEffect, useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet';
import axios from 'axios';

import api from '../../services/api';

import { Container, Header, Form, Field, FieldGroup, FieldCheck, ItemsGrid } from './styles';

import logo from '../../assets/logo.svg';

interface Item {
  id: number; 
  title: string;
  image_url: string;
}

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

const CreatePoint = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');


  useEffect(() => {
    api.get('/items').then(response => {
      setItems(response.data)
    })
  }, [])

  useEffect(() => {
    axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
      const ufInitials = response.data.map(uf => uf.sigla)
      setUfs(ufInitials)
    })
  }, [])

  useEffect(() => {
      if (selectedUf === '0') {
        return
      }
    axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`).then(response => {
      const cityNames = response.data.map(city => city.nome)

      setCities(cityNames)
    })
  }, [selectedUf])

  function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
    const uf = event.target.value
    setSelectedUf(uf)
  }

  function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
    const city = event.target.value
    setSelectedCity(city)
  }

  return (
    <Container>
      <Header>
        <img src={logo} alt="Ecoleta"/>

        <Link to='/'>
          <FiArrowLeft />
          Voltar para a home
        </Link>
      </Header>

      <Form>
        <h1>Cadastro do <br/> ponto de coleta</h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <Field>
            <label htmlFor="name">Nome da entidade</label>
            <input 
              type="text" 
              name="name" 
              id="name"
            />
            </Field>

          <FieldGroup>
            <Field>
              <label htmlFor="email">E-mail</label>
              <input 
                type="email" 
                name="email" 
                id="email"
              />
            </Field>

            <Field>
              <label htmlFor="whatsapp">Whatsapp</label>
              <input 
                type="text" 
                name="whatsapp" 
                id="whatsapp"
              />
            </Field>
          </FieldGroup>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o endereço no mapa</span>
          </legend>

          <Map center={[-7.2299173, -35.8932158]} zoom={17}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-7.2299173, -35.8932158]} />
          </Map>

          <FieldGroup>
            <Field>
              <label htmlFor="uf" >Estado (UF)</label>
              <select 
                name="uf" 
                id="uf"
                value={selectedUf}
                onChange={handleSelectUf} 
              >
                <option value="0">Selecione uma UF</option>
                {ufs.map(uf => (
                  <option key={uf} value={uf}>{uf}</option>
                ))}
              </select>
            </Field>

            <Field>
              <label htmlFor="city" >Cidade</label>
              <select 
                name="city" 
                id="city"
                value={selectedCity}
                onChange={handleSelectCity}
              >
                <option value="0">Selecione uma cidade</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </Field>
            </FieldGroup>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Itens de coleta</h2>
            <span>Selecione um ou mais itens abaixo</span>
          </legend>

          <ItemsGrid>
            {items.map(item => (
            <li key={item.id}>
              <img src={item.image_url} alt={item.title}/>
            </li>
            ))}

          </ItemsGrid>
        </fieldset>

        <button type="submit">Cadastrar ponto de coleta</button>
      </Form>
    </Container>
  )
}

export default CreatePoint;