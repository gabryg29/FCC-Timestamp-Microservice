# Apis and Microservices Projects - Timestamp Microservice

<li>EndPoint de la API: <code>GET [project_url]/api/timestamp/:date_string?</code></li>
<li>Un string de fecha es válido si puede usarse con <code>new Date(date_string)</code>.<br>
El timestamp en unix tiene que ser un <strong>entero</strong> (no un string) y muestra un número de <strong>milisegundos</strong>.<br>
En estas pruebas se van a utilizar strings que cumplen con la <code>ISO-8601</code> (por ejemplo <code>"2016-11-20"</code>) para asegurarnos de que el timestamp es UTC</li>
<li>Si el string está <strong>vacío</strong>, debería ser equivalente a ejecutar <code>new Date()</code>, y el servicio usará la hora actual.</li>
<li>Si el string es <strong>válido</strong> la API devolverá un JSON con la siguiente estructura:<br>
<code>{"unix": &lt;date.getTime()&gt;, "utc" : &lt;date.toUTCString()&gt; }</code><br>
Por ejemplo: <code>{"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}</code></li>
<li>Si el string es <strong>érroneo</strong> la API devolverá un JSON con la siguiente estructura:<br><code>{"error" : "Fecha Errónea" }</code>.</li>
</ol>
    
# Ejemplo de uso:
<p>
https://1-gabriel-fcc-timestamp-microservice.glitch.me/api/timestamp/201512-25
</p>
<p>
https://1-gabriel-fcc-timestamp-microservice.glitch.me/api/timestamp/1450137600
</p>

# Ejemplo de resultado JSON:
<p>
<code>{"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}</code>
</p>
