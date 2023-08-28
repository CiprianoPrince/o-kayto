import React from 'react'
import { TbCurrencyPeso } from "react-icons/tb";
import "./payment.css";
import {FaRegCreditCard} from "react-icons/fa";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import { Button } from 'reactstrap';

const Payment = () => {
  return (
   
    <div class="container">
    <div class="price">
        <h1>o-Kayto!</h1>
    </div>

    <Card className='cardstyle' style={{ width: '53rem' }}>
      <ListGroup variant="flush">

        <ListGroup.Item><div class="info text-center">
                        <label for="cardholdername"><h5>Full Name: <span className='text-danger'> *</span></h5></label>
                        <input placeholder="e.g. Juan Dela Cruz" id="cardholdername" type="text" />
                        </div>
        </ListGroup.Item>

        <ListGroup.Item><div class="info text-center">
                        <label for="cardholdername"><h5>Email: <span className='text-danger'> *</span></h5></label>
                        <input placeholder="e.g. juan@email.com" id="cardholdername" type="text" />
                        </div>
        </ListGroup.Item>

        <ListGroup.Item><div class="info text-center">
                        <label for="cardholdername"><h5>Contact No: <span className='text-danger'> *</span></h5></label>
                        <input placeholder="e.g. 09123456789" id="cardholdername" type="text" />
                        </div>
        </ListGroup.Item>


        <ListGroup.Item className='info text-center'>
            <h5>Payment Method</h5>
            
        </ListGroup.Item>


        <Form method=''>
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check className='mx-4'
            inline
            label=""
            name="cod"
            type={type}
            id={`inline-${type}-1`}
          /><img src='https://www.creativefabrica.com/wp-content/uploads/2021/06/02/Cash-on-Delivery-Design-Graphics-12811596-1.png' className='mop'></img>
          <Form.Check
            inline
            label=""
            name="gcash"
            type={type}
            id={`inline-${type}-2`}
          />< img src='https://i0.wp.com/palawan-news.com/wp-content/uploads/2023/05/GCash.jpg?fit=1200%2C675&ssl=1' className='mop'></img>
          <Form.Check
            inline
            label=""
            name="maya"
            type={type}
            id={`inline-${type}-2`}
          />< img src='https://sa.kapamilya.com/absnews/abscbnnews/media/2019/business/07/08/paymaya-logo.jpg' className='mop'></img>

        <Form.Check
            inline
            label=""
            name="maya"
            type={type}
            id={`inline-${type}-2`}
          />< img src='https://pngimg.com/d/credit_card_PNG144.png' className='mop'></img>

<div class="row cardholder p-1 text-center">
                
                </div>
                <div class="row number text-center p-1" text-center>
                    <div class="info">
                        <label for="cardnumber"><h5>Card number :</h5></label> 
                        <input id="cardnumber" type="text" pattern="[0-9]{16,19}" maxlength="19" placeholder="8888-8888-8888-8888"/>
                    </div>
                </div>
                <div class="row details text-center p-1" >
                    <div class="left">
                        <label for="expiry-date"><h5>Expiry Date :</h5></label>
                        <select id="expiry-date">
                            <option>MM</option>
                            <option value="1">01</option>
                            <option value="2">02</option>
                            <option value="3">03</option>
                            <option value="4">04</option>
                            <option value="5">05</option>
                            <option value="6">06</option>
                            <option value="7">07</option>
                            <option value="8">08</option>
                            <option value="9">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                        <span>/</span>
                         <select id="expiry-date">
                            <option>YYYY</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                            <option value="2030">2030</option>
                        </select>
                    </div>
                </div>
          
        </div>
      ))}
    </Form>
      </ListGroup>
        <Button className='btn btn-success'><h2>Place Order</h2></Button>
    </Card>
</div>
    
  )
}

export default Payment