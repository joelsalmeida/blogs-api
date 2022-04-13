const express = require('express');
const userRoutes = require('./src/routes/userRoutes');
const { errorMiddleware } = require('./src/validations/errorMiddleware');

const app = express();
app.use(express.json());

app.use('/user', userRoutes);
app.use(errorMiddleware);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
