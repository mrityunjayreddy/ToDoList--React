import './ItemForm.css';
import {React,useState} from 'react';

function ItemForm(props){
    const[currentSub,updateSub] = useState('');
    const[currentDesc,updateDesc] = useState('');
    const[currentCat,updateCat] = useState('');
    const[currentDate,updateDate] = useState('');
    

    const subjectChangeHandler = (event)=>{
      updateSub(event.target.value);
    }
    const dateChangeHandler = (event)=>{
        updateDate(event.target.value);
      }
    const descriptionChangeHandler = (event)=>{
        updateDesc(event.target.value);
      }
    const categoryChangeHandler = (event)=>{
       updateCat(event.target.value)
    }    
      const formSubmitHandler = (event)=>{
       event.preventDefault();
       const dataObject = {
        id: Math.random().toString(),
        sub: currentSub,
        desc: currentDesc,
        category: currentCat,
        date: new Date(currentDate)
        }
        props.addItemHandler(dataObject)
        updateDate('');
        updateDesc('');
        updateSub('');
      }


    return(<div>
        <div className='form-container'>
        <form onSubmit={formSubmitHandler}>
            <div className='form-container__elm'>
            <label >Subject</label>
            <br></br>
            <input type="text" name="subject" value={currentSub} onChange={subjectChangeHandler}></input>
            </div>
            
            <div className='form-container__elm'>
            <label >Description</label>
            <br></br>
            <input type="textbox" value={currentDesc} name="Description" onChange={descriptionChangeHandler}></input>
            </div>

            <div className='form-container__elm'>
            <label >Category</label>
            <select onChange={categoryChangeHandler} value={currentCat}>
              <option></option>
              <option>Work</option>
              <option>Shopping</option>
              <option>Bills</option>
              <option>Engagements</option>
              <option>Miscellaneous</option>
            </select>
            </div>

            <div className='date__elm'>
            <label >Date</label>
            <input type="date" value={currentDate} name="Date" onChange={dateChangeHandler}></input>
            </div>
            
            <div className='form-controls'>
            <button type='submit' className='control-button'>Add Item</button>
            <button type='button' className='control-button'>Close</button>
            </div>
            </form>
        </div>
        
    </div>);
}

export default ItemForm;