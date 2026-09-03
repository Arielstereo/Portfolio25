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
    <section className="w-full md:w-4/5 lg:w-3/4 my-16 grid grid-cols-1 md:grid-cols-2 gap-[35px] surface-1 border border-border-subtle rounded-2xl p-[30px]">
      {/*  informations  */}
      <aside className="w-full surface-2 rounded-xl flex flex-col justify-between p-[28px]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-text-primary">
            Contacto
          </h1>
          <p className="text-[0.9rem] mt-2 mb-10 text-text-secondary">
            Contame sobre tu proyecto — sitio, app o automatización con IA — y
            te respondo a la brevedad.
          </p>
        </div>

        <div className="flex flex-col gap-5 text-text-secondary">
          <p className="flex items-center gap-3 text-sm">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-bg-raised border border-border-subtle text-accent">
              <MdOutlineCall />
            </span>
            <span className="tabular">11 2692-2128</span>
          </p>
          <p className="flex items-center break-all gap-3 text-sm">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-bg-raised border border-border-subtle text-accent">
              <MdOutlineEmail />
            </span>
            arielfabmartinez@gmail.com
          </p>
          <p className="flex items-center gap-3 text-sm">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-bg-raised border border-border-subtle text-accent">
              <IoLocationOutline />
            </span>
            MonteCastro, CABA, Argentina.
          </p>
        </div>

        <div className="flex gap-3 flex-wrap mt-10">
          <a
            aria-label="GitHub"
            className="inline-flex items-center justify-center w-10 h-10 text-accent rounded-full border border-border-soft hover:bg-accent hover:text-white transition-colors duration-300"
          >
            <BsGithub />
          </a>
          <a
            aria-label="LinkedIn"
            className="inline-flex items-center justify-center w-10 h-10 text-accent rounded-full border border-border-soft hover:bg-accent hover:text-white transition-colors duration-300"
          >
            <BsLinkedin />
          </a>
        </div>
      </aside>

      {/* form area */}
      <form onSubmit={sendEmail} className="pt-[10px]">
        <div className="flex flex-col sm:flex-row items-center gap-[30px]">
          <div className="flex flex-col gap-2 w-full sm:w-[50%]">
            <label className="text-[0.85rem] font-medium text-text-secondary">
              Nombre
            </label>
            <input
              name="username"
              value={data.username}
              onChange={handleChange}
              required
              type="text"
              placeholder="Tu nombre"
              className="peer w-full text-text-primary bg-transparent border-b border-border-subtle outline-none transition-colors duration-300 focus:border-accent placeholder:text-text-faint"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-[30px] mt-8">
          <div className="flex flex-col gap-2 w-full sm:w-[50%]">
            <label className="text-[0.85rem] font-medium text-text-secondary">
              Email
            </label>
            <input
              name="email"
              value={data.email}
              onChange={handleChange}
              required
              type="email"
              placeholder="tu@email.com"
              className="peer w-full text-text-primary bg-transparent border-b border-border-subtle outline-none transition-colors duration-300 focus:border-accent placeholder:text-text-faint"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full mt-8">
          <label className="text-[0.85rem] font-medium text-text-secondary">
            Mensaje
          </label>
          <textarea
            name="message"
            value={data.message}
            onChange={handleChange}
            required
            placeholder="¿En qué puedo ayudarte?"
            className="peer w-full text-text-primary bg-transparent border-b border-border-subtle min-h-[110px] resize-none outline-none transition-colors duration-300 focus:border-accent placeholder:text-text-faint"
          ></textarea>
        </div>

        <div className="w-full flex items-center justify-center sm:justify-end mt-7">
          <button
            disabled={isLoading}
            type="submit"
            aria-busy={isLoading}
            className={`btn-action ${
              isLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-current"
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
