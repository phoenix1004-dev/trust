import { addtional1, key1, key2, walletPhone1 } from "../../assets/image";

const Additional = () => {
  return (
    <section className="w-full px-4 py-16">
      <div className="max-w-6xl mx-auto text-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Additional Features</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <img
                  src={addtional1}
                  alt="Interface"
                  className="w-12 h-12 mt-1"
                />
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    User-Friendly Interface
                  </h3>
                  <p className="text-gray-300">
                    Navigate your digital assets with ease using our sleek and
                    intuitive interface, designed for users of all experience
                    levels.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <img src={key1} alt="Access" className="w-12 h-12 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">24/7 Access</h3>
                  <p className="text-gray-300">
                    Enjoy uninterrupted access to your assets around the clock
                    with our reliable platform.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <img src={key2} alt="Recovery" className="w-12 h-12 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Instant Account Recovery
                  </h3>
                  <p className="text-gray-300">
                    Rest easy knowing your account can be swiftly and securely
                    recovered in case of device loss or theft.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={walletPhone1}
              alt="Security Illustration"
              className="w-4/5 max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Additional;
