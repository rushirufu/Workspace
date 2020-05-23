# MySQL and MariaDB





## Retorna la versión de la db 

```mysql
SELECT version();
```

```tex
output: 10.3.22-MariaDB-0+deb10u1
```





## Seleccionar una base de datos.
```mysql
USE nombreBaseDeDatos;
```





## Retorna cuál es la base de datos seleccionada actualmente.

```sql
SELECT DATABASE();
```
```tex
+------------+
| database() |
+------------+
| music      |
+------------+
1 row in set (0.000 sec)
```





## Retorna todas las tablas que contenga una BD seleccionada

```mysql
SHOW TABLES;
```
```tex
+-----------------+
| Tables_in_music |
+-----------------+
| album           |
| artist          |
| played          |
| track           |
+-----------------+
```





## Retorna la estructura como está compuesta una tabla

```mysql
SHOW COLUMNS FROM artits;
```

```mysql
+-------------+-------------+------+-----+---------+-------+
| Field       | Type        | Null | Key | Default | Extra |
+-------------+-------------+------+-----+---------+-------+
| artist_id   | smallint(5) | NO   | PRI | 0       |       |
| artist_name | char(128)   | YES  |     | NULL    |       |
+-------------+-------------+------+-----+---------+-------+
```

```mysql
SHOW COLUMNS FROM album;
```

```
+------------+-------------+------+-----+---------+-------+
| Field      | Type        | Null | Key | Default | Extra |
+------------+-------------+------+-----+---------+-------+
| artist_id  | smallint(5) | NO   | PRI | 0       |       |
| album_id   | smallint(4) | NO   | PRI | 0       |       |
| album_name | char(128)   | YES  |     | NULL    |       |
+------------+-------------+------+-----+---------+-------+
```

```mysql
SHOW COLUMNS FROM track;
```

```
+------------+--------------+------+-----+---------+-------+
| Field      | Type         | Null | Key | Default | Extra |
+------------+--------------+------+-----+---------+-------+
| track_id   | smallint(3)  | NO   | PRI | 0       |       |
| track_name | char(128)    | YES  |     | NULL    |       |
| artist_id  | smallint(5)  | NO   | PRI | 0       |       |
| album_id   | smallint(4)  | NO   | PRI | 0       |       |
| time       | decimal(5,2) | YES  |     | NULL    |       |
+------------+--------------+------+-----+---------+-------+
```

```mysql
SHOW COLUMNS FROM played;
```

```
+-----------+-------------+------+-----+---------------------+-------------------------------
| Field     | Type        | Null | Key | Default             | Extra                         
+-----------+-------------+------+-----+---------------------+-------------------------------
| artist_id | smallint(5) | NO   | PRI | 0                   |                               
| album_id  | smallint(4) | NO   | PRI | 0                   |                               
| track_id  | smallint(3) | NO   | PRI | 0                   |                               
| played    | timestamp   | NO   | PRI | current_timestamp() | on update current_timestamp() 
+-----------+-------------+------+-----+---------------------+-------------------------------
```





## SELECT

```mysql
SELECT * FROM artist;
```

```
+-----------+---------------------------+
| artist_id | artist_name               |
+-----------+---------------------------+
|         1 | New Order                 |
|         2 | Nick Cave & The Bad Seeds |
|         3 | Miles Davis               |
|         4 | The Rolling Stones        |
|         5 | The Stone Roses           |
|         6 | Kylie Minogue             |
+-----------+---------------------------+
6 rows in set (0.000 sec)
```

Una simple instrucción SELECT tiene cuatro componentes: 

1. La palabra clave **SELECT**. 
2.  Las columnas que se mostrarán. En nuestro primer ejemplo, pedimos todas las columnas por utilizando el símbolo de **asterisco** (*****) como carácter comodín. 
3. La palabra clave **FROM**. 
4. **El nombre de la tabla**; En este ejemplo, el nombre de la tabla es **artista**. Al unir todo esto, hemos pedido todas las columnas de la tabla de artistas, y eso es lo que MySQL nos ha devuelto.

 Probemos con otro simple **SELECT**. 

Esta vez, recuperaremos todas las columnas del de la tabla **album**.

```mysql
SELECT * FROM album;
```

```
+-----------+----------+------------------------------------------+
| artist_id | album_id | album_name                               |
+-----------+----------+------------------------------------------+
|         1 |        1 | Retro - John McCready FAN                |
|         1 |        2 | Substance (Disc 2)                       |
|         1 |        3 | Retro - Miranda Sawyer POP               |
|         1 |        4 | Retro - New Order / Bobby Gillespie LIVE |
|         1 |        5 | Power, Corruption & Lies                 |
|         1 |        6 | Substance 1987 (Disc 1)                  |
|         1 |        7 | Brotherhood                              |
|         2 |        1 | Let Love In                              |
|         3 |        1 | Live Around The World                    |
|         3 |        2 | In A Silent Way                          |
|         4 |        1 | Exile On Main Street                     |
|         5 |        1 | Second Coming                            |
|         6 |        1 | Light Years                              |
+-----------+----------+------------------------------------------+
13 rows in set (0.005 sec)
```

Tenemos **13 álbumes** en nuestra base de datos. El ejemplo te da una idea de cómo trabajan las relaciones entre las tablas. Discutiremos cómo escribir consultas sobre las relaciones entre tablas más adelante en este capítulo. 

Considere la primera fila de los resultados, para el álbum "**Let Love In"**, que es de el **artista**  con el valor de 2. 

Si inspecciona la salida de nuestro primer ejemplo que recuperó los datos de la tabla de artistas, notará que el artista coincidente es "**Nick Cave & The Bad Seeds**". Entonces, Nick Cave grabó Let Love In. 

También notarás que Los álbumes que poseemos para un artista determinado tienen un número en la columna **album_id**., podemos ver, por ejemplo, que poseemos siete álbumes del artista **artist_id 1**. 

Tenga en cuenta también que tenemos varios álbumes diferentes con el mismo album_id. Esto no es un problema, ya que album_id es solo una clave débil; un álbum se identifica de manera única por el combinación de su album_id y artist_id.

# Seleccionando columnas

Hasta ahora ha utilizado el carácter comodín * para recuperar todas las columnas de una tabla. Si no desea mostrar todas las columnas, es fácil ser más específico enumerando las columnas desea, en el orden que desea, separados por comas. Por ejemplo, si quieres solo la columna **artist_name** de la tabla de **artistas**, escribiría:

```mysql
SELECT artist_name FROM artist;
```

```
+---------------------------+
| artist_name               |
+---------------------------+
| New Order                 |
| Nick Cave & The Bad Seeds |
| Miles Davis               |
| The Rolling Stones        |
| The Stone Roses           |
| Kylie Minogue             |
+---------------------------+
6 rows in set (0.001 sec)
```

Si desea tanto el **artist_name** como el **artist_id,** en ese **orden**, usaría:

```mysql
SELECT artist_name, artist_id FROM artist;
```

```
+---------------------------+-----------+
| artist_name               | artist_id |
+---------------------------+-----------+
| New Order                 |         1 |
| Nick Cave & The Bad Seeds |         2 |
| Miles Davis               |         3 |
| The Rolling Stones        |         4 |
| The Stone Roses           |         5 |
| Kylie Minogue             |         6 |
+---------------------------+-----------+
6 rows in set (0.001 sec)
```

Incluso puede enumerar columnas más de una vez:

```mysql
SELECT artist_id, artist_id, artist_id FROM artist;
```

```
+-----------+-----------+-----------+
| artist_id | artist_id | artist_id |
+-----------+-----------+-----------+
|         1 |         1 |         1 |
|         2 |         2 |         2 |
|         3 |         3 |         3 |
|         4 |         4 |         4 |
|         5 |         5 |         5 |
|         6 |         6 |         6 |
+-----------+-----------+-----------+
```



# WHERE

Esta sección presenta la cláusula WHERE y explica cómo usar los operadores booleanos para escribir expresiones Los verá en la mayoría de las declaraciones SELECT y, a menudo, en otras declaraciones como UPDATE y DELETE; Le mostraremos ejemplos más adelante en este capítulo.

La cláusula WHERE es una herramienta poderosa que le permite elegir qué filas se devolverán de una declaración SELECT. Lo usa para devolver filas que coinciden con una condición, como que tiene un valor de columna que coincide exactamente con una cadena, un número mayor o menor que un valor, o una cadena que es un prefijo de otro. Casi todos nuestros ejemplos en este y más adelante los capítulos contienen cláusulas WHERE, y usted se familiarizará con ellas.
La cláusula WHERE más simple es aquella que coincide exactamente con un valor. Considera un ejemplo
donde queremos conocer los detalles del artista con el nombre "New Order". 

```mysql
SELECT * FROM music.artist WHERE artist_name = 'New Order';
```

```
+-----------+-------------+
| artist_id | artist_name |
+-----------+-------------+
|         1 | New Order   |
+-----------+-------------+
1 row in set (0.001 sec)
```

MySQL devuelve todas las filas que coinciden con nuestros criterios de búsqueda; en este caso, solo una fila y todas sus columnas. A partir de esto, puede ver que el artista "**New Order**" tiene un artist_id de 1.
Probemos con otro ejemplo de coincidencia exacta. 

Supongamos que desea averiguar el nombre del artista con el ID 4:

```mysql
SELECT * FROM music.artist WHERE artist_id = '4';
```

```
+-----------+--------------------+
| artist_id | artist_name        |
+-----------+--------------------+
|         4 | The Rolling Stones |
+-----------+--------------------+
1 row in set (0.016 sec)
```

Si un valor coincide con más de una fila, los resultados contendrán todas las coincidencias. Supongamos que nosotros preguntamos por los nombres de todas las pistas con un track_id de 13; esto recupera la decimotercera canción en cada álbum que tiene al menos esa cantidad de canciones. Escribe:

```mysql
SELECT track_id,  album_id, track_name FROM music.track WHERE track_id = '13';
```

```
+----------+----------+------------------------------------------+
| track_id | album_id | track_name                               |
+----------+----------+------------------------------------------+
|       13 |        1 | Every Little Counts                      |
|       13 |        3 | Everyone Everywhere                      |
|       13 |        4 | Turn My Way [Olympia, Liverpool 18/7/01] |
|       13 |        1 | Let It Loose                             |
+----------+----------+------------------------------------------+
```

Los resultados muestran los nombres de la decimotercera pista de diferentes álbumes, por lo que debe
ser 4 álbumes que contengan al menos 13 pistas.



Ahora intentemos recuperar valores en un rango. Esto es más simple para rangos numéricos, así que vamos comience por encontrar los nombres de todos los artistas con un artist_id menor que 5. Para hacer esto, escriba

```mysql
SELECT * FROM music.artist WHERE artist_id < 5;
```

```
+-----------+---------------------------+
| artist_id | artist_name               |
+-----------+---------------------------+
|         1 | New Order                 |
|         2 | Nick Cave & The Bad Seeds |
|         3 | Miles Davis               |
|         4 | The Rolling Stones        |
+-----------+---------------------------+
4 rows in set (0.005 sec)
```

Considere un ejemplo más. Si quieres encontrar todos los álbumes que no tienen un album_id de 2, 

```mysql
SELECT album_id, artist_id, album_name FROM music.album WHERE album_id != '2';
```

```
+----------+-----------+------------------------------------------+
| album_id | artist_id | album_name                               |
+----------+-----------+------------------------------------------+
|        1 |         1 | Retro - John McCready FAN                |
|        3 |         1 | Retro - Miranda Sawyer POP               |
|        4 |         1 | Retro - New Order / Bobby Gillespie LIVE |
|        5 |         1 | Power, Corruption & Lies                 |
|        6 |         1 | Substance 1987 (Disc 1)                  |
|        7 |         1 | Brotherhood                              |
|        1 |         2 | Let Love In                              |
|        1 |         3 | Live Around The World                    |
|        1 |         4 | Exile On Main Street                     |
|        1 |         5 | Second Coming                            |
|        1 |         6 | Light Years                              |
+----------+-----------+------------------------------------------+
```

Otra tarea muy común que querrá realizar con cadenas es encontrar coincidencias que comience con un prefijo, contenga una cadena o termine en un sufijo. Por ejemplo, es posible que desee  encontrar todos los nombres de álbumes que comienzan con la palabra "Retro". Puedes hacer esto con el Operador LIKE en una cláusula WHERE:

```mysql
SELECT album_name FROM music.album WHERE album_name LIKE 'Retro%';
```

```
+------------------------------------------+
| album_name                               |
+------------------------------------------+
| Retro - John McCready FAN                |
| Retro - Miranda Sawyer POP               |
| Retro - New Order / Bobby Gillespie LIVE |
+------------------------------------------+
```

Discutamos en detalle cómo funciona esto.
La cláusula **LIKE** se usa solo con cadenas y significa que una coincidencia debe cumplir con el patrón
en la cadena que sigue. En nuestro ejemplo, hemos usado **LIKE "Retro%",** lo que significa que
cadena Retro seguido de cero o más caracteres. La mayoría de las cadenas utilizadas con LIKE contienen el carácter de porcentaje (**%**) como carácter comodín que coincide con todas las cadenas posibles. También puede usarlo para definir una cadena que termine en un sufijo, como "% ing", o una cadena que contiene una subcadena particular, como **%Corruption%**.

```mysql
SELECT album_name FROM music.album WHERE album_name LIKE '%Corruption%';
```

```
+--------------------------+
| album_name               |
+--------------------------+
| Power, Corruption & Lies |
+--------------------------+
1 row in set (0.001 sec)
```

Por ejemplo, "John%" coincidiría con todas las cadenas que comienzan con "John", como John
Smith y John Paul Getty. El patrón "% Paul" coincide con todas las cadenas que tienen "Paul" en
el fin. Finalmente, el patrón "% Paul%" coincide con todas las cadenas que tienen "Paul" en ellas,
incluso al principio o al final.
Si desea hacer coincidir exactamente un carácter comodín en una cláusula LIKE, utilice el
carácter de subrayado (_). Por ejemplo, si desea todas las pistas que comienzan con una palabra de tres letras que comienza con 'R', use:

```
'R__ %' ESPACIO DESPUES DE _
```

```mysql
SELECT * FROM music.track WHERE track_name LIKE 'R__ %';
```

```
+----------+----------------+-----------+----------+------+
| track_id | track_name     | artist_id | album_id | time |
+----------+----------------+-----------+----------+------+
|       14 | Run Wild       |         1 |        1 | 3.95 |
|        4 | Red Right Hand |         2 |        1 | 6.18 |
|        1 | Rip This Joint |         4 |        1 | 2.38 |
+----------+----------------+-----------+----------+------+
```

La especificación "R__%" significa una palabra de tres letras que comienza con 'R', por ejemplo
"Rojo", "Ejecutar" y "Rip", seguidos por un carácter de espacio y luego cualquier cadena.

Supongamos que desea encontrar todos los álbumes con un título que comience con un carácter mayor que C pero menor que M. Esto es sencillo con el AND operador

```mysql
SELECT album_name FROM music.album WHERE album_name > 'C' AND album_name < 'M' ORDER BY album_name;
```

```
+-----------------------+
| album_name            |
+-----------------------+
| Exile On Main Street  |
| In A Silent Way       |
| Let Love In           |
| Light Years           |
| Live Around The World |
+-----------------------+
```

El operador **AND** en la cláusula **WHERE** restringe los resultados a aquellas filas que cumplen con ambos condiciones El operador **OR** se usa para buscar filas que cumplan al menos una de varias condiciones. A ilustra, imagina que quieres una lista de todos los álbumes que tengan un título que comience con **L**, **S** o **P**. Puede hacer esto con dos cláusulas **OR** y tres **LIKE**:

```mysql
SELECT album_name 
FROM music.album 
WHERE album_name LIKE 'L%' OR 
	album_name LIKE 'S%' OR 
	album_name LIKE 'P%'
ORDER BY album_name;
```

```
+--------------------------+
| album_name               |
+--------------------------+
| Let Love In              |
| Light Years              |
| Live Around The World    |
| Power, Corruption & Lies |
| Second Coming            |
| Substance (Disc 2)       |
| Substance 1987 (Disc 1)  |
+--------------------------+
```

Las operaciones OR en la cláusula WHERE restringen las respuestas a las que cumplen cualquiera de los Tres condiciones.

Puede combinar AND y OR, pero debe dejar en claro si desea primero Y las condiciones o O ellos. Considere un ejemplo donde la función no es obvia de la consulta:

```mysql
SELECT album_name FROM album WHERE
album_name LIKE "L%" OR
album_name LIKE "S%" AND
album_name LIKE "%g"
ORDER BY album_name;
```

```
+-----------------------+
| album_name            |
+-----------------------+
| Let Love In           |
| Light Years           |
| Live Around The World |
| Second Coming         |
+-----------------------+
```

Cuando inspecciona los resultados, queda claro lo que sucedió: las respuestas comienzan con **L**, o tienen **S** al principio y **G** al final. Una interpretación alternativa de la consulta sería que las respuestas deben comenzar con **L** o **S**,  y terminar con **G**; claramente no es así como el servidor MySQL ha manejado la consulta, ya que una de las respuestas que se muestran, "**L**et Love I**n**", no terminan en **G**. Para hacer consultas que contengan varios condiciones booleanas más fáciles de leer, agrupe las condiciones entre paréntesis. Los paréntesis agrupan partes de una declaración y ayudan a que las expresiones sean legibles; puedes usarlos como lo harías en matemáticas básicas. Nuestro ejemplo anterior se puede reescribir de la siguiente manera:

```mysql
SELECT album_name
FROM music.album
WHERE album_name LIKE 'L%' OR (album_name LIKE "S%" AND album_name LIKE "%g") 
ORDER BY album_name;
```

```
+-----------------------+
| album_name            |
+-----------------------+
| Let Love In           |
| Light Years           |
| Live Around The World |
| Second Coming         |
+-----------------------+
4 rows in set (0.000 sec)
```

Los paréntesis aclaran el orden de evaluación: queremos álbumes que comiencen con '**L**', o aquellos que comienzan con '**S**' y terminan con '**G**'. También hemos escrito la consulta sobre tres líneas en lugar de cuatro, haciendo la intención aún más clara a través de un diseño cuidadoso; al igual que al escribir código de programa, el espaciado, la sangría y el diseño cuidadoso ayudan a hacer consultas legibles.

También puede usar paréntesis para forzar un orden de evaluación diferente. Si quisieras los álbumes que inician su nombres con '**L**' o '**S**' al principio y '**G**' al final, escriba:

```mysql
SELECT album_name 
FROM music.album
WHERE (album_name like 'L%' or album_name like 'S%') AND album_name like '%G'
ORDER BY album_name;
```

```
+---------------+
| album_name    |
+---------------+
| Second Coming |
+---------------+
1 row in set (0.001 sec)
```

Ambos ejemplos con paréntesis son mucho más fáciles de entender. Recomendamos que use paréntesis cuando existe la posibilidad de que la intención pueda ser malinterpretada; no hay una buena razón para confiar en el orden de evaluación implícito de MySQL.
El operador NOT unario niega una declaración booleana. Supongamos que quieres una lista de todos
álbumes, excepto los que tienen un álbum_id de 1 o 3. Escribiría la consulta:

```mysql
SELECT album_id, album_name 
FROM music.album
WHERE !(album_id = 1 OR album_id = 3)
ORDER BY album_id;
```

```mysql
SELECT album_id, album_name 
FROM music.album
WHERE NOT (album_id = 1 OR album_id = 3)
ORDER BY album_id;
```

```
+----------+------------------------------------------+
| album_id | album_name                               |
+----------+------------------------------------------+
|        2 | Substance (Disc 2)                       |
|        2 | In A Silent Way                          |
|        4 | Retro - New Order / Bobby Gillespie LIVE |
|        5 | Power, Corruption & Lies                 |
|        6 | Substance 1987 (Disc 1)                  |
|        7 | Brotherhood                              |
+----------+------------------------------------------+
6 rows in set (0.001 sec)
```

The expression in the parentheses says we want:

```
(album_id = 1 OR album_id = 3)
```

and the NOT operation negates it so we get everything but those that meet the condition
in the parentheses. There are several other ways you can write a WHERE clause with the
same function, and it really doesn’t matter which you choose. For example the follow-
ing three expressions have the same effect:

```mysql
WHERE NOT (album_id = 1) AND NOT (album_id = 3)
WHERE album_id != 1 AND album_id != 3
WHERE album_id != 1 AND NOT (album_id = 3)
```

Consider another example using NOT and parentheses. Suppose you want to get a list
of all albums with an album_id greater than 2, but not those numbered 4 or 6:

```mysql
SELECT album_id, album_name 
FROM music.album 
WHERE album_id > 2 AND !( album_id = 4 OR album_id = 6)
ORDER BY album_id;
```

```
+----------+----------------------------+
| album_id | album_name                 |
+----------+----------------------------+
|        3 | Retro - Miranda Sawyer POP |
|        5 | Power, Corruption & Lies   |
|        7 | Brotherhood                |
+----------+----------------------------+
```

```mysql
SELECT album_id, album_name 
FROM music.album 
WHERE album_id > 2 AND ( !album_id = 4 ) OR album_id = 6
ORDER BY album_id;
```

```
+----------+-------------------------+
| album_id | album_name              |
+----------+-------------------------+
|        6 | Substance 1987 (Disc 1) |
+----------+-------------------------+
```



```mysql
SELECT album_id, artist_id, album_name
FROM music.album
WHERE album_id != 4
ORDER BY album_id;
```

```
+----------+-----------+----------------------------+
| album_id | artist_id | album_name                 |
+----------+-----------+----------------------------+
|        1 |         1 | Retro - John McCready FAN  |
|        1 |         5 | Second Coming              |
|        1 |         4 | Exile On Main Street       |
|        1 |         3 | Live Around The World      |
|        1 |         2 | Let Love In                |
|        1 |         6 | Light Years                |
|        2 |         3 | In A Silent Way            |
|        2 |         1 | Substance (Disc 2)         |
|        3 |         1 | Retro - Miranda Sawyer POP |
|        5 |         1 | Power, Corruption & Lies   |
|        6 |         1 | Substance 1987 (Disc 1)    |
|        7 |         1 | Brotherhood                |
+----------+-----------+----------------------------+
```





```mysql
SELECT album_name
FROM music.album
WHERE album_name NOT LIKE "L%"
ORDER BY album_name;
```

```
+------------------------------------------+
| album_name                               |
+------------------------------------------+
| Brotherhood                              |
| Exile On Main Street                     |
| In A Silent Way                          |
| Power, Corruption & Lies                 |
| Retro - John McCready FAN                |
| Retro - Miranda Sawyer POP               |
| Retro - New Order / Bobby Gillespie LIVE |
| Second Coming                            |
| Substance (Disc 2)                       |
| Substance 1987 (Disc 1)                  |
+------------------------------------------+
```





```mysql
SELECT album_name
FROM music.album
WHERE album_name LIKE "S%" AND album_name LIKE "%)"
ORDER BY album_name;
```

```
+-------------------------+
| album_name              |
+-------------------------+
| Substance (Disc 2)      |
| Substance 1987 (Disc 1) |
+-------------------------+
2 rows in set (0.001 sec)
```



MySQL also supports the exclusive-OR operation through the XOR operator. An exclu-
sive OR evaluates as true if only one—but not both—of the expressions is true. To be
precise, a XOR b is equivalent to (a AND (NOT b)) OR ((NOT a) AND b) . For example,
suppose you want to find artists whose names end in “es” or start with “The,” but not
both. You’d need to type:
mysql> SELECT artist_name FROM artist WHERE
-> artist_name LIKE "The%" XOR
-> artist_name LIKE "%es";

```mysql
SELECT
```



## ORDER BY

texto

```mysql
SELECT *
FROM music.artist
ORDER BY artist_name;
```

```
+-----------+---------------------------+
| artist_id | artist_name               |
+-----------+---------------------------+
|         6 | Kylie Minogue             |
|         3 | Miles Davis               |
|         1 | New Order                 |
|         2 | Nick Cave & The Bad Seeds |
|         4 | The Rolling Stones        |
|         5 | The Stone Roses           |
+-----------+---------------------------+
```

texto

```mysql
SELECT time, track_name
FROM music.track
ORDER BY time, track_name;
```

```
+-------+----------------------------------------------------------------------+
| time  | track_name                                                           |
+-------+----------------------------------------------------------------------+
|  1.34 | Intermission By Alan Wise [Olympia, Paris 12/11/01]                  |
|  1.81 | In A Silent Way                                                      |
|  2.38 | Rip This Joint                                                       |
|  2.64 | Turd On The Run                                                      |
|  2.78 | Jangling Jack                                                        |
|  2.81 | Full Nelson                                                          |
|  2.90 | I Just Want To See His Face                                          |
|  2.97 | Sweet Black Angel                                                    |
...
....
.....
......
|  9.73 | The Perfect Kiss [Glastonbury Festival 19/6/87]                      |
|  9.98 | Time After Time                                                      |
| 11.37 | Breaking Into Heaven                                                 |
| 12.80 | Human Nature                                                         |
| 16.67 | In A Silent Way/It's About That Time                                 |
| 16.67 | Shhh/Peaceful                                                        |
+-------+----------------------------------------------------------------------+
153 rows in set (0.002 sec)
```

texto

```mysql
SELECT artist_name 
FROM artist 
ORDER BY artist_name DESC; 
```

```
+---------------------------+
| artist_name               |
+---------------------------+
| The Stone Roses           |
| The Rolling Stones        |
| Nick Cave & The Bad Seeds |
| New Order                 |
| Miles Davis               |
| Kylie Minogue             |
+---------------------------+
```

```mysql
SELECT artist_name 
FROM artist 
ORDER BY artist_name ASC; 
```

```
+---------------------------+
| artist_name               |
+---------------------------+
| Kylie Minogue             |
| Miles Davis               |
| New Order                 |
| Nick Cave & The Bad Seeds |
| The Rolling Stones        |
| The Stone Roses           |
+---------------------------+
```

texto

```mysql
SELECT time, track_name 
FROM music.track
WHERE time < 3.6
ORDER BY time DESC, track_name ASC;
```

```
+------+------------------------------------------------------------+
| time | track_name                                                 |
+------+------------------------------------------------------------+
| 3.57 | Casino Boogie                                              |
| 3.57 | Procession [Polytechnic of Central London, London 6/12/85] |
| 3.56 | Your Disco Needs You                                       |
| 3.55 | I'm So High                                                |
| 3.55 | On A Night Like This                                       |
| 3.54 | Mr. Pastorius                                              |
| 3.46 | Spinning Around                                            |
| 3.44 | Mesh                                                       |
| 3.42 | Cries And Whispers                                         |
| 3.40 | Under The Influence Of Love                                |
| 3.40 | Ventilator Blues                                           |
| 3.26 | Straight To The Man                                        |
| 3.20 | Dreams Never End                                           |
| 3.08 | Happy                                                      |
| 3.00 | Shake Your Hips                                            |
| 2.99 | Your Star Will Shine                                       |
| 2.97 | Sweet Black Angel                                          |
| 2.90 | I Just Want To See His Face                                |
| 2.81 | Full Nelson                                                |
| 2.78 | Jangling Jack                                              |
| 2.64 | Turd On The Run                                            |
| 2.38 | Rip This Joint                                             |
| 1.81 | In A Silent Way                                            |
| 1.34 | Intermission By Alan Wise [Olympia, Paris 12/11/01]        |
+------+------------------------------------------------------------+
24 rows in set (0.000 sec)
```

texto

```mysql
SELECT * FROM artist ORDER BY BINARY artist_name;
```

```
+-----------+---------------------------+
| artist_id | artist_name               |
+-----------+---------------------------+
|         6 | Kylie Minogue             |
|         3 | Miles Davis               |
|         1 | New Order                 |
|         2 | Nick Cave & The Bad Seeds |
|         4 | The Rolling Stones        |
|         5 | The Stone Roses           |
+-----------+---------------------------+
```

```mysql
SELECT track_name FROM track WHERE track_name < 'b';
```

```
+----------------------------------------------------+
| track_name                                         |
+----------------------------------------------------+
| All Day Long                                       |
| 1963                                               |
| Age Of Consent [Spectrum Arena, Warrington 1/3/86] |
| As It Is When It Was [Reading Festival 29/8/93]    |
| Age Of Consent                                     |
| 5 8 6                                              |
| Angel Dust                                         |
| All Day Long                                       |
| As It Is When It Was                               |
| Ain't Gonna Rain Anymore                           |
| Amandla                                            |
| All Down The Line                                  |
+----------------------------------------------------+
12 rows in set (0.001 sec)
```

texto

```mysql
SELECT track_name FROM track WHERE track_name < BINARY 'b';
```

```

+----------------------------------------------------------------------+
| track_name                                                           |
+----------------------------------------------------------------------+
| Elegia                                                               |
| In A Lonely Place                                                    |
| Procession                                                           |
| Your Silent Face                                                     |
| Sunrise                                                              |
| Let's Go                                                             |
| Broken Promise                                                       |
| Dreams Never End                                                     |
| Cries And Whispers                                                   |
| All Day Long                                                         |
| Sooner Than You Think                                                |
| Leave Me Alone                                                       |
...
....
.....
......
| Koocachoo                                                            |
| Your Disco Needs You                                                 |
| Please Stay                                                          |
| Bittersweet Goodbye                                                  |
| Butterfly                                                            |
| Under The Influence Of Love                                          |
| I'm So High                                                          |
| Kids                                                                 |
+----------------------------------------------------------------------+
153 rows in set (0.001 sec)
```

