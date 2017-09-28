import React from 'react'
import ReactDom from 'react-dom'
import Family from './Family'
import Member from './member'
import Pets from './pets'

ReactDom.render(
	<Family>
		<Member name='Alan' lastName='Ribeiro' />
		<Member name='Andressa' lastName='Ribeiro' />
		<Member name='Adrian' lastName='Ribeiro' />
		<Pets name='Cachorro' raca='Vira Lata' />
		<Pets name='Gato' raca='Vira Lata' />
	</Family>
	,document.getElementById('app'))