class User {
  _login: string;
  password: string;
  createdAt: Date;

  set login(l: string | number) {
    this._login = 'user-' + l;
    this.createdAt = new Date();
  }

  // esli ostavit tolko getter class budet tolko reed only
  get login() {
    //return 'no_login';
    // 2 var
    return this._login;
  }
}

const user = new User();
user.login = 'my_login'; // cto to peredaem setter
console.log(user);
console.log(user.login); // prosto obrashaemsya getter
