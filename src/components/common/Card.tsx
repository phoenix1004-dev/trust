type Props = {
  title: string;
  sub?: string;
  desc?: string;
  image?: any;
  height?: number;
};

const Card: React.FC<Props> = ({ title, sub, desc, image, height = 552 }) => {
  return (
    <div
      className="relative flex flex-col w-[368px] overflow-hidden rounded-[32px] border border-solid border-[#18181a] bg-[#09090a]"
      style={{ height: height }}
    >
      <div className="absolute top-[16px] left-[16px] right-[16px] w-[336px] h-[336px]">
        <div className="relative w-full h-full overflow-hidden rounded-[32px]">
          <div className="absolute left-1/2 -translate-x-1/2 w-full">
            <img className="w-full h-full" src={image} alt={title} />
          </div>
        </div>
      </div>
      <div className="relative grow pt-[368px] pb-[32px] px-[16px]">
        <div className="relative z-[2] px-[16px]">
          <div className="mb-[12px] text-[24px] leading-[20px] font-medium text-[rgb(248_248_248/0.95)]">
            {title}
          </div>
          <div className="mb-[24px] text-[16px] leading-[16px] font-medium text-[rgb(248_248_248/0.5)]">
            {sub}
          </div>
          <div className="mb-[24px] text-[16px] leading-[16px] font-medium text-[rgb(248_248_248/0.5)]">
            {desc}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
