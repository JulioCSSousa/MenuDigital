# syntax=docker/dockerfile:1

# Utilize comentários ao longo deste arquivo para ajudar você a começar.
# Se precisar de mais ajuda, visite o guia de referência do Dockerfile em
# https://docs.docker.com/engine/reference/builder/

ARG NODE_VERSION=20.10.0

FROM node:${NODE_VERSION}-alpine

# Use o ambiente de produção do Node por padrão.
ENV NODE_ENV production

WORKDIR /usr/src/app

# Copie os arquivos de dependências para a camada de cache.
COPY package.json package-lock.json ./

# Instale as dependências, usando cache para otimizar builds subsequentes.
RUN npm ci --omit=dev

# Copie o restante dos arquivos de origem para a imagem.
COPY . .

# Execute a aplicação como um usuário não-root.
USER node

# Exponha a porta que a aplicação escuta.
EXPOSE 13331

# Execute a aplicação.
CMD ["npm", "start"]
