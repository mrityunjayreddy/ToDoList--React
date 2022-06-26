import './ItemControls.css';

function ItemControls(props){

    function doneItemHandler(){
        props.removeItem(props.id);
    }
    function deleteItemHandler(){
        props.removeItem(props.id);
    }

    return(<div className='button-container'>
    <button className='item-control-btn' onClick={doneItemHandler}>Done</button>
    <button className='item-control-btn' onClick={deleteItemHandler}>Remove</button>
    </div>)
}

export default ItemControls;