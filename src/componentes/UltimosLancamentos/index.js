import { livros } from './dadosUltimosLancamentos.js'
import { Titulo } from '../Titulo'
import CardRecomenda from '../CardRecomenda/index.js'
import imagemLivro from '../../imagens/livro2.png'
import styled from 'styled-components'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

export function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo 
            cor="#EB9B00" 
            tamanhoFonte="36px" 
            alinhamento="center"
            >ÚLTIMOS LANÇAMENTOS</Titulo>
            <Titulo>ÚLTIMOS LANÇAMENTOS</Titulo>
            <NovosLivrosContainer>
                { livros.map( livro => (
                    <img src={livro.src} alt=''/>
                ) ) }
            </NovosLivrosContainer>
            <CardRecomenda
               titulo = "Talvez você se intersse por..."
               subtitulo = "Angula 11"
               descricao = "Construindo uma aplicação com a plataforma Google"
               img={imagemLivro} 
            />
           


        </UltimosLancamentosContainer>
    )
}