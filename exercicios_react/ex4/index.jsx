import React from 'react'
import ReactDom from 'react-dom'
import Padrao, {Primeiro, Segundo, Terceiro} from './component'

ReactDom.render(
	<div>
		<Padrao />
		<Primeiro />
		<Segundo />
		<Terceiro />
	</div>
	, document.getElementById('app'))