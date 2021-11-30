import app from './app'; 

import './database'; 

app.listen(app.get('port'));
console.log('Server in port', app.get('port'));