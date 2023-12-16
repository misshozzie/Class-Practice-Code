import { useState } from "react";
import { signUp } from "../../service/users";

export default function SignUpForm() {
    const [formState, setFormState] = useState({});
    const [disable, setDisable] = useState(true);

    function handleChange(evt) {
        var currForm = formState;
        currForm[evt.target.name] = evt.target.value;
        setDisable(checkPassword());
        setFormState(currForm);
    };

    function checkPassword() {

        var currForm = formState;
        if (!currForm.password) {
            return true
        }
        if (!currForm.confirm) {
            return true
        }
        if (currForm.password !== currForm.confirm) {
            return true
        }
        return false
    }

    async function handleSubmit() {
        try {
            // We don't want to send the 'error' or 'confirm' property,
            //  so let's make a copy of the state object, then delete them
            // highlight-start
            const formData = {...formState};
            delete formData.error;
            delete formData.confirm;
            // highlight-end
            console.log(formData)
            const user = await signUp(formData);
            // Baby step!
            console.log(user)
          
          } catch(e) {
            console.log(e);
          }
    }

    return (
        <div>
            <div className="form-container">
                <form autoComplete="off" onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" onChange={handleChange} required />
                <label>Email</label>
                <input type="email" name="email" onChange={handleChange} required />
                <label>Password</label>
                <input type="password" name="password" onChange={handleChange} required />
                <label>Confirm</label>
                <input type="password" name="confirm" onChange={handleChange} required />
                <button type="submit" disabled={disable}>SIGN UP</button>
                </form>
            </div>
            <p className="error-message">&nbsp;</p>
        </div>
    );
}
  