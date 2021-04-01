const express=require('express');
const nHTI=require('node-html-to-image');
const app=express();
const path=require('path');
let bodyParser=require('body-parser');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));


app.post('/scheme',async (req,res)=>{
    var img= await nHTI({
        html: `<body><style>table,th,td { border: 1px solid black; border-collapse: collapse; align-content: center; text-align: center; }</style><table style="width: 100%;height: 100%;">
                <tr><td>Title</td><td>${req.body.title}</td></tr>
                <tr><td>Category</td><td>${req.body.category}</td></tr>
                <tr><td>Department</td><td>${req.body.department}</td></tr>
                <tr><td>Deadline</td><td>${req.body.deadline}</td></tr>
                <tr><td>Documents Needed</td><td>${req.body.doc}</td></tr>
                <tr><td>Description</td><td>${req.body.description}</td></tr>
</table></body>`
    });
    res.contentType('image/png')
    res.end(img,'binary');
});

app.post('/schol',async (req,res)=>{
    var img= await nHTI({
        html: `<body><style>table,th,td { border: 1px solid black; border-collapse: collapse; align-content: center; text-align: center; }</style><table style="width: 100%;height: 100%;">
                <tr><td>Title</td><td>${req.body.title}</td></tr>
                <tr><td>Category</td><td>${req.body.category}</td></tr>
                <tr><td>Age</td><td>${req.body.age}</td></tr>
                <tr><td>Deadline</td><td>${req.body.deadline}</td></tr>
                <tr><td>Documents Needed</td><td>${req.body.doc}</td></tr>
                <tr><td>Description</td><td>${req.body.description}</td></tr></body>
</table>`
    });
    res.contentType('image/png')
    res.end(img,'binary');
});

const PORT=process.env.PORT||5300;
app.listen(PORT,()=>{
    console.log(`Server started on ${PORT}.`);
});
