@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');

body {
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #1a1a1a, #333333);
  color: #ffffff;
}
h1 {
  text-align: center;
  font-weight: 600;
  color: #ff4444;
}
h2 {
  text-align: center;
  color: #ffffff;
}
label, input, select, button {
  margin: 10px 0;
  color: #ffffff;
  background-color: #222222;
  border: 1px solid #ff4444;
  padding: 10px;
  border-radius: 5px;
  transition: all 0.3s ease;
}
button:hover {
  background-color: #ff4444;
  color: #ffffff;
  box-shadow: 0 0 10px #ff4444;
}
pre {
  border: 1px solid #999999;
  padding: 10px;
  background-color: #222222;
  color: #ffffff;
  white-space: pre-wrap;
  border-radius: 5px;
  box-shadow: 0 0 15px rgba(169, 169, 169, 0.8);
  animation: smokeEffect 5s infinite alternate;
}

@keyframes smokeEffect {
  0% { box-shadow: 0 0 15px rgba(169, 169, 169, 0.6); }
  50% { box-shadow: 0 0 20px rgba(169, 169, 169, 0.9); }
  100% { box-shadow: 0 0 15px rgba(169, 169, 169, 0.6); }
}

.highlighted {
  background-color: #b8860b;
  color: #ffffff;
  padding: 5px;
  border-radius: 5px;
}

.notification {
  text-align: center;
  margin: 10px 0;
  color: #00ff00;
}
