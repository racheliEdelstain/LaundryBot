

function Password({ password, setPassword, showPassword, setShowPassword }) {

    return (
        <div>
            <h3>showPassword: {showPassword}</h3>
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
            <div className="show_password">
                <label for="check">הצג סיסמא</label>
                <input
                    id="check"
                    type="checkbox"
                    value={showPassword}
                    onChange={(prev) => { setShowPassword(!showPassword) }
                    }
                />
            </div>
        </div>


    );
}

export default Password;