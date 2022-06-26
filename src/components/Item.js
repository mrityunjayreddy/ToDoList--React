import './Item.css';
 function Item(props){
    return(<div className='item-content'>
       <div className='title'>
        <span className='heading-small'>TITLE</span>
        <br></br>
        {props.subject}
         </div>
         <div className='description'>
         <span className='heading-small'>DESCRIPTION</span>
         <br></br>
         {props.desc}
         </div>
    </div>)
 }

 export default Item;