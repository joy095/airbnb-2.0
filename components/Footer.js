function Footer() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 space-y-10 px-32 py-14 bg-gray-100 text-gray-600">
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">ABOUT</h5>
          <p>How Airbnb works</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Luxe</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">Sefty</h5>
          <p>Help Center</p>
          <p>Trust & SEfty</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">Privacy</h5>
          <p>Privacy</p>
          <p>Terms</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">Details</h5>
          <p>Details</p>
          <p>Destination</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
