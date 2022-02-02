import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Profile() {
  let navigate = useNavigate();
  //  funkcija navigate

  //   variable koji predstavlja :username
  // u {} se stavlja parametar iz rute, moze da bude neciji username ili id sa apija
  let { username } = useParams();
  return (
    <div>
      This is THE PROFILE OF {username}!
      <br />
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        Go to about page
      </button>
    </div>
  );
}

export default Profile;
