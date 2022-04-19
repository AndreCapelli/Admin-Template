import Image from "next/image";
import Head from "next/head";
import Router from "next/router";
import loading from "../../../public/images/loading.gif";
import useAuth from "../../data/hook/useAuth";

export default function ForcarAuth(props) {
  const { usuario, carregando } = useAuth();

  function renderConteudo() {
    return (
      <>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `if(!document.cookie?.includes("admin-template-logado-auth")){
                  window.location.href = "/autenticacao"
              }`,
            }}
          />
        </Head>
        {props.children}
      </>
    );
  }

  function renderLoading() {
    return (
      <div
        className={`
      flex justify-center items-center h-screen`}
      >
        <Image src={loading} />
      </div>
    );
  }

  if (!carregando && usuario?.email) {
    return renderConteudo();
  } else if (carregando) {
    renderLoading();
  } else {
    Router.push("/autenticacao");
    return null;
  }
}
