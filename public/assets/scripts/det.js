document.addEventListener("DOMContentLoaded", function() {
    
    const filmes = [
        {
            id: 1,
            titulo: "Capitão América: Admirável Mundo Novo",
            imagem: "https://br.web.img3.acsta.net/c_310_420/img/56/0c/560c72bf877f88472877898cebe00ff0.jpg",
      
            Diretor: "Julius Onah",
            descricao: "Sam se vê no meio de um incidente internacional após se encontrar com o Presidente Thaddeus Ross. Ele precisa descobrir a razão por trás de um nefasto complô global antes que o verdadeiro mentor faça o mundo inteiro ver vermelho",
            ano: 2025,
            genero: "Ação, Aventura, Ficção Científica"
            ,trailer:  "https://www.youtube.com/embed/U7JG6FMoEdM",
            
            
        },
        {
            id: 2,
            titulo: "Minecraft",
            imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/5/50/A_Minecraft_Movie_p%C3%B4ster.jpg/250px-A_Minecraft_Movie_p%C3%B4ster.jpg",
            diretor: "Jared Hess",
            descricao: "Um portal misterioso atrai quatro desajustados para o Overworld, uma terra das maravilhas bizarras e cúbicas que prospera com a imaginação. Para voltar para casa, eles têm que dominar o terreno enquanto embarcam em uma missão mágica com um construtor inesperado chamado Steve...",
            ano: 2025,
            genero: "Animação, Ação, Família, Aventura, Fantasia",
            trailer: "https://www.youtube.com/embed/EVKYAAES6JQ",
        },
        {
            id: 3,
            titulo: "Vitória",
            imagem: "https://upload.wikimedia.org/wikipedia/pt/9/90/Cartaz_do_filme_Vit%C3%B3ria.jpg",
            diretor: "Andrucha Waddington, Breno Silveira",
            descricao: "Vitória é uma senhora solitária que, aflita com a violência que passa a tomar conta da sua vizinhança, começa a filmar da janela de seu apartamento. A idosa registra a movimentação de traficantes de drogas da região durante meses, com a intenção de cooperar com o trabalho da polícia.",
            ano: 2025,
            genero: "Drama, Policial",
            trailer: "https://www.youtube.com/embed/3Zr6YJ02r5g",
        },
        {
            id: 4,
            titulo: "Operação Vingança",
            imagem: "https://cdn.cineart.com.br/vibezz_496192494.jpeg",
            diretor: "James Hawes",
            descricao: "Charlie Heller (Malek) é um brilhante, mas totalmente introvertido, decodificador da CIA que trabalha em um escritório no porão da sede em Langley e tem sua vida virada de cabeça para baixo quando sua esposa é assassinada em um ataque terrorista em Londres. Quando seus supervisores se recusam a tomar providências, ele decide resolver o problema com suas próprias mãos, embarcando em uma perigosa jornada pelo mundo para encontrar os responsáveis. Sua inteligência se torna sua arma mais poderosa para despistar seus perseguidores e conseguir sua vingança.",
            ano: 2025,
            genero: "Ação, Suspense, Espionagem, Drama",
            trailer: "https://www.youtube.com/embed/y3YWAXJKPes",
            
        },
        {
            id: 5,
            titulo: "Branca de Neve",
            imagem: "https://cdn.cineart.com.br/vibezz_516046744.jpeg",
            diretor: "Mark Webb",
            descricao: "Uma recriação do clássico animado de Walt Disney de 1937 sobre uma bela jovem princesa que, enquanto é perseguida por uma rainha ciumenta, busca refúgio em uma cabana em uma floresta.",

            ano: 2025,
            genero:"fantasia musical",
            trailer: "https://www.youtube.com/embed/X3o9GyKda1k",
        },
{
    id: 6,
    titulo: "DROP: AMEAÇA ANÔNIMA",
    imagem: "https://cdn.cineart.com.br/vibezz_33375295.png",
    diretor: "Christopher B. Landon",
    descricao: "Violet é uma mãe viúva que vai a um restaurante para se encontrar com Henry. No entanto, ela logo recebe mensagens de telefone de uma figura misteriosa encapuzada que ameaça matar seu filho pequeno e sua irmã, a menos que ela mate Henry.",
    ano: 2025,
    genero: "suspense e mistério",
    trailer: "https://www.youtube.com/embed/dv-XeNIFvNA",
        },
{
    id: 7,
    titulo: "The Chosen: Última Ceia",
    imagem: "https://cdn.cineart.com.br/vibezz_764676601.png",
    diretor: "Dallas Jenkins",
    descricao: "The Chosen: Última Ceia é um filme que retrata a última ceia de Jesus com seus discípulos. O filme é parte da série bíblica The Chosen, que se baseia na vida de Jesus Cristo. ",
    ano: 2025,
    genero: "drama histórico e religioso",
    trailer: "https://www.youtube.com/embed/KC0gUEX3P30",
        },
{
    id:8 ,
    titulo: "Presence",
    imagem: "https://cdn.cineart.com.br/vibezz_940941070.png",
    diretor: "Steven Soderbergh",
    descricao: "Uma família se muda para uma nova casa, onde uma presença misteriosa assombra o lugar.",
    ano: 2025,
    genero: " Terror, Suspense, Suspense psicológico",
    trailer: "https://www.youtube.com/embed/QbXOCYU1dQc",
        },
{
    id: 9,
    titulo: "Kaiju No. 8: Mission Recon",
    imagem: "https://cdn.cineart.com.br/vibezz_523709102.png",
    diretor: " Shigeyuki Miya, Tomomi Kamiya",
    descricao: "Kafka Hibino entra para a Força de Defesa para eliminar os terríveis Kaijus, bestas poderosas que assolam o Japão. Mas Kafka esconde um segredo, ele próprio ganhou a habilidade de se tornar um Kaiju, usando seus poderes para combater as criaturas.",
    ano: 2025,
    genero: "Animação/Aventura",
    trailer: "https://www.youtube.com/embed/ogww5lNDgDU",
        },
{
    id: 10,
    titulo: "O Macaco",
    imagem: "https://image.tmdb.org/t/p/w500/56u4HEtE27uBicriDXuVkUknXQ0.jpg",
    diretor: " Oz Perkins",
    descricao: "Irmãos gêmeos encontram um misterioso macaco de corda. Após a descoberta, uma série de mortes absurdas destroça a família. Muitos anos depois, o macaco inicia uma nova onda de assassinatos, forçando os irmãos a enfrentar o brinquedo amaldiçoado.",
    ano:2025 ,
    genero: "terror, suspense",
    trailer: "https://www.youtube.com/embed/husMGbXEIho",
        },
{
    id: 11,
    titulo: "Missão Quase Impossível",
    imagem: "https://image.tmdb.org/t/p/w500/ccoL6SB1efI9epaLrqxwHVZ8uKN.jpg",
    diretor: "Brian Levant",
    descricao: "Bob, um espião da CIA, decide abandonar sua carreira para casar com sua namorada, Gillian. Quando ela precisa viajar e Bob fica tomando conta dos filhos dela, uma das crianças acidentalmente faz o download de uma fórmula secreta e revela o paradeiro do agente secreto para um terrorista russo que está atrás dele.",
    ano: 2010,
    genero: "Infantil/Ação",
    trailer: "https://www.youtube.com/embed/fa2RZf0m39g",
        },
{
    id:12 ,
    titulo: "Watchmen Capítulo II",
    imagem: "https://image.tmdb.org/t/p/w500/rvSEowY2XE0Gb06FBEwQng2M6KX.jpg",
    diretor: "Brandon Vietti",
    descricao: "Os ex-heróis aparentemente se tornam alvos. Enquanto todos eles enfrentam a ética, demônios internos e uma sociedade voltada contra eles, correm contra o relógio para desvendar uma trama profunda que pode desencadear uma guerra nuclear global.",
    ano:2024 ,
    genero: "ação animado",
    trailer: "https://www.youtube.com/embed/VEX3fJMNxwc",
        },
{
    id: 13,
    titulo: "El extraño retorno de Diana Salazar",
    imagem: "https://image.tmdb.org/t/p/w500/wY5LO3EGZzLnCccSObdioK47Mxw.jpg",
    diretor: "Luis Manzo, Pavel Vázquez, Carlos Santos",
    descricao: "No século XVII, o amor proibido de Leonor e Eduardo termina tragicamente quando ela é executada por bruxaria. Séculos depois, suas almas reencarnam como Diana e Mario, mas enfrentam o mesmo destino.",
    ano: 2025 ,
    temporadas: "3",
    genero: "drama, fantasia, romance",
    trailer: "https://www.youtube.com/embed/uJVP_I5o7Kw",
        },
{
    id:14 ,
    titulo: "Os Bucaneiros",
    imagem: "https://image.tmdb.org/t/p/w500/9jDbuQ6ykxOo6rmlaIrGucOfuDN.jpg",
    diretor: "Susanna White, Richard Senior, Charlotte Regan e William McGregor. ",
    descricao: "Um grupo de herdeiras jovens são transformadas pra sempre quando são levadas a cruzar o Atlântico até Londres.",
    ano:2023 ,
    temporadas: "1",
    genero: "drama",
    trailer: "https://www.youtube.com/embed/ZmxJf94Jinc",
        },
{
    id: 15 ,
    titulo: "Vingadores: Ultimato ",
    imagem: "https://image.tmdb.org/t/p/original/mI1Ktgg7LuhwAhUgke4rHUxlDUr.jpg",
    diretor: " Anthony Russo, Joe Russo",
    descricao: "Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco.",
    ano: 2019,
    genero: " Ação, Filme de super-herói, Aventura, Ficção científica, Fantasia, Drama",
    trailer: "https://www.youtube.com/embed/PgrmbRID0eY",
        },
{
    id: 16,
    titulo: "Boneco do Mal",
    imagem: "https://escolaeducacao.com.br/wp-content/uploads/2019/04/boneco-do-mal.jpg",
    diretor: " William Brent Bell",
    descricao: "Uma babá norte-americana é surpreendida ao descobrir que a criança de sua nova família inglesa é na verdade um boneco de tamanho real. Depois de quebrar várias regras, determinados eventos a fazem acreditar que ele está realmente vivo",
    ano: 2016,
    genero: "Terror, Suspensa",
trailer: "https://www.youtube.com/embed/p_LEUEWYTQc",

},
{
    id:17 ,
    titulo: "Velozes e Furiosos",
    imagem: "https://www.cafecomfilme.com.br/media/k2/items/cache/50f8055cbf99a024c0772160c01fed2b_XL.jpg?t=20210108_154337",
    diretor: " Vin Diesel, Justin Lin, Louis Leterrier, James Wan, David Leitch, F. Gary Gray, Rob Cohen, Phillip Atwell, John Singleton",
    descricao: "The Fast and the Furious é uma franquia de mídia e Universo Compartilhado centrado em uma série de filmes de ação que estão amplamente preocupados com corridas de rua, assaltos, espiões e família. A franquia também inclui curtas-metragens, uma série de televisão, videogames e atrações de parques temáticos",
    ano:2001 ,
    genero: "Corrida, Policiao, Ação",
trailer: "https://www.youtube.com/embed/g5_iHh2owEc",
},
{
    id: 18,
    titulo: "Batman: O Cavaleiro das Trevas Ressurge",
    imagem: "https://www.themoviedb.org/t/p/original/mBxOeqHQvdF5lxGtDUB6XVcJNi5.jpg",
    diretor: "Christopher Nolan",
    descricao: "Após ser culpado pela morte de Harvey Dent e passar de herói a vilão, Batman desaparece. As coisas mudam com a chegada de uma ladra misteriosa, a Mulher-Gato, e Bane, um terrorista mascarado, que fazem Batman abandonar seu exílio forçado.",
    ano:2012 ,
    genero: "Ficção policial, Drama, Ação, Suspense, Mistério, Filme de super-herói",
trailer: "https://www.youtube.com/embed/q8ncjHylG6c",
        },
{
    id: 23,
    titulo: "Liga da Justiça",
    imagem: "https://br.web.img2.acsta.net/pictures/17/10/23/19/55/0260439.jpg",
    diretor: "Zack Snyder",
    descricao: "Impulsionado pela restauração de sua fé na humanidade e inspirado pelo ato altruísta do Superman, Bruce Wayne convoca sua nova aliada Diana Prince para o combate contra um inimigo ainda maior, recém-despertado. Juntos, Batman e Mulher-Maravilha buscam e recrutam com agilidade um time de meta-humanos, mas mesmo com a formação da liga de heróis sem precedentes, pode ser tarde demais para salvar o planeta de um catastrófico ataque.",
    ano: 2017,
    genero: "Drama, Ação, Suspense, Mistério, Filme de super-herói",
trailer: "https://www.youtube.com/embed/H0Z7ewOXCKw",
        },
{
    id: 24 ,
    titulo: "O Exterminador do Futuro: Gênesis",
    imagem: "https://1.bp.blogspot.com/-aKIBA0qDGpk/Vl5Y1URIcEI/AAAAAAAANwA/Yo6gMsuOXZU/s1600/exterminador_do_futuro_genesis.jpg",
    diretor: " Alan Taylor",
    descricao: "John Connor, líder da resistência humana contra Skynet, envia Kyle Reese de volta a 1984 para proteger sua mãe, Sarah. Porém, Reese se surpreende ao encontrá-la com um exterminador que age como seu protetor, e descobre que o passado foi alterado.",
    ano: 2015 ,
    genero: "Ação/Ficção científica",
trailer: "https://www.youtube.com/embed/b2pBpBGYK4E",
        },
{
    id: 27,
    titulo: "Homem de Ferro 3",
    imagem: "https://www.papodecinema.com.br/wp-content/uploads/2013/04/20180308-homem-de-ferro-3-papo-de-cinema-cartaz.jpg",
    diretor: " Shane Black",
    descricao: "Depois de um inimigo reduzir o mundo de Tony Stark a destroços, o Homem de Ferro precisa aprender a confiar em seus instintos para proteger aqueles que ama, especialmente sua namorada, e lutar contra seu maior medo: o fracasso.",
    ano:2013 ,
    genero: " Ação/Ficção científica",
trailer: "https://www.youtube.com/embed/igfXmU1r_mc",
        },
{
    id:28 ,
    titulo: "Medusa",
    imagem: "https://br.web.img2.acsta.net/c_310_420/img/fc/12/fc124ed242bc4bc20438ea753b7c8de7.jpg",
    diretor: "María Gamboa",
    descricao: "A série Medusa conta a história de Bárbara Hidalgo, uma CEO que acorda sem memória após uma tentativa de assassinato. Ela precisa descobrir quem está por trás do atentado e desvendar uma trama cheia de mistérios",
    ano: "2025 - 1 temporada",
    genero: "Drama, Suspense",
trailer: "https://www.youtube.com/embed/BwhUIpkf9Fk",
        },
{
    id: 29,
    titulo: "Quando o Telefone Toca",
    imagem: "https://br.web.img3.acsta.net/c_310_420/img/9e/dd/9edda21cfc298e8b1ce16497dc47118c.jpg",
    diretor: "Park Sang-woo e Wi Deuk-gyu",
    descricao: "O casamento tenso de um político em ascensão e uma mulher que não fala começa a desandar por causa da ligação telefônica de um sequestrador.",
    ano: "2024 - 1 temporada" ,
    genero: "Dorama",
trailer: "https://www.youtube.com/embed/RIPmqpJ_vKY",
        },
{
    id: 30,
    titulo: "Halo",
    imagem: "https://br.web.img2.acsta.net/c_310_420/pictures/22/02/21/20/10/2589351.jpg",
    diretor: "Otto Bathurst, Jonathan Liebesman, M. J. Bassett, Roel Reiné e Jet Wilkinson",
    descricao: "Master Chief, um super-soldado ciberneticamente modificado, defende a humanidade contra o Covenant, uma aliança de alienígenas fanáticos, no século 26.",
    ano:"2022 - 2 temporadas" ,
    genero: "Ficção científica ",
trailer: "https://www.youtube.com/embed/5KZ3MKraNKY",
        },
{
    id: 31,
    titulo: "Cassandra",
    imagem: "https://images.justwatch.com/poster/324983705/s166/temporada-1.avif",
    diretor: "Benjamin Gutsche",
    descricao: "Cassandra é uma minissérie alemã de suspense e ficção científica de 2025, dirigida e escrita por Benjamin Gutsche. Protagonizada por Lavinia Wilson, a produção teve sua estreia mundial em 23 de janeiro de 2025 no Fantasy Filmfest, em Munique, antes de ser lançada globalmente na Netflix em 6 de fevereiro de 2025",
    ano: " 2025 - 1 temporada" ,
    genero: " Suspense, Soap opera, Drama",
trailer: "https://www.youtube.com/embed/cw6vMgTDmkU",
        },
{
    id: 32,
    titulo: "A Dona da Bola",
    imagem: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2025/01/31/1846665027-4748042179498481306135786375235378897470639n.jpg",
    diretor: "James Ponsoldt",
    descricao: "A Dona da Bola é uma série de televisão americana de comédia de esporte criada por Elaine Ko, Mindy Kaling, Ike Barinholtz, e David Stassen, and starring Kate Hudson. A série estreou na Netflix em 27 de fevereiro de 2025. Em março de 2025, a série foi renovada para uma segunda temporada",
    ano: "2025 - 1 temporada",
    genero: " Comédia televisiva, Filme de Esportes",
trailer: "https://www.youtube.com/embed/thA5bHMjOI4",
        },
       
    ];

    // pega o id do filme pela URL
    const params = new URLSearchParams(window.location.search);
    const filmeId = params.get('id'); 
    // aqui acha o filme correspondente
    const filme = filmes.find(f => f.id == filmeId);

    if (filme) {
        document.getElementById('filme-img').src = filme.imagem;
        document.getElementById('filme-titulo').textContent = filme.titulo;
        document.getElementById('filme-ano').textContent = filme.ano;
        document.getElementById('filme-genero').textContent = filme.genero;
        document.getElementById('filme-diretor').textContent = filme.diretor;
        document.getElementById('filme-descricao').textContent = filme.descricao;
        document.getElementById('trailer-video').src = filme.trailer;
    }
    
    }
    
  
);
