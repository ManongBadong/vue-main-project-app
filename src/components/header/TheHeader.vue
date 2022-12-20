<template>
    <header>
        <h1>
            Find a Coach
        </h1>
        <nav>
            <ul>
                <li><router-link to="/coaches">All Coaches</router-link></li>
                <li><router-link to="/requests">Requests</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {

}
</script>

<!-- 
    
COLORS

#CCDBDC
#9AD1D4
#80CED7
#80CED7
#003249 

-->

<style scoped>
header {
    height: 5rem;
    background-color: white;
    margin: 0 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-self: center;
    align-items: center;
}

li {
    color: #003249;
    margin: 0 1rem;
}

a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
    border-bottom: 2px solid transparent;
    padding-bottom: 0.25rem;
    cursor: pointer;
    padding: 12px 20px;
    border-radius: 5px;
    border: 1px solid #003249;
    transition: all 100ms ease-in;
}

a:hover {
    background: #80CED7;
    color: white;
    border: 1px solid transparent;
}
</style>