const Footer = () => {
  return (
    <footer className="flex flex-wrap justify-center gap-2 p-6 text-xs sm:text-sm">
      <p
        className="text-center
      "
      >
        @2023 by Rizki Pratama Turbina.
      </p>{' '}
      <a
        href="mailto:rizki.pratama.turbina@gmail.com"
        className="inline-block"
        target="_blank"
        rel="noreferrer"
      >
        rizki.pratama.turbina@gmail.com.{' '}
      </a>
      <a
        href="https://github.com/rpturbina/rick-and-morty"
        target="_blank"
        rel="noreferrer"
        className="inline-block underline"
      >
        Go to this web repo.
      </a>
    </footer>
  );
};

export default Footer;
