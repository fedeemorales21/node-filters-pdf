document.addEventListener('DOMContentLoaded' , () => {
    printR()
})

const printR = () => {
    document.getElementById('print').addEventListener('submit', async () => {
        const formdata = new FormData()
        formdata.append('html', document.getElementById('results').outerHTML )
        const {filename} = await fetch('/print', {
            method: 'POST',
            body: formdata
        })

        console.log(filename)

    })
}