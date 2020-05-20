function myAlert(a, c, d) {
    let b = `<p class="${c}">${a}</p>`;
    document.querySelector(d).innerHTML = b;
}

myAlert('Hi', 'blue', '.test');
myAlert('Yooo!', 'orange', '.test2');

class Alert {
    constructor(a, c, d) {
        this.message = a;
        this.cssClass = c;
        this.out = d;
    }
    showAlert() {
        document.querySelector(this.out).innerHTML = `<p class="${this.cssClass}">${this.message}</p>`;
    }
    myAlert() {
        alert(this.message);
    }
}

class AlertSecond extends Alert {
    constructor(a, c, d, icon) {
        super(a, c, d);
        this.icon = icon; //new property  
    }
    showSecondAlert() {
        document.querySelector(this.out).innerHTML = `<p class="${this.cssClass}"><i class="material-icons">${this.icon}</i>${this.message}</p>`;
    }
    myAlert() {
        alert("Yoooo!" + this.message);
    }
}

let m = new Alert('My message', 'blue', '.test');
m.showAlert();

let m2 = new AlertSecond('My message', 'blue', '.test', 'description');
m2.showSecondAlert();
m2.myAlert(this.message);
