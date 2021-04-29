const todo =(tarea, duracion, callback)=> {
    setTimeout(()=>{
        callback(tarea)
    }, duracion)
}

todo("Levantarse", 5000, (tarea) =>{
    console.log(`Realizando la tarea de ${tarea}`)
    todo("Tender la Cama", 3000, (tarea) =>{
        console.log(`Realizando la tarea de ${tarea}`)
        todo("Bañarse", 3000, (tarea) =>{
            console.log(`Realizando la tarea de ${tarea}`)
            todo("Clase de Paradigmas", 5000, (tarea) =>{
                console.log(`Realizando la tarea de ${tarea}`)
                todo("Desayunar", 8000, (tarea) =>{
                    console.log(`Realizando la tarea de ${tarea}`)
                    todo("Jugar", 10000, (tarea) =>{
                        console.log(`Realizando la tarea de ${tarea}`) 
                    })
                })
            })
        })
    })
})