type NormalTextProps = {
  className?: string;
  children: React.ReactNode;
};

const MenuLinkText: React.FC<NormalTextProps> = ({ className, children }) => {
  return (
    <p className={`text-[17px] px-5 py-4 text-[#94969d] ${className}`}>
      {children}
    </p>
  );
};

const DropdownMenuLinkText: React.FC<NormalTextProps> = ({
  className,
  children,
}) => {
  return (
    <p className={`text-[17px] px-5 py-4 text-[#94969d] ${className}`}>
      {children}
    </p>
  );
};

const TitleText: React.FC<NormalTextProps> = ({ className, children }) => {
  return (
    <h1
      className={`text-[34px] md:text-[60px] xl:text-[64px] text-center font-bold ${className}`}
    >
      {children}
    </h1>
  );
};

const HeaderText: React.FC<NormalTextProps> = ({ className, children }) => {
  return (
    <h1
      className={`text-[38px] md:text-[58px] text-center font-bold ${className}`}
    >
      {children}
    </h1>
  );
};

const CardTitleText: React.FC<NormalTextProps> = ({ className, children }) => {
  return (
    <h1 className={`text-[22px] font-semibold ${className}`}>{children}</h1>
  );
};

const CardSubText: React.FC<NormalTextProps> = ({ className, children }) => {
  return (
    <p className={`text-[18px] text-[#94969d] ${className}`}>{children}</p>
  );
};

const CardDescText: React.FC<NormalTextProps> = ({ className, children }) => {
  return (
    <p className={`text-[18px] text-[#94969d] ${className}`}>{children}</p>
  );
};

const NormalText: React.FC<NormalTextProps> = ({ className, children }) => {
  return (
    <p className={`text-[18px] text-[#94969d] ${className}`}>{children}</p>
  );
};

export {
  NormalText,
  CardTitleText,
  CardSubText,
  CardDescText,
  MenuLinkText,
  DropdownMenuLinkText,
  TitleText,
  HeaderText,
};
