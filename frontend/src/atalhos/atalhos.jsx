import React from 'react'
import PageHeader from '../template/pageHeader'

export default props => (
    <div>
        <PageHeader name='Atalhos' small='dicas'/>
        <b>Enter: </b>
        <p>Adiciona uma nova tarefa.</p>
        <br />
        <b>Shift + Enter: </b>
        <p>Pesquisa uma tarefa.</p>
        <br />
        <b>Esc: </b>
        <p>Limpa a pesquisa.</p>
    </div>
)