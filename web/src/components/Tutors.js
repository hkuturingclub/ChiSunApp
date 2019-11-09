import React from 'react';
import { Card, Col, Row } from 'antd';
import axios from 'axios';


const Tutors = () => {
  const [tutorsData,setTutorsData] = React.useState([])
  React.useEffect(()=>{

    axios.post('https://hkuchisuncollege.herokuapp.com/graphql', {
    query: `query {
  management{
    email
    floors
    image
    name
    id
    position
    rank
  }
}`
}).then((response)=>{setTutorsData(response.data.data.management)})

},[]);



  return (
  <div>
  <h2>
  The Tutorial team
  </h2>
  <p>
  For information on the tutorial team, <a href="http://www.chisuncollege.hku.hk/management-tutorial-team">click here </a>
  </p>
  <Row>{tutorsData.map(tutor=><Col span={6} key = {tutor.id}><Card style={{margin:"auto",width:240,marginBottom:10}}title={tutor.name}><img src={tutor.image} alt = {tutor.name} width="200" height="200"/></Card></Col>)}</Row>
  </div>
)}
export default Tutors
