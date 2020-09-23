let posts = [
    {
        text: 'neki text 1',
        postImg: 'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
        likes: 3,
        comments: ['com1', 'com2']
    },
    {
        text: 'neki textv 2',
        postImg: 'https://purepng.com/public/uploads/large/purepng.com-mariomariofictional-charactervideo-gamefranchisenintendodesigner-1701528634653vywuz.png',
        likes: 0,
        comments: []
    },
    {
        text: 'neki text 3',
        postImg: 'https://i.stack.imgur.com/ILTQq.png',
        likes: 10,
        comments: []
    }
]

const body = document.querySelector('body')
const inputFile = document.querySelector('#search')
const divPosts = document.querySelector('#posts')

posts.forEach(el => {
    const naslov = document.createElement('p')
    const count = document.createElement('p')
    const image = document.createElement('img')
    const dugme = document.createElement('button')
    const textArea = document.createElement('textarea')
    const parLike = document.createElement('p')
    const comment = document.createElement('p')
    image.src = el.postImg
    image.style.width = '150px'
    image.style.height = '150px'
    naslov.innerText = el.text
    dugme.textContent = 'Like'
    comment.textContent = el.textArea

    let i = 0

dugme.addEventListener('click',() => {
        i++
     count.textContent = i

    })

    divPosts.appendChild(naslov)
    divPosts.appendChild(count)
    divPosts.appendChild(image)
    divPosts.appendChild(dugme)
    divPosts.appendChild(textArea)
    divPosts.appendChild(parLike)
    divPosts.appendChild(comment)
})

body.appendChild(divPosts)