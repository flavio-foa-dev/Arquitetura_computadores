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