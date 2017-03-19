class MyElement extends Atom.Element {
    static get is () { return "my-element"; }
    
    static get observedAttributes() {
        return ["first-name", "last-name", "age", "foo"];
    }
    
    static get properties() {
        return {
            firstName: {
                value: "Bob",
                reflectToAttribute: true
            },
            
            lastName: {
                value: "Smith",
                reflectToAttribute: true
            },
            
            age: {
                value: "35"
            }
        }
    }
    
    get template () {
        return `
            <div>
                <h3>Hello ${this.firstName} ${this.lastName}, you are ${this.age} years old. Hey ${this.foo}</h3>
            </div>
        `;
    }
    
    constructor () {
        super();
        this.age = 47;
    }
}
 
customElements.define(MyElement.is, MyElement);