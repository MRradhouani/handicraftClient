import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../../App'
const Profiles = () => {
    const [mypics, setPics] = useState([])
    const [profile, setProdile] = useState(null)

    const { state, dispatch } = useContext(UserContext)
    useEffect(() => {
        fetch('/mypost', {
            headers: {
                "Authorization": "root " + localStorage.getItem('jwt')
            }
        }).then(res => res.json())
            .then(result => {
                setPics(result.mypost)
            })
    }, [])
    return (
        <div>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "18px 0px",
                borderBottom: '1px solid grey'
            }}>
                <div>
                    <img alt=" " style={{ width: "160px", height: '160px', borderRadius: "80px" }}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/VinDieselMarch09.jpg/220px-VinDieselMarch09.jpg"
                    />
                    <button class="btn waves-effect waves-light .#64b5f6 blue lighten-2"
                    >
                        Update pic
                </button>
                </div>
                <div>
                    <h4>{state ? state.name : "loading"} </h4>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "110%"
                    }}>
                        <h6> {profile?.posts?.length} posts</h6>
                    </div>
                </div>
            </div>
            <div className="gallery">
                {
                    mypics.map(item => {
                        return (
                            <img key={item._id} className="item" src={item.photo} alt={item.title} />
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Profiles
