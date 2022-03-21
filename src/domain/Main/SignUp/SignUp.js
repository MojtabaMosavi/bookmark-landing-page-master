import React,{useState} from "react";
import "./signup.scss";


const Cta = () => {
    const [isValid,setInValid] = useState(false);
    const [modifier,setModifier] = useState("none");
    const emailRegex = 	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    
    const validateEmail = (email) => {
        if(emailRegex.test(email)){
            setInValid(true);
            setModifier("success");
        }else if(email.length === 0){
            setModifier("none");
            setInValid(false);
        }
        else{
            setModifier("error");
        }
  
    }

    const handleSubmit = (e) => {
        if(isValid){
            e.target.submit();
            e.target.reset();
            setModifier("none");
        }
        e.preventDefault();
    }

    return (
        <section className="sign-up">
            <div className="sign-up__wrapper container">
                <span className="sign-up__stats">35,000+ already joined</span>

                <form className="sign-up__form" onSubmit={e => handleSubmit(e)}>
                    <div className={`sign-up__input-wrapper sign-up__input-wrapper--${modifier}`}>
                        <label htmlFor="sign-up" className="sign-up__label">
                            Stay up-to-date with what we’re doing
                        </label>
                        <input id="sign-up" 
                            type="text" 
                            className="sign-up__input"
                            placeholder="Enter your email address"
                            onChange={e => validateEmail(e.target.value)}
                        />
                        <span className="sign-up__status">whoops make sure it's an email</span>
                        <button type="submit" className="sign-up__btn">Contact Us</button>
                    </div>

                </form>
            </div>
        </section>
    );
}
 
export default Cta;