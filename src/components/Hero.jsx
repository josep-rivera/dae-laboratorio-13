const Hero = () => {
  return (
    <div className="bg-dark text-secondary px-4 py-5 text-center">
      <div className="py-5">
        <h1 className="display-5 fw-bold text-white">The Rick and Morty API</h1>
        <div className="col-lg-6 mx-auto">
          <p className="fs-5 mb-4">
            The Rick and Morty API is a RESTful API for al paginated and
            requires an API key to use. You can view the documentation at
            <a
              href="https://rickandmortyapi.com/documentation"
              className="text-decoration-none text-white"
            >
              https://rickandmortyapi.com/documentation
            </a>
          </p>
        </div>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
        >
          Characters
        </button>
        <button type="button" className="btn btn-outline-light btn-lg px-4">
          All Characters
        </button>
      </div>
    </div>
  );
};

export default Hero;
