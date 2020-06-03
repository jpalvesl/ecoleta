import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container, Header, Form, Field, FieldGroup, FieldCheck, LeafLetContainer, ItemsGrid } from './styles';

import logo from '../../assets/logo.svg';

const CreatePoint = () => {
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
            <li>
              <img src="https://3333-beeeb93e-7bba-4a92-b5a9-b1f6f1e7b7c9.ws-eu01.gitpod.io/uploads/oleo.svg" alt=""/>
            </li>

            <li>
              <img src="" alt=""/>
            </li>

            <li>
              <img src="" alt=""/>
            </li>

            <li>
              <img src="" alt=""/>
            </li>

            <li>
              <img src="" alt=""/>
            </li>

            <li>
              <img src="" alt=""/>
            </li>

          </ItemsGrid>
        </fieldset>

        <button type="submit">Cadastrar ponto de coleta</button>
      </Form>
    </Container>
  )
}

export default CreatePoint;