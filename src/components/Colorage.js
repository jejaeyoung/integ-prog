//INF2121REACT_QUIALTAN_DANIELSEBASTIAN
const Colorage=(props)=>{
    //destructuring
    let {pname,page,phair,pmark,pgender}=props;
    
    //remarks
    pmark = (page<18) ? "Minor" : "Adult";
       
        
    // haircolor
     let textColor;
          if (phair == "brown") 
          {
            textColor = 'brown'; 
          } 
          else if (phair == "blonde") 
          {
            textColor = "yellow"; 
          } 
          else if (phair == "black") 
          {
            textColor = "black"; 
          }
    
    let textGender = (pgender == "Male") ?  "blue" : 'pink';

    return(
        <>
        <h1 style={{color:textGender}}>{pname}</h1>
        <p>Gender: {pgender}</p>
        <p>Age: {page}</p>
        <p style={{color:textColor}}>Hair Color: {phair} </p>
        <p>Remarks: {pmark}</p>
        </>
    )
}

export default Colorage;