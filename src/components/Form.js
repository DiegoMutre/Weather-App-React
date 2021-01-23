import { useState } from "react";
import Error from "./Error";

const Form = ({ setFormData, formData, getWeather }) => {
    // State for error
    const [error, setError] = useState(false);

    // Validate form
    const handleSubmit = e => {
        e.preventDefault();

        if (Object.values(formData).some(input => input.trim() === "")) {
            setError(true);
            return;
        }

        setError(false);
        getWeather();
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <Error message="All Fields Are Required" />}
            <div className="input-field col s12">
                <input
                    type="text"
                    name="city"
                    id="city"
                    onChange={e =>
                        setFormData(prev => ({
                            ...prev,
                            [e.target.name]: e.target.value,
                        }))
                    }
                />
                <label htmlFor="city">City:</label>
            </div>
            <div className="input-field col s12">
                <select
                    name="country"
                    id="country"
                    onChange={e =>
                        setFormData(prev => ({
                            ...prev,
                            [e.target.name]: e.target.value,
                        }))
                    }
                >
                    <option value="">-- Select --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="country">Country:</label>
            </div>
            <div className="input-field col s12">
                <button
                    className="waves-effect waves-light btn-large btn-block yellow accent-4 waves-input-wrapper"
                    type="submit"
                >
                    Search Weather
                </button>
            </div>
        </form>
    );
};

export default Form;
