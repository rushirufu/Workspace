<template>
    <div class="navbar">
        <ul>
        <li><i class="gg-bell"></i><a href="#home">Home</a></li>
        <li style="float:right"><a class="active" href="#about">logue out</a></li>
        </ul>
    </div>
</template>


<script>
  export default {
    name: "NavBar",
  };
</script>

<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #111;
}

.active {
  background-color: #4CAF50;
}
</style>