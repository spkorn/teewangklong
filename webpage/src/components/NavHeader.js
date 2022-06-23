import image from "../photos/images";

function NavHeader() {
  return (
    <header className="vw-100 drop-shadow-lg bg-white text-black px-6">
      <div className="flex justify-between items-center py-4 mb-5">
        <img className="w-32 rounded-full" src={image.logo} alt="logo" />
        <div className="flex justify-between items-center text-xl font-semibold">
          <p className="px-6 cursor-pointer">Home</p>
          <p className="px-6 cursor-pointer">Trip Review</p>
          <p className="px-6 cursor-pointer">Cafe</p>
        </div>
        <h1 className="text-black text-center text-4xl mb-1 font-bold">
          TeeWangKlong
        </h1>
      </div>
    </header>
  );
}

export default NavHeader;
