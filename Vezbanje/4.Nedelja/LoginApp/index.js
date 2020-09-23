const users = [
    {
        username: 'admin',
        password: 'admin',
        isAdmin: true
    },
    {
        username: 'John',
        password: '123456',
        isAdmin: false,
        coins: 7
    },
    {
        username: 'Kelly',
        password: 'asdf1234',
        isAdmin: false,
        coins: 12
    },
    {
        username: 'Pera',
        password: '1234asdf',
        isAdmin: false,
        coins: 42
    },
    {
        username: 'Ana',
        password: 'fghfhf',
        isAdmin: false,
        coins: 31
    }
]

const divUsers = document.querySelector('#users')
const forma = document.querySelector('#login')
const usernameInput = document.querySelector('#username')
const passwordInput = document.querySelector('#password')

users.forEach(user => {
    if(user.isAdmin) return

    const p = document.createElement('p')
    p.textContent = user.username + ' ' + user.coins

    divUsers.append(p)
})
// '    gdfg  dfsfs    '
// 'gdfg  dfsfs'

// '           '
// ''

forma.addEventListener('submit', e =>{
    e.preventDefault()

    //Ni jedan input ne sme biti prazan (ne sme sadrzati beline i space)

    if (usernameInput.value.trim().length === 0 || passwordInput.value.trim() === '') {
        alert('Ne sme prazan unos')
        return
    }
    console.log('sme ovako')

    //Da li korisnik vec postoji  //find, some
    // users.forEach(user =>{
    //     if(usernameInput.value == user.username){
    //       console.log('ulogovan')
    //     }
    //     else{
    //     console.log('korisnik vec postoji')}
    // })
    
    // if (postoji) {
    //     users.some(user => user.username === usernameInput.value)

    // }

    
})