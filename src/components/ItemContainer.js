import './ItemContainer.css';
import './Datecomp';
import ListItem from './ListItem';

function ItemContainer(props){
   
    return (
        <div className='list-container'>
        {
            props.dataObject.map((item,idx)=>
                <ListItem key ={idx} id = {item.id}
                date={item.date}
                subject={item.sub}
                desc ={item.desc}
                status={item.status}
                catrgory={item.catrgory}
                dataObject = {props.dataObject}
                removeItem = {props.removeItemHandler} >
                </ListItem>)
        }
        </div>
    );
}

export default ItemContainer;