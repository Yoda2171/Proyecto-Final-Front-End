import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { Context } from '../store/appContext';

function OtherProfile(props) {

    const { store, actions } = useContext(Context);

    const { slug } = useParams();

    const history = useHistory();

    const [boton, setBoton] = useState()

    useEffect(() => {
        if (store.profile === null) history.push("/login");
        actions.getUserDataOther(slug)

    }, []);


    const button = store.followingDB.find((valor) => slug === valor.personID)

    return (
        <>
            <div
                className="card border-success mb-3 m-auto"
                style={{ "max-width": "38rem" }}>
                <div className="card-header bg-success border-success py-3">
                    <img
                        src={!!store.otherProfile && store.otherProfile.photo}
                        alt="Avatar"
                        id="profileAvatar" />
                    <h1 className="text-white d-inline-block ml-4">
                        {!!store.otherProfile && store.otherProfile.name}
                    </h1>
                </div>
                <div className="card-body list-group-flush">
                    <li className="list-group-item border-success ">
                        <i class="fas fa-users"></i>{" "}
                        {!!store.otherProfile && store.otherProfile.followers} Seguidores
                    </li>
                    <li className="list-group-item border-success">
                        <i class="fas fa-music mt-2 mb-3"></i> Recientes
                            {!!store.otherProfile &&
                            store.otherProfile.recentTracks.items.slice(0, 5).map((index, key) => {
                                return (
                                    <>
                                        <span
                                            key={key}
                                            type="button"
                                            class="btn btn-success mx-1 ml-2 mt-2 mb-2"
                                        >
                                            {index.track.name} - {index.track.artists[0].name}
                                        </span>
                                    </>
                                );
                            })}
                    </li>
                    <li className="list-group-item border-success">
                        <i class="fas fa-microphone mt-2 mb-2"></i> Top Artistas
                            {!!store.otherProfile &&
                            store.otherProfile.topArtists.items.slice(0, 4).map((index, key) => {
                                return (
                                    <>
                                        <p
                                            key={key}
                                            className="bg-success text-white rounded p-2 ml-3"

                                        >
                                            <span className="mr-4">
                                                <img
                                                    src={index.images[0].url}
                                                    className="rounded-circle w-25"
                                                />
                                            </span>
                                            {index.name}{" "}
                                        </p>
                                    </>
                                );
                            })}
                    </li>

                    {
                        !!store.followingDB &&
                        store.followingDB.find((valor) => valor.personID)
                        
                        
                    }

                </div>
            </div>
        </>
    )
}

export default OtherProfile
