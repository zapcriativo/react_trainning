import React from 'react'
import ReactDom from 'react-dom'
import Family from './family'
import Member from './member'

ReactDom.render(
	<Family lastName="Silva">
		<Member name='Alan' />
		<Member name='Andressa' />
		<Member name='Adrian' />
	</Family>
	,document.getElementById('app'))