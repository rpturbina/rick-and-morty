import Button from '@/components/Button';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-white/20 px-6 py-4 backdrop-blur-[20px]">
      <h1 className="text-lg font-bold">Characters</h1>
      <div className="hidden gap-4 sm:flex">
        <Button variant={'link'}>Characters</Button>
        <Button variant={'link'}>Locations</Button>
        <Button variant={'link'}>Episodes</Button>
      </div>
    </header>
  );
};

export default Header;
