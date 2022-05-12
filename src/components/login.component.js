import React from "react";
import { useForm } from "react-hook-form";
import getpassword from "../localdata/data";

export default function Login () {

        const { register, getValues, unregister } = useForm();

        let handlelogin = (e) => {
            e.preventDefault();
            let email = getValues("email");
            let password = getValues("password");

            for(var i = 0, h = 0xdeadbeef; i < password.length; i++)
            h = Math.imul(h ^ password.charCodeAt(i), 2654435761);
            let Password = (h ^ h >>> 16) >>> 0;

            if(getpassword() === Password) {
                alert("Login Successful");
            }

            unregister("email");
            unregister("password");
        }
        return (
            <form>

                <h3>Log in</h3>

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
                            required: true
                          })}
                    />
                </div>
                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={handlelogin}>Sign in</button>
            </form>
        );
    }
