import React from "react";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import "./effects.css";
import { Message } from "./Message";

export const SimpleForm = () => {
    const [formState, setformState] = useState({
        name: "",
        email: "",
    });
    const { name, email } = formState;

    useEffect(() => {
        //console.log('hey')
    }, []);

    useEffect(() => {
        //console.log('form state cambió')
    }, [formState]);

    useEffect(() => {
        //console.log('email cambió')
    }, [email]);

    const handleInputChange = ({ target }) => {
        setformState({
            ...formState,
            [target.name]: target.value,
        });
    };

    return (
        <>
            <h1>Simple Form</h1>
            <hr />
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="hola@hola.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

{ (name === '123') && <Message/> }

        </>
    );
};
