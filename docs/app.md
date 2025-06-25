# Nome do Aplicativo
Podcast Menager

#Descrição
Um app ao estilo netflix, aonde posso centralizar difetentes epsódios podcasts separados por categoria


### Domínio
Podcasts feitos em vídeo

#### Features
- Listar os podcasts em sessões de categorias
    -[saúde, fitness, mentalidade, humor]

- Filtrar episódios por nome de podcast

### Como vou implementar
Vou retornar em uma api rest(json) o nome podcast, nome do episódio, imagem de capa, link, categorias
```js
[
    {
   podcastName: "flow",
   episódio: "MENTIRAM PRA VOCÊ SOBRE INTELIGÊNCIA ARTIFICIAL [com Fabio Akita]",
   videoId: "sf4Gxf0LiKo",
   cover: "https://i.ytimg.com/vi/sf4Gxf0LiKo/hqdefault.jpg",
   link: "https://www.youtube.com/watch?v=sf4Gxf0LiKo",
   category: ["IA, Tecnologia"]
},
    {
   podcastName: "flow",
   episódio: "O QUE ESPERAR DO JULGAMENTO DO BOLSONARO? [com Eduardo Oinegue]",
   videoId: "MYg1VYJ2fS8",
   cover: "https://i.ytimg.com/vi/MYg1VYJ2fS8/hqdefault.jpg",
   link: "https://www.youtube.com/watch?v=MYg1VYJ2fS8",
   category: ["Politica"]
},
]


```