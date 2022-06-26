import './Datecomp.css';

function Datecomp(props){

    const dt =new Date(props.date) ;
    const day = ['Monday','Tuesday','Wednesday',
                 'Thursday','Friday','Saturday','Sunday'];
    const month = ['January','Feburary','March',
                 'April','May','June','July','August',
                'September','October','November',
                'December'];

    return(
        <div>
         <div className='date-container'>
         <div className='month'>
          {month[dt.getMonth()]}
         </div>
         <div className='date'>
          {dt.getDate()},
          <span> {dt.getFullYear()}</span>
         </div>
         <div className='day'>
         {day[dt.getDay()]}
         </div>
         </div>
        </div>
    );
}

export default Datecomp;