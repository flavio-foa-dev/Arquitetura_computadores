# Arquitetura_computadores
### componentes internos do computador
- SSD/HD,
-  memória RAM,
-  CPU,
A diferença entre eles e como se comunicam para executar o programa.

### termos
- Multicore,
- dispositivos de I/O,
- memória cache.
- Como dados são armazenados,
- como, por exemplo, números inteiros, caracteres, listas, números decimais são representados internamente no computador e porque faz sentido na programação.

O que um computador entende sao:  0s e 1s é chamado de bit,
false. true; open close.
que vem do inglês Binary Digit ou dígito binário.
Essa é a menor unidade para o armazenamento de informação.

Temos o grupos de 8 bits, essa quantidade agrupada de bits
é chamada de byte. medimos o armazenamento em um computador usamos o byte.
Para representar essas unidades,
utilizamos b (“b” minúsculo) para o bit e B
e o, B (“B” maiúsculo) para byte. Ou seja, 1B = 8b.

Exemplo
 - Um arquivo de 200 MB é um arquivo com 200 milhões de bytes.
 - Uma internet com velocidade de 20 Mbps transfere 20 milhões de bits por segundo ou 2,5 milhões de bytes por segundo.

compilado  exemplo c++ C Go R
interpretado exemplo Python php js ruby

A diferença entre programas que são compilados e programas que são interpretados,
Onde está escrito C compilamos.
Onde esta escrito Python interpretar

se estivermos trabalhando com o arquivo bem longo, com vários arquivos no projeto, e esse projeto tem várias dependências que precisa pegar, esse tempo de compilação pode ir de vários segundos até alguns minutos

Esse tempo de compilação é algo que deve ser levado em conta, que vai afetar o desenvolvimento do projeto e nesse aspecto o programa interpretado ajuda bastante, porque estamos iniciando logo que executa o interpretador e facilita muito mais reconhecer os erros de execução e arrumar.
Por isso que programas interpretados têm essa fama de ajudar no desenvolvimento de software; mesmo assim os programas compilados trazem uma grande vantagem que interpretados não tem que é a velocidade de execução.

Se fizer-mos um for, onde tem uma iteração que executa 10 milhões de vezes o incremento do contador,

vamos ver quanto tempo leva esse programa em c++ que tem esse número alto de execuções.
Ele vai compilar e executar, tempo que levou foi quase instantânea, terminal do Linux, usa comando time e vê que demora uns 30 milissegundos para executar o programa.

A mesma coisa para programa em Python - o mesmo programa, vai incrementar 10 milhões de vezes, o tempo que demorou e de 2.6 segundos para executar o programa e isso é 90 vezes mais lento o programa Python do que o programa em C++

Notamos no exemplo prático que programa compilado tem uma execução bem mais rápida que um programa interpretado.
Isso porque o computador tem todo o contexto do programa, assim ele consegue fazer otimizações mais complexas e gerar um código de máquina que está pronto para computador executar

E o interpretador tem que ficar no meio da execução interpretando programa e mandando para executar, assim esse processo acaba afetando bastante a performance de programas interpretados

erros
O fato de você ter um processo de compilação permite que consiga verificar erros sem ter que necessariamente executar, se você teve erro de sintaxe no programa, você usou variável antes de declarar ou misturou todas as variáveis, letra com número; no processo de compilação dá para você verificar este tipo de coisa.

Já com programas interpretados não tem que fazer é só executando que você consegue identificar isso, só que o fato de programas interpretados não terem esse processo de compilação, acaba facilitando o desenvolvimento do software, porque você modifica o programa e já consegue ver o resultado.

Se você tem dois computadores com componentes diferentes e você compilar seu programa, o código de máquina gerado não vai rodar todos os computador, então para distribuir o seu programa você tem que compilar para diversos tipos de computadores específicos.

No interpretador não tem isso, se você escreveu seu código, se o computador que você quer rodar ele tem um interpretador instalado, você consegue, fica muito mais fácil de distribuir o código para os computadores.

O C é a linguagem que está por trás de quase todos os sistemas operacionais que usa hoje em dia, então são linguagens que valorizam bastante a performance

compiladores você vai encontrar linguagens como C, Rust e Go.
Normalmente essas linguagens geram programas que precisam de uma alta performance, como motores para jogos ou servidores que vão mexer com uma grande quantidade de dados ou requisições.

interpretadores encontra linguagens como Java Script, Python, PHP.
Essas linguagens valorizam bastante o processo de desenvolvimento de software, a facilidade de desenvolvendo dessas linguagens pode acabar sendo maior do que nos programas compilados.

Na tentativa de minimizar os pontos negativos, existem técnicas mais modernas que caem no caso intermediário de compilação e interpretação, uma delas é o just-in-time compilation ou JIT Compilation, significa compilação na hora certa.

Porque em vez de você compilar o seu código inteiro, você pode interpretar o seu código e se você vir que está usando uma função específica você vai e compila a função inteira no momento de execução e manda o código binário da função inteira para computador executar
esse meio termo é tão famoso que com a implementação da Google projeto que é chamado de V8. nodeJS
É ela que está rodando nos navegadores da Google o Chrome e também é implementado no JS que é implementação para você fazer códigos backend de Javascript. Esse método de compilação na hora certa é bem comum para você transformar códigos interpretados, para melhorar para ter uma performance maior

Além da compilação na hora certa,
 existe outro caso bem peculiar de meio-termo entre interpretação e compilação, que é o caso do Java - a implementação de Java queria resolver um problema bem específico, pelo menos um desses era um desses problemas que vi resolver que é você puder compilar o seu código e rodar em diversas máquinas diferentes.

 Para resolver isso, o código-fonte que vai executar, primeira coisa que você faz é compilar esse código-fonte, mas em vez de você gerar um código binário para mandar direto para o computador, vai gerar um código intermediário chamado de Byte Code que você pode conhecer como .class do Java.
 Esse byte code é um código específico do Java, mas não é específico da máquina que você está rodando e para executar ele de verdade você tem que passar por um segundo tradutor, um interpretador e você pode conhecer como JVM - máquina virtual Java.
 E ele que vai pegar seu byte code, interpretar linha por linha e executar, dessa forma você consegue pelo compilador ter todo o contexto para fazer otimizações e verificar os erros antes de executar.
 O fato de você ter um byte code que não é específico do computador você pode mandá-lo para diversas máquinas e elas tendo o JVM instalado, conseguem executar o seu programa.

## neste capitulo entendemos sobre"
 1. Como funciona a linguagem que o computador entende: a linguagem de máquina;
 2. O computador precisa de um programa tradutor para transformar um código em uma linguagem de programação de alto nível para linguagem de máquina;
 3. Existem, em geral, dois tipos de tradutores: compiladores e interpretadores;
 4. Quais as diferenças entre compiladores e interpretadores, e suas implementações modernas.

<hr>
Então você foi lá escreveu seu programa e o código-fonte
Esses dois arquivos ficam guardados em algum lugar do computador e provavelmente em algum sistema de pasta, com vários outros arquivos com a estrutura hierárquica deles, que chamamos de sistema de pastas.
Isso é uma função do sistema operacional, do SO, do que vai controlar onde que cada byte vai ser armazenado e como ele vai representar cada arquivo nessa estrutura.
significa que você guardou na memória que chama memória não volátil.
O sistema de pastas,
significa ao guardar as informação mesmo se o computador for desligado as informacoes nao serao perdidadas
Podemos ligar e desligar o computador quando quiser e a memória dos arquivos que guardamos ainda vão continuar lá,

existem dois tipos de memória não volátil:
A primeira delas é o HD que significa Hard Disk ou disco rígido, ele tem esse nome porque ele é formado por um conjunto de discos magnéticos que ficam girando muito rápido e uma agulha que fica indo e voltando desses discos magnéticos para ler e escrever neles.
Dessa forma que consegue armazenar dados nesse tipo de disco magnético e a grande vantagem das armazenamento é que ele tem grande capacidade, você consegue encontrar HD 2 a 4 teras hoje em dia. Porém, o grande problema dele, a desvantagem é que ele é lento.

Se você precisar ter uma agulha que vai fisicamente andar e procurar o arquivo que precisa, também tem disco rodando lá, isso deixa a escrita e a leitura dos arquivos de forma bem lenta - ele é frágil
Se você coloca um HD de notebook que você fica mexendo o tempo todo, se seu computador estiver ligado pode ir riscar o disco, a durabilidade dele abaixa bastante.

O segundo meio de armazenamento, mais popular para os computadores pessoais, que é o SSD - Solid State Drive que significa unidade de estado sólido.
E formado apenas por chips eletrônicos. Ele é parecido com a tecnologia que usa os pen drives e nos cartões SD.
Em comparação aos discos rígidos ele é bem mais rápido, e o fato de não ter coisas fisicamente rodando e agulhas, torna ele bem mais eficiente e rápido e rsistente em relação ao disco rígido .
Se você tiver um notebook com SSD pode movimentar ele que não vai ter tanto problema, mesmo assim a grande desvantagem dos SSDs é que eles são ainda um pouco caros em comparação a discos rígidos. Ultimamente a diferença está ficando cada vez menor

de qualquer forma esse tipo de memória é chamado de memória secundária do computador.
Isso acontece porque o computador não trabalha diretamente com esse tipo de armazenamento, os programas para conseguir executar para conseguir trabalhar com ele, precisa enviar para um segundo tipo de memória que é chamado de memória de trabalho do computador que é a RAM ou memória RAM. memória volátil quando o computador é desligado os dados são apagados
E precisa da memória RAM para guardar os dados que estamos trabalhando no momento

Você pode abstrair isso e imaginar que na verdade a memória RAM é só uma tabela com índices - onde que cada um significa o armazenamento de um byte,
Índice e um armazenando byte , se você quer ir e quer ler ou escrever alguma coisa na RAM, precisando escrever, precisa dizer o índice onde estamos querendo escrever
 Memória RAM vem do termo Randon Access Memory que significa memória de acesso aleatório, isso vem porque você acessar qualquer posição na memória vai ter sempre o mesmo custo vai demorar sempre a mesma quantidade de tempo.

 A nossa memória RAM  onde vai receber o codigo para o trabalho e vai mandar esse código  para pessoa que realmente  vai manipular  executar esses programas
 Que é o nosso processador ou CPU

 No SSD ou disco rígido é onde são armazenadas informações sobre o sistema operacional do seu computador e permite você utilizá-lo no dia a dia. Mesmo assim, no momento que o computador liga, como ele sabe quais dispositivos estão conectados nele e onde ele precisa ler as informações?

 Esse tipo de dado inicial e crucial para o funcionamento do computador é localizado na memória ROM, do inglês Read-Only Memory ou “memória de apenas leitura”. Ela é um tipo de memória não-volátil com baixo armazenamento, bem diferente da RAM ou HD/SSD. Uma ROM possui vários modelos, mas todos são projetados para serem apenas lidos, ou seja, não é esperado que o usuário escreva informações nessa memória.

 Dessa forma, quando o computador é inicializado, as primeiras informações que ele irá buscar estarão na ROM, por exemplo, a BIOS ( Basic Input/Output System ou sistema básico de entrada/saída). Elas vão ajudá-lo a identificar os dispositivos conectados, como o HD, e carregar o sistema operacional.

 # CPU  vem de Central Process Unit ou unidade central de processamento
 E a CPU que vai receber as instruções da memória RAM
 e vai executá-las,
 vamos falar das 3 partes  cache vamos falar depois

 1. UC "unidade de controle"
    E a parte que vai receber instruções da memória RAM.
    A unidade de controle que vai olhar a instrução, analisar bit a bit e tentar entender o que significa, que pode ser,
    por exemplo, pegue o dado que estava no endereço 30 da memória RAM, tenta comparar os dois valores ou somar o valor 2, adicionar o valor dois na ("gaveta" "seria o registradores") do processador.
    Essa unidade de controle com os circuitos internos vai entender o que significa a instrução e enviar os significados.
    Ela vai coordenar todos os estados do processador para executar a instrução
 2. ULA.
    Ela vai coordenar todos os estados do processador para executar a instrução
    Ela realiza as operações aritméticas como soma, multiplicação, divisão e subtração, ela que modifica os dados nesse sentido, ela também realiza as operações de comparação - vê se 3 é menor que 5 x 2, se valores são iguais ou diferentes.
    operações lógicas “e” e “ou”.
    Vai receber da unidade de controle quais são os estados que ela vai ter que ter, a unidade de controle vai ligar as chaves, vai configurar a unidade de controle para realizar a operação que queremos, a operação qual instrução está mandando.
    Em uma parte ela vai receber o sinal elétrico dizendo que tem que fazer operação de soma e em seguida qual vai ser o valor que ela vai incrementar
    Em seguida para realizar a soma também vai receber o valor que estava "gaveta"
    Dessa forma que a unidade lógica se comporta, seta as chaves para verificar como que vai se comportar e realizar a operação,
    mas de onde vem esses valores da "gaveta"
  3. registradores
    Essa gaveta, onde vai acumulando os valores é chamada de registradores
    porque ele vai ser um conjunto de partes, um conjunto de posições e pode ficar armazenado valores intermediários entre as operações.
    Vai ser desse lugar, desses registradores que vai receber os valores para somar e vai guardar os resultados das operações.
    Então são os registradores que guardam, que são responsáveis pela memória do processador,
    Ele é memória mais básica que está dentro do nosso processador.
  4. cache

    Quando a RAM envia uma instrução ao processador a primeira coisa que ele faz é guardar dentro do registrador; ele guarda também a posição de instrução atual,
    O registrador é responsável por guardar os valores intermediários da operacao

    E como estamos trabalhando com circuitos elétricos, você pode pensar que ela vai ligar ou desligar alguma função dentro do processador. Então ele pega e muda um bit, muda uma instrução, alguma função dentro do processador liga algum circuito, vai passar energia e a instrução muda.
    muda um bit, e a instrução muda.

    Ele faz soma, as multiplicações, divisões, operações e comparações e tudo com esses três componentes, a unidade de controle para entender o que a instrução significa, a unidade lógico-aritmética para modificar os dados e os registradores para guardar esses valores intermediários.

    ### Executando o meu codigo. por debaixo dos panos

    Processador é um componente que é repleto de circuitos tem eletricidade passando de um lado para o outro a todo momento.
    porque tem esse monte de eletricidade,
    precisa ter certeza de que as coisas estão acontecendo de forma ordenada.

    Precisamos executar as instruções de uma forma bem-organizada, dessa maneira todas as instruções do computador são executadas na mesma sequência de passos, sempre na mesma sequência cíclica para executar as instruções.

    A primeira é chamada de buscar que vende inglês fetch, nessa ação, nessa fase o processador vai olhar para memória RAM que é composta de instruções e dados e vai buscar a instrução que ele tem de executar, ele vai lá na posição zero da memória e vai guardar essa instrução no registrador, que guarda a instrução atual.

    guardar a instrução (pega três) no registrador de instrução, só que como que o processador ele sabe qual instrução tem que buscar naquele momento? Isso porque ele tem um outro registrador especial que é o contador. É ele que vai armazenar a posição na memória da instrução atual.

    O contador vale zero, significa que tem que buscar a instrução na posição zero da memória
    funciona e como aqueles computadores físicos que vai apertando e ele vai incrementar de um, dois, três, quatro; é isso acontece porque o contador vai executando as ações de forma sequencial.
    conforme vai executando as intrucoes este contador vai ser incrementado.

    foi buscar instrução e está lá, os bytes dela guardados no registrador, em seguida saber o que significa. Então vai para a segunda fase, a fase de decodificar.
    A instrução é mandada para unidade de controle e ela vai configurar o processador para poder executar a instrução. Como (pega três), ela vê o que significa e vai pegar o valor que está na posição 3 da memória.

    Para isso ela precisa configurar o ponteiro da memória RAM, para estar olhando na posição 3 da memória
    e com toda configuração feita
    vamos para terceira fase, a fase de executar a instrução.
    O computador vai pegar, como ele está olhando para posição 3 ele pega esse valor 7 que está guardado lá e vai armazenar no registrador no outro especial que chama de acumulador.

    Pega o valor 7 e guarda no acumulador que é como se fosse aquela (gaveta) que vai acumulando os valores intermediários entre as operações, então guarda valor 7.
    Feito isso, termina de executar e volta para o primeiro passo que é buscar a próxima instrução e todas as opções vão ser feitas nessa ordem.

    Todas as operações, todas as instruções são executadas neste ciclo: busca a instrução, decodifica e executa,

    só que como que tem certeza de que as coisas estão sendo feitas na ordem certa
    Como que sabe que na hora da unidade de controle de configurar o processador, todas as chaves já foram apertadas

    Do mesmo jeito que tem, por exemplo, uma música tem um metrônomo que vai sincronizando o tempo da música
    temos o mesmo no  processador e isso é chamado de clock vem do inglês relógio.
    Ele determina o tempo que cada operação, que cada fase dessa vai acontecer.

    Ou seja, como se fosse um tique-toque de um relógio,
    em cada tique e em cada toque ele vai mudar a fase de execução da instrução.

    a velocidade com que os tiques ocorrem, do clock, é o que determina a velocidade com que uma instrução vai ser executada.

    Um processador tem uma média de clock de 3 bilhões desses tiques por segundo, isso equivale a aproximadamente 3 GHz, se você já viu essa especificação do seu processador algo nessa forma de giga-hertz significa se você viu 3GHz significa três bilhões de tiques por segundo.

    Porque ele está sempre nesse processo de buscar, decodificar e executar e ele precisa fazer vários passos para executar instruções que levam só três linhas para digitar, mas é para isso que o computador foi feito.

    O computador foi feito para executar tarefas repetitivas, chatas, se você ver na rotina algo que você faz repetitivas tarefas, quase algorítmicas, tenta ver se você não consegue otimizar isso,
    tentar automatizar e mandar para o computador executar porque o computador foi feito para isso e é isso que ele faz muito bem, então tenta tirar mais proveito desses três bilhões de tiques por segundo que computador tem 3ghtz

# o que apredemos neste capitolo

- Como o SSD e HD funcionam e quais as diferenças entre eles;
- Qual é o papel da memória RAM no computador e qual sua diferença para a memória secundária (SSD ou HD);
- Como funcionam os principais componentes de um processador;
- Como um programa em código de máquina é executado no computador;
- A importância do clock do processador para a velocidade de processamento;
- Que existem limitações de memória num computador e como criar programas eficientes para contornar esse problema.

Conseguimos ver como que o processador executa nosso programa, sempre na sequência de buscar, decodificar e executar.
ao longo dos anos a única coisa que diferenciava o modelo era a velocidade do clock.

Foi necessário criar novas alternativas para melhorar o desempenho do processador e olhando o jeito que construiu nosso processador vê que tem que fazer a sequência de buscar, decodificar, executar uma instrução, isso deixa o processador bem ansioso.

quando for buscar, decodificar, executar, em vez de começar a buscar só no final que terminar de executar, o que pode fazer é quando estiver decodificando a instrução o processador ir e pegar a próxima instruções que vão ficar numa linha de montagem, uma no estágio de buscar, outra em decodificar e outra em executar. Sempre esperando para serem executadas.

Dessa forma consegue executar uma instrução a cada ciclo de clock em vez de uma instrução a cada três, consegue triplicar a velocidade com que nosso processador executa as operações Isso é chamado de pipeline de instruções

Melhorar bastante o processador, mas se você for ver ainda tem melhorias que pode fazer, se pensar no processador quando ele está buscando coisas na memória para memória RAM, a unidade lógica não está fazendo nada.
Ela está parada, então poderia mandar alguma instrução de conta para ela, já ir executando para ter o resultado quando precisar.
duplicar toda a pipeline. Para que consiga fazer duas instruções a cada ciclo de clock, então consegue essas duas por vez, consegue buscar duas instruções por vez. Dessa forma ainda duplica a velocidade de execução das instruções do processador

tem processador que é dual core, que tem dois núcleos, ou quad-core.

Em 1965, Gordon Moore previu que o número de componentes de um circuito integrado (transistores) dobraria a cada período de 18 meses, resultando num processador duas vezes mais rápido. Isso originou a chamada Lei de Moore. Essa lei virou uma medida econômica das empresas e é responsável pelo crescimento exponencial de performance da tecnologia que vemos nas últimas décadas.


# dispositivo de entrada e saída I/O,

Temos o computador que é a CPU que é responsável por processar os dados que manda para ela e a memória RAM que guarda todos os dados e instruções programas que está trabalhando no momento.

Em volta disso tem dispositivos de entrada e saída,
como entrada temos o teclado, o mouse a webcam o microfone.
como saída temos a tela,  o nosso monitor, o fone de ouvido, o alto-falante a impressora.

o HD e SSD, também são considerados como dispositivos de entrada e saída,

são os drivers de dispositivo que consegue abstrair várias particularidades destes vários dispositivos de entrada e saída,
e o computador através desses drives vai saber como lidar com os didpositivos.

vamos dar uma olhada em dois dos principais dispositivos que interagimos com o computador que é o monitor e o teclado.

### MONITOR
temos diversas gamas de gráficos, cores diferentes, formas, mas no fundo no fundo todos esses gráficos que olha no computador é só um conjunto de pequenos quadradinhos um do lado do outro que tem cores diferentes.

Cada quadradinho desse é chamado de pixel, cada quadradinho desse é uma fonte de luz, onde só muda a cor que ele vai ter,
a cor de um pixel é dada por três componentes: o vermelho que representa como R de Red, o verde apresenta com G de green e o azul representa B de blue.  RGB

esses pixels são atualizados na tela , mas em geral os pixels são atualizados linha por linha da esquerda para direita.
Sempre quando uma imagem vai mudar no monitor do computador,
o computador vai ter que ir lá atualizar pixel por pixel sequencialmente na tela do monitor,
E para fazer isso com cada um deles é preciso de vários cálculos complexos

ma tela full HD, por exemplo, tem 1920 pixels por 1080 pixels isso dá aproximadamente uma tela com 2 milhões de pixels
vendo um vídeo com 60 FPS - 60 frames por segundo, ele está em Full HD tem que fazer atualização de 120 milhões de pixels por segundo.

Isso é um processamento muito grande, que o processador vai ter que fazer, as atualização dos pixels na tela.
o processamento muito grande e o resto das coisas que os nossos programas estão querendo executar?
Para solucionar esse problema, a maioria dos computadores usam componentes específicos para esse tipo de serviço, que é chamada de placa de vídeo

Hoje em dia essas placas de vídeo já vêm juntas com o chip do processador, que você talvez conheça como placa de vídeo integrada.

# Teclado

O teclado tem um conjunto de fios energizados que passam pelas linhas do teclado
e um conjunto de fios desenergizados que passam pelas colunas do teclado,
então cada tecla vai ser uma celula de linha e coluna.

Se observar uma tecla específica, ela pode ser interpretada como interruptor que liga alguma linha energizada com alguma coluna desenergizada, dessa forma se nós apertarmos a tecla o que ela vai fazer com a linha energizada passa energia para coluna desenergizada.

Ou seja, emitindo o sinal de que a tecla A foi pressionada, assim quando o teclado vir essa combinação específica de linha e coluna, ele vai emitir sinal dizendo caractere “A” pressionado.
ele envia o sinal de que o caractere na posição 11 foi pressionado. Ele apenas avisa qual foi a posição que o caractere foi pressionado
o computador atraves de uma tebela ele sabera que tecla foi selecionada e tabela sao diferentes em cada pais


Quando usamos o computador executamos várias ações ao mesmo tempo, mexendo no navegador, acessando a internet, enquanto ouve música e com a janela do lado mexendo no programa, um editor de texto ou em outro programa e tudo isso ao mesmo tempo
Porém, o computador deve estar rodando até dezenas de programas tudo de uma vez e isso está muito acima do processamento paralelo de um processador quad-core.
ele executa um pouco a música, mexe um pouquinho do mouse, dos programa etc,  e isso muito rapido
Essa ideia é chamada de multitasking ou multitarefa, é assim que executa vários programas
Para fazer SO ou sistema operacional precisa uma regra para que a execução de cada um desses seja alternada e para isso ele vai dar  um tempo para cada programa, um tempo que cada programa vai ter que ficar executando.
Depois disso ele coloca esses programas numa fila, então o primeiro da fila vai e começa a ser executado durante o tempo dele e quando o tempo acabar ele volta para o final da fila; e o próximo da fila passa para ser executado.

Dessa forma que o sistema operacional consegue organizar que todo mundo seja executado um pouquinho e cria essa ilusão de paralelismo, ao mesmo tempo para aumentar essa ilusão de paralelismo com sistemas que interagimos, certas ações que executa nos dispositivos podem criar um sinal para o sistema operacional.  E burla a fila e entrar para ser executada primeiro

# o que apredemos neste capitolo
- As diversas otimizações feitas no processadores modernos, como pipelining e multi-core;
- Como podemos nos comunicar com o computador por meio dos dispositivos de entrada e saída;
- Como monitores e teclados funcionam;
- Como o computador executa vários programas ao mesmo tempo por meio de multitasking.

# cache: trazer para perto

O processador faz um pedido de dado para memória RAM,
ele vai fazer com que o pedido de dado viaje até a memória,
a memória precisa decodificar o endereço, saber onde que o processador que pega o dado.
Precisa encontrar o dado
passar o caminho todo de volta
para enviar o dado para o processador
todo esse processo levar até dezenas de ciclos de clock
só para ter esse dado da memória RAM,
nesse ciclo de clock o processador estará lá esperando sem ter o que fazer.

para resover vamos usar memoria, mas como assim ?  vamos la
Teremos dois tipos de memória,
memória RAM e ela é construída por material que se chama DRAM, que vem de dynamic RAM, ou RAM dinâmica, esse tipo de RAM é mais barata, consegue armazenar grandes quantidades de memória na escala de GB.
Mas ela tem problema que é mais lenta, para buscar informações demora bastante
existe um segundo tipo de memória RAM que é chamado de que SRAM, vem de static RAM, RAM estática, é muito mais rápida que DRAM.
Mas é mais cara, então não consegue nem de perto armazenar a mesma quantidade que a DRAM,

E vai ser SSRAM que vai auxiliar o nosso processo de comunicação com a memória RAM

pegamos o processador e adicionamos essa memória RAM estática dentro do processador.
a todo momento, e será essa memória rápida que vai querer guardar os dados que estamos utilizando no momentolá que os dados estão sendo
Esse tipo de memória no processador que guarda os dados que estamos utilizando no momento é chamada de memória cache,

ela funciona
o processador quer pegar um dado, uma instrução lá na memória RAM, em vez do processador ir pegar um dado na memória e executar o dado dele no processador, ele pega um bloco inteiro e copia na memória cache

a memoria cache não é uma coisa só
Ela é dividida em várias partes no processador.

temos nossa CPU,
 tem uma parte que é chamada de cache nível 1,
 tem um primeiro nível de cache que fica bem colada com CPU é chamada de CacheL1.
 Que vem do inglês level - nível, L1, tem um segundo nível de cache chamado de Cache L2, um pouco maior que o L1 e um pouco mais lento
Digamos que você não tenha um core, tenha um processador de várias cores.
 processador dual-core,
 cada core vai ter o seu próprio cache e o próprio CacheL2, também vai ter um terceiro nível de cache que é o CacheL3,
 que vai ser compartilhado com todas as cores.

 Todos eles vão poder acessar o próprio CacheL3, ele vai ser bem maior que os outros dois e também um pouco mais lento.

 essas divisoe  subdivisões de memória e referente a hierarquia de memória.
 ### hierarquia de memória. 1

 1. registradores 1 ciclo-clock/s  500 Bytes
 2. cache l1      700GB/s          64 KB
 3. cache l2      200GB/s          500 KB
 4. cache l3      150GB/s          4MB
 5. ram           10GB/s           8 GB
 6. ssd           2GB/s            500 GB
 7. hd            200MB/s          4TB
 8. cloud         2MB/s            PB - EB

Todo sistema é construído de forma que cada camada só precisa se comunicar com as camadas vizinhas, a RAM apenas precisa mandar para L3 e ele vai mandar para os próximos em seguida

Um princípios da computação que é chamado de princípio da localidade.
localidade temporal que significa se eu acessei nesse lugar recentemente eu vou querer acessar de novo em breve
localidade espacial que significa que se eu acessei aqui, vou acessar o vizinho em breve.

vamos acessar sempre a mesma posicao de memória coloca esse dado na memória mais rápida que der.
E outos dados podem ficar numa mais lenta, porque ela vai ser acessada menos,
desta forma a memória é organizada de hierárquica,
o sistema operacional, vários algoritmos são organizados, são estruturados de forma a permitir esse princípio da localidade.
Desta forma que consiga explorar esse tipo de princípio e manter as coisas funcionando de forma otimizada.


## Para voce saber
Pode parecer estranho ouvir falar no uso de fitas magnéticas hoje em dia. Esse tipo de tecnologia ficou muito popular entre os anos de 1970 e 1990 para o armazenamento de áudio, com as fitas cassetes, mas quase não se ouve mais falar delas com a chegada de novas tecnologias de armazenamento.

Uma das grandes desvantagens das fitas magnéticas é que elas são muito lentas para ler e escrever! A coisa complica mais se você precisa fazer o acesso aleatório de dados, porque a máquina precisaria rebobinar toda a fita para conseguir ir de um ponto da memória até outro. Por isso, elas foram facilmente substituídas por HDs e SSDs no uso diário em computadores pessoais.

Por outro lado, fitas magnéticas podem armazenar enormes quantidades de dados por um preço baixo e possuem um tempo de vida bem alto. Estimativas de 2016 da Forbes mostram que HDs são 65% mais caros que fitas. Além disso, você pode encontrar fitas com 12 TB de capacidade (e, a partir de 2030, podem aparecer modelos com 400 TB). Ainda, fitas tem um tempo de vida de até 30 anos, 6 vezes maior que um HD.

Esse é o cenário perfeito para momentos em que precisamos armazenar grandes quantidades de dados que vamos mexer muito raramente: os backups. Muitos dados no mundo são armazenados em fitas, como física de partículas, arquivos nacionais, grandes filmes e até bancos. Neste vídeo, você pode ver como a Organização Europeia para a Pesquisa Nuclear (CERN) utiliza fitas para armazenar os 1 GB por segundo de dados que eles captam em pesquisas.

Para saber mais sobre o assunto, você pode conferir o artigo da IEEE Spectrum (em inglês).
<hr>

# Processador de 32 ou 64 bits
Qual a diferença de 32 bits para 64?
significa o tamanho de informação que pode ser processada pela CPU,
pelo processador em um ciclo de clock, ou seja, esse tipo de informação são os dados guardados no registrador.

um processador ele vai ter os registradores que guardam a instrução atual ou acumulador que guarda dados

Essas informações são guardadas em uma sequência de 32 bits, ou seja, uma sequência de 32 zeros ou uns, então um de 32 bits vai ter largura 32 bits, vai ser a quantidade de informação que ele consegue guardar em um registrador.

Se tem um processador de 64-bits vai ter o dobro de tamanho, cada instrução vai ocupar 64 bits e as formas 64 em zeros e uns, se tem tamanho do registrador que muda, significa que as instruções mudam também.

Consegue ter mais performance , como tem mais memória, consegue fazer otimizações complexas durante o processamento,
mesmo assim esse tipo de vantagem ainda pode ser discutível não é a principal vantagem para você escolher um processador de 64.

A maior vantagem em todas elas é memória
para o processador querer acessar alguma posição da memória RAM ele tem um registrador que guarda o endereço da memória

O endereço na memória que ele vai apontar RAM e quais são os valores que ele consegue representar
Os registradores são conjuntos de zeros e uns, cada um representando o valor conforme for ligando zeros e uns.

Vamos pensar se o registrador tem um bit, quantos valores consegue armazenar? Como é um bit é só zero e um, então zero ou um, consegue armazenar dois valores.

A lógica com 32 bits representar 2 elevados a 32 bits
O maior endereço da memória que consegue representar, referenciar na RAM é o valor 2 elevado a 32 – 1,
não consegue representar valores maiores que isso, esse é o máximo.
Esse valor é aproximadamente 4 GB. Ou seja, no processador de 32 não consegue ter mais do que 4 GB, porque não dá para apresentar só não tem memória no registrador o suficiente para caber esse valor

por isso que foi criado o processador de 64-bits, com 64 bits dobra o número de bits usando. Ou seja, consegue representar, referenciar valores até 264 – 1, que é aproximadamente 16 bilhões de GB de RAM.

São 16 bilhões de GB de RAM, diminui muito a nossa alimentação de memória, vamos voltar para nossa situação atual. Porque é interessante escolher entre um instalador de 32 bits e de 64 bits?

32 bits nao vai morrer, eles vão encontrar algum nicho para eles
8 bits ainda existem, que estão lá na nossa máquina de lavar.
se você tem um processador de 32 bits você precisa usar o instalador que vai ter instruções de 32 bits.

32 bits estão ficando cada vez menos populares nos computadores pessoais. ele limita sua memoria ram

### neste capito apredemos sobre

- A função da memória cache para melhorar a performance do computador;
- Como as memórias de um computador são divididas de forma hierárquica;
- O que é o princípio da localidade;
- Qual a diferença entre processadores 32 e 64 bits,
- qual é o impacto disso na hora de escolher o instalador de um programa 32 e 64 bits.


# Números inteiros

Quando executamos um código o valor que guardamos nas variáveis ficam armazenadas na memória

1 bit para armazenar esse número, o bit representa ligado, desligado, representa zero e um
Quatro valores, dobramos e se continuar dobrando para 3 bis representa oito , se continuar essa situação com 7 bites tem 128 valores que pode representar, zero a 127. 1 Bite

São valores positivos, se eu quiser representar valores negativos pode pegar adicionar mais um bit que será um bit de sinal

# Caracteres

Vimos como representar números inteiros, mas como nós fazemos isso, para caracteres? é a mesma coisa
queremos representar aquelas letras de a-z, tem um alfabeto e diz que A é zero, B é 1 e assim por diante até z é igual a 25.
Sempre que nós quisermos falar de A vamos representar na memória 0, quando quiser falar de b de 1, sempre quando quiser falar de um caractere representa um número correspondente dele na memória e nisso começou 25 valores dá para usar 5 bits.

Temos letras de a-z, mas queremos falar de letras maiúsculas e letras minúsculas
tem um problema, que vai ser zero A minúsculo ou maiúsculo?

Qual vai ser a ordem desse grupo de caracteres? Alguém precisa decidir isso, porque senão vai virar uma confusão na hora de se comunicar cada um escolher um padrão; para arrumar esse problema , foi criado o ASCII.

American Standard Code for Information Interchange que significa código padrão americano para intercâmbio de informação, ele foi um código surgido no começo da Computação que codifica os caracteres em 7 bits.

Conseguimos representar caracteres maiúsculos é minúsculo, números e alguns símbolos especiais usando 7 bits, a tabela de todos os caracteres apresentados pelo ASCII além de símbolos temos caracteres invisíveis como espaço e Tab e esse foi uma das codificações mais influentes de todas.

Usamos a tabela ainda em certos momentos, certas aplicações, há algumas ressalvas, mas na época e funcionava super bem para estadunidenses porque era mais ou menos tipo de caracteres que eles usavam e conseguiram representar graficamente todos os textos da época.

O tempo passou e os computadores começaram a ficar padronizados em blocos de 8 bits ou 1 byte, a memória era sempre representada de byte em byte. Como ASCII era feito em 7 B tinha esse B adicional para representar mais coisas – com o adicional tem o dobro de caracteres, dobra número de caracteres tão assim pode representar ainda mais símbolos nessa região de memória.

Nisso surgiram vários grupos, cada grupinho definia quais seriam esses símbolos adicionais ao incrementar esse bit adicional e uma dessas codificações surgidas a partir de uma extensão do ASCII foi o Latin1.

O Latin acrescentava caracteres acentuadas e mais símbolos, sempre pensando no uso para caracteres de línguas latinas, dessas formas consegue ver na tabelinha com todos os caracteres do Latin1 acima dos pontinhos tem ASCII e abaixo os caracteres adicionais do Latin1

Mas ainda tinha um outro problema, pensa no mundo, o mundo é composto por vários países vários povos, com línguas diferentes e símbolos diferentes, na época que surgiu esses países também usavam computadores, eles usavam codificações próprias.

Codificações para representar caracteres em japonês e caracteres coreanos. O problema é que essas codificações eram totalmente incompatíveis entre si se por exemplo um americano quisesse mandar algum texto de forma digital para japonês ele usasse a própria a classificação dele para entender simplesmente não iam conseguir se comunicar.

E para isso surgiu o UNICODE, a ideia é tratar de letras, caracteres e os números respectivos deles, aquela tabelinha que diz qual o símbolo vai ser qual número e mais para frente usa os números para representar na memória.

Para representar todo UNICODE, qualquer caractere dele, vai precisar de 3 B, tudo bem, mas pensa comigo o ASCII e o Latin1 usavam um byte para cada carácter e eles eram a maior parte da web na época, eram a maior parte dos textos escritos digitalmente

E se eles tivessem que mudar para essa nova codificação do UNICODE, eles vão gastar dois bytes a mais para representar a mesma coisa que já fazia antes e ia ser um gasto de armazenamento muito grande e daria vários problemas porque vários computadores não iam ser compatíveis com a forma dessa codificação

 Era nessa hora achar outra alternativa e para resolver esse problema foi criado o UTF8, a ideia é ser tão genial em relação as outras codificações existentes é que ela não tem número fixo de bytes para todos os caracteres. Cada caractere tem o tamanho variado, ela foi criada para que os caracteres que são ASCII possam ser representadas usando 1 byte

 E é por isso, por conta de todas as qualidades da codificação UTF-8 que ela é a solução mais popular nos dias de hoje, você pega 2020 a web 95% usam o UTF-8, muito provavelmente todos os textos que você escreve em programas, se você pega em sites web que você consegue escrever com acento são codificados UTF-8.

 Vimos a codificação UTF-8 para representar os vários caracteres do sistema Unicode, mas essa não é a única codificação para isso. Existem outros dois sistemas UTF-16 e UTF-32. Vamos ver a diferença entre esses três.

 Atenção: todos os três sistemas conseguem codificar todos os caracteres do Unicode. Apenas a quantidade de bits que eles usarão para fazer isso que muda.

 UTF-8
Essa codificação representa os caracteres em pedaços de 8 bits e sua grande vantagem é manter os textos codificados apenas em ASCII (a grande maioria da Web no passado) intactos. Ele tem um tamanho variável e cada caractere pode ocupar 8, 16, 24 ou 32 bits.

Essa é a codificação mais comum na web hoje.

UTF-16
Essa codificação representa os caracteres em pedaços de 16 bits. Isso significa que a codificação não é mais compatível com ASCII e ocupa o dobro de memória em textos que possuem apenas caracteres da língua inglesa. Ele tem um tamanho variável e cada caractere pode ocupar 16 ou 32 bits.

Sua grande vantagem é ocupar menos espaço quando o texto possui muitos caracteres asiáticos (UTF-8 usaria 3 bytes por caractere e UTF-16 apenas 2). Mesmo assim, essa vantagem é bem questionada e muitas pessoas não recomendam o seu uso em muitos casos.

Essa é a codificação usada em sistemas Windows.

UTF-32
Essa codificação representa os caracteres em pedaços de 32 bits. Ela não é compatível com ASCII e ocupa 4 vezes mais espaço em textos que só utilizavam ASCII. Mesmo assim, diferentemente do UTF-8 e UTF-16, essa codificação tem um tamanho fixo e essa é sua grande vantagem. Como cada caractere ocupa a mesma quantidade de bits, é fácil saber em qual posição cada caractere está em um texto (é só pegar o índice do caractere e multiplicar por 32).

# Lista

Guarda na memória esses valores, espaços contínuos um do lado do outro

se pensar numa situação que tem listas, a lista 1 armazenamento 1,2, a lista 2 que tem o elemento 3 e a lista 3 que tem o elemento 4; quero fazer uma lista de listas.
Cada elemento nessa lista vai ser uma lista
e o problema é que as listas têm tamanho variado - uma tem dois elementos, uma só tem um elemento,
A solução para esse problema onde os elementos têm tamanho variado é que não vai guardar o conteúdo deles
vamos guardar nessa lista o 1 e o 2, vamos guardar é o endereço dessas listas.
Da mesma forma que L1 é o começo da lista [1,2], o mesmo para L2 e L3 são os começos das listas,
ele vai chamar de endereço da lista e a parte boa disso: os endereços têm o mesmo tamanho.
essa ideia é chamada de ponteiros

ponteiro
passagem por referencia
Como sabemos o que é ponteiro, tem um conceito muito importante na computação que se você acaba não sabendo o que é isso, pode te dar alguns problemas no futuro
const lista1
const list2 = lista1
sera sap duas lista diferentes com o mesmo valor? ou mesma lista com dois ponteiros apontado pra ela na memoria?
Aconteceu que quando se faz a cópia do conteúdo de lista um para lista 2, na verdade estamos fazendo a cópia é da referência para o conteúdo da lista 1, na lista 1 tem um ponteiro para o conteúdo.
Está apontando para uma região da memória onde estão os valores e quando faz a cópia disso faz também cópia para apontar para o mesmo endereço da memória, por isso faz a modificação - elemento de índice zero da lista dois também modifica o elemento zero da lista da lista 1.
Porque eles estão apontando para os lugares, estão modificando o mesmo elemento, por isso que quando está trabalhando com listas e objetos que trabalham usando ponteiros, tem que ter muito cuidado ao fazer cópia dos elementos.

# Números de ponto flutuante









