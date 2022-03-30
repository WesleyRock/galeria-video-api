const express = require('express');
const bodyparser = require('body-parser');

const cors = require('cors');
const api = express();
const porta = 3000;
const router = express.Router();

api.use(cors());
api.use(bodyparser.json({limit: '20mb', extend: true}));

router.get('/', (req, resp) => resp.json({
    mensagem: '=> API online...'
}))
api.use('/', router);
api.listen(porta);
console.log("vtnc");

