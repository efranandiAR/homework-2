import { useState } from "react";
import axios from "axios";
import Tracks from "../../components/Tracks";
import { useSelector } from "react-redux";
import SearchTracks from "../../components/Search/Index";
import PlaylistForm from "../../components/PlaylistForm";

export default function Home() {
  const currentToken = useSelector((state) => state.token.value);
  const [searchKey, setSearchKey] = useState("");
  const [tracks, setTracks] = useState([]);
  
  const HandleOnSubmitSearch = async (e) => {
    e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${currentToken}`
      },
      params: {
        q: searchKey,
        type: "track"
      }
    })
    console.log(data, "data");
    setTracks(data.tracks.items);
  }

  const HandleOnChangeSearch = (e) => {
    setSearchKey(e.target.value);
  }
  // -----------------------------------------------------------------------------------------------
  const [isSelected, setIsSelected] = useState([]);

  const HandleOnSelect = (uri) => {
    if(isSelected.includes(uri)) {
      setIsSelected((prevIsSelected) => prevIsSelected.filter((item) => item !== uri));
    } else if(!isSelected.includes(uri)){
      setIsSelected((prevIsSelected) => [...prevIsSelected, uri]);
    }
  }

  const [playlist, setPlaylist] = useState({
    title: "",
    description:"",
  });

  const HandleOnChangePlaylist = (e) => {
    const { name, value } = e.target;
    setPlaylist({...playlist, [name]: value });
  }

  const AddPlaylist = async (e) => {
		const uris = isSelected;
		console.log(uris);
		axios
			.get("https://api.spotify.com/v1/me", {
				headers: {
					Authorization: `Bearer ${currentToken}`,
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
              collaborative: false,
						},
						{
							headers: {
								Authorization: `Bearer ${currentToken}`,
							},
						}
					)
					.then(function (response) {
						axios.post(
							`https://api.spotify.com/v1/playlists/${response.data.id}/tracks`,
							{ uris: uris },
							{
								headers: {
									Authorization: `Bearer ${currentToken}`,
								},
							}
						);
						alert("Playlist Added");
					});
			});
	};

  const HandleOnSubmitPlaylist = (e) => {
    e.preventDefault();
    AddPlaylist();
  }

  return(
          <>
              <PlaylistForm
                playlist={playlist}
                HandleOnChangePlaylist={HandleOnChangePlaylist}
                HandleOnSubmitPlaylist={HandleOnSubmitPlaylist}
              />
              <SearchTracks
                HandleOnChangeSearch={HandleOnChangeSearch} 
                HandleOnSubmitSearch={HandleOnSubmitSearch}
              />
            <>
              <Tracks 
                data={tracks}
                HandleOnSelect={HandleOnSelect}
                isSelected = {isSelected}
              />
            </>
          </>        
  );
};