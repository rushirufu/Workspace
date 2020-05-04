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

```mysql
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

```mysql
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

```mysql
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

# 162

# 

# 

# 





















### Insertar datos en una tabla

```sql
INSERT INTO sales(employeeid, commission, fname, sname)
Values (1, 10, 'Maria', 'Alejandra');

INSERT INTO sales(employeeid, commission, fname, sname)
Values (2, 8, 'Jose', 'Gregorio');

INSERT INTO sales(employeeid, commission, fname, sname)
Values (3, 10, 'Carlos', 'Alberto');
```

También se puede hacer de la siguiente forma
```sql
INSERT INTO sales(employeeid, commission, fname, sname)
Values
(4, 12, 'Pedro', 'Ignacio'),
(5, 3, 'Milagros', 'Matilde'),
(6, 13, 'Ara', 'Veck');
```


```sql

```

```sql

```
