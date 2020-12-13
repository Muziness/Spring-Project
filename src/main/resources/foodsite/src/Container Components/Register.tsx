// @ts-ignore
import React, {Component} from 'react';
import Toast from 'light-toast'
import "../main.css"


const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
        // @ts-ignore
        val.length > 0 && (valid = false);
    });

    // validate the form was filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });

    return valid;
};

export class Register extends Component<{}, {formErrors, firstName, lastName, email, password, city, address}> {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

        this.state = {
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            city: null,
            address: null,
            formErrors: {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                city: "",
                address: ""
            }
        };
    }

    handleSubmit(e){
        e.preventDefault();

        if (formValid(this.state)) {
    /*        console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        Password: ${this.state.password}
        City: ${this.state.city}
        Address: ${this.state.address}
      `); */
            Toast.fail("Work pending...", 3000)
        } else {
            Toast.fail("Please fill all required fields", 3000)
        }
    };

    handleChange(e){
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

        switch (name) {
            case "firstName":
                formErrors.firstName =
                    value.length < 3 ? "minimum 3 characaters required" : "";
                break;
            case "lastName":
                formErrors.lastName =
                    value.length < 3 ? "minimum 3 characaters required" : "";
                break;
            case "email":
                formErrors.email = emailRegex.test(value)
                    ? ""
                    : "invalid email address";
                break;
            case "password":
                formErrors.password =
                    value.length < 6 ? "minimum 6 characaters required" : "";
                break;
            case "city":
                formErrors.city =
                    value.length < 4 ? "minimum 4 characaters required" : "";
                break;
            case "address":
                formErrors.address =
                    value.length < 12 ? "minimum 12 characaters required" : "";
                break;
            default:
                break;
        }

        // @ts-ignore
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };
    render() {

        const { formErrors } = this.state;

        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Create Account</h1>
                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className="firstName">
                            <label htmlFor="firstName">First Name * </label>
                            <input
                                className={formErrors.firstName.length > 0 ? "error" : null}
                                placeholder="First Name"
                                type="text"
                                name="firstName"
                                formNoValidate={false}
                                onChange={this.handleChange}
                            />
                            {formErrors.firstName.length > 0 && (
                                <span className="errorMessage">{formErrors.firstName}</span>
                            )}
                        </div>
                        <div className="lastName">
                            <label htmlFor="lastName">Last Name * </label>
                            <input
                                className={formErrors.lastName.length > 0 ? "error" : null}
                                placeholder="Last Name"
                                type="text"
                                name="lastName"
                                formNoValidate={false}
                                onChange={this.handleChange}
                            />
                            {formErrors.lastName.length > 0 && (
                                <span className="errorMessage">{formErrors.lastName}</span>
                            )}
                        </div>
                        <div className="email">
                            <label htmlFor="email">Email * </label>
                            <input
                                className={formErrors.email.length > 0 ? "error" : null}
                                placeholder="Email"
                                type="email"
                                name="email"
                                formNoValidate={false}
                                onChange={this.handleChange}
                            />
                            {formErrors.email.length > 0 && (
                                <span className="errorMessage">{formErrors.email}</span>
                            )}
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password * </label>
                            <input
                                className={formErrors.password.length > 0 ? "error" : null}
                                placeholder="Password"
                                type="password"
                                name="password"
                                formNoValidate={false}
                                onChange={this.handleChange}
                            />
                            {formErrors.password.length > 0 && (
                                <span className="errorMessage">{formErrors.password}</span>
                            )}
                        </div>
                        <div className="city">
                            <label htmlFor="city">City * </label>
                            <input
                                className={formErrors.city.length > 0 ? "error" : null}
                                placeholder="City"
                                type="text"
                                name="city"
                                formNoValidate={false}
                                onChange={this.handleChange}
                            />
                            {formErrors.city.length > 0 && (
                                <span className="errorMessage">{formErrors.city}</span>
                            )}
                        </div>
                        <div className="address">
                            <label htmlFor="address">Address * </label>
                            <input
                                className={formErrors.address.length > 0 ? "error" : null}
                                placeholder="Address"
                                type="text"
                                name="address"
                                formNoValidate={false}
                                onChange={this.handleChange}
                            />
                            {formErrors.address.length > 0 && (
                                <span className="errorMessage">{formErrors.address}</span>
                            )}
                        </div>
                        <div className="createAccount">
                            <button type="submit">Create Account</button>
                            <small>Already Have an Account?</small>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}


