import { Link } from "react-router-dom";

const ThankYou = ()=>{
    return(
        <>
        <div className="gap"></div>
        <div class="container" style={{display:"flex",justifyContent:"center"}}>
            <div class="card">
                <div class="card-body">
                    <img  className="thank-img" src="https://i0.wp.com/letsgetclear.org/wp-content/uploads/2018/11/Thank-you-for-registering.png?ssl=1" alt=""/>
                </div>
                <div className="card-footer" style={{display:"flex",justifyContent:"center"}}>
                    <Link to="/">Log In</Link>
                </div>
            </div>
        </div>
        </>
    )

}
export default ThankYou;