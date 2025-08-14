# JSON Server Backend

This is a simple json-server backend that can be deployed on Render.

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

The server will run on http://localhost:3000

## Deploying to Render

### 1. Push to GitHub
Make sure your code is pushed to a GitHub repository.

### 2. Create Render Service
1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New +" and select "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: `your-backend-name`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Port**: `3000`

### 3. Environment Variables
No environment variables needed for basic json-server deployment.

### 4. Deploy
Click "Create Web Service" and wait for deployment.

## API Endpoints

Your json-server will automatically create REST API endpoints based on your `db.json` file:

- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID
- `POST /users` - Create new user
- `PATCH /users/:id` - Update user
- `DELETE /users/:id` - Delete user

- `GET /products` - Get all products
- `GET /products/:id` - Get product by ID
- `POST /products` - Create new product
- `PATCH /products/:id` - Update product
- `DELETE /products/:id` - Delete product

## Important Notes

1. **Data Persistence**: Render will restart your service periodically, so data changes may not persist. For production, consider using a database.

2. **CORS**: json-server includes CORS by default, so your frontend should work without issues.

3. **File Structure**: Make sure your `db.json` file is in the root of your backend directory.

4. **Port**: Render automatically sets the `PORT` environment variable, which is handled in the start script.

## Troubleshooting

- **Build Failed**: Check that all dependencies are in `package.json`
- **Service Won't Start**: Verify the start command is correct
- **CORS Issues**: json-server handles CORS automatically
- **Port Issues**: The start script uses `$PORT` environment variable from Render
