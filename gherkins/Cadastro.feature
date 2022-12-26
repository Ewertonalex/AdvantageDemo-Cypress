#language: pt

@hml @prd 
Funcionalidade: Cadastro de Usuário
  Como um cliente
  Desejo informar meus dados no cadastro
  Para criar um usuário

  Cenário: Realizar cadastro de usuário válido
    Dado que esteja na página "Create Account"
    Quando cadastrar usuário com dados "válidos"
    Então deve ser redirecionado para a página "Home"
    E deve ser exibido o nome do usuário cadastrado
    Quando acessar a página "Dados Pessoais pós Cadastro"
    Então deve ser apresentado os dados do usuário "válido" conforme cadastrados

  Esquema do Cenário: Realizar cadastro de usuário válido com o preenchimento de campos opcionais
    Dado que esteja na página "Create Account"
    Quando cadastrar usuário "<campo>"
    Então deve ser redirecionado para a página "Home"
    E deve ser exibido o nome do usuário cadastrado
    Quando acessar a página "Dados Pessoais pós Cadastro"
    Então deve ser apresentado os dados do usuário conforme cadastrado "<campo>"

    Exemplos:
      | campo                                  |
      | com o campo opcional First name        |
      | com o campo opcional Last name         |
      | com o campo opcional Phone number      |
      | com o campo opcional Address           |
      | sem campos opcionais                   |

Esquema do Cenário: Realizar cadastro de usuário sem o preenchimento de campos obrigatórios
    Dado que esteja na página "Create Account"
    Quando cadastrar usuário "<campo>"
    Então deve ser exibida a mensagem para o cadastro de usuário "<campo>"

    Exemplos:
      | campo                          |
      | sem o campo Username           |
      | sem o campo Email              |
      | sem o campo Password           |
      | sem o campo Confirm Password   |
      | sem o campo Termos de Uso      |

Esquema do Cenário: Realizar cadastro de usuário com o preenchimento de informações obrigatórias inválidas
    Dado que esteja na página "Create Account"
    Quando cadastrar usuário "<campo>"
    Então deve ser exibida a mensagem para o cadastro de usuário "<campo>"

    Exemplos:
      | campo                                |
      | com o campo Username inválido        |
      | com o campo E-mail inválido          |
      | com o campo Senha inválido           |
      | com o campo Confirmar Senha inválido |

Esquema do Cenário: Realizar cadastro de usuário com o preenchimento de informações não obrigatórias inválidas
    Dado que esteja na página "Create Account"
    Quando cadastrar usuário "<campo>"
    Então deve ser exibida a mensagem para o cadastro de usuário "<campo>"

    Exemplos:
      | campo                                  |
      | com o campo opcional First name        |
      | com o campo opcional Last name         |
      | com o campo opcional Phone number      |
      | com o campo opcional City              |
      | com o campo opcional Address           |
      | com o campo opcional State             |
      | com o campo opcional Postalcode        |

Cenário: Realizar cadastro de usuário com Username já cadastrado
    Dado que esteja na página "Create Account"
    Quando cadastrar usuário "com Username já cadastrado"
    Então deve ser exibida a mensagem para o cadastro de usuário "com Username já cadastrado"

Cenário: Realizar cadastro de usuário com Email já cadastrado
    Dado que esteja na página "Create Account"
    Quando cadastrar usuário "com Email já cadastrado"
    Então deve ser exibida a mensagem para o cadastro de usuário "com Email já cadastrado"
      