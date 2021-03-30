export default test = () => {
    let map = document.querySelector('map')
    let path = document.querySelectorAll('.map__image a')
    let links = document.querySelectorAll('.map__list a')

if(NodeList.prototype.forEach === undefined){
    NodeList.prototype.forEach = function (callback){
        [].forEach.call(this.callback)
    }
}

var activeArea = function (id){
    map.querySelectorAll("is-active").forEach(function(item){
        item.classList.remove('is-active')
    })
    if( id !== undefined){
        document.querySelector("#list-"+id).classList.add("is-active")
        document.querySelector("#region-"+id).classList.add("is-active")
    }
}

path.forEach(function (path) {
    path.addEventListener('mouseenter', function(){
        let id = this.id.replace("regio-",'')
        activeArea(id)
        
    })
})

links.forEach(function (link){
    link.addEventListener('mouseenter', function(){
        let id = this.id.replace("list-",'')
        activeArea(id)
        
    })
})

map.addEventListener('mouseenter',function(){
    let id = undefined;
    activeArea(id)
})
}