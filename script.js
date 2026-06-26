body{
  margin:0;
  font-family: 'Montserrat', sans-serif;
  background:#0a0a0a;
  color:white;
}

/* HERO SECTION */
.hero{
  height:100vh;
  background: url('https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1600&q=80');
  background-size:cover;
  background-position:center;
  position:relative;
  display:flex;
  align-items:center;
  justify-content:center;
  text-align:center;
}

.overlay{
  position:absolute;
  width:100%;
  height:100%;
  background:rgba(0,0,0,0.6);
}

.hero-content{
  position:relative;
  z-index:2;
}

.hero h1{
  font-size:60px;
  letter-spacing:5px;
  animation: fadeIn 2s ease;
}

.hero p{
  color:#ccc;
  margin-top:10px;
}

.hero button{
  margin-top:20px;
  padding:12px 25px;
  border:none;
  background:#ff2e00;
  color:white;
  cursor:pointer;
  border-radius:25px;
  transition:0.3s;
}

.hero button:hover{
  transform:scale(1.1);
}

/* SECTION */
.section{
  padding:60px 20px;
  text-align:center;
}

.section h2{
  font-size:30px;
  margin-bottom:40px;
}

/* GRID */
.grid{
  display:flex;
  justify-content:center;
  gap:20px;
  flex-wrap:wrap;
}

/* CARD */
.card{
  background:#111;
  padding:15px;
  width:220px;
  border-radius:12px;
  transition:0.3s;
}

.card:hover{
  transform:translateY(-10px);
}

.img{
  height:250px;
  border-radius:10px;
  background-size:cover;
  background-position:center;
}

/* PRODUCT IMAGES */
.box1{
  background-image:url('https://images.unsplash.com/photo-1520975682031-ae6a4f2f7c54?auto=format&fit=crop&w=800&q=80');
}

.box2{
  background-image:url('https://images.unsplash.com/photo-1520975684563-1c6d3c1d3f33?auto=format&fit=crop&w=800&q=80');
}

.box3{
  background-image:url('https://images.unsplash.com/photo-1520975922284-1d1a1d1d1d1d?auto=format&fit=crop&w=800&q=80');
}

/* FOOTER */
footer{
  text-align:center;
  padding:20px;
  background:black;
  margin-top:50px;
}

/* ANIMATION */
@keyframes fadeIn{
  from{opacity:0; transform:translateY(20px);}
  to{opacity:1; transform:translateY(0);}
}
