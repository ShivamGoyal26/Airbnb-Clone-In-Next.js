const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 px-32 space-y-10 md:space-y-0 text-gray-500 bg-gray-100 py-16 ">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-semibold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-semibold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not real site</p>
        <p>{"It's pretty awesome clone"}</p>
        <p>Refferals accepted</p>
        <p>Papafam</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-semibold">HOST</h5>
        <p>Papa React</p>
        <p>Presents</p>
        <p>Zero to full stack hero</p>
        <p>Hunderds of students</p>
        <p>Join now</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-semibold">SUPPORT</h5>
        <p>Help Center</p>
        <p>Trust & Saftey</p>
        <p>Say Hi youtube</p>
        <p>Easter Eggs</p>
        <p>For the win</p>
      </div>
    </div>
  );
};

export default Footer;
