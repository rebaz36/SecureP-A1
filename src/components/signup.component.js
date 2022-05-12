import React from "react";
import { useForm } from "react-hook-form";
import addtodata from "../localdata/data";

export default function SignUp () {
   
        const { register, getValues, unregister } = useForm();

        let handleSubmit = (e) => {
            e.preventDefault();
            let email = getValues("email");
            let password = getValues("password");

            for(var i = 0, h = 0xdeadbeef; i < password.length; i++)
            h = Math.imul(h ^ password.charCodeAt(i), 2654435761);
            let Password = (h ^ h >>> 16) >>> 0;

            addtodata(email, Password);
            unregister("email");
            unregister("password");
            console.log("Form submitted");
        }

        return (
            <form>
                <h3>Register</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Enter email"
                        {...register("email", {
                            required: true
                          })}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Enter password"
                        {...register("password", {
                            required: true,
                            minLength: 8
                          })}
                    />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={handleSubmit}>Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">log in?</a>
                </p>
            </form>
        );
    }
