const PhoneBgGradient = () => {
  return (
    <>
      <div
        className="absolute bottom-[-2px] w-full md:h-1/3 xl:h-[254px]"
        style={{
          background:
            "linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%)",
        }}
      />
      <div
        className="absolute bottom-[-2px] w-full h-1/2"
        style={{
          background:
            "linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%)",
        }}
      />
    </>
  );
};

const BgGradient = () => {
  return (
    <>
      <div
        className="absolute bottom-[-2px] w-full md:h-1/2 xl:h-[254px]"
        style={{
          background:
            "linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%)",
        }}
      />
      <div
        className="absolute bottom-[-2px] w-full h-1/2"
        style={{
          background:
            "linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%)",
        }}
      />
    </>
  );
};

export { BgGradient, PhoneBgGradient };
