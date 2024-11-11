
function Pill({color}){
    
    return (
        <h4 className="" onClick={()=>{
            setColor(color);
        }}>
            {color}
        </h4>
    )
}
export default Pill;