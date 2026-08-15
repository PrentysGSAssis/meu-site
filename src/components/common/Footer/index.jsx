const Footer = () => {
  return (
    <footer className="bg-gray-800 text-dark py-4">
      <div className="container">
        <p className="mb-0 text-center">
          &copy; {new Date().getFullYear()} Reino Confeitaria. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;