# Algoritmo colônia de vaga-lumes (Firefly Algorithm)

Algoritmo desenvolvido como um dos requisitos do mestrado em computação aplicada da Universidade Estadual de Ponta Grossa - UEPG

## Pré-requisitos

- yarn

    Verificar se o yarn está instalado:
    ```
    yarn -v 
    ```
    Instruções para instalação aqui: https://yarnpkg.com/

## Começando

- Primeiramente é preciso fazer o download do projeto
    ```
    git clone https://github.com/jvaurof/firefly.git
    ```

- Baixar as dependências

    Este comando é necessário somente uma única vez 
    ```
    yarn
    ```

- Executar o algoritmo

    Para executar o algoritmo basta abrir o index.html
    ```
    /public/index.html
    ```

    Ao abrir a página será exibido um gráfico contendo os melhores vaga-lumes em função de cada iteração 

  ![Alt text](/img/grafico.png?raw=true "Gráfico")

    Ao atualizar a página será gerada uma nova população de vagalumes, gerando um novo gráfico
    
- Parâmetros de entrada
    
    Caso queira, é possível modificar os parâmetros de entrada no arquivo index.js 
    
    ```
    /src/index.js
    ```
    
    ![Alt text](/img/user_input.png?raw=true "user_input")
    
    Caso o arquivo for modificado será necessário transpilar o código novamente executando o comando
    
    ```
    yarn biuld
    ```
    
## Observações

   1 - Caso o gráfico não carregue basta redimensionar a tela.
   
   2 - O navegador não é o melhor ambiente para execução de algoritmos de otimização. Neste caso só foi aplicado para fins de testes.
   
## Fontes

- What is an Optimization Problem? #Optimization #FireFly 

    https://www.youtube.com/watch?v=TDpmLOkaihY&list=PL-i8do33HJos8n_wkGXAxt1zFRPAZ8Yym
    
- Fireﬂy Algorithms for Multimodal Optimization
    
    https://www.researchgate.net/publication/45904853_Firefly_Algorithms_for_Multimodal_Optimization
    
