import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <div className="tours">
      <section>
        <div className="title">
          <h2>Our Tours</h2>
          <div className="underline"></div>
        </div>
        <div className="container">
          {tours.map((tour) => {
            return (
              <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Tours;
