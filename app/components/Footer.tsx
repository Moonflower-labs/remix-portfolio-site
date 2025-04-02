import { BiLogoTypescript, BiLogoPostgresql } from 'react-icons/bi'
import { DiCss3, DiMysql } from 'react-icons/di'
import { FaHtml5, FaNode, FaPython, FaReact } from 'react-icons/fa'
import { RiJavascriptFill } from 'react-icons/ri'
import { SiDjango, SiFlask, SiTailwindcss } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className="footer p-10 bg-primary/80 text-primary-content">
      <aside>
        <p className="font-bold">
          <span className='text-lg'>Moonflower Labs</span> <br />Providing reliable tech since 2022
        </p>
        <p>&copy; {new Date().getFullYear()}</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col grid-rows-2 md:grid-rows-1 gap-4">
          <FaHtml5 size={24} />
          <DiCss3 size={24} />
          <RiJavascriptFill size={24} />
          <BiLogoTypescript size={24} />
          <FaNode size={24} />
          <FaReact size={24} />
          <FaPython size={24} />
          <SiDjango size={24} />
          <SiFlask size={24} />
          <SiTailwindcss size={24} />
          <DiMysql size={24} />
          <BiLogoPostgresql size={24} />
        </div>
      </nav>
    </footer>
  )
}
