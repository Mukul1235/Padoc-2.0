import Navbar from "./Navbar";

function App() {
  return (
    <body>
      <Navbar />
      <div className="cont2">
          <p className="img-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, repellat?</p>
      </div>

      
      <section>
        <div className="feature-container">
          <div className="feature-container-1">
            <img className="appointment-img" src="../Images/appointment-img.png" alt="" srcset="" />
            <p className="feature-description">Book an appointment!</p>
          </div>
          <div className="feature-container-2">
            <img className="delivery-img" src="../Images/delivery-img.png" alt="" srcset="" />
            <p className="feature-description"> Order your medicines</p>
          </div>
        </div>
      </section>
    </body>
  );
}

export default App;
