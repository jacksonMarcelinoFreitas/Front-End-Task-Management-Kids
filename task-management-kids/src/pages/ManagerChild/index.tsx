import { useNavigate, useParams  } from 'react-router-dom';
import { Header } from '../../components/Header';
import { CardManager } from '../../components/CardManager';
import { TitleNavigation } from '../../components/TitleNavigation';
import { Container, BoxCards } from './style';
import { useState, useEffect } from "react";
import { api } from '../../services/api';
import { toast } from 'react-toastify';

export function ManagerChild(){

  const { id } = useParams();
  const navigate = useNavigate();

  return(
    <Container>
      <Header />
      <TitleNavigation
        title='Gerenciar criança'
        titleButton='Voltar'
        onClick={() => navigate('/')}
      />
      <BoxCards>
        <CardManager
          textCard='Editar criança'
          typeCard='edit'
          onClick={() => {navigate(`/EditChild/${id}`)}}
        />
        <CardManager
          textCard='Cadastrar tarefa'
          typeCard='register'
          onClick={() => {navigate(`/RegisterTask/${id}`)}}
        />
        <CardManager
          textCard='Listar tarefas'
          typeCard='list'
          onClick={() => {navigate(`/TasksChild/${id}`)}}
        />
        <CardManager
          textCard='Iniciar novo ciclo'
          typeCard='start'
          onClick={() => {navigate(`/StartChild/${id}`)}}
        />
      </BoxCards>
    </Container>
  )
}