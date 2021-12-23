# Contributing to Caderneta Virtual

Para Contribuir uma contribuição construtiva, temos algumas regras.

## <a name="issue"></a> Achou um Bug?

Se você encontrou um Bug em nosso sistema, você pode abrir uma [issue](#sub-issue)

## <a name="sub-issue"> </a> Abrindo Issue

Para uma boa issue, é necessário explicar o máximo de detalhes possíveis.
Definir a Label da issue é importante para nosso time organizar quem irá resolver o problema ou nova feature.

## <a name="commit-msg"></a> Menssagem de Commit

Para melhor manutenção de código usamos um verificador de menssagens, para ser permitido apenas commit semânticos.

Em nossa menssagem temos:

```
<HEADER>
<LINHA-EM-BRANCO>
<CORPO>
<LINHA-EM-BRANCO>
<FOOTER>
```

O `Header` é o mais importante, a forma de se usar está em [Header Commit](#header-commit)

O `Corpo` é opcional, a forma de se usar está em [Corpo Commit](#corpo-commit)

O `Footer` é opcional, a forma de se usar está em [Footer Commit](#footer-commit)

## <a name="header-commit"></a> Header Commit

```
<Tipo>(<ESCOPO>): <DESCRIÇÃO CURTA>
  │       │             │
  │       │             └─⫸ Uma descrição curta, para identificação do commit
  │       │
  │       └─⫸ No Escopo será identificado onde foi alterado
  │
  │
  └─⫸ Tipos de Commit: build|chore|ci|docs|feat|fix|perf|refactor|test|style
```

O `<Tipo>` e a `<DESCRIÇÃO>` são obrigatorias, o `(<ESCOPO>)` não deverá ser informado **APENAS** quando se exite mais de um escopo

#### Type

- **build**: Mudanças que afetam o build do sistema ou dependencias externas (Exemplo: gulp, broccoli, npm).
- **ci**: Mudanças de Ci (examples: CircleCi, SauceLabs).
- **docs**: Mudanças na documentação.
- **feat**: Uma nova feature.
- **fix**: Correções de bugs.
- **perf**: Quando a performace do código for melhorada.
- **refactor**: Quando o código é refatorado sem adicionar funcionalidades e nem corrigir bugs.
- **test**: Quando é modificado algum teste, seja feat, fix ou refactor de teste.
- **style**: Quando é alterado estilos de componentes

### <a name="corpo-commit"></a> Corpo

No `<Corpo>` será informado informações adicionais, caso necessário

### <a name="footer-commit"></a> Footer

No `<Footer>` será informado porque do commit, linkando a issue ou pull request

ex.

```
    <HEADER>
    <LINHA EM BRANCO>
    <CORPO>
    <LINHA EM BRANCO>
    issue: #<ISSUE-NUMBER>
```

```
    <HEADER>
    <LINHA EM BRANCO>
    <CORPO>
    <LINHA EM BRANCO>
    issue: #<PR-NUMBER>
```
