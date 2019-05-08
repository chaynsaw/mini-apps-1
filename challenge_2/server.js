// You may assume the JSON data has a regular structure and hierarchy (see included sample file). In other words, all sibling records at a particular level of the hierarchy will have the same set of properties, but child objects might not contain the same properties. In all cases, every property you encounter must be present in the final CSV output.
const multer = require('multer')
const upload = multer({ storage: multer.memoryStorage() })
var bodyParser = require('body-parser');
// Put these statements before you define any routes.
var express = require('express');
var app = express();
var fs = require('fs');

app.listen(3000, console.log('Listening on port 3000'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('client'));


app.post('/api/convertToCSV', (req, res) => {
  // res.statusCode('200')
  console.log('all done');
  // res.writeHead(200)
  fs.writeFile('result.txt', transformJSON(req.body.enterJSON), (err) => {
    if (err) {
      throw err;
    } else {
      res.download('result.txt');
    }
  });
});
app.post('/api/upload', upload.single('myFile'), (req, res) => {
  if (req.file) {
    console.log('Uploaded: ', String(req.file.buffer))
    // Homework: Upload file to S3
  }

  // var tmp_path = req.file.buffer;
  // var target_path = 'uploads/' + req.file.originalname;
  // var src = fs.createReadStream(tmp_path);
  // var dest = fs.createWriteStream(target_path);

  // res.setHeaders('Content-')

  // src.pipe(dest);
  // src.on('end', function() { res.render('complete'); });
  // src.on('error', function(err) { res.render('error'); })
})

function transformJSON(string) {
  var string = string.split(';')[0];
  var arr = [];
  string = JSON.parse(string);
  function arrayify(object) {
    var arr = [];
    arr.push(Object.values(object).slice(0,-1));
    for (let i = 0; i < object.children.length; i++){
      arr = arr.concat(arrayify(object.children[i]))
    }
    return arr;
  }
  arr.push(Object.keys(string).slice(0,-1));
  arr = arr.concat(arrayify(string));
  return combineToStrings(arr);
}

function combineToStrings(array){
  for (let i=0; i < array.length; i++) {
    array[i] = array[i].join(',');
  }
  array = array.join('\n')
  return array;
}

