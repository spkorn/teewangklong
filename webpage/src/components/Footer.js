import image from "../photos/images";

function Footer() {
  return (
    <footer className="fixed bottom-0 bg-black">
      <img
        src={image.footer}
        alt="footer"
        className="w-screen h-96 object-cover opacity-60"
      />
      <div className="h-5 px-10 py-2 flex justify-between items-center text-white text-xs">
        <div>ที่วางกล้อง</div>
        <div className="flex justify-evenly items-center">
          <span className="p-2 cursor-pointer">About</span>
          <span className="p-2 cursor-pointer">FB Page</span>
          <span className="p-2 cursor-pointer">Contact</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
