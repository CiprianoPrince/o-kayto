import React from 'react'
import Card from 'react-bootstrap/Card';
import "./successful.css";

const Successful = () => {
  return (
    <div className='container-fluid '>
        <div className='container1'>
        <h1 className='title'>o-Kayto!</h1>
    <Card className=" text-white img-success" >
      <Card.Img src="https://ruperhat.com/wp-content/uploads/2020/06/Paymentsuccessful21.png" alt="Card image " className='h-100'  />
    </Card>
        </div>
    </div>
  )
}

export default Successful