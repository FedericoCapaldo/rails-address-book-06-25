import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.someFunction()
  }



  someFunction() {

    function myCallback(data123) {
      console.log("2. ", data123)
    }

    console.log("1. start")

    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => console.log("2. ", data))
      .catch(error => console.error('Error:', error));

    console.log("3. finish")

  }
}
