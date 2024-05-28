
import { useState } from "react";


function Password({ password, setPassword, showPassword, setShowPassword }) {

    return (

        <div>
            {/* <h2>showPassword: {showPassword}</h2> */}

            <label for="pass">סיסמא </label>
            <input
                id="pass"
                type={
                    !showPassword ? "text" : "password"
                }
                value={password}
                onChange={(e) =>
                    setPassword(e.target.value)
                }
            />
            <br />

            <label for="check">הצג סיסמא</label>
            <input
                id="check"
                type="checkbox"
                value={showPassword}
                onChange={(prev) => { setShowPassword (!showPassword)}
                }
            />
        </div>


    );
}

export default Password;