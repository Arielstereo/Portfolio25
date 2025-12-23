"use client";
import { useState } from "react";

// react icons
import { MdOutlineCall, MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { CgFacebook } from "react-icons/cg";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import axios from "axios";
import { toast } from "sonner";

const ContactForm = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const { username, email, message } = data;

  const sendEmail = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const res = await axios.post("/api/send", {
        username,
        email,
        message,
      });

      // The API now returns { ok: true | false, data?, error? }
      if (res.data?.ok) {
        setIsLoading(false);
        toast.success("Mensaje enviado con éxito", {
          duration: 5000,
          position: "bottom-center",
        });
        setData({
          username: "",
          email: "",
          message: "",
        });
      } else {
        console.error("Server returned error:", res.data);
        setIsLoading(false);
        toast.error(res.data?.error || "Error al enviar el mensaje", {
          duration: 5000,
          position: "bottom-center",
        });
      }
    } catch (error) {
      console.error("Send email failed:", error);
      const serverError =
        error?.response?.data?.error ||
        error?.message ||
        "Error al enviar el mensaje";
      toast.error(serverError, {
        duration: 5000,
        position: "bottom-center",
      });
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full md:w-3/4 my-16 grid grid-cols-1 md:grid-cols-2 gap-[35px] boxShadow p-[30px] rounded-xl">
      {/*  informations  */}
      <aside className="w-full bg-gray-800 dark:bg-slate-900 flex flex-col justify-between p-[25px] rounded-md">
        <div>
          <h1 className="text-[2rem] font-[600] leading-[35px] text-white">
            Contacto
          </h1>
          <p className="text-[0.9rem] mt-1 mb-8 text-white">
            Enviame un mensaje y me pondré en contacto contigo.
          </p>
        </div>

        <div className="flex flex-col gap-[20px] text-gray-300">
          <p className="flex items-center gap-[8px]">
            <MdOutlineCall />
            11 2692-2128
          </p>
          <p className="flex items-center break-all gap-[8px]">
            <MdOutlineEmail />
            arielfabmartinez@gmail.com
          </p>
          <p className="flex items-center gap-[8px]">
            <IoLocationOutline />
            MonteCastro, CABA, Argentina.
          </p>
        </div>

        <div className="flex gap-[15px] flex-wrap text-black mt-8">
          <a className="text-[1.2rem] p-2 cursor-pointer rounded-full  bg-sky-500 text-white hover:bg-white hover:text-sky-300 transition-all duration-300 boxShadow">
            <BsGithub />
          </a>
          <a className="text-[1.2rem] p-2 cursor-pointer rounded-full  bg-sky-500 text-white hover:bg-white hover:text-sky-300 transition-all duration-300 boxShadow">
            <BsLinkedin />
          </a>
        </div>
      </aside>

      {/* form area */}
      <form onSubmit={sendEmail} className="pt-[20px]">
        <div className="flex flex-col sm:flex-row items-center gap-[30px]">
          <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
            <label className="text-[1rem] text-sky-400">Nombre</label>
            <input
              name="username"
              value={data.username}
              onChange={handleChange}
              required
              type="text"
              className="peer dark:bg-transparent dark:text-[#abc2d3] dark:border-slate-700 border-gray-300 border-b outline-none focus:border-[#3B9DF8] w-full text-gray-400 transition-colors duration-300"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-[30px] mt-10">
          <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
            <label className="text-[1rem] text-sky-400">Email</label>
            <input
              name="email"
              value={data.email}
              onChange={handleChange}
              required
              type="email"
              className="peer dark:bg-transparent dark:text-[#abc2d3] dark:border-slate-700 border-gray-300 border-b outline-none focus:border-[#3B9DF8] w-full text-gray-400 transition-colors duration-300"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[5px] w-full mt-10">
          <label className="text-[1rem] text-sky-400">Mensaje</label>
          <textarea
            name="message"
            value={data.message}
            onChange={handleChange}
            required
            className="peer dark:bg-transparent dark:text-[#abc2d3] dark:border-slate-700 min-h-[100px] border-gray-300 border-b resize-none outline-none w-full text-gray-400 transition-colors focus:border-[#3B9DF8] duration-300"
          ></textarea>
        </div>

        <div className="w-full flex items-center sm:items-end justify-center sm:justify-end mt-5">
          <button
            disabled={isLoading}
            type="submit"
            aria-busy={isLoading}
            className={`dark:border-slate-700 dark:text-[#abc2d3] dark:hover:bg-slate-900 dark:hover:text-[#abc2d3] dark:hover:border-slate-700 py-2.5 px-6 bg-gray-800 border transition-all duration-300 hover:border-gray-800 hover:text-gray-800 hover:bg-transparent text-white rounded-md text-[1rem] mt-[10px] w-max ${
              isLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                Enviando...
              </span>
            ) : (
              "Enviar Mensaje"
            )}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
