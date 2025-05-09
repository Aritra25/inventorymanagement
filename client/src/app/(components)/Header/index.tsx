type HeaderProps = {
  name: string;
};

const Header = ({ name }: HeaderProps) => {
  return <h1 className="font-semibold text-gray-700 text-2xl">{name}</h1>;
};

export default Header;
