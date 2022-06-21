import image from "../photos/images";

function NavHeader() {
  return (
    <header className="vw-100 drop-shadow-lg bg-white text-black p-4 mb-5">
      <div className="flex justify-around items-center">
        <img className="w-32 rounded-full" src={image.logo} alt="logo" />
        <div className="flex flex-col">
          <h1 className="text-black text-center">TeeWangKlong</h1>
          <hr />
          <div className="flex justify-between items-center">
            <span className="mr-4">Home</span>
            <span className="mr-4">Trip Review</span>
            <span>Cafe</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavHeader;
