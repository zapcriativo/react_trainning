import React from 'react'

// AULA USANDO 2 COMPONENTES EM UM UNICO ARQUIVO
// FORMA DE EXPORTACAO 
const Primeiro = props => (
	<h1> Primeiro Componente </h1>
)
const Segundo = props => (
	<h1> Segundo Componente </h1>
)
export { Primeiro, Segundo }


// OUTRA FORMA DE EXPORTACAO
export const Terceiro = props => (
	<h1> Terceiro Componente </h1>
)



// OUTRA FORMA DE EXPORTACAO 
export default props => (
	<h1> Vazio Componente Componente, ou seja o default </h1>
)


