const newsData = [
    {
        title: "Opening Ceremony Highlights",
        date: "July 26, 2024",
        description: "Learn more about the magnificent yet humbling opening to the Olympics this year.",
        link: "https://theconversation.com/magnificent-and-humbling-the-paris-opening-ceremony-was-a-tribute-to-witnessing-superhuman-feats-of-the-extraordinary-233665"
    },
    {
        title: "Who Won the First Gold Medal?",
        date: "July 27, 2024",
        description: "Hint: The first gold medal was won in swimming!",
        link: "https://www.cbsnews.com/news/team-usa-swimming-gold-silver-bronze-freestyle-paris-olympics-2024/"
    },
    {
        title: "New World Record in Athletics",
        date: "July 28, 2024",
        description: "Records are being broken daily at the 2024 Olympics, which run from July 27-Aug 11, learn more by clicking on the link below!",
        link: "https://apnews.com/article/2024-olympics-records-broken-04277611e23860b99a6c6f451c29f815"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const newsContainer = document.getElementById('news-container');

    newsData.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('news-article');

        articleElement.innerHTML = `
            <h2>${article.title}</h2>
            <p><em>${article.date}</em></p>
            <p>${article.description}</p>
            <a href="${article.link}">Read more</a>
        `;

        newsContainer.appendChild(articleElement);
    });
});
