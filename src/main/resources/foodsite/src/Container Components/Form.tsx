import React, { Children, ReactPropTypes } from 'react'

export function Form(props) {
    return (
        <form action="">
            {props.children}
        </form>
    )
}

export function FormInput(props: React.PropsWithChildren<IFormInput>) {
    if(props.type == "text" || props.type == "email"){
        return (
            <div className="form-group" key={props.Id}>
                <input type={props.type} 
                className="form-control"  
                placeholder={props.valueInside}
                required={true}/>
            </div>
        )
    }else if (props.type == "dropbox"){
        return(
            <div className="form-group" key={props.Id}>
                {props.children}
            </div>
        )
    }else if(props.type == "file"){
        return(
            <div className="form-group" key={props.Id}>
                <input type={props.type} className="form-control-file" />
            </div>
        )
    }else if(props.type == "textarea"){
        return(
            <div className="form-group" key={props.Id}>
                <textarea className="form-control" 
                rows={5} 
                required={true}
                placeholder={props.valueInside} ></textarea>
            </div>
        )
    }else if(props.type == "btn"){
        return(
            <div className="from-group d-flex justify-content-center" key={props.Id}>
                <input className="btn btn-primary login-btn" onClick={props.btnClicked} type="button" value={props.valueInside} />
            </div>
        )
    }
}

export function LoginForm(props) {
    return (
        <div className="container login-from card pt-4 pb-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-6 col-md-6 col-sm-8">
                        {props.children}
                    </div>
                </div>
        </div>
    )
}

export function Signin(props){
    return(
        <div>
            {props.children}
        </div>
    )
}
export function Signup(props){
    return(
        <div>
            {props.children}
        </div>
    )
}
interface IFormInput{
    Id: string,
    valueInside: string,
    btnClicked: any,
    type: "text" | "email" | "file" | "dropbox" | "textarea" | "btn",
}
