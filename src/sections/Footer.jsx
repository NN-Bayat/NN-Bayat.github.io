import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center items-center md:items-start">
          <a href="/">Noorullah Noori Bayat</a>
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
            Designed & Developed &mdash; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
