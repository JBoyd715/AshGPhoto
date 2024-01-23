import About from "./About";
import im1 from "./img/im1.jpeg"
import im2 from "./img/im2.jpeg"
import im3 from "./img/im3.jpeg"

function MyWork(){
    return(
        <div className="mywork">
            <h1>MY WORK</h1>
                <div className="wcont">
                    <div className="senior">
                        <img src={im1}></img>
                        <h2>SENIOR</h2>
                        <h3>CAPTURING FINAL YEAR</h3>
                    
                    </div>
                    <div className="couples">
                        <img src={im2}></img>
                        <h2>COUPLES</h2>
                        <h3>CAPTURING LOVE</h3>
                    </div>
                    <div className="casual">
                        <img src={im3}></img>
                        <h2>CASUAL</h2>
                        <h3>EXPRESS YOURSELF</h3>
                    </div>
            </div>
            <div className="quote">
                <h2>"WE TAKE PHOTOS AS A RETURN TICKET TO A MOMENT OTHERWISE GONE."</h2>
                <p>-KATIE THURMES</p>
            </div>
        </div>
    
    );
}

export default MyWork;