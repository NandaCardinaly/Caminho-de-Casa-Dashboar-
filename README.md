
![Logo](https://i.postimg.cc/LXzXRNn7/GFT.png)


### Projeto: Pub Caminho de Casa

Projeto frontend desenvolvido como parte das atividades de treinamento em angular do programa Start da GFT Brasil. 

#### ⚒ Ferramentas Utilizadas

- Ambiente de desenvolvimento: VSCode
- Banco de dados: MongoDB Atlas Database
- Angular CLI versão 15
- Node versão 18
- NPM versão 9
#### 💻 Rodando a aplicação
##### O backend
O projeto de front, consumiu uma api node, previamente disponibilizada, para utilizá-la, abra o diretório da aplicação "pub-manager", e use os comandos abaixo: 

```bash
  npm install //instala as dependências
  npm run dev //inicia o servidor
```

##### O frontend
Acesse o projeto do diretório "caminho-de-casa" no VSCode, para conseguir um servidor HTTP com as páginas construídas, no terminal da IDE dê o comando:

```bash
  ng serve 
```

##### O Banco de dados
Abra uma conta no Atlas (versão cloud do MongoDB) e crie um novo Cluster, conecte-se a aplicação no "Connect your application", escolha Node.js como driver, copie as informações geradas.
Em seguida abra o projeto backend no seu VSCode,  no arquivo dbConnect.ts em " mongoose.connect() " substitua por suas informações que o Atlas gerou. Em seguida troque suas credenciais de 
acesso "username" e "password" pelas suas pessoais.


#### 📘 Screenshots

![App Screenshot](https://i.postimg.cc/zfVC8bZW/0-Home.jpg)
ﾠﾠﾠﾠ
![App Screenshot](https://i.postimg.cc/ZnZvB0gw/1-Visualiza-o-de-dados.jpg)
ﾠﾠﾠﾠ
![App Screenshot](https://i.postimg.cc/1zq8vp1W/3-Card-pio.jpg)
ﾠﾠﾠﾠ
![App Screenshot](https://i.postimg.cc/NfcZFY0L/2-Dialogs-de-Cadastros.jpg)
ﾠﾠﾠﾠ

#### Autoria: Fernanda Cardinaly

Fernanda Cardinaly -
fernanda.silva@gft.com

