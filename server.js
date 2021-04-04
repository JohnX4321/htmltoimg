const express=require('express');
const nHTI=require('node-html-to-image');
const app=express();
const path=require('path');
let bodyParser=require('body-parser');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));

const b3_text = ["Department", "विभाग", "ಇಲಾಖೆ"]
const b2_text = ["Category", "वर्ग", "ವರ್ಗ"]
const b4_text = ["Deadline", "समय सीमा", "ಗಡುವು"]
const b5_text = ["Documents", "दस्तावेज़", "ದಾಖಲೆಗಳು"]
const b6_text = ["Description", "विवरण", "ವಿವರಣೆ"]
const b1_text = ["Title", "विवरण", 'ಶೀರ್ಷಿಕೆ']
const sb3_text = ["Age", "विउम्र ", "ವಯಸ್ಸು "]
//sample change
app.post('/:lang/scheme',async (req,res)=>{
    const lang=parseInt(req.params.lang)
    var img= await nHTI({
        html: `<body><style>table,th,td { border: 1px solid black; border-collapse: collapse; align-content: center; text-align: center; }</style><table style="width: 100%;height: 100%;">
                <tr><td>${b1_text[lang]}</td><td>${req.body.title}</td></tr>
                <tr><td>${b2_text[lang]}</td><td>${req.body.category}</td></tr>
                <tr><td>${b3_text[lang]}</td><td>${req.body.department}</td></tr>
                <tr><td>${b4_text[lang]}</td><td>${req.body.deadline}</td></tr>
                <tr><td>${b5_text[lang]}</td><td>${req.body.doc}</td></tr>
                <tr><td>${b6_text[lang]}</td><td>${req.body.description}</td></tr>
</table></body>`
    });
    res.contentType('image/png')
    res.end(img,'binary');
});

app.post('/:lang/schol',async (req,res)=>{
    const lang=parseInt(req.params.lang)
    var img= await nHTI({
        html: `<body><style>table,th,td { border: 1px solid black; border-collapse: collapse; align-content: center; text-align: center; }</style><table style="width: 100%;height: 100%;">
                <tr><td>${b1_text[lang]}</td><td>${req.body.title}</td></tr>
                <tr><td>${b2_text[lang]}</td><td>${req.body.category}</td></tr>
                <tr><td>${sb3_text[lang]}</td><td>${req.body.age}</td></tr>
                <tr><td>${b4_text[lang]}</td><td>${req.body.deadline}</td></tr>
                <tr><td>${b5_text[lang]}</td><td>${req.body.doc}</td></tr>
                <tr><td>${b6_text[lang]}</td><td>${req.body.description}</td></tr></body>
</table>`
    });
    res.contentType('image/png')
    res.end(img,'binary');
});

const PORT=process.env.PORT||5300;
app.listen(PORT,()=>{
    console.log(`Server started on ${PORT}.`);
});
