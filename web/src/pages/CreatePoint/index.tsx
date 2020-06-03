import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet';

import api from '../../services/api';

import { Container, Header, Form, Field, FieldGroup, FieldCheck, ItemsGrid } from './styles';

import logo from '../../assets/logo.svg';

interface Item {
  id: number; 
  title: string;
  image_url: string;
}

const CreatePoint = () => {
  const [items, setItems] = useState<Item[]>([]);


  useEffect(() => {
    api.get('/items').then(response => {
      setItems(response.data)
    })
  }, [])

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
              <select name="uf" id="uf">
                <option value="0">Selecione uma UF</option>
              </select>
            </Field>

            <Field>
              <label htmlFor="city" >Cidade</label>
              <select name="city" id="city">
                <option value="0">Selecione uma cidade</option>
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