import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { IconWarning } from "../components/icons";
import useAuth from "../data/hook/useAuth";

export default function Autentication() {
  const { usuario, loginGoogle } = useAuth();

  const [modo, setModo] = useState<"login" | "cadastro">("login");
  const [erro, setErro] = useState("");

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function exibeErro(msg, tempo = 10) {
    setErro(msg);
    setTimeout(() => setErro(null), tempo * 1000);
  }

  function submit() {
    if (modo === "login") {
    } else {
    }
  }

  return (
    <div className={`flex h-screen items-center justify-center`}>
      <div className={`hidden md:block md:w-1/2 lg:w-2/3`}>
        <img
          src="https://source.unsplash.com/random"
          alt="Imagem Tela Autentication"
          className={`h-screen w-full object-cover`}
        />
      </div>
      <div className={`m-10 w-full md:w-1/2 lg:w-1/3`}>
        <h1 className={`text-3xl font-bold mb-5 `}>
          {modo === "login" ? "Entre com a Sua Conta" : "Cadastre-se"}
        </h1>

        {erro ? (
          <div
            className={`flex items-center
          bg-red-400 text-white py-3 px-5 my-2 border border-red-700 rounded-lg`}
          >
            {IconWarning}
            <span className={`ml-2 text-sm`}>{erro}</span>
          </div>
        ) : (
          false
        )}

        <AuthInput
          label="Email"
          tipo="email"
          value={email}
          valueChange={setEmail}
          obrigatorio
        />
        <AuthInput
          label="Senha"
          tipo="password"
          value={senha}
          valueChange={setSenha}
          obrigatorio
        />

        <button
          onClick={submit}
          className={`
      w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6`}
        >
          {modo === "login" ? "Entrar" : "Cadastre-se"}
        </button>
        <hr className={`my-6 border-gray-300`} />
        <button
          onClick={loginGoogle}
          className={`
      w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3`}
        >
          {modo === "login" ? "Entrar com Google" : "Cadastre-se com Google"}
        </button>

        {modo === "login" ? (
          <p className={`mt-8`}>
            Não tem Conta?
            <a
              onClick={() => setModo("cadastro")}
              className={`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer`}
            >
              {" "}
              Criar Conta
            </a>
          </p>
        ) : (
          <p className={`mt-8`}>
            Já possui Conta?
            <a
              onClick={() => setModo("login")}
              className={`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer`}
            >
              {" "}
              Fazer Login
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
