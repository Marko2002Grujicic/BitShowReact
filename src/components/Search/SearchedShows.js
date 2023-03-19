import { useNavigate } from "react-router";
import './Search.css'

const SearchedShows = ({shows, setSearchQuery}) =>{
    const navigate = useNavigate();

    const handleShowClick = (id) => {
        navigate(`/shows/${id}`);
        setSearchQuery("");
      };

    return (
        <>
        <div className="row gap">
        {shows.map(show => (
            <div className={`col l4 m6 s12 `} key={show.id} onClick={()=> handleShowClick(show.id)}>
                <div className="card pointer">
                    <div className="card-image changedHeight">
                        <img src={show.image.original} className="cover-image" alt="cover"/>
                        <a href={show.id} className="btn-floating halfway-fab blue rating"><i className="material-icons">{show.rating.average}</i></a>
                    </div>
                    <div className={`card-content `} >
                    <p className="card-title">{show.name}</p>
                    </div>
                </div>
            </div>
           
        ))}
            
        </div>
        </>
    )
}
export default SearchedShows