## Envio de solução

Gostariamos de entender como você pensa e as decisões que você tomou durante o desenvolvimento, detalhe um pouco mais sobre:

**Framework, linguagem e ferramentas**

Descreva ferramentas e bibliotecas (libraries, framework, tools etc) você usou.

Assim como indicado, utilizei o framework Angular apesar de ainda não o ter utilizado antes desse desafio.
Aprendi muito sobre ele, e vi que é bem intuitivo seu funcionamento! Utilizei principalmente a biblioteca Material para realizar a paginação.

**Técnologias X e Y**

Justifique porque você optou pela tecnologia X e não a Y?
Estudei algumas maneiras de efetuar a paginação no conteúdo e fiquei entre o NBX e o Material porém por uma praticidade preferi o Material, contudo não vejo problema algum em utilizar o NBX, cheguei até a importar ele no app.module.ts

**Princípios de software**
 
Quais princípios da engenharia de software que você usou?
KISS (Keep It Simple, Stupid!)
Busquei nesse projeto não fugir do escopo que foi passado, no caso esse layout https://github.com/search?utf8=%E2%9C%93&q=node&type= e cumprir todos os requisitos solicitados.

**Desafios e problemas**

Conte um pouco sobre os desafios e problemas que você enfrentou e como você resolveu.

Acredito que um dos maiores desafios que enfrentei nesse projeto foi trazer o json que está na tabela.service.ts para o html
Os dados chegavam até o html mas apenas com {{tabela | async | json }}  mas não funcionava percorre-lo para criar a tabela.
Para resolver esse problema utilizei MatTableDataSource na onde ele recebe os dados e manda para o html e o `*matCellDef="let element"` percorre dentro do `mat-table [dataSource]="dataSource"`.


**Melhorias e próximas implementações**

O que você entende que pode ser melhorado e como isso pode ser feito?

Gostaria de ter implementado os emojis que contém nas descrições dos repositórios. Estudei e vi que existe uma biblioteca do próprio github https://github.com/github/g-emoji-element/blob/main/README.md mas por conta do tempo ainda não implementei.

Gostaria também de traduzir o conteúdo do mat-paginator, fiz algumas pesquisas e vi que seria o caso de realizar uma internacionalização do código através do i18n https://angular.io/guide/i18n-overview mas por conta do tempo ainda não implementei.

**Sobre você**

Queremos te conhecer um pouco melhor, conte um pouco sobre você.

Onde nasceu/De onde você é? Lugares que estudou, empresas que trabalhou, como você se envolveu com desenvolvimento de software.. enfim, Quem é você?

Nasci e estou em São José do Rio Preto/SP tenho quase 23 anos vou fazer agora dia 28/01 e pra mim um excelente presente seria trabalhar na Field :) 
Trabalho atualmente na UNILAGO, comecei meu primeiro emprego aqui com 18 anos como Tecnico de Suporte, realizava formatações de computadores/impressoras, gerenciamento de redes.. Assim que entrei vi que minha paixão realmente está na tecnologia e engatilhei uma faculdade, entrei para Faculdade Publica de Tecnologia (FATEC) no Curso Informática para Negocios, lá eu conheci o desenvolvimento através das disciplinas de Algoritmo e Linguagens de Programação I/II/III. Com a pandemia em 2020 surgiu uma oportunidade para que eu fosse para o time de desenvolvimento, o qual estou até hoje. Exerço todos os tipos de atividade, desde criação de querys no banco de dados até o front-end das aplicações desenvolvidas.

**Outros detalhes**

Se quiser enviar alguma informação adicional sobre o desafio..


---

Ah, deixe seu e-mail ou telefone para entrarmos em contato com você :) 

nettolonghi@hotmail.com

(17) 99111-3110 - Netto Longhi



