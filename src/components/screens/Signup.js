import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom"
import M from "materialize-css"
const Signup = () => {
    const history = useHistory()
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [url, setUrl] = useState('')
    const [image, setImage] = useState('')



    // const uploadpic = () => {
    //     const data = new FormData()
    //     data.append("file", image)
    //     data.append("upload_preset", "insta-clone")
    //     data.append('cloud_name', "daardfpre")
    //     fetch("https://api.cloudinary.com/v1_1/daardfpre/image/upload", {
    //         method: "post",
    //         body: data
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             seturl(data.url)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })

    // }


    // const uploadFields = () =>{
        
    // }
    const PostData = () => {
        // if (image) {
        //     uploadpic()
        // } else {


        // }
        if (!/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            M.toast({ html: "invalid email", classes: '#e53935 red darken-1' })
            return
        }
        fetch('/signup', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                password,
                email
            })

        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    M.toast({ html: data.error, classes: '#e53935 red darken-1' })
                }
                else {
                    M.toast({ html: data.message, classes: '#69f0ae green accent-2' })
                    history.push('/Login')
                }
            }).catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="mycard">
            <div className="card auth-card input-field">
                <h3>
                    welcom to our Handicraft site 
                </h3>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <div className="file-field input-field">
                    <div className="btn">
                        <span >Upload image</span>
                        <input
                            type="file"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" />
                    </div>
                </div>

                <button class="btn waves-effect waves-light .#64b5f6 blue lighten-2"
                    onClick={() => PostData()}

                >
                    SignUp
                </button>

                <h5>
                    <Link to="./Login"> Already have a Accound !!</Link>
                </h5>
            </div>
        </div>
    )
}

export default Signup
