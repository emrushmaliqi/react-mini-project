import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container home">
      <Link to="/movies">
        <h1 className="to-movies-heading">Click to go to movies</h1>
      </Link>
      <p>
        Welcome to our movie website, your go-to destination for all things
        movies! We are passionate about bringing you the latest and greatest in
        film entertainment. Whether you are a cinephile or just looking for a
        fun night out at the movies, we've got you covered.
      </p>
      <p>
        Explore our vast collection of movie reviews, trailers, and news
        articles to stay up-to-date on the latest movie releases. We offer a
        comprehensive database of movies, so you can easily find what you're
        looking for.
      </p>
      <p>
        Our website is designed to be user-friendly and easy to navigate, so you
        can quickly find the information you need. We also offer personalized
        recommendations based on your viewing history and preferences, so you
        can discover new movies that you'll love.
      </p>
      <p>
        Don't forget to check out our exclusive interviews with actors and
        directors, behind-the-scenes features, and exclusive movie content. We
        are dedicated to bringing you the most comprehensive and up-to-date
        movie information available.
      </p>
      <p>
        Thank you for choosing our website as your go-to source for all things
        movies. We hope you enjoy your time here and discover some amazing new
        films to watch!
      </p>
    </div>
  );
}

export default Home;
