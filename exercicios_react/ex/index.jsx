import React from 'react'
import ReactDom from 'react-dom'
import ClassComponent from './classComponent'

// aprendendo a trabalahr com classes

ReactDom.render(
<ClassComponent label='Contador' initialValue={10} />
,document.getElementById('app'))