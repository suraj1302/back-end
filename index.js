
const app = require('./app');

// 🔖 change the PORT no if you wish.
const PORT = 3434;
app.listen(PORT, () => {
    console.log("my app is listening in port no : " + PORT);
});