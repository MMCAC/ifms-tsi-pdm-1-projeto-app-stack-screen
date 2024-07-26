# Notas de aula

Curso: Tecnologia em Sistemas para Internet

Disciplina: Programação para Dispositivos Móveis I

Professor: Vinícius Maeda

---

### Comandos básicas de Terminal

#### Criar pasta
`mkdir nome_da_pasta`

#### "subir" uma pasta
`cd ..`

#### ir para a raiz do HD
`cd \`

#### entrar numa pasta
`cd nome_da_pasta`

#### listar o conteúdo de uma pasta
`dir`

#### limpar o terminal
`cls`

--- 

### Comandos utilizados para React Native

#### Criar um aplicatico React Native com Expo
`npx create-expo-app --template blank <nome_do_projeto>`
`npx create-expo-app --template blank meu-app`

#### para rodar o projeto
`npx expo start`

#### para rodar o projeto com redes diferentes
`npx expo start --tunnel`


---


### Comandos para rodar o emulador a partir do teminal

#### listar todos as máquinas virtuais
`emulator -list-avds`

#### iniciar uma marquina virtual específica
`emulator -avd <nome_da_vm>`
`emulator -avd Nexus`


---


### Comandos para instalar o React Navigation

#### instalar o React Navigation
`npm install @react-navigation/native`

#### instalar dependências do React Navigation
`npx expo install react-native-screens react-native-safe-area-context`

#### instalar o Native Stack
`npm install @react-navigation/native-stack`