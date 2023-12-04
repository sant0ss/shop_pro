import React from "react";
import { AiOutlineInstagram, AiFillTwitterSquare, AiFillFacebook } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";

export default function Footer() {
  const socialIcons = [
    <AiOutlineInstagram key="instagram" />,
    <AiFillFacebook key="facebook" />,
    <AiFillTwitterSquare key="twitter" />,
    <BiLogoGmail key="gmail" />
  ];

  const sections = [
    {
      sectionHeader: "Categorias",
      sectionCategories: ["Masculino", "Feminino", "Infantil", "Acessorios", "Calçados"]
    },
    {
      sectionHeader: "Minha Conta",
      sectionCategories: ["Painel", "Meus Pedidos", "Minhas Avaliações", "Meu Perfil", "Política de Privacidade"]
    },
    {
      sectionHeader: "Links",
      sectionCategories: ["Suporte", "Mais Vendidos", "Novos Lançamentos"]
    }
  ];

  return (
    <div className="bg-slate-800 md:flex block justify-between text-white px-40 py-10 bottom-0 left-0 right-0">
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <h2 className="tracking-widest uppercase font-bold md:mt-0 mt-8 text-lg md:text-left text-center">{section.sectionHeader}</h2>
          <ul className="text-sm md:text-left text-center mt-2">
            {section.sectionCategories.map((category, categoryIndex) => (
              <li className="pt-3 text-zinc-400 hover:text-zinc-100" key={categoryIndex}><a href="">{category}</a></li>
            ))}
          </ul>
        </div>
      ))}
      <div>
        <h2 className="tracking-widest uppercase md:text-left text-center md:mt-0 mt-8 font-bold text-lg">Redes Sociais</h2>
        <div className="social-icons flex">
          {socialIcons.map((icon, iconIndex) => (
            <div className="text-3xl pt-8 pr-4 md:m-0 m-auto text-zinc-400 hover:text-zinc-100 cursor-pointer" key={iconIndex}>{icon}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
