const cardData = {
    rendaFixa: [
        {
            imageUrl: 'https://picsum.photos/200/100?random=1',
            title: 'Curso de Renda Fixa Básico',
            author: 'Maria Silva',
            imageAlt: 'Curso de Renda Fixa'
        },
        {
            imageUrl: 'https://picsum.photos/200/100?random=2',
            title: 'Investimentos Conservadores',
            author: 'João Santos',
            imageAlt: 'Investimentos Conservadores'
        },
        {
            imageUrl: 'https://picsum.photos/200/100?random=3',
            title: 'CDB e Tesouro Direto',
            author: 'Ana Costa',
            imageAlt: 'CDB e Tesouro Direto'
        },
        {
            imageUrl: 'https://picsum.photos/200/100?random=4',
            title: 'Fundos de Investimento',
            author: 'Pedro Lima',
            imageAlt: 'Fundos de Investimento'
        }
    ],
    topLastMonth: [
        {
            imageUrl: 'https://picsum.photos/200/200?random=5',
            title: 'Análise Técnica Avançada',
            author: 'Carlos Mendes',
            imageAlt: 'Análise Técnica'
        },
        {
            imageUrl: 'https://picsum.photos/200/200?random=6',
            title: 'Day Trade Profissional',
            author: 'Luiza Ferreira',
            imageAlt: 'Day Trade'
        },
        {
            imageUrl: 'https://picsum.photos/200/200?random=7',
            title: 'Criptomoedas para Iniciantes',
            author: 'Roberto Alves',
            imageAlt: 'Criptomoedas'
        },
        {
            imageUrl: 'https://picsum.photos/200/200?random=8',
            title: 'Mercado de Ações',
            author: 'Fernanda Rocha',
            imageAlt: 'Mercado de Ações'
        },
        {
            imageUrl: 'https://picsum.photos/200/200?random=9',
            title: 'Planejamento Financeiro',
            author: 'Thiago Barbosa',
            imageAlt: 'Planejamento Financeiro'
        }
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    const rendaFixaCarousel = new Carousel('renda-fixa-carousel');
    const rendaFixaCards = cardData.rendaFixa.map(data => 
        new Card(data.imageUrl, data.title, data.author, data.imageAlt)
    );
    rendaFixaCarousel.addCards(rendaFixaCards);

    const topLastMonthCarousel = new Carousel('top-last-month-carousel');
    const topLastMonthCards = cardData.topLastMonth.map(data => 
        new Card(data.imageUrl, data.title, data.author, data.imageAlt)
    );
    topLastMonthCarousel.addCards(topLastMonthCards);
});