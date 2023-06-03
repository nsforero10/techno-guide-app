import {useState, useEffect} from 'react';
import Subgenre from './Subgenre';
import ISubgenre from '../interfaces/subgenre';

const API_URL='https://fathomless-gorge-60663.herokuapp.com/api/subgenres'

export default function SubgenresList() {
    const [subgenres, setSubgenres] = useState([]);
    const [ loading, setLoading ] = useState(true);
    useEffect(() => {
    setLoading(true);
    fetch(process.env.API_URL || API_URL)
      .then((res) => res.json())
      .then((data) => {
        setSubgenres(data);
        setLoading(false);
      });
    }, []);
    if (loading) return <p>Loading...</p>;
    if(!subgenres) return <p>Subgenres not found</p>;
    
    function renderSubgenresList() {
      return subgenres.map((subgenre: ISubgenre) => {
        return (
          <Subgenre
            key={subgenre.id}
            name={subgenre.name}
            description={subgenre.description}
            linkPlaylist={subgenre.linkPlaylist}
            colors={subgenre.colors}
            bpmRange={subgenre.bpmRange}
            artist={subgenre.artist}
          />
        );
      });
    }

    return (
      <div className={`flex flex-col flex-wrap xl:flex-row`}>
        {renderSubgenresList()}
      </div>)
}