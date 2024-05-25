import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-blue p-4 mt-auto">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-white text-lg mb-2">Contact</h2>
            <p className="text-white">Adresa: Strada Exemplu 123, București</p>
            <p className="text-white">Email: nextmed.ortho@clinic.com</p>
            <p className="text-white">Telefon: 0712 345 678</p>
            <p className="text-white">Program: Luni - Vineri, 9:00 - 18:00</p>
          </div>
          <div className="flex justify-center md:justify-end items-center">
            <Image src="/logo.jpg" alt="Logo" width={100} height={100} />
          </div>
        </div>
        <div className="mt-4 text-center text-white">
          <p>Este în scop didactic</p>
          <p>
            © {new Date().getFullYear()} Next Step. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
