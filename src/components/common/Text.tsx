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

export { MenuLinkText, DropdownMenuLinkText };
