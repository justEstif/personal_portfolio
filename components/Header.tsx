import { SocialIcon } from "react-social-icons";

type Props = {};

const Header = ({}: Props) => {
  return (
    <header className="flex sticky top-0 z-20 justify-between items-start p-5 mx-auto max-w-7xl xl:items-center">
      {/* TODO: Add transition to the navbar */}
      <div className="flex flex-row items-center transition ease-in-out delay-150">
        <SocialIcon
          url="https://youtube.com/jaketrent"
          fgColor="gray"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://youtube.com/jaketrent"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://youtube.com/jaketrent"
          fgColor="gray"
          bgColor="transparent"
        />
      </div>
      <div className="flex flex-row items-center text-green-300 cursor-pointer">
        <SocialIcon
          // TODO: Remove the cursor-pointer
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="hidden text-sm text-gray-400 uppercase md:inline-flex">
          Get In Touch
        </p>
      </div>
    </header>
  );
};

export default Header;
