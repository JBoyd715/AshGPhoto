import Form from "./Form.js";

function Contact(){
    return(
        <div>
            <div className="contact">
                <h1>LET'S START YOUR JOURNEY</h1>
                <p>While I am still new to the photography world, I am looking forward to making new connections and taking on new adventures in different aspects of my photographs. 
                    If you would like to work with me, please fill out the form below, and I will get back to you as soon as I can. 
                    Thank you for your interest in my work!</p>
            </div>
            <div className="conb">
            <Form />
            </div>
        </div>
    );
}

export default Contact;