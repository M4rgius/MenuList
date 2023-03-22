let foodContainer= document.querySelector('.food-container');

const food=[
    {
        nome:"Tagliere di salumi",
        prezzo: "12$",
        foodimg:'img/taglsal.jpg',
        tipo: "antipasto",
        des:"Tagliere di salumi nostrani"
    },

    {
        nome:"Tagliere di salumi e formaggi",
        prezzo: "15$",
        foodimg:'img/taglform.jpg',
        tipo: "antipasto",
        des:"Tagliere di salumi nostrani con formaggi e creme"
    },
    {
        nome:"Tonnarelli alla carbonara",
        prezzo: "14$",
        foodimg:"img/toncarb.jpg",
        tipo: "primo",
        des:"Tonnarelli fatti a mano con la carbocrema"
    },
    {
        nome:"Tonnarelli alla gricia",
        prezzo: "14$",
        foodimg:"img/tongri.jpg",
        tipo: "primo",
        des:"Tonnarelli fatti a mano con la griciacrema"
    },
    {
        nome:"Tonnarelli alla amatriciana",
        prezzo: "14$",
        foodimg:"img/tonama.jpg",
        tipo: "primo",
        des:"Tonnarelli fatti a mano popoboni"
    },
    {
        nome:"Saltimbocca alla romana",
        prezzo:"15$",
        foodimg:"img/salt.jpg",
        tipo:"secondo",
        des:"magnatelo"
    },
    {
        nome: "Cheesecake nutella",
        prezzo:"10$",
        foodimg:"img/cheese.jpg",
        tipo: "dolce",
        des:"Non serviamo pistacchio falso, fatevene una ragione"
    },
    {
        nome:"Acqua naturale",
        prezzo:"100$",
        foodimg:"img/nat.jpg",
        tipo:"bevanda",
        des:"Acqua fresca fresca per il proprio fit-check giornaliero"
    },
    {
        nome:"Acqua minerale",
        prezzo:"50$",
        foodimg:"img/gas.jpg",
        tipo:"bevanda",
        des:"E' la terribile acqua Bertier, la più gasata del mondo"
    },
]

const foodlist=food.map(item => {
    const listitem=  ` <div class="col-md-6 foodbox ${item.tipo}">
    <!-- content div -->
    <div class="content b my-2">
        <!-- image -->
        <div class="c-image">
            <img src="${item.foodimg}" alt="">
        </div>
        <div class="t-n-p my-2">
            <div class="header">  
                <!-- title -->
                <span class="title">${item.nome}</span>
                <!-- price -->
                <span class="price">${item.prezzo}</span>
            </div>
            <!-- Description -->
            <div class="des my-3 ">
                <p>${item.des}</p>
            </div>
        </div>   
    </div>
</div>`;
foodContainer.innerHTML += listitem;

})
const foodbox = document.querySelectorAll('.foodbox');
const menu = document.querySelectorAll('button');

menu.forEach(m => {
    m.addEventListener('click', e=>{
        console.log(e.target.innerHTML)
        foodbox.forEach(box => {
            box.classList.add('d-none')
            if(e.target.innerHTML === 'Tutto')
            {
                box.classList.remove('d-none')
            }
            else if(e.target.innerHTML==='Antipasti'){
                if(box.classList.contains('antipasto'))
                {
                    box.classList.remove('d-none')
                }
                
            }
            else if(e.target.innerHTML==='Primi'){
                if(box.classList.contains('primo'))
                {
                    box.classList.remove('d-none')
                }
                
            }
            else if(e.target.innerHTML==='Secondi'){
                if(box.classList.contains('secondo'))
                {
                    box.classList.remove('d-none')
                }
                
            }
            else if(e.target.innerHTML==='Bevande'){
                if(box.classList.contains('bevanda')){
                    box.classList.remove('d-none')
                }
            }

            
            else if(e.target.innerHTML==='Dolci'){
                if(box.classList.contains('dolce'))
                {
                    box.classList.remove('d-none')
                }
                
            }
        })
        
    })
})