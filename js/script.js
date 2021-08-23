var name = ['EVENT', 'SHOP', 'ABOUT US', 'NEWS', 'CONTACT'];
var url = ['index.html', 'shop.html', 'about_us.html', 'news.html', 'contact.html']

function Menu(name, url) {

    this.name = name;
    this.url = url;

    this.addMenu = function() {
        for (var i of name) {
            document.write('<li><a href="' + url[i] + '">' + name[i] + "</a></li>");
        }
    }
}

function Click() {

    location.href = "http://127.0.0.1:5500/index.html"
}

// 두 파라미터를 넣어야 하는데 여기에서 어떻게 해야 하는 것인가?
// 배열 하나에 두 가지를 같이 넣을 수 있나?
// 아니면 for - of문에서 두가지를 같이 넣을 수 있는가?