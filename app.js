
const storedMusic =[
    {
        track:'Hallucinate',
        singer:'Dua Lipa',
        genre:'Dance pop'
},{
    track:'Location',
    singer:'Young F',
    genre:'Dance pop'
},{
    track:'Rain on me',
    singer:'Lady Gaga',
    genre:'Dance pop'
}
];



storedMusic.forEach((storedMusic)=>addMusicToList(storedMusic));


//Add Music into table
function addMusicToList(storedMusic){
const list = document.querySelector('#music-list');

const row = document.createElement('TR')
row.innerHTML=`
<td>${storedMusic.track}</td>
<td>${storedMusic.singer}</td>
<td>${storedMusic.genre}</td>
<td><a href='#' class='delete' onclick='removeList(event)'><i class="fas fa-trash-alt"></i></a></td>
`;
list.appendChild(row)
}


//Add Music
function addMusic(e){
    //Prevent actual submit
   e.preventDefault();
    
    const track= document.querySelector('#title').value
    const singer = document.querySelector('#singerName').value
    const genre = document.querySelector('#genre').value

    //validate
    if(track===''|| singer===''|| genre===''){
      showAlert('Please Fill all Fields', 'danger')
    }else{

        let musicList = {track,singer,genre}
        console.log(musicList)
    
        storedMusic.push(musicList)
        showAlert('Music Added', 'success')
        clearFields()
        addMusicToList(musicList)
    }
   
}

//Clear Fields
 function clearFields(){
   document.querySelector('#title').value =''
   document.querySelector('#singerName').value=''
   document.querySelector('#genre').value=''
 }

 //Remove Music List
function removeList(el){
    debugger
        let list = el.target.parentElement.parentElement.parentElement
        list.remove()
        showAlert('Music removed', 'success')
}

function showAlert(message, className){
    const div = document.createElement('DIV')
    debugger
    // div.className=`${className}`
    div.setAttribute('class',className)
    div.appendChild(document.createTextNode(message))
    const container = document.querySelector('.inner-content')
    const form = document.querySelector('#music-form')
    container.insertBefore(div, form)
    //vanish in 3seconds
    setTimeout(()=> document.querySelector(`.${className}`).remove(),
    2000);
}