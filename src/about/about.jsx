import React from 'react';
import './about.css'

export function About() {
    const [quote, setQuote] = React.useState("loading...")
    const [author, setAuthor] = React.useState("loading...")

    React.useEffect(() => {
        setQuote('Jesus Loves You');
        setAuthor('Jonah Shirts');
      }, []);

  return (
    <main>
        <div id="card_holder">
            <div className="card" id="roc_card">
                <img src="images/roc2.jpg" className="card-img-top" alt="roc"/>
                <div className="card-body">
                    <h5 className="card-title">About the ROC</h5>
                    <p className="card-text">The ROC (short for "roar of the cougars") is the nickname for the student section at BYU.
                    Known for being loud and 100% sober, it is known to cause opposing teams to quake in their boots.
                    At least 5 false starts and 20 missed free throws have been caused by this awesome fanbase. </p>
                    <a href="https://byucougars.com/sports/roc" className="btn btn-primary">ROC Website</a>
                </div>
            </div>

            <div className="card" id="dev_card">
                <img src="images/jonah2.jpg" id="dev_photo" className="card-img-top" alt="roc"/>
                <div className="card-body">
                    <h5 className="card-title">About the developer</h5>
                    <p className="card-text">Jonah Shirts is a sophomore at BYU studying computer science. He loves BYU. Go Cougs! :)</p>
                    <a id="dev_button" href="https://byucougars.com/sports/roc" className="btn btn-primary">ROC Website</a>
                </div>
            </div>
        </div>
        <div id="message_holder">
            <p>Due to the popularity of BYU sports, the ROC consistently hits max capacity, leaving students to watch the games at home with no connection to their fellow fans. The virtual ROC does not aim to replicate the in-person ROC experience(it is impossible), but it does try to connect those loyal, strong, and true BYU fans to share in the victories and (very rare) defeats of the cougars.</p>
        </div>

        <section id="quotes">
            <h4>In case of a BYU loss</h4>
            <h6>Read ONLY if BYU loses</h6>
            <p>It's ok, you can't win 'em all. Maybe this motivational quote will help.</p>
            <p>"{quote}" -{author}</p>
        </section>
    </main>
  );
}