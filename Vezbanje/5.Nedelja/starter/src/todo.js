// niz objekata koji opisuju todo trake
// omoguciti: dodavanje na krajm (add novi), brisanje sa id jem (delete id, novi), menjanje na poziciji koja ima odredjen id (change id, novi)


const niz = [
    {
        id: 0,
        desc: 'sdfkjgdg',
        done: true
    },
    {
        id: 42342,
        desc: '1231',
        done: true
    },{
        id: 120,
        desc: '12312',
        done: false
    },{
        id: 230,
        desc: 'sdf2123',
        done: true
    },{
        id: 43430,
        desc: 'sdfkdsfsfdsjgdg',
        done: true
    },{
        id: 34340,
        desc: 'sdfsfsdfsdfsdfkjgdg',
        done: true
    },
]

const add = (item,arr = niz) => {
    arr.push(item)
}


const deleteById = (id,arr = niz) => {
    let index = arr.findIndex(el => el.id === id)

    if(index == -1) return 

    arr.splice(index,1)
}

const changeById = ((id,item,arr = niz) => {
    let index = arr.findIndex(el => el.id === id)

    if(index == -1) return 

    arr.splice(index,1,item)
})

export {
    niz,
    add,
    deleteById,
    changeById
}




