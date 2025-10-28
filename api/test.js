module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const hasDatabase = !!process.env.DATABASE_URL;
  const hasJWT = !!process.env.JWT_SECRET;
  
  return res.status(200).json({
    message: 'API is working',
    environment: {
      DATABASE_URL_SET: hasDatabase,
      JWT_SECRET_SET: hasJWT,
      NODE_ENV: process.env.NODE_ENV
    }
  });
};
