import "bootstrap-icons/font/bootstrap-icons.css";
import "./style.css"; 

function MyFooter() {
  return (
    <div class="container-fluid">
      <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-dark">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-dark">
              Features
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-dark">
              Pricing
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-dark">
              FAQs
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-dark">
              About
            </a>
          </li>
        </ul>
        <p class="text-center text-body-secondary">© 2023 Company, Inc</p>
      </footer>
    </div>
  );
}
export default MyFooter;
