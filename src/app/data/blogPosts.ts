export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  coverImage: string;
  featured?: boolean;
  // Para posts com estrutura especial (como o dilema do prisioneiro)
  contentBeforeDilemma?: string;
  contentMiddle?: string;
  contentAfterDilemma?: string;
  // Para posts com newsletter no meio
  contentBeforeNewsletter?: string;
  contentAfterNewsletter?: string;
  // Para posts com estrutura simples
  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "estrutura-capital-viabilidade-projetos",
    title: "Nem toda boa ideia merece sair do papel: Como o custo de capital condiciona a decisão de investir",
    subtitle: "Em tempos de juros altos, novas iniciativas precisam provar que geram valor acima do custo do dinheiro. Aprenda a analisar a viabilidade de projetos a partir da estrutura de capital.",
    category: "Negócios",
    date: "15 de Abril, 2026",
    readTime: "8 min",
    coverImage: "https://images.unsplash.com/photo-1573164574397-dd250bc8a598?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxibGFjayUyMHdvbWVuJTIwZW50cmVwcmVuZXVyJTIwYnVzaW5lc3MlMjBtZWV0aW5nJTIwb2ZmaWNlfGVufDF8fHx8MTc3NjI5NjYxMHww&ixlib=rb-4.1.0&q=80&w=1080",
    featured: true,
    contentBeforeNewsletter: `
      <p>Recentemente o Valor Econômico publicou um editorial chamado <a href="https://valor.globo.com/opiniao/coluna/inovacao-patina-no-brasil-com-juro-alto-e-baixo-crescimento.ghtml">"Inovação patina no Brasil com juro alto e baixo crescimento"</a>, no qual chama atenção para a deterioração do ambiente de investimento produtivo no país. Segundo dados da Pintec/IBGE, a taxa de empresas industriais inovadoras caiu para 64,4% em 2024, a terceira queda consecutiva e o menor nível desde 2021, movimento que coincide com um ciclo prolongado de juros elevados.</p>
     
      <p>Toda empresa gosta de falar sobre o futuro e novos projetos, porém inovar exige investimento e disposição para lidar com retorno incerto. A estrutura de capital de uma empresa, que é a forma como ela combina capital próprio e capital de terceiros, influencia diretamente a taxa mínima de retorno que os novos projetos precisam atingir. Se uma empresa se financia apenas com recursos dos sócios, por exemplo, ela pode aceitar projetos com retornos mais modestos. Por outro lado, se ela usa dívida, o projeto precisa gerar retorno suficiente para cobrir os juros e ainda remunerar o risco dos sócios.</p>

      <p>Além disso, mesmo usando recursos próprios, como lucros retidos ou dinheiro dos sócios, qualquer decisão deve ser analisada pelo prisma da estrutura de capital, que revela o preço do crescimento. Assim, duas empresas podem olhar para o mesmo projeto e chegar a conclusões diferentes simplesmente porque operam com estruturas de capital diferentes.</p>

      <p>No Brasil, a tomada de decisão de investimentos torna-se desafiadora quando consideramos o ambiente econômico marcado pela baixa poupança doméstica, forte absorção de recursos pelo setor público e uma estrutura em que parcela relevante do crédito é direcionado e pouco sensível à política monetária. Para controlar a inflação, a autoridade monetária precisa subir a taxa básica de juros, encarecendo o crédito usado pelas empresas.</p>

      <h2>O WACC e as fontes de financiamento da empresa</h2>

      <p>Toda empresa se financia com recursos próprios (aporte dos sócios ou lucros retidos) ou recursos de terceiros (como empréstimo bancário ou dívidas com fornecedores). A dívida já tem o custo explícito dos juros, já o capital próprio tem um custo implícito, que é o custo de oportunidade.</p>

      <p>Quando uma empresa combina essas duas fontes (o que normalmente ocorre), o custo total do capital é uma média ponderada entre elas. Essa média é conhecida como WACC (Weighted Average Cost of Capital), ou Custo Médio Ponderado de Capital (CMPC, sigla menos utilizada). Esse indicador representa a taxa mínima de retorno que a empresa precisa obter para satisfazer tanto os credores quanto os acionistas.</p>

      <p>O cálculo do WACC é feito pela fórmula:</p>

      <div class="wacc-formula-container">
        <div class="formula-main">
          <span class="formula-label">WACC =</span>
          <div class="formula-parts">
            <div class="formula-part capital-proprio">
              <span class="fraction">
                <span class="numerator">E</span>
                <span class="divider"></span>
                <span class="denominator">V</span>
              </span>
              <span class="multiply">×</span>
              <span class="variable">Ke</span>
            </div>
            <span class="plus">+</span>
            <div class="formula-part divida">
              <span class="fraction">
                <span class="numerator">D</span>
                <span class="divider"></span>
                <span class="denominator">V</span>
              </span>
              <span class="multiply">×</span>
              <span class="variable">Kd</span>
              <span class="multiply">×</span>
              <span class="parenthesis">(1 - T)</span>
            </div>
          </div>
        </div>

        <div class="variables-grid">
          <div class="variable-card">
            <span class="var-symbol">E</span>
            <span class="var-description">Capital próprio</span>
          </div>
          <div class="variable-card">
            <span class="var-symbol">D</span>
            <span class="var-description">Dívida</span>
          </div>
          <div class="variable-card">
            <span class="var-symbol">V</span>
            <span class="var-description">Valor total (E + D)</span>
          </div>
          <div class="variable-card">
            <span class="var-symbol">Ke</span>
            <span class="var-description">Custo do capital próprio</span>
          </div>
          <div class="variable-card">
            <span class="var-symbol">Kd</span>
            <span class="var-description">Custo da dívida</span>
          </div>
          <div class="variable-card">
            <span class="var-symbol">T</span>
            <span class="var-description">Alíquota de imposto</span>
          </div>
        </div>
      </div>

      <div class="note-box">
        <p>A parte que multiplica (1 - T) reflete o benefício fiscal da dívida. Os juros pagos são dedutíveis do lucro tributável, o que reduz a carga de impostos. Esse benefício torna a dívida, em muitos casos, mais barata do que parece à primeira vista.</p>
      </div>

      <p>Um erro comum, sobretudo em empresas menores ou mais concentradas na figura do sócio, é tratar o capital próprio como se fosse gratuito, já que não há gerente cobrando todo mês para pagar a parcela. Quando um sócio coloca recursos na empresa, ele deixa de aplicar aquele dinheiro em uma outra alternativa, como o investimento em títulos públicos.</p>

      <p>Sem essa lente, a empresa pode cair na ilusão de achar que qualquer projeto que dê algum retorno já seria suficiente. Se o sócio poderia ganhar mais em outra alternativa, com menos risco, o projeto empresarial talvez não tenha sido tão interessante.</p>
    `,
    contentAfterNewsletter: `
      <h2>Um exemplo prático</h2>

      <p>Imagine uma empresa que tenha a seguinte estrutura de capital:</p>

      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Fonte de Capital</th>
              <th>Valor</th>
              <th>Custo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Capital próprio (E)</td>
              <td>R$ 600.000</td>
              <td>15% ao ano</td>
            </tr>
            <tr>
              <td>Dívida (D)</td>
              <td>R$ 400.000</td>
              <td>10% ao ano</td>
            </tr>
            <tr class="total-row">
              <td><strong>Total (V)</strong></td>
              <td><strong>R$ 1.000.000</strong></td>
              <td>—</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>Suponha que a empresa pague 34% de impostos sobre o lucro (T = 0,34). O WACC seria calculado da seguinte forma:</p>

      <div class="wacc-calculation-container">
        <div class="calc-step-card">
          <div class="step-header">Passo 1: Substituir os valores na fórmula</div>
          <div class="calc-formula">
            <span class="calc-label">WACC =</span>
            <div class="calc-parts">
              <div class="calc-part">
                <span class="calc-fraction">
                  <span class="calc-num">600.000</span>
                  <span class="calc-div"></span>
                  <span class="calc-den">1.000.000</span>
                </span>
                <span class="calc-op">×</span>
                <span class="calc-val">15%</span>
              </div>
              <span class="calc-plus">+</span>
              <div class="calc-part">
                <span class="calc-fraction">
                  <span class="calc-num">400.000</span>
                  <span class="calc-div"></span>
                  <span class="calc-den">1.000.000</span>
                </span>
                <span class="calc-op">×</span>
                <span class="calc-val">10%</span>
                <span class="calc-op">×</span>
                <span class="calc-paren">(1 - 0,34)</span>
              </div>
            </div>
          </div>
        </div>

        <div class="calc-step-card">
          <div class="step-header">Passo 2: Simplificar as frações e cálculos</div>
          <div class="calc-formula">
            <span class="calc-label">WACC =</span>
            <div class="calc-parts">
              <div class="calc-part">
                <span class="calc-val">0,60</span>
                <span class="calc-op">×</span>
                <span class="calc-val">15%</span>
              </div>
              <span class="calc-plus">+</span>
              <div class="calc-part">
                <span class="calc-val">0,40</span>
                <span class="calc-op">×</span>
                <span class="calc-val">10%</span>
                <span class="calc-op">×</span>
                <span class="calc-val">0,66</span>
              </div>
            </div>
          </div>
        </div>

        <div class="calc-result-card">
          <div class="result-header">Resultado Final</div>
          <div class="calc-formula">
            <span class="calc-label">WACC =</span>
            <div class="calc-parts">
              <span class="calc-val">9%</span>
              <span class="calc-plus">+</span>
              <span class="calc-val">2,64%</span>
              <span class="calc-equals">=</span>
              <span class="calc-final">11,64%</span>
            </div>
          </div>
        </div>
      </div>

      <p>Isso significa que qualquer projeto que essa empresa avalie precisa gerar um retorno superior a 11,64% ao ano para ser considerado viável. Se gerar menos que isso, o projeto está destruindo valor, mesmo que pareça lucrativo em termos absolutos.</p>

      <h2>O custo do dinheiro e a seleção dos projetos</h2>
      
      <p>Muitos empresários tomam decisões de investimento olhando apenas para o retorno absoluto esperado do projeto. Como vimos, isso pode levar a escolhas ruins, já que um projeto não deve ser avaliado apenas pelo que promete render, mas também pelo custo do capital que o financia e pelo risco que carrega.</p>

      <p>A análise da estrutura de capital ajuda a explicar, ao menos em parte, a razão pela qual empresas perderam fôlego quando o assunto é inovação. Quando o custo de capital sobe, sobe também o custo de oportunidade e as empresas tornam-se mais seletivas e mais aversas ao risco. Como a inovação quase sempre exige recursos e certo apetite pela incerteza, muitos projetos bons acabam não saindo da gaveta.</p>

      <p>O retorno de qualquer investimento precisa ser suficiente para remunerar os sócios, cobrir o custo da dívida e compensar os riscos. Em tempos de juros altos, conhecer o WACC da empresa passa a ser uma ferramenta importante para filtrar melhor as decisões e evitar investimentos que destroem valor. A partir dessa lente, o empresário ou a empresária pode tomar decisões mais assertivas sobre onde, quando e como crescer.</p>
    `
  },
  {
    slug: "empresas-lucrativas-capital-giro",
    title: "Por que empresas lucrativas entram em crise? Uma visão sobre a gestão do capital de giro",
    subtitle: "Saiba por que vender mais nem sempre melhora a saúde financeira de uma empresa e como o capital de giro ajuda a medir esse risco.",
    category: "Negócios",
    date: "8 de Abril, 2026",
    readTime: "8 min",
    coverImage: "https://images.unsplash.com/photo-1741628713853-5c07ef9b4b62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBzaG9wcGluZyUyMG1hbGwlMjByZXRhaWwlMjBjdXN0b21lcnN8ZW58MXx8fHwxNzc1NjE3MzY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false,
    contentBeforeNewsletter: `
     <p><strong>Como uma empresa lucrativa consegue fechar as portas?</strong> No segundo quadrimestre de 2025 foram fechadas 942.049 empresas no Brasil, uma alta de 12,9% na comparação com o mesmo período no ano passado, segundo o relatório Mapa de Empresas do Ministério do Empreendedorismo.</p>

      <p>Quando esses números aparecem, o primeiro pensamento que se pode ter é de que a empresa vendeu pouco e não conseguiu sustentar os seus custos. Em muitos casos pode ser isso mesmo, mas existem empresas que mostram lucro e mesmo assim entram em crise com a expansão de suas vendas por má gestão do fluxo de caixa.</p>


      <p>Ao longo da minha experiência acompanhando empresas, uma das confusões mais recorrentes que observei com pequenos empreendedores foi eles acharem que o lucro registrado pelo aumento das vendas se converteria logo em caixa para cobrir os custos (também crescentes) da operação. Ou, pior ainda, aparecer no banco querendo um empréstimo de capital de giro quando, na verdade, a solução passa por outros instrumentos.</p>


      <p>Esse ponto costuma ser subestimado porque o crescimento, por si só, produz uma sensação de segurança. E é nesse descasamento entre o momento em que a empresa paga seus fornecedores e o momento em que recebe dos clientes que surge a necessidade de capital de giro. Quando esse intervalo se alonga sem o devido preparo, o crescimento pode pressionar o caixa e iniciar uma crise de liquidez.</p>


      <h2>O ciclo financeiro e o capital de giro</h2>


      <p>Toda operação de vendas tem o seu ciclo financeiro, que nada mais é do que o tempo entre o pagamento aos fornecedores e o efetivo recebimento dos clientes. Ele é importante porque mostra por quantos dias a empresa precisa sustentar a própria operação até que o dinheiro volte ao caixa.</p>
      
      <p>Muitos empresários não se dão conta, mas vale prestar atenção nisso porque crescer custa. Se a empresa vende mais, mas para isso precisa carregar mais estoque e esperar mais tempo para receber, ela passa a demandar mais recursos para continuar a girar a operação. É justamente nesse ponto que a gestão da Necessidade de Capital de Giro, a NCG, faz toda a diferença.</p>
    `,
    contentAfterNewsletter: `
      <p>Uma forma bastante útil de acompanha esse ciclo financeiro é através de três prazos médios: o de estocagem, o de recebimento e o de pagamento. O Prazo Médio de Estocagem (PME) mostra quantos dias, em média, os produtos permanecem em estoque antes da venda. Já o Prazo Médio de Recebimento (PMR) mostra quantos dias, em média, a empresa recebe pelas vendas realizadas. Por fim, o Prazo Médio de Pagamento (PMP) mostra quantos dias, em média, a empresa paga seus fornecedores.</p>


      <p>A partir desses três indicadores, é possível calcular o ciclo financeiro da empresa, já que ele resulta da soma do prazo de estocagem com o prazo de recebimento, menos o prazo de pagamento. Dessa forma:</p>


      <div class="formula-highlight">
        <p><strong>Ciclo Financeiro = PME + PMR – PMP</strong></p>
      </div>


      <p>Imagine uma loja que mantém seus produtos em estoque por 25 dias, recebe dos clientes em 35 dias e paga os fornecedores em 20 dias. Nesse caso, o ciclo financeiro será de 40 dias (25 + 35 – 20 = 40 dias). Isso significa que a empresa precisa sustentar 40 dias de operação antes que o dinheiro das vendas retorne ao caixa. Se esse intervalo cresce, o caixa é pressionado. Por sua vez, se ele diminui, a operação ganha fôlego.</p>


      <p>De toda forma, por si só esse número não revela muito sobre a empresa. Ele ajuda a entender a dinâmica de prazo, mas não mostra sozinhos o tamanho do esforço necessário para fazer para sustentar a operação. Afinal, quarenta dias podem representar uma pressão administrável para um negócio e um enorme aperto de caixa para outro. Para entender o impacto real desse intervalo, é preciso traduzi-lo em valores e é justamente isso que a Necessidade de Capital de Giro (NCG) procura revelar.</p>


      <p>De forma simplificada, a NCG pode ser calculada pela fórmula:</p>


      <div class="formula-highlight">
        <p><strong>NCG = Estoques + Contas a Receber – Contas a Pagar</strong></p>
      </div>


      <p>Essa fórmula segue a mesma lógica do ciclo financeiro. Além disso, a partir dela conseguimos pensar nas pressões de caixa da operação. Os estoques e as contas a receber representam recursos que já foram absorvidos, mas ainda não voltaram ao caixa. Já as contas a pagar a fornecedores funcionam, em alguma medida, como uma fonte de financiamento da própria atividade, porque permitem que a empresa pague depois.</p>


      <p>Se uma empresa tem R$ 120 mil em estoque, R$ 80 mil em contas a receber e R$ 50 mil em contas a pagar a fornecedores, sua necessidade de capital de giro será de R$ 150 mil. Esse é o montante que a operação exige para seguir rodando sem sobressaltos.</p>


      <h2>Uma leitura mais profunda das necessidades de curto prazo</h2>


      <p>Apesar do capital de giro representar essa necessidade de curto prazo, nem tudo o que está no curto prazo tem a mesma natureza. Existem itens diretamente ligados ao giro da empresa, como estoques, contas a receber de clientes e contas a pagar a fornecedores. Mas também existem itens ligados à tesouraria, como caixa, aplicações financeiras, empréstimos bancários e financiamentos de curto prazo.Essa distinção é importante porque ajuda a separar dois problemas que, embora relacionados, não são a mesma coisa: uma operação que exige muito capital para funcionar e um caixa que já está pressionado pela forma como esse capital vem sendo financiado.</p>


      <p>Quando eu fazia análise de empresas, nem sempre tinha acesso a todos os dados necessários para calcular com precisão os prazos médios de estocagem, recebimento e pagamento. Muitos clientes apresentavam o Demonstrativo de Resultado de Exercício (DRE), Balanço Patrimonial (BP) e o Demonstrativo de Fluxo de Caixa (DFC). O ciclo financeiro ajuda a entender a dinâmica da operação, mas não basta, por si só, para revelar com clareza a saúde financeira do negócio. Nesses casos, uma leitura mais completa exige fazer a separação do circulante entre componentes operacionais e financeiros.</p>


      <p>No grupo operacional ficam os ativos e passivos que surgem do funcionamento normal do negócio, isto é, do giro da empresa. No grupo financeiro ficam os recursos de liquidez imediata e as dívidas contratadas para sustentar o curto prazo. Essa separação ajuda a enxergar melhor a própria Necessidade de Capital de Giro, que também pode ser expressa da seguinte forma:</p>


      <div class="formula-highlight">
        <p><strong>NCG = Ativo Circulante Operacional – Passivo Circulante Operacional</strong></p>
      </div>


      <div class="note-box">
        <p><strong>Observação:</strong> quando se compara o ativo circulante financeiro com o passivo circulante financeiro, chega-se ao chamado saldo de tesouraria (ST). Esse indicador ajuda a perceber se, além de uma operação intensiva em capital, a empresa também está com a tesouraria pressionada no curto prazo.</p>
      </div>


      <p>Analisando por essa ótica, a NCG pode ser vista como parte da operação que não está sendo financiada pelos passivos operacionais e, por isso, precisa ser coberta por outras fontes. Essas fontes podem ser o sócio, o lucro retido, uma dívida de longo prazo ou, nos casos mais comuns, pode ser o banco.</p>


      <h2>Exemplo prático</h2>


      <p>Suponha que uma empresa apresente a seguinte estrutura de curto prazo:</p>


      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Conta</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Caixa e aplicações financeiras</td>
              <td>R$ 50.000</td>
            </tr>
            <tr>
              <td>Estoques</td>
              <td>R$ 120.000</td>
            </tr>
            <tr>
              <td>Contas a receber de clientes</td>
              <td>R$ 130.000</td>
            </tr>
            <tr class="total-row">
              <td><strong>Ativo circulante</strong></td>
              <td><strong>R$ 300.000</strong></td>
            </tr>
            <tr>
              <td>Fornecedores</td>
              <td>R$ 100.000</td>
            </tr>
            <tr>
              <td>Empréstimos de curto prazo</td>
              <td>R$ 80.000</td>
            </tr>
            <tr class="total-row">
              <td><strong>Passivo circulante</strong></td>
              <td><strong>R$ 180.000</strong></td>
            </tr>
          </tbody>
        </table>
      </div>


      <p>O primeiro cálculo possível aqui é o do Capital Circulante Líquido (CCL), que é a folga líquida de curto prazo de uma empresa:</p>


      <div class="formula-highlight">
        <p><strong>CCL = Ativo Circulante – Passivo Circulante</strong></p>
        <p><strong>CCL = R$ 300 mil – R$ 180 mil = R$ 120 mil</strong></p>
      </div>


      <p>À primeira vista, ter o CCL positivo pode parecer confortável por si só. Ocorre que é necessário entender também o quanto a empresa exige para continuar suas operações. Para responder a isso, precisamos olhar apenas para os itens ligados ao giro do negócio. No nosso exemplo, eles seriam as contas de Estoques, Contas a receber de clientes e Fornecedores. Dessa forma, aplicando a fórmula da Necessidade de Capital de Giro (NCG):</p>


      <div class="formula-highlight">
        <p><strong>NCG = Estoques + Contas a Receber – Fornecedores</strong></p>
        <p><strong>NCG = R$ 120 mil + R$ 130 mil – R$ 100 mil = R$ 150 mil</strong></p>
      </div>


      <p>A operação dessa empresa exige R$ 150 mil para rodar com normalidade, mas sua folga líquida de curto prazo é de apenas R$ 120 mil. Há, portanto, uma diferença de R$ 30 mil.</p>


      <p>Esse valor aparece no chamado saldo em tesouraria:</p>


      <div class="formula-highlight">
        <p><strong>Saldo em Tesouraria = CCL – NCG</strong></p>
        <p><strong>Saldo em Tesouraria = R$ 120 mil – R$ 150 mil = <span class="text-negative">-R$ 30 mil</span></strong></p>
      </div>


      <p>Na prática, isso significa que a operação consome mais recursos do que a estrutura de curto prazo consegue sustentar com tranquilidade. Apesar de estar rodando suas operações, qualquer atraso no recebimento ou aumento de estoque pode ser sentido com mais força.</p>


      <p>Em algum momento alguém precisa bancar essa diferença. Ela pode ser coberta pelo sócio, pelos lucros retidos, pelo banco ou (não recomendo) pelo atraso de alguma obrigação. Dessa forma, o saldo de tesouraria negativo não significa que a empresa vai parar de funcionar de imediato, mas a sua persistência faz a empresa perder fôlego. Além disso, é preciso exigir mais cuidado porque qualquer atraso pode ter impacto grande nas finanças.</p>


      <h2>O que fazer quando o capital de giro não é suficiente?</h2>


      <p>Quando o capital de giro não é suficiente, a empresa entra em uma situação de maior estresse financeiro. Nessa hora, o erro mais comum é tratar o problema apenas como falta de dinheiro. Antes de sair em busca de recursos, é preciso entender a origem da insuficiência. Em alguns casos o aperto decorre do crescimento da operação sem reforço da base financeira. Há ainda situações em que a falta de capital de giro revela problemas como excesso de estoques ou inadimplência elevada.</p>


      <p>Por isso, a primeira medida é reforçar o controle do caixa no curtíssimo prazo e estabelecer prioridades. Quando os recursos não são suficientes para atender tudo ao mesmo tempo, a empresa precisa proteger aquilo que sustenta a continuidade da operação, como a folha e compromissos cujo atraso pode gerar agravamento relevante do problema.</p>


      <p>Outra questão a ser observada é não limitar as soluções a somente captação de novos recursos. É possível tentar liberar caixa dentro da própria operação, fazendo revisão de estoques, da política de crédito para os clientes e dos prazos de pagamento aos fornecedores.</p>


      <p>Se ainda assim o caixa continuar insuficiente, pode ser necessário recorrer a fontes externas, como crédito bancário, antecipação de recebíveis ou aporte dos sócios. Cada alternativa tem custos e riscos próprios. O crédito pode ser saudável quando financia uma necessidade temporária ou um crescimento planejado.</p>


      <h2>Conclusão</h2>


      <p>Respondendo a pergunta do título desse artigo: sim, empresas lucrativas podem quebrar. E esse talvez seja um dos fatos mais ingratos da vida empresarial porque contraria a intuição muito comum de que, se está dando lucro, está tudo bem. Como vimos, nem sempre está e é necessário aos gestores estarem atentos aos indicadores da empresa.</p>


      <p>A gestão do capital de giro exige atenção em qualquer empresa, mas se torna especialmente importante em empresas em expansão. Crescer sem acompanhar com cuidado os prazos médios é uma forma de aumentar a pressão financeira do negócio. Afinal, a expansão costuma exigir mais estoque, mais vendas a prazo e mais compromissos com fornecedores.</p>
    `
  },
  {
    slug: "guerra-empresa-nao-quer-todas-criam",
    title: "A guerra que nenhuma empresa quer mas todas ajudam a criar",
    subtitle: "O dilema do prisioneiro mostra que, em contextos de negócios, a racionalidade individual empurra empresas para resultados piores do que aqueles que poderiam alcançar coletivamente.",
    category: "Negócios",
    date: "30 de Março, 2026",
    readTime: "6 min",
    coverImage: "https://images.unsplash.com/photo-1758599543152-a73184816eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG5lZ290aWF0aW9uJTIwdHdvJTIwY29tcGFuaWVzJTIwbWVldGluZ3xlbnwxfHx8fDE3NzQ4Mzk4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false,
    contentBeforeDilemma: `
      <p>Durante a Guerra Fria, os Estados Unidos e a União Soviética acumularam arsenais nucleares com grande poder de destruir o planeta várias vezes (como se uma vez não bastasse). Do ponto de vista coletivo, o melhor cenário seria de menos armas. Ainda assim, a corrida armamentista avançou, já que cada lado via na contenção unilateral um risco grande demais. Se o outro mantivesse ou ampliasse seu poder de destruição, abrir mão da própria capacidade de resposta seria quase uma aposta ingênua. Temos razões óbvias para preferir um mundo menos militarizado, mas nenhum dos dois tinha segurança suficiente para ser o primeiro a recuar.</p>


      <p>A lógica é parecida no mundo dos negócios (sem as ogivas nucleares). O dilema do prisioneiro explica porque decisões individuais racionais podem produzir resultados coletivamente ruins.</p>


      <p>No dilema do prisioneiro, dois suspeitos são presos e interrogados separadamente, sem qualquer possibilidade de conversar entre si. A polícia tem provas suficientes apenas para condená-los a um ano de prisão, mas propõe o mesmo acordo a ambos: se um confessar e o outro permanecer em silêncio, quem confessou sai livre enquanto o outro é condenado a 20 anos. Se os dois confessarem, ambos recebem pena de 5 anos. Se os dois ficarem em silêncio, cada um cumpre apenas 1 ano.</p>


      <p><strong>O que você escolheria?</strong></p>
    `,
    contentMiddle: `
      <p>Na teoria dos jogos, esse é um dos modelos mais conhecidos porque mostra uma tensão entre interesse individual e resultado coletivo. Dois jogadores poderiam cooperar, mas cada um tem incentivo para escolher a opção que o protege melhor. No fim, ambos escolhem a alternativa defensiva e os dois acabam em situação pior do que poderiam estar.</p>


      <p>Duas empresas poderiam querer preservar margem e evitar uma guerra de preços. Em tese, seria melhor para ambas, mas na prática cada uma sabe que, se a rival mantiver o preço e ela cortar sozinha, pode ganhar mercado. E, se a rival cortar primeiro, ficar parada pode levar a perda de clientes. Excelente para nós, consumidores.</p>


      <p>É aí que surge a pergunta: <strong>por que cooperar não parece a melhor escolha, mesmo quando todo mundo percebe que seria melhor?</strong></p>


      <p>Cada jogador raciocina mais ou menos assim: se o outro cooperar, eu ganho mais desviando. Se o outro desviar, eu também fico mais protegido desviando. Por isso, a traição aparece como a melhor resposta em qualquer cenário imaginado pelo jogador. É o que a teoria chama de estratégia dominante. Na formulação histórica discutida em torno do equilíbrio de Nash, cada jogador escolhe a ação que maximiza seu resultado dado o comportamento esperado do outro.</p>


      <h2>O equilíbrio de Nash</h2>


      <p>Para tentar explicar por que os agentes nem sempre chegam ao melhor resultado possível, o economista e matemático John Nash formulou o conceito de equilíbrio de Nash. Cada jogador olha para a escolha do rival e pensa "do jeito que ele está jogando, faz sentido eu continuar assim". Por isso o equilíbrio se mantém. Não porque seja ótimo, mas porque ninguém consegue melhorar a própria situação agindo isoladamente.</p>


      <p>Duas empresas, por exemplo, podem preferir um mercado com margens mais saudáveis. Só que, se cada uma suspeita que a outra pode cortar preço a qualquer momento, ambas acabam reagindo de forma defensiva. O resultado final pode ser uma guerra de preços que ninguém acha boa, mas da qual ninguém consegue sair sozinho sem correr o risco de perder mercado.</p>


      <p>Nessas situações, o resultado mais estável pode ser justamente o menos lucrativo. Um equilíbrio, portanto, pode ser estável e ainda assim ruim. Ele não precisa maximizar o bem-estar das empresas, basta que ninguém veja vantagem em se mover sozinho. Daí surgem algumas tentativas perigosas no ambiente concorrencial, como querer reduzir artificialmente a incerteza.</p>
    `,
    contentAfterDilemma: `
      <h2>É possível escapar do dilema?</h2>


      <p>As empresas vivem tentando reduzir a incerteza do jogo. Uma das formas mais óbvias de fazer isso é o cartel.</p>


      <p>Ocorre que, por ser uma tentativa de modificar artificialmente o equilíbrio das escolhas racionais, o cartel tende a ser estruturalmente instável. Se todas concordam em manter preços altos, sempre existe a tentação de alguém cobrar um pouco menos, capturar mercado e lucrar às custas das demais. A lógica do dilema do prisioneiro continua rondando o acordo ilegal, já que cooperar coletivamente parece ótimo, mas desviar sozinho pode parecer melhor ainda.</p>


      <p>Além disso, instrumentos como os acordos de leniência exploram exatamente essa fragilidade ao criar incentivos para que um dos participantes traia o cartel e coopere com a autoridade. No fim, o cartel tenta trocar a incerteza da concorrência por uma coordenação artificial, mas continua assombrado pela chance permanente de alguém quebrar o acordo primeiro.</p>


      <p>Só que nem toda tentativa de reduzir incerteza é ilícita. Imagine duas empresas pensando em lançar um novo produto. Ambas só têm recursos para lançar um entre dois projetos possíveis. Se as duas escolherem o mesmo produto, o mercado não absorve a oferta e as duas saem no prejuízo. Se escolherem produtos diferentes, ambas conseguem ocupar nichos distintos e lucrar. Nesse caso, não existe uma estratégia dominante clara.</p>


      <p>Nesse caso, o problema não é cooperar ou não, mas coordenar expectativas por meio da sinalização estratégica. Em vez de combinar, elas tentam influenciar a escolha do rival por meio de anúncios ou antecipações públicas.</p>


      <p>Uma empresa pode anunciar antes que pretende lançar o produto A. A outra, ao observar esse movimento, pode redirecionar sua escolha para o produto B. O anúncio, nesse caso, funciona como uma tentativa de selecionar um equilíbrio melhor e evitar uma colisão. De toda forma, isso exige cuidado para que essas antecipações não sejam interpretadas como conluio para ação coordenada ou tentativa de manipulação do mercado.</p>


      <h2>O que o dilema do prisioneiro ensina para a estratégia empresarial</h2>


      <p>O dilema do prisioneiro ensina que empresas podem ser levadas a conflitos ruins não porque sejam mal geridas, mas porque o próprio jogo concorrencial pode empurrá-las para isso. Nesses mercados, decisões individuais racionais podem produzir resultados coletivamente piores que ninguém gostaria de estar (exceto para os consumidores, que ganham com a concorrência e diminuição dos preços).</p>


      <p>Ele também é útil para mostrar que nem todo arranjo estável é o desejável. O equilíbrio de Nash ajuda a mostrar que um mercado pode parar em um resultado que ninguém considera ideal, mas do qual ninguém consegue sair.</p>


      <p>Por fim, a teoria dos jogos também é útil para os formuladores de políticas públicas. O Estado, ao criar regras e instrumentos como acordos de leniência, explora justamente as fragilidades inerentes dos cartéis para combater práticas nocivas ao consumidor.</p>
    `
  }
];

// Função helper para obter o post mais recente
export function getLatestPost(): BlogPost {
  // Ordena os posts por data (mais recente primeiro)
  const sortedPosts = [...blogPosts].sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return dateB.getTime() - dateA.getTime();
  });
  
  return sortedPosts[0];
}

// Função helper para converter string de data em objeto Date
function parseDate(dateStr: string): Date {
  // Formato: "8 de Abril, 2026"
  const months: { [key: string]: number } = {
    'Janeiro': 0, 'Fevereiro': 1, 'Março': 2, 'Abril': 3,
    'Maio': 4, 'Junho': 5, 'Julho': 6, 'Agosto': 7,
    'Setembro': 8, 'Outubro': 9, 'Novembro': 10, 'Dezembro': 11
  };
  
  const parts = dateStr.split(' ');
  const day = parseInt(parts[0]);
  const month = months[parts[2]];
  const year = parseInt(parts[3]);
  
  return new Date(year, month, day);
}

// Função helper para obter posts para listagem no blog
export function getBlogListPosts() {
  // Ordena os posts por data (mais recente primeiro)
  const sortedPosts = [...blogPosts].sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return dateB.getTime() - dateA.getTime();
  });
  
  return sortedPosts.map((post, index) => ({
    ...post,
    featured: index === 0, // O mais recente é featured
    description: post.subtitle
  }));
}

// Função helper para obter um post específico por slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}