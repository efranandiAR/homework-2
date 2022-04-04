import { useState, useEffect } from "react";
import axios from "axios";
import Tracks from "../../components/Tracks";
import PlaylistFormComponent from "../../components/PlaylistForm";

export default function Home() {
  const CLIENT_ID = "675110b87a764b42b3a51622ddaa8178";
  const REDIRECT_URI = "http://localhost:3000/";
  const SCOPE = "playlist-modify-private";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const hash = window.location.hash;
    let tokenSplit;

    if (!token && hash) {
        tokenSplit = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];

        window.location.hash = "";
    }

    setToken(tokenSplit);
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
  // -----------------------------------------------------------------------------------------------
  const [isSelected, setIsSelected] = useState([]);

  const HandleOnSelect = (uri) => {
    if(isSelected.includes(uri)) {
      setIsSelected((prevIsSelected) => prevIsSelected.filter((item) => item.uri === uri));
    } else if(!isSelected.includes(uri)){
      setIsSelected((prevIsSelected) => [...prevIsSelected, uri]);
    }
  }

  const [playlist, setPlaylist] = useState({
    title: "",
    description:""
  });

  const HandleOnChangePlaylist = (e) => {
    const { field, value } = e.target;
    setPlaylist((prevPlaylist) => ({...prevPlaylist, [field]: value }));
  }

  const AddPlaylist = async (e) => {
		e.preventDefault();
		const uris = isSelected.map(item => item.uri);
		console.log(uris);
		axios
			.get("https://api.spotify.com/v1/me", {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then(function (response) {
				console.log(response);
				axios
					.post(
						`https://api.spotify.com/v1/users/${response.data.id}/playlists`,
						{
							name: playlist.title,
							description: playlist.description,
							public: false,
						},
						{
							headers: {
								Authorization: `Bearer ${token}`,
							},
						}
					)
					.then(function (response) {
						axios.post(
							`https://api.spotify.com/v1/playlists/${response.data.id}/tracks`,
							{ uris: uris },
							{
								headers: {
									Authorization: `Bearer ${token}`,
								},
							}
						);
						alert("Playlist Added");
					});
			});
	};

  const HandleOnSubmitPlaylist = (e) => {
    e.preventDefault();
    {AddPlaylist()}
  }

  return(
    <div>
      <div>
        {token ?
          <div>
            <div>
              <PlaylistFormComponent 
                playlist={playlist}
                HandleOnChangePlaylist={HandleOnChangePlaylist}
                HandleOnSubmitPlaylist={HandleOnSubmitPlaylist}
              />
            </div>
            <form onSubmit={searchTracks}>
              <input type="text" onChange={e => setSearchKey(e.target.value)}/>
              <button type={"submit"}>Search</button>
            </form>
            <div>
              <Tracks 
                data={tracks}
                HandleOnSelect={HandleOnSelect}
                isSelected = {isSelected}
              />
            </div>
          </div>        
          : <h1>Not Logged In</h1>
        }
      </div>
      <div>
        {!token ?
          <div>
            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=${RESPONSE_TYPE}`}>Log In to Spotify</a>
          </div>
          : <div></div>
        }
      </div>
    </div>
  );
};