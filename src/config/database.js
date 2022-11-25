const mongoose = require('mongoose');

main().then(res=> console.log("db connected successfully...!!!"))
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://0.0.0.0:27017/letschat_server');
}