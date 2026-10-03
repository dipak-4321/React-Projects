const Card = () => {
    return (
        <>

            <div className="card">

                <div className="top">
                    <button>available</button>
                    <img src="https://www.pngitem.com/pimgs/m/131-1319519_transparent-iron-man-logo-png-marvel-iron-man.png" alt="" />
                    <p>$32/hr</p>
                </div>

                <div className="center">
                    <h2>Tony Stark</h2>
                    <h5>UI/UX designer</h5>
                    <p>Epic Coders</p>
                </div>

                <div className="tag">
                    <button className="tag1">UI</button>
                    <button className="tag1">UX</button>
                    <button className="tag1">photoshop</button>
                    <button id="tag2">+4</button>
                </div>
 
                <div className="para">
                    Tony Stark is a 38 year old owner of Stark Industry and creator of Jarvis
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