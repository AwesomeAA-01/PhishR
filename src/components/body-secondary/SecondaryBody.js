import "./SecondaryBody.css";
import BackgroundShape from "../../assets/BackgroundShape.svg";

export function SecondaryBody() {
  return (
    <>
      <div className="relative">
        <img src={BackgroundShape} alt="BackgroundImage" className="mt-1 w-full max-sm:h-72 sm:max-lg:h-80 lg:h-96" />
        <p className="text-white font-semibold text-roboto text-center absolute max-sm:top-12 top-16 lg:top-24 text-2xl
        min-[350px]:left-[27%] min-[400px]:left-[33%] min-[520px]:left-[38%] md:left-[40%] lg:left-[42%]
        min-[350px]:text-xl lg:text-3xl">
          How does it Work ?
        </p>
        <p className="absolute text-roboto text-white font-light text-center
         max-sm:text-xs sm:text-sm md:text-base lg:text-lg max-sm:top-20 top-24 lg:top-36 max-md:mx-7 md:mx-14 lg:mx-20">
          Phishing stands as a pervasive online deception tactic wherein malevolent entities masquerade as authentic platforms. In response to this ever-present peril, we've instituted a sophisticated framework amalgamating diverse methodologies to efficiently unearth fraudulent URLs. Our approach features the utilization of an Artificial Neural Network, honed through exposure to a dataset encompassing 600,000 URLs, further bolstered by exhaustive scrutiny of the top 1 million URLs across the global network. Moreover, we fortify our defenses by cross-referencing these URLs with blacklists sourced from reputable entities such as Google, Norton, URLVoid, among others. These meticulous enhancements fortify our system's capacity to discern and shield users from nefarious online domains, thus furnishing a formidable barricade against phishing stratagems.
          <br /> <br />
          <span className="font-bold sm:text-sm underline text-amber-400 hover:text-white mb-5">
            <a href="#" target="_blank" rel="noreferrer">
              LEARN MORE </a> </span>
        </p>
      </div>
    </>
  );
}
