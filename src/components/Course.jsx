import React from 'react'
import Header from './Header'
import Content from './Content'


const Course = ({id, name, parts, sum, id1, name1, parts1, sum1}) => {

    return <div>
        <Header name = {name}/>
        <Content parts = {parts} sum ={sum}/>
        <Header name = {name1}/>
        <Content parts = {parts1} sum ={sum1}/>
    </div>
}

export default React.memo(Course)