// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from 'react-router-dom';


export function MenuBtn() {
    return (
        <div>
            <Link to="/Menu">
            <button type="button" className="btn btn-success btn-lg">Our full menu</button>
            </Link>

        </div>
    )
}