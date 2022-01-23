

function add_to_cart(id)
{
  var key = 'product_' + id;

  var x = window.localStorage.getItem(key);
  x = x * 1 + 1;
  window.localStorage.setItem(key, x)
  // вывод кол-во  items
  alert('Items in your cart: ' + basket());
}

function basket()
{
  var cnt = 0;
  for(var i = 0; i < window.localStorage.length; i++)
  {
    var key = window.localStorage.key(i);// получаем ключ
    var value = window.localStorage.getItem(key); // получаем значение

    if (key.indexOf('product_') == 0)
    {
      cnt = cnt + value * 1;
    }
  }
  return cnt;
}
