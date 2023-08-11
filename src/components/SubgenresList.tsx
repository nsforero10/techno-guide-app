import { useState, useEffect } from "react";
import Subgenre from "./Subgenre";
import { SubgenreType } from "../interfaces/subgenre";

export default function SubgenresList() {
  const [subgenres, setSubgenres] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    if (process.env.NEXT_PUBLIC_API_URL)
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/subgenre`, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setSubgenres(data);
          setLoading(false);
        });
  }, []);
  if (loading) return <p>Loading...</p>;
  if (!subgenres) return <p>Subgenres not found</p>;

  return (
    <div className={`flex flex-col flex-wrap xl:flex-row mt-10`}>
      {subgenres.map((subgenre: SubgenreType) => (
        <Subgenre
          key={subgenre.id}
          name={subgenre.name}
          description={subgenre.description}
          linkPlaylist={subgenre.linkPlaylist}
          colors={subgenre.colors}
          bpmRange={subgenre.bpmRange}
          artist={subgenre.artist}
        />
      ))}
    </div>
  );
}
