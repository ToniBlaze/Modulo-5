import 'bootstrap-icons/font/bootstrap-icons.css';

function MyNav() {
  return (
    <nav class="navbar navbar-expand-lg bg-dark py-0">
      <div class="container-fluid ">
        <a class="navbar-brand text-light" href="#">
          <i class="bi bi-yin-yang fs-2 px-3"></i>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active text-light px-3" aria-current="page" href="#">
              Home
            </a>
            <a class="nav-link text-light px-3" href="#">
              About
            </a>
            <a class="nav-link text-light px-3" href="#">
              Browse
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MyNav;
