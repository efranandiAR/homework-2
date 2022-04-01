import React, { useState, useEffect } from "react";
import axios from "axios";
import ListDisplay from "../../Song";

const SpotifyAuth = () => {
    const CLIENT_ID = "675110b87a764b42b3a51622ddaa8178";
    const REDIRECT_URI = "http://localhost:3000/";
    const SCOPE = "playlist-modify-private";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";

    const [token, setToken] = useState("");
    const [searchKey, setSearchKey] = useState("");
    const [tracks, setTracks] = useState([]);
    const [isSelected, setIsSelected] = useState([]);


    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
        }

        setToken(token)
    }, [])

    const searchTracks = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "track"
            }
        })

        setTracks(data.tracks.items);
    }
    
    const selectTrack = () => {
        setIsSelected(tracks.uri);
    }

    return(
        <div>
            {token ?
                <div>
                    <form onSubmit={searchTracks}>
                        <input type="text" onChange={e => setSearchKey(e.target.value)}/>
                        <button type={"submit"}>Search</button>
                    </form>
                </div> 
                
            : <h1>Not Logged In</h1>
            }

            {!token ?
                <div>
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=${RESPONSE_TYPE}`}>Log In to Spotify</a>
                </div>
            : <div></div>
            }
            
            <ListDisplay 
                data={tracks}
                isSelected = {isSelected}
                selectTrack = {selectTrack()}
            />
            
        </div>
    )
};

export default SpotifyAuth;