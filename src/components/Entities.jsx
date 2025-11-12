const Entities = ({ data }) => {
  const characters = Array.isArray(data?.results) ? data.results : [];

  return (
    <section id="characters" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold text-dark">
          Personajes de Rick and Morty
        </h2>

        {characters.length > 0 ? (
          <div className="row g-4">
            {characters.map((character) => (
              <div key={character.id} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0">
                  <img
                    src={character.image}
                    className="card-img-top"
                    alt={character.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{character.name}</h5>
                    <p className="card-text text-muted mb-2">
                      <strong>Status:</strong> {character.status}
                    </p>
                    <p className="card-text text-muted mb-2">
                      <strong>Especie:</strong> {character.species}
                    </p>
                    <p className="card-text text-muted">
                      <strong>Origen:</strong> {character.origin?.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="alert alert-info text-center">
            Cargando personajes...
          </div>
        )}
      </div>
    </section>
  );
};

export default Entities;
