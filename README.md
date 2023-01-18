# toughts

Ola este projeto de estudo tem como o principal objetivo criar um sistema com o crud, validação de sessão, validação de login, filtros e ordenações de pensamentos.

As demais tecnologias foram usado neste projeto;

* NodeJs
* Express
* sequelize
* banco de dados relacional Mysql
* Arquitetura full MVC
* view engine: Handlebars
* Express-session
* flash-message 
* bcryptjs
* dentre outras.

o Mesmo contem as seguintes telas:

## Tela inicial do projeto:
Na tela inicial contem todos os pensamentos, e é possivel efetuar uma busca limpar a mesma, ordenar a o resultado da busca (mais velho para mais novo e vice-versa), efetuar registro ou login

![pensamentos antes do login](https://user-images.githubusercontent.com/29904658/213255518-2c4c0c16-99c9-40ac-8086-c7c001e22306.png)

## Tela de login:
Este projeto ja tem validações de usuario e senha com bcryptjs para cryptografia, bem como sessões e flash message para apoio ao usuario.

![login](https://user-images.githubusercontent.com/29904658/213256088-0d3f68eb-a4a7-4373-81fb-a1154af5aca5.png)

## Ambiente do usuario após o login:
Esta tela fornece acesso para o usuario aos seus pensamentos onde o mesmo pode acessar a sua daschborad e editar ou até mesmo excluir um pensamento.

![Apos login](https://user-images.githubusercontent.com/29904658/213256947-2233bf54-6739-439a-9fdc-ee8f4a53f3b7.png)

## Tela de Dashboard:
Esta tela permite com que o usuario edite ou exclua seus pensamentos, somente usuarios logados podem acessar esta tela.

![Dashboards editar e excluir](https://user-images.githubusercontent.com/29904658/213258172-8285d875-e180-418d-abc4-cf23f7affa90.png)

## Tela de Edição de pensamento:
Nesta tela o usuario pode editar seus pensamentos:

![Editando](https://user-images.githubusercontent.com/29904658/213258331-492e702b-1640-4246-9012-ed2ae958523c.png)








