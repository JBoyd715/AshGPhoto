import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

function Form(){

    const [name, setName]= useState('');
    const [email, setEmail]= useState('');
    const [type, setType]= useState('');
    const [hear, setHear] = useState('');
    const [message, setMessage] = useState('"info about you, ideas, more info about how you heard about me...."');
    const [loading, setLoading] = useState(false);

    useEffect(() => emailjs.init("8smQfW7wyE39MKU2e"), []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const servId= "service_bqzehfr";
        const tempId = "template_jslvkw5"

        try {
            setLoading(true);
            await emailjs.send(servId, tempId, {
             name: name,
             email: email,
             type: type,
             hear:hear,
             message:message
            });
            alert("Thank you for reaching out! I will get back to you in 4-5 business days!");
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
            setName('')
            setEmail('')
            setType('')
            setHear('')
            setMessage('"info about you, ideas, more info about how you heard about me...."')
          }
    }

    return(
        <div className="form">
                    <form onSubmit={handleSubmit}>
                        <label>YOUR NAME</label>
                        <input
                        type = "text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                        <label>EMAIL ADDRESS</label>
                        <input
                        type = "text"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        <label>WHAT TYPE OF SESSION ARE YOU LOOKING FOR?</label>
                        <select required
                        value={type}
                        onChange={(e) => setType(e.target.value)}>
                            <option value="senior">Senior</option>
                            <option value="couples">Couples</option>
                            <option value="portraits">Portraits</option>
                            <option value="casual">Casual</option>
                            <option value="wedding">Wedding</option>
                        </select>
                        <label>HOW DID YOU HEAR ABOUT ME?</label>
                        <select required
                        value={hear}
                        onChange={(e) => setHear(e.target.value)}>
                            <option value="facebook">Facebook</option>
                            <option value="instagram">Instagram</option>
                            <option value="google">Google</option>
                            <option value="friend">From a Friend</option>
                            <option value="other">Other</option>
                        </select>
                        <label>Message</label>
                        <textarea 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}></textarea>
                        <button type="submit"> SUBMIT</button>
                    </form>

                 </div>  
    );
}
export default Form;