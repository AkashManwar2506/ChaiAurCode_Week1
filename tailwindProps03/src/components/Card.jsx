
function Card({username, exp, city='pune'}){
    const expStr = exp.join(' ');
    return (
    <>
        <p>Name: {username}</p>
        <p>Experience: {expStr}</p>
        <p>City: {city}</p>

    </>
    )
}
export default Card;