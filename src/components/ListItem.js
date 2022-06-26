import './ListItem.css';
import Datecomp from './Datecomp';
import Item from './Item';
import ItemControls from './ItemControls';

function ListItem(props){

    
    return(
        <div className='list-item'>
        <Datecomp date ={props.date}></Datecomp>
        <Item subject={props.subject} desc={props.desc}></Item>
        <ItemControls id ={props.id} removeItem={props.removeItem}></ItemControls>
        </div>
    )
}

export default ListItem;