import './MainContainer.css';
import './ItemForm';
import ItemForm from './ItemForm';
import ItemContainer from './ItemContainer';
import {useState} from 'react';
const dataObject = [
    {
        id:Math.random().toString(),
        date:new Date(),
        sub: "Gorcery",
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
        category:'Miscellaneous',
        status: false
    },
    {
        id:Math.random().toString(),
        date:new Date(),
        sub: "Meeting",
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
        category:'Miscellaneous',
        status: false
    },
    {
        id:Math.random().toString(),
        date:new Date(),
        sub: "Date",
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
        category:'Miscellaneous',
        status: false
    },
    {
        id:Math.random().toString(),
        date:new Date(),
        sub: "Walk",
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
        category:'Miscellaneous',
        status: false
    }
];

function MainContainer(){
    const[currentDataObject,updateDataObject] = useState(dataObject);
    function addItemHandler(newItem){
      updateDataObject((dataObject)=>{
        return [...dataObject,newItem];
      });
    }
    console.log(dataObject);
    function removeItemHandler(itemId){
     let i = 0;
     let idx = -1;
     for(i = 0;i<currentDataObject.length;i++){
        if(currentDataObject[i].id === itemId){
          idx = i;
          break;
        }
     }
     console.log(itemId);
     console.log(currentDataObject);
     const arr = currentDataObject;
     arr.splice(idx,1);
     updateDataObject((current)=>{
        return [...arr];
     });
     
    }

    return (
        <div className='container'>
        <ItemForm addItemHandler={addItemHandler}></ItemForm>
        <ItemContainer removeItemHandler={removeItemHandler} dataObject ={currentDataObject}></ItemContainer>
        </div>
    );
}

export default MainContainer;