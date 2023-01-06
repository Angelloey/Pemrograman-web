var token = "62c2a12ba473128b2140625d76edcccc"

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

const picArtist = document.querySelector("#picArtist");
const artistName = document.querySelector("#artistName");
const artistSong = document.querySelector("#artistSong");

const picArtist2 = document.querySelector("#picArtist2");
const artistName2 = document.querySelector("#artistName2");
const artistSong2= document.querySelector("#artistSong2");

const picArtist3 = document.querySelector("#picArtist3");
const artistName3 = document.querySelector("#artistName3");
const artistSong3= document.querySelector("#artistSong3");

const picArtist4 = document.querySelector("#picArtist4");
const artistName4 = document.querySelector("#artistName4");
const artistSong4= document.querySelector("#artistSong4");

const picArtist5 = document.querySelector("#picArtist5");
const artistName5 = document.querySelector("#artistName5");
const artistSong5= document.querySelector("#artistSong5");



productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;  
    })
})

function getArtistName (){
    const getURL = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=Ariana+Grande&api_key=62c2a12ba473128b2140625d76edcccc&format=json`
    fetch(getURL)
    .then(item => item.json())
    .then(item => {
        artistName.textContent = item.toptracks.track[0].artist.name 
        console.log(item.toptracks.track[0].artist.name)
        artistSong.textContent = item.toptracks.track[0].name 
        console.log(item.toptracks.track[0].name)

        const mbid = item.toptracks.track[0].artist.mbid;
        if (mbid) {
            const url = 'https://musicbrainz.org/ws/2/artist/' + mbid + '?inc=url-rels&fmt=json';
            console.log(url);
            fetch(url)
                .then(res => res.json())
                .then((out) => {
                    const relations = out.relations;
                    console.table(relations);
                    // Find image relation
                    for (let i = 0; i < relations.length; i++) {
                        if (relations[i].type === 'image') {
                            let image_url = relations[i].url.resource;
                            if (image_url.startsWith('https://commons.wikimedia.org/wiki/File:')) {
                                const filename = image_url.substring(image_url.lastIndexOf('/') + 1);
                                image_url = 'https://commons.wikimedia.org/wiki/Special:Redirect/file/' + filename;
                                document.getElementById("picArtist").src=image_url;
                            }
                            console.log(image_url);
                            success(image_url);
                        }
                    }
                })
                .catch(err => { throw console.log(err) });
            
         } 
    });  
}

function getArtistName2 (){
    const getURL = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=Tyler+The+Creator&api_key=62c2a12ba473128b2140625d76edcccc&format=json`
    fetch(getURL)
    .then(item => item.json())
    .then(item => {
        artistName2.textContent = item.toptracks.track[0].artist.name 
        console.log(item.toptracks.track[0].artist.name)
        artistSong2.textContent = item.toptracks.track[1].name  
        console.log(item.toptracks.track[1].name)

        const mbid = item.toptracks.track[0].artist.mbid;
        if (mbid) {
            const url = 'https://musicbrainz.org/ws/2/artist/' + mbid + '?inc=url-rels&fmt=json';
            console.log(url);
                fetch(url)
                    .then(res => res.json())
                    .then((out) => {
                        const relations = out.relations;
                        console.table(relations);
                        // Find image relation
                        for (let i = 0; i < relations.length; i++) {
                            if (relations[i].type === 'image') {
                                let image_url = relations[i].url.resource;
                                if (image_url.startsWith('https://commons.wikimedia.org/wiki/File:')) {
                                    const filename = image_url.substring(image_url.lastIndexOf('/') + 1);
                                    image_url = 'https://commons.wikimedia.org/wiki/Special:Redirect/file/' + filename;
                                    document.getElementById("picArtist2").src=image_url;
                                }
                                console.log(image_url);
                                success(image_url);
                            }
                        }
                    })
                    .catch(err => { throw console.log(err) });
            
         }
    });
}

function getArtistName3 (){
    const getURL = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=Artic+Monkey&api_key=62c2a12ba473128b2140625d76edcccc&format=json`
    fetch(getURL)
    .then(item => item.json())
    .then(item => {
        artistName3.textContent = item.toptracks.track[0].artist.name 
        console.log(item.toptracks.track[0].artist.name)
        artistSong3.textContent = item.toptracks.track[49].name  
        console.log(item.toptracks.track[49].name)

        const mbid = item.toptracks.track[0].artist.mbid;
        if (mbid) {
            const url = 'https://musicbrainz.org/ws/2/artist/' + mbid + '?inc=url-rels&fmt=json';
            console.log(url);
                fetch(url)
                    .then(res => res.json())
                    .then((out) => {
                        const relations = out.relations;
                        console.table(relations);
                        // Find image relation
                        for (let i = 0; i < relations.length; i++) {
                            if (relations[i].type === 'image') {
                                let image_url = relations[i].url.resource;
                                if (image_url.startsWith('https://commons.wikimedia.org/wiki/File:')) {
                                    const filename = image_url.substring(image_url.lastIndexOf('/') + 1);
                                    image_url = 'https://commons.wikimedia.org/wiki/Special:Redirect/file/' + filename;
                                    document.getElementById("picArtist3").src=image_url;
                                }
                                console.log(image_url);
                                success(image_url);
                            }
                        }
                    })
                    .catch(err => { throw console.log(err) });
            
         }
    });
    }

    function getArtistName4 (){
        const getURL = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=Aerosmith&api_key=62c2a12ba473128b2140625d76edcccc&format=json`
        fetch(getURL)
        .then(item => item.json())
        .then(item => {
            artistName4.textContent = item.toptracks.track[0].artist.name 
            console.log(item.toptracks.track[0].artist.name)
            artistSong4.textContent = item.toptracks.track[12].name  
            console.log(item.toptracks.track[12].name)
    
            const mbid = item.toptracks.track[0].artist.mbid;
            if (mbid) {
                const url = 'https://musicbrainz.org/ws/2/artist/' + mbid + '?inc=url-rels&fmt=json';
                console.log(url);
                    fetch(url)
                        .then(res => res.json())
                        .then((out) => {
                            const relations = out.relations;
                            console.table(relations);
                            // Find image relation
                            for (let i = 0; i < relations.length; i++) {
                                if (relations[i].type === 'image') {
                                    let image_url = relations[i].url.resource;
                                    if (image_url.startsWith('https://commons.wikimedia.org/wiki/File:')) {
                                        const filename = image_url.substring(image_url.lastIndexOf('/') + 1);
                                        image_url = 'https://commons.wikimedia.org/wiki/Special:Redirect/file/' + filename;
                                        document.getElementById("picArtist4").src=image_url;
                                    }
                                    console.log(image_url);
                                    success(image_url);
                                }
                            }
                        })
                        .catch(err => { throw console.log(err) });
                
             }
        });
    }

    function getArtistName5 (){
        const getURL = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=Tyler+The+Creator&api_key=62c2a12ba473128b2140625d76edcccc&format=json`
        fetch(getURL)
        .then(item => item.json())
        .then(item => {
            artistName5.textContent = item.toptracks.track[0].artist.name 
            console.log(item.toptracks.track[0].artist.name)
            artistSong5.textContent = item.toptracks.track[18].name  
            console.log(item.toptracks.track[18].name)
    
            const mbid = item.toptracks.track[2].artist.mbid;
            if (mbid) {
                const url = 'https://musicbrainz.org/ws/2/artist/' + mbid + '?inc=url-rels&fmt=json';
                console.log(url);
                    fetch(url)
                        .then(res => res.json())
                        .then((out) => {
                            const relations = out.relations;
                            console.table(relations);
                            // Find image relation
                            for (let i = 0; i < relations.length; i++) {
                                if (relations[i].type === 'image') {
                                    let image_url = relations[i].url.resource;
                                    image_url = 'https://commons.wikimedia.org/wiki/File:Tyler,_The_Creator_(8048745695)_(cropped).jpg';
                                    if (image_url.startsWith('https://commons.wikimedia.org/wiki/File:')) {
                                        const filename = image_url.substring(image_url.lastIndexOf('/') + 1);
                                        // image_url = 'https://commons.wikimedia.org/wiki/File:Tyler,_The_Creator_(8048745695)_(cropped).jpg;
                                        document.getElementById("picArtist5").src=image_url;
                                    }
                                    console.log(image_url);
                                    success(image_url);
                                }
                            }
                        })
                        .catch(err => { throw console.log(err) });
                
             }
        });
    }
    

    function loadAllFunctions()
    {
        getArtistName()
        getArtistName2()
        getArtistName3()
        getArtistName4()
        getArtistName5()


    }
        
// document.addEventListener("DOMContentLoaded", function getArtistName (){
//     console.log("masuk pak eko")
//     const getURL = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=Taylor+Swift&api_key=${token}&format=json`
//     fetch(getURL)
//     .then(item => item.json())
//     .then(item => {
//         artistName.textContent = item.toptracks.track[0].artist.name 
//         console.log(item.toptracks.track[0].artist.name)
//     });

// });

// function pageonLoad(load1, load2){

//     return load1 + load2 ;
    
//     }

// window.onload= function(){

//     console.log("The resultant value is:",)
    
//     console.log(pageonLoad(load1,load2));
    
// }

