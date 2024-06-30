# Use uma imagem base para Node.js
FROM node:20-alpine AS build

# Defina o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copie os arquivos de dependências
COPY package*.json ./

# Instale as dependências
RUN npm ci

# Copie o restante do código da aplicação
COPY . .

# Compile o TypeScript
RUN npm run build

# Use uma imagem base mínima para produção
FROM node:20-alpine AS production

# Defina o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copie apenas os arquivos compilados do estágio anterior
COPY --from=build /usr/src/app/build ./build
COPY --from=build /usr/src/app/package*.json ./

# Instale apenas as dependências de produção
RUN npm ci --only=production

# Exponha a porta que a aplicação usará
EXPOSE 3000

# Defina variáveis de ambiente necessárias
ENV NODE_ENV=production

# Comando para iniciar a aplicação
CMD ["node", "build/index.js"]
