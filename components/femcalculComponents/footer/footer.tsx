import { BookMarked, Bookmark, GraduationCap, Linkedin, Mail, Phone } from 'lucide-react';
import './footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" h-[126px] bg-primary-dark text-white p-5">
      <div className="flex flex-row w-full h-full justify-between">
        <div className="flex flex-col justify-between">
          <a
            className="footer-flex-row"
            target="_blank"
            href="https://www.linkedin.com/in/denise-ferreira-fem/"
            rel="noopener noreferrer"
          >
            <Linkedin />
            <p className="pl-3">LinkedIn</p>
          </a>
          <a
            className="footer-flex-row"
            target="_blank"
            href="https://www.researchgate.net/profile/D-Ferreira"
            rel="noopener noreferrer"
          >
            <BookMarked />
            <p className="pl-3">Research gate</p>
          </a>
          <a
            target="_blank"
            href="https://scholar.google.com/citations?user=FiY8WL4AAAAJ&hl=pt-PT"
            rel="noopener noreferrer"
            className="footer-flex-row"
          >
            <GraduationCap />
            <p className="pl-3">Google scholar</p>
          </a>
        </div>
        <div className="h-full flex items-center justify-center">
          FEM Calcul - Structural Analysis Consulting © {currentYear}
        </div>
        <div className="h-full justify-center">
          <div className="footer-flex-col">
            <div className="footer-flex-row">
              <Phone /> <p className="pl-3">+34 611 65 00 38</p>
            </div>
            <a href="mailto:projects@femcalcul.com">
              <div className="footer-flex-row pt-2">
                <Mail /> <p className="pl-3">projects@femcalcul.com</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
