import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center items-center md:items-start">
          <a href="/">something</a>
        </div>

        <div className="socials">
          {socialImgs.map((img) => (
            <a className="icon" href={img.url} key={img.url}>
              <img src={img.imgPath} alt={img.name} />
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} — Noorullah Noori Bayat.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
