
(async () => {
  const response = await fetch('https://parseapi.back4app.com/classes/Car_Model_List?limit=10',
    {
      headers: {
        'X-Parse-Application-Id': 'hlhoNKjOvEhqzcVAJ1lxjicJLZNVv36GdbboZj3Z', // This is the fake app's application id
        'X-Parse-Master-Key': 'SNMJJF0CZZhTPhLDIqGhTlUNV9r60M2Z5spyWfXW', // This is the fake app's readonly master key
      }
    }
  );
  const data = await response.json(); 
  console.log(JSON.stringify(data, null, 2));
})();

var btn = document.getElementById('button');

window.addEventListener('fetch', function (event) {
    console.log("fetch add event listener");
});

btn.addEventListener('click', function (event) {
    fetch('https://httpbin.org/get')
    .then(data => {console.log(data)})
});
