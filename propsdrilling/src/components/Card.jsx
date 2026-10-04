
const Card = (props) => {
    return (
        <>

            <div className="card">

                <div className="top">
                    <button>available</button>
                    <img src={props.img} alt="" />
                    <p>{props.price}</p>
                </div>

                <div className="center">
                    <h2>{props.name}</h2>
                    <h5>{props.role}</h5>
                    <p>{props.company}</p>
                </div>

                <div className="tag">
                    <button className="tag1">{props.tag0}</button>
                    <button className="tag1">{props.tag1}</button>
                    <button className="tag1">{props.tag2}</button>
                    <button id="tag2">{props.extratags}</button>
                </div>
 
                <div className="para">
                    {props.des}
                </div>

                <div className="bottom">
                  
                </div>
                
                <div className="buttombtn">
                  <button id = 'profile'>VIEW PROFILE</button>
                 </div>


            </div>

        </>
    )
}
export default Card