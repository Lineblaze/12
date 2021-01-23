let app = new Vue({
  el: '#app',
  data: {
    names: [],
    counter: 0,
    firstName: '',
    lastName: '',
    warn: false,
    add: function() {
      if (this.firstName.trim() === '' || this.lastName.trim() === '') {
        this.warn = true;
        return;
      }
      this.warn = false;
      let fullName = this.firstName + ' ' + this.lastName;
      this.counter += this.firstName.length + this.lastName.length;
      this.names.push(fullName);
      this.firstName = '';
      this.lastName = '';
  }
}
});