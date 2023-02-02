
# Compare this snippet from backend\Dockerfile:
FROM node

WORKDIR /app

COPY package*.json ./

RUN npm install -g

COPY . .

EXPOSE 19006

CMD ["npm","start"]

