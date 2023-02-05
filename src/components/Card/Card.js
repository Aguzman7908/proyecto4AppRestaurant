function Card(props) {

    const {color, children}=props;
    
    return (
        <div 
            style={{
                    margin:"40px",
                    width : "100px",
                    backgroundColor:"red",
                    height:"10px",
                    color:color
                }}
        >
            {children}
        </div>
    );
}

export default Card;
