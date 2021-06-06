import {useState} from 'react';
import  Button from './Button'
import Image from "./Image";
import '../styles/Resize.css';




const Resize = () => {
const [size, setSize ] = useState(0);
const increment = () => {
    setSize(size + 20)
}
const decrement = () => {
    setSize(size - 20
    )
}
    return (
        <div className="size-container">
        <Image w="" h="" source="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
        <p className="size-text">{size}</p>

        <Button clickHandler={increment}>Increment </Button>

        <Button clickHandler={decrement}> Decrement </Button> 
        </div>
      
    );
};
export default Resize;