import React from "react";
import styles from "@/app/styles/common.module.css"
import MovieCard from "../components/MovieCard";

const Movie =async ()=>{
    
const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'a1ce39734emsh001c7f53c982818p10d79ajsn3f3db245c450',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};

const res = await fetch(url,options);
const data = await res.json();
console.log(data);
const main_data = data.titles;
console.log(main_data.jawSummary)

    return(
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movie</h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((curElem) => {
                                return <MovieCard key={curElem.id} {...curElem} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Movie;