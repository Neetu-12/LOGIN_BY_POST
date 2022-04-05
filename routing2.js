const express = require("express")
const app = express()
var fs = require('fs')
port = 8000
app.use(express.json())

app.get('/', (req, res) => {
    // fs.readline('./h1.html',(err,data1)=>{
    // res.writeHead(200,{'Content-Type':'data1'})
    // res.write(data1)
    res.send('hello world')
})
// res.end('welcome at home page')
// })
app.post('/', (req, res) => {
    console.log(req.body);
    try {

        fs.readFileSync('./index.json', (err, data) => {
            if (data) {
                // console.log(data);
                for (i = 0; data.length; i++) {


                    if (data[i].email == req.body.email) {
                        //    if(data.password==req.body.password){
                        res.send('email already exist')
                        console.log(data, 8090);

                    }
                }

                data.append(JSON.stringify(req.body))
                fs.writeFileSync('index.json', data, () => {
                    res.send('successfully submitted')
                    console.log(data, 1233);
                })


            }
        })
    }
    catch {
        let data1 = [req.body]
        fs.writeFileSync('index.json', JSON.stringify(data1, null, 3), () => {
            res.send('successfully submitted')
            console.log(data1);
        })

    }
})
app.get('/about', (req, res) => {
    res.end('welcome at about page')
})

app.get('/login', (req, res) => {
    res.end('welcome at login page')
})

app.get('/contact', (req, res) => {
    res.end('welcome at contact page')
}).listen(`${port}`, () => {
    console.log(`listenin ${port}`);
})
