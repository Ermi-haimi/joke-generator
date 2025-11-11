import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-linear-to-r from-blue-400 to-blue-300 p-5 text-white flex flex-col items-center">
      <p>ermias haimanot</p>
      <div className="flex gap-2">
        <a href="https://github.com/Ermi-haimi" target="_blank">
          <FaGithub className="text-black text-xl" />
        </a>
        <a href="https://www.linkedin.com/in/ermiashtsegaye/" target="_blank">
          <FaLinkedin className="text-blue-600 text-xl" />
        </a>
        <a href="https://t.me/ermiasHT" target="_blank">
          <FaTelegramPlane className="text-white text-xl" />
        </a>
      </div>
      <p className="text-center text-gray-500">
        The developer does not endorse or take responsibility for any of the
        content displayed.
      </p>
    </div>
  );
}

export default Footer;
