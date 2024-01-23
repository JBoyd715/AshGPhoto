function Form(){
    return(
        <div className="form">
                    <form>
                        <label>YOUR NAME</label>
                        <input
                        type = "text"
                        required
                        />
                        <label>EMAIL ADDRESS</label>
                        <input
                        type = "text"
                        required
                        />
                        <label>WHAT TYPE OF SESSION ARE YOU LOOKING FOR?</label>
                        <select required>
                            <option value="senior">Senior</option>
                            <option value="couples">Couples</option>
                            <option value="portraits">Portraits</option>
                            <option value="casual">Casual</option>
                            <option value="wedding">Wedding</option>
                        </select>
                        <label>HOW DID YOU HEAR ABOUT ME?</label>
                        <select required>
                            <option value="facebook">Facebook</option>
                            <option value="instagram">Instagram</option>
                            <option value="google">Google</option>
                            <option value="friend">From a Friend</option>
                            <option value="other">Other</option>
                        </select>
                        <label>Message</label>
                        <textarea>Enter here....</textarea>
                        <button type="submit"> SUBMIT</button>
                    </form>

                 </div>  
    );
}
export default Form;