import { logoIconsList, textDisplayList } from "../constants";

// const LogoIcon = ({ icon }) => {
//   return (
//     <div className="flex-none flex-center marquee-item">
//       <img src={icon.imgPath} alt={icon.name} />
//     </div>
//   );
// };

const TextDisplay = ({ text }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <p>{text.textValue}</p>
    </div>
  );
};

const LogoShowcase = () => (
  <div className="md:my-20 my-10 relative">
    <div className="gradient-edge" />
    <div className="gradient-edge" />

    <div className="marquee h-52">
      <div className="marquee-box md:gap-12 gap-5">
        {/* {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}

        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))} */}

        {textDisplayList.map((text, index) => (
          <TextDisplay key={index} text={text} />
        ))}

        {textDisplayList.map((text, index) => (
          <TextDisplay key={index} text={text} />
        ))}
      </div>
    </div>
  </div>
);

export default LogoShowcase;
