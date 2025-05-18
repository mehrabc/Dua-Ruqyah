import express from 'express';
import cors from 'cors';
import categoryRoutes from './routes/categoryRoutes'
// import subcategoryRoutes from './routes/subcategoryRoutes'
import duaRoutes from './routes/duaRoutes'

const app = express();
app.use(cors())
app.use(express.json());

app.use('/api/categories', categoryRoutes)
// app.use('/api/subcategory', subcategoryRoutes)
app.use('/api/duas', duaRoutes)

export default app