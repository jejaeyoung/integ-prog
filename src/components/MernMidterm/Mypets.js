const Mypets=(props)=>{
    console.log(props)
    //destructuring
    const {pname,ptype}=props;

  
    return(
        <>
            <ul>
                <li>Name: {pname}</li>
                <li>Type: {ptype}</li>
                <li>Favorite Food: Daga</li>
                <li>Hobby: Kumaldag</li>
                <li>Breed: Chuwawa</li>
            </ul>
        </>
    )
}

export default Mypets;