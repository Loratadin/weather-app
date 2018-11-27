import React from 'react';
import { Input, GetButton } from '../AppStyle';

const Form = props => (
 <form onSubmit={props.getWeather}>
    <Input type="text" name="city" placeholder="City..."/>
    <Input type="text" name="country" placeholder="Country..."/>
    <GetButton>Get weather</GetButton>
 </form>
);

export default Form;