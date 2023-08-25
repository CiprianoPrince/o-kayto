import React from 'react'
import { BiLock } from "react-icons/bi";
import { TbCurrencyPeso } from "react-icons/tb";
import {Form,Row,Col,FormGroup,Label,Input,Button, } from 'reactstrap';
import Table from 'react-bootstrap/Table';
import "./checkout.css";

const Checkout = () => {
  return (

    <div className='content'>
    <div className='container-md w-75'> 
    
    <h1 className='pb-4'> <BiLock /> Secure Checkout</h1>
      
    <Row xs="2">
    <Col className="bg-light border">
      
          <Form>
          <h3 className='pt-4'>Shipping Info</h3>
                  <Col md={8}>
                    <FormGroup>
                      <Label for="firstname">
                        First Name <span className='text-danger'> *</span>
                      </Label>
                      <Input
                        id="first_name"
                        name="firstname"
                        placeholder="Enter first Name"
                        type="text"
                      />
                    </FormGroup>
                  </Col>

                  <Col md={8}>
                    <FormGroup>
                      <Label for="exampleEmail">
                        Last Name<span className='text-danger'> *</span>
                      </Label>
                      <Input
                        id="lastname"
                        name="firstname"
                        placeholder="Enter last Name"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                

                <Col md={8}>
                <FormGroup>
                  <Label for="exampleAddress">
                    Address Line 1<span className='text-danger'> *</span>
                  </Label>
                  <Input
                    id="address1"
                    name="address1"
                    placeholder="123 Rizal St"
                  />
                </FormGroup>
                </Col>

                <Col md={8}>
                <FormGroup>
                  <Label for="exampleAddress2">
                    Address Line 2<span className='text-danger'> *</span>
                  </Label>
                  <Input
                    id="address2"
                    name="address2"
                    placeholder="Apartment, studio, or floor"
                  />
                </FormGroup>
                </Col>

                <Row>
                  <Col md={8}>
                    <FormGroup>
                      <Label for="city">
                        City<span className='text-danger'> *</span>
                      </Label>
                      <Input
                        id="city"
                        name="city"
                        placeholder='City'
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <b>Shipping Method</b>
                  <FormGroup
                  row
                  tag="fieldset"
                >

                <legend className="col-form-label col-sm-2" >
                  
                  </legend>
                  

                    <FormGroup check>
                      <Input
                        name="radio2"
                        type="radio"
                      />
                     
                      <Label check>
                       Standard (6-8 Business Days) (<TbCurrencyPeso/>50.00)
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Input
                        name="radio2"
                        type="radio"
                      />
                      
                      <Label check>
                         Ground (5-7 Business Days) (<TbCurrencyPeso/>100.00)
                      </Label>
                    </FormGroup>
                   
                    <FormGroup check>
                      <Input
                        name="radio2"
                        type="radio"
                      />
                      
                      <Label check>
                         Expedited (4-6 Business Days) (<TbCurrencyPeso/>150.00)
                      </Label>
                    </FormGroup>
                  
                  <small><i>All Shipping estimates include printing and processing time in business days.</i></small>
                </FormGroup>

              </Form>

              <Button className='bg-primary w-75'>Confirm and Proceed to Payment</Button>
    </Col>

              <Col className="bg-light border">
                
               <h3 className='pt-4'>Order Details</h3>
              <Table  responsive-sm  >
      
      <tbody>
        <tr>
          <td>Subtotal
          <span>(3 Items)</span>
          </td>
          <td className='checkout' id='purchase-subtotal'><TbCurrencyPeso/>300.00</td>
        </tr>
        <tr>
            <td>Shipping Fee</td>
            <td class="checkout" id="purchase-shipping"><TbCurrencyPeso/>50.00</td>
            </tr>
              <tr>
                <td>Estimated Tax</td>
                <td class="checkout" id="purchase-tax"><TbCurrencyPeso/>0.00</td>
                </tr>
                <tr>
                <td className='fw-bold'>TOTAL</td>
                <td class="checkout" id="purchase-total">
                <span class="jsCheckoutCurrencyIso" >
                <TbCurrencyPeso/>
                </span>
                <span class="total strong">
                350.00
                  </span>
                </td>
                </tr>
              
      </tbody>
    </Table><br></br>

   
   
   <div class="m-checkout__form-header cart-items">
<h3 class="h__h3">
Your Cart
<span>
(3 items)
</span>
</h3>
<span class="m-checkout__shipment-show-items link--1 jsShowItemsLink strong"></span>
</div>

<Table  responsive-sm  >
    <tbody>
      <tr>
        <td><img src="https://res.cloudinary.com/teepublic/image/private/s--ktC7X_2D--/t_Resized Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1462829020:production:blanks:h778z1f0n6g0xugjpxxm,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_313,q_auto:good:420,w_313/v1558905607/production/designs/4931659_0.jpg"></img></td>
        <td>
          <div class="m-checkout__item-text">
              <div class="m-checkout__item-text__item-title">
              <b>Mobile Infantry Crest</b>
              </div>
              <ul class="m-checkout__item-text__item-desc">
              <li>Tshirt</li>
              <li>Navy</li>
              </ul>
              <div class="item_qty">
              Quantity:
              <span class="strong">1</span>
              </div>
              <div class="m-checkout__item-text__item-price">
              <TbCurrencyPeso/>200.00
              </div>
              </div>
        </td>
        <td>
          <div class="m-checkout__item-total">
            <div class="item_total">
            <TbCurrencyPeso/>200.00
            </div>
          </div>
        </td>
      </tr>

      <tr>
        <td><img src="https://res.cloudinary.com/teepublic/image/private/s--VvV-bhaB--/t_Resized Artwork/c_crop,x_10,y_10/c_fit,w_404/c_crop,g_north_west,h_554,w_416,x_-6,y_-7/g_north_west,u_upload:v1446840607:production:blanks:u5bxay2bn68ayjzrqkyr,x_-430,y_-332/b_rgb:eeeeee/c_limit,f_auto,h_313,q_auto:good:420,w_313/v1665507467/production/designs/35603428_0.jpg"></img></td>
        <td>
          <div class="m-checkout__item-text">
              <div class="m-checkout__item-text__item-title">
              <b>Mobile Infantry Crest</b>
              </div>
              <ul class="m-checkout__item-text__item-desc">
              <li>Tshirt</li>
              <li>Gray</li>
              </ul>
              <div class="item_qty">
              Quantity:
              <span class="strong">1</span>
              </div>
              <div class="m-checkout__item-text__item-price">
              <TbCurrencyPeso/>200.00
              </div>
              </div>
        </td>
        <td>
          <div class="m-checkout__item-total">
            <div class="item_total">
            <TbCurrencyPeso/>200.00
            </div>
          </div>
        </td>
      </tr>

      <tr>
        <td><img src="https://res.cloudinary.com/teepublic/image/private/s--FDq-IkSv--/t_Resized Artwork/c_crop,x_10,y_10/c_fit,w_401/c_crop,g_north_west,h_530,w_401,x_0,y_0/g_north_west,u_upload:v1487088366:production:blanks:o1cs4is62bk5gwdi7ucv,x_-445,y_-305/b_rgb:eeeeee/c_limit,f_auto,h_313,q_auto:good:420,w_313/v1553043205/production/designs/4450092_0.jpg"></img></td>
        <td>
          <div class="m-checkout__item-text">
              <div class="m-checkout__item-text__item-title">
              <b>Mobile Infantry Crest</b>
              </div>
              <ul class="m-checkout__item-text__item-desc">
              <li>Long Sleeve</li>
              <li>Navy</li>
              </ul>
              <div class="item_qty">
              Quantity:
              <span class="strong">1</span>
              </div>
              <div class="m-checkout__item-text__item-price">
              <TbCurrencyPeso/>200.00
              </div>
              </div>
        </td>
        <td>
          <div class="m-checkout__item-total">
            <div class="item_total">
            <TbCurrencyPeso/>200.00
            </div>
          </div>
        </td>
      </tr>
    </tbody>

</Table>
          </Col>
        </Row>



    

    </div>
    </div>
  )
}

export default Checkout


