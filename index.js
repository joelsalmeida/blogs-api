const express = require('express');

const userRoutes = require('./src/routes/userRoutes');
const loginRoutes = require('./src/routes/loginRoutes');
const categoryRoutes = require('./src/routes/categoryRoutes');
const postRoutes = require('./src/routes/postRoutes');

const { errorMiddleware } = require('./src/middlewares/errorMiddleware');

const app = express();
app.use(express.json());

app.use('/user', userRoutes);
app.use('/login', loginRoutes);
app.use('/categories', categoryRoutes);
app.use('/post', postRoutes);

app.use(errorMiddleware);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
