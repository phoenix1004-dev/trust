import { aboutMission, normalLine, walletPhone1 } from "../../assets/image";

const Mission = () => {
  return (
    <section className="w-full px-4 py-16 relative overflow-hidden">
      <img
        src={aboutMission}
        alt="Background Pattern"
        className="absolute top-0 right-0 opacity-10 w-full h-full object-cover"
      />
      <div className="max-w-6xl mx-auto text-white relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <img src={normalLine} alt="Divider" className="mb-6 w-24" />
            <p className="text-gray-300 text-lg leading-relaxed">
              In the rapidly evolving digital finance landscape, safeguarding
              assets against emerging threats is paramount. TrustVault is
              committed to empowering individuals and organizations with
              cutting-edge security solutions that offer both robust protection
              and user-friendly experiences.
            </p>
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

export default Mission;
