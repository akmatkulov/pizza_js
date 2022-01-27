

function add_to_cart(id)
{
  var key = 'product_' + id;

  var x = window.localStorage.getItem(key);
  x = x * 1 + 1;
  window.localStorage.setItem(key, x)
  // вывод кол-во  items
  alert('Items in your cart: ' + basket());

  update_orders();
  button_orders();
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

function update_orders()
{
  var orders = cart_orders();
  $('#id_order').val(orders);
}

function button_orders()
{
  var text = 'Cart (' + basket() + ')';
  $('#orders_button').val(text);

}

function cart_orders()
{
  var orders = '';
  for(var i = 0; i < window.localStorage.length; i++)
  {
    var key = window.localStorage.key(i);// получаем ключ
    var value = window.localStorage.getItem(key); // получаем значение

    if (key.indexOf('product_') == 0)
    {
      orders = orders + key + '=' + value + ',';
    }
  }
  return orders;
}

function cancel_order()
{
  alert('aaa');
  return false;
}
