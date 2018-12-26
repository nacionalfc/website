import React from 'react'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <article>
      <header className="entry-header">
        <h1 className="entry-title" style={{ 'text-align': 'center' }}>
          FELIZ NATAL E PRÓSPERO ANO NOVO
        </h1>
        <div className="entry-meta" style={{ 'text-align': 'center' }}>
          <span className="posted-on">
            &nbsp;
          </span>
        </div>
      </header>

      <div className="entry-content">
        <p style={{'text-align':'center'}}><strong>&nbsp;</strong></p>
        <p>
          O Nacional Futebol Clube deseja a todos os seus diretores,
          conselheiros, funcionários, colaboradores e torcedores e seus 
          familiares, um Feliz Natal e Próspero Ano Novo. Que possamos 
          juntos celebrar a chegada de mais um ano, com harmonia e paz!
        </p>
        <p>Boas Festas!</p>        
      </div>
    </article>
  </Layout>
)

export default IndexPage
