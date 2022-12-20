<template>
    <div class="main-request-container">
        <span class="title">Email</span>
        <span class="email">{{ request.email }}</span>
        <span class="title">Message</span>
        <span class="message">{{ request.message }}</span>
    </div>
</template>

<script>
export default {
    props: ['request']
}
</script>

<style>
.main-request-container {
    border: 1px solid #007EA7;
    margin: 15px 0;
    padding: 15px;
    border-radius: 10px;
}

.main-request-container span {
    display: block;
    font-size: .95em;
}

.main-request-container span.title {
    color: #007EA7;
    font-weight: 600;
}

.main-request-container span.email,
.main-request-container span.message {
    display: block;
    margin: 10px 0;
    color: #496a6c;
}

.main-request-container span.message {
    background: #CCDBDC;
    padding: 15px;
    border-radius: 10px;
}
</style>