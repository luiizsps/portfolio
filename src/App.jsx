import './App.css'

import chatIcon from './assets/icons/chat.svg'
import chartIcon from './assets/icons/chart.svg'
import githubIcon from './assets/icons/github.svg'
import linkedinIcon from './assets/icons/linkedin.svg'
import monitorIcon from './assets/icons/monitor.svg'
import whatsappIcon from './assets/icons/whatsapp.svg'

import notebookImg from './assets/images/notebook.webp'
import profilePicImg from './assets/images/profile-pic.webp'
import telephone from './assets/images/telephone.webp'

function App() {
  return (
    <div className="container">

      {/* navigation */}
      <nav id="navigation" className='border-b border-gray-700'>
        <div className='nav-title roboto-condensed'>Luiz Passos</div>
        <div className='nav-options'>
          <a href="https://github.com/luiizsps" className="nav-projects">Projetos</a>
          <a href="#contact" className='nav-contact rounded-3xl shadow-sm'>Contate-me</a>
        </div>
      </nav>

      {/* self presentation */}
      <section className='presentation'>
        <div className="presentation-content">
          <p className='presentation-title roboto-condensed'>Olá! Sou Luiz.</p>
          <p className='presentation-text'>Desenvolvo soluções baseadas em dados e inteligência artificial.</p>
          <div className='presentation-options'><a className='presentation-button' href="#contact">Trabalhe comigo</a></div>
        </div>
        <div className='profile-pic-container'><img src={profilePicImg} alt="profile picture" className="profile-pic" /></div>
      </section>

      {/* services */}
      <section className="services">
        <div className='services-pic-container'><img src={notebookImg} alt="white keyboard" className='services-pic' /></div>
        <div className='services-content'>
          <div><p className='services-title roboto-condensed'>Como posso ajudar</p></div>
          <div className='artificial-inteligence-service'>
            <p className='service-title roboto-condensed'>Inteligência Artificial</p>
            <p className='service-text roboto-condensed'>Atuo no desenvolvimento de soluções baseadas em inteligência artificial e 
              aprendizado de máquina, com foco em análise de dados, modelagem preditiva, 
              automação e apoio à tomada de decisão.</p>
          </div>
          <div className='web-development-service'>
            <p className='service-title roboto-condensed'>Desenvolvimento Web</p>
            <p className='service-text roboto-condensed'> Desenvolvo aplicações web modernas, responsivas e escaláveis, 
              focadas em performance, usabilidade e experiência do usuário.</p>
          </div>
          <div className='soft-skill-service'>
            <p className='service-title roboto-condensed'>Confiabilidade</p>
            <p className='service-text roboto-condensed'> Atuo com foco em organização, cumprimento de prazos e alto padrão de qualidade, 
              buscando entregas consistentes e fáceis de manter.</p>
          </div>
        </div>
      </section>

      {/* products */}
      <section className='products'>
        <div className='product-container'>
          <img src={chatIcon} alt="chat icon" className="products-icon"/>
          <p className='product-title roboto-condensed'>Chatbots</p>
          <p className="product-description roboto-condensed">
            Desenvolvimento de chatbots inteligentes para automação de atendimento e suporte ao usuário.
          </p>
        </div>
        <div className='product-container'>
          <img src={monitorIcon} alt="monitor icon" className='products-icon'/>
          <p className='product-title roboto-condensed'>Web</p>
          <p className="product-description roboto-condensed">
            Criação de aplicações web modernas, responsivas e focadas em desempenho e usabilidade.
          </p>
        </div>
        <div className='product-container'>
          <img src={chartIcon} alt="chart icon" className='products-icon'/>
          <p className='product-title roboto-condensed'>Analytics</p>
          <p className="product-description roboto-condensed">
            Análise e visualização de dados para apoiar a tomada de decisão.
          </p>
        </div>
      </section>

      {/* Technologies */}
      <section className='technologies'>
        <p className='technologies-title roboto-condensed'>Tecnologias</p>
        <div className='technologies-container'>
          {/* Data */}
          <div className='technologies-column'>
            <div className='technology-container'>
              <p className='technology-title roboto-condensed'>Python</p>
              <p className="technology-description roboto-condensed">
                Análise de dados, automação de processos e desenvolvimento de modelos de machine learning.
              </p>
            </div>
            <div className='technology-container'>
              <p className='technology-title roboto-condensed'>PostgreSQL | MySQL</p>
              <p className="technology-description roboto-condensed">
                Modelagem e gerenciamento de bancos de dados relacionais para aplicações e análise de dados.
              </p>
            </div>
            <div className='technology-container'>
              <p className='technology-title roboto-condensed'>LangChain</p>
              <p className="technology-description roboto-condensed">
                Criação de agentes e pipelines inteligentes baseados em LLMs para automação.
              </p>
            </div>
            <div className='technology-container'>
              <p className='technology-title roboto-condensed'>Linux</p>
              <p className="technology-description roboto-condensed">
                Ambiente principal de desenvolvimento, com foco em produtividade e controle do sistema.
              </p>
            </div>
          </div>

          {/* Frontend */}
          <div className='technologies-column'>
            <div className='technology-container'>
              <p className='technology-title roboto-condensed'>JavaScript</p>
              <p className="technology-description roboto-condensed">
                Interatividade, manipulação do DOM e lógica no frontend.
              </p>
            </div>
            <div className='technology-container'>
              <p className='technology-title roboto-condensed'>HTML5 | CSS</p>
              <p className="technology-description roboto-condensed">
                Estruturação semântica e estilização de interfaces web responsivas e acessíveis.
              </p>
            </div>
            <div className='technology-container'>
              <p className='technology-title roboto-condensed'>React</p>
              <p className="technology-description roboto-condensed">
                Desenvolvimento de interfaces modernas, componentizadas e escaláveis para aplicações web.
              </p>
            </div>
            <div className='technology-container'>
              <p className='technology-title roboto-condensed'>Tailwind</p>
              <p className="technology-description roboto-condensed">
                Estilização rápida e consistente utilizando classes utilitárias para criação de layouts modernos.
              </p>
            </div>
          </div>

          {/* Backend */}
          <div className='technologies-column'>
            <div className='technology-container'>
              <p className='technology-title roboto-condensed'>Java</p>
              <p className="technology-description roboto-condensed">
                Desenvolvimento de aplicações robustas e escaláveis com foco em desempenho e manutenção.
              </p>
            </div>
            <div className='technology-container'>
              <p className='technology-title roboto-condensed'>SpringBoot</p>
              <p className="technology-description roboto-condensed">
                Criação de APIs REST e serviços backend com configuração simplificada e alta produtividade.
              </p>
            </div>
            <div className='technology-container'>
              <p className='technology-title roboto-condensed'>Docker</p>
              <p className="technology-description roboto-condensed">
                Containerização de aplicações para garantir ambientes isolados, reproduzíveis e portáveis.
              </p>
            </div>
            <div className='technology-container'>
              <p className='technology-title roboto-condensed'>Git | Github</p>
              <p className="technology-description roboto-condensed">
                Controle de versão e gerenciamento do ciclo de vida do código.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className='contact' id='contact'>
        <div className='contact-information'>
          <p className='contact-title roboto-condensed'>Entre em Contato</p>
          <div className='contact-items'>
            <a href="https://wa.me/5575993028883">
              <img src={whatsappIcon} alt="whatsapp icon" className='contact-icon'/>
            </a>
            <a href="https://www.linkedin.com/in/luiz-sergio-passos/">
              <img src={linkedinIcon} alt="linkedin icon" className='contact-icon'/>
            </a>
            <a href="http://www.github.com/luiizsps">
              <img src={githubIcon} alt="github icon" className='contact-icon'/>
            </a>
          </div>
        </div>
        <div className='contact-img-container'>
          <img src={telephone} alt="telephone" className='contact-img'/>
        </div>

      </section>

    </div>
    
  );
}

export default App
