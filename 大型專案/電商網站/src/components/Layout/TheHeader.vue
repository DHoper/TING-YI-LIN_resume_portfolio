<template>
    <div id="header">
        <nav>
            <div class="navBlock">
                <img class="logo" src="/assets/shared/desktop/logo.svg">
                <ul class="menu">
                    <li><router-link to="/">HOME</router-link></li>
                    <li><router-link to="/productList/headphones">HEADPHONES</router-link></li>
                    <li><router-link to="/productList/speakers">SPEAKERS</router-link></li>
                    <li><router-link to="/productList/earphones">EARPHONES</router-link></li>
                </ul>
                <img class="cart" src="/assets/shared/desktop/icon-cart.svg">
            </div>
            <div class="line" v-if="showLine"></div>
        </nav>
        <slot></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        showLine: {  //顯示底線與否
            type: Boolean,
            default: true
        }
    },
    // mounted() {
    //     const divElement = document.querySelector('nav + div');  //設置插槽內首元素之上邊距
    //     divElement.style.marginTop = '1rem';

    // },
}
</script>

<style lang="scss" scoped>
#header {
    width: 100%;
    margin: auto;
    background-color: #141414fa;

    nav {
        height: 12vh;
        width: 75rem;
        margin: auto;
        position: relative;
        z-index: 1;

        .navBlock {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: flex-end;
            padding: 0px;
            justify-content: space-between;
            position: absolute;
            width: 100%;
            top: 3rem;

            .logo {
                width: 10rem;
                height: 2rem;
                filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
                flex: none;
                flex-grow: 0;
            }

            .menu {
                display: flex;
                justify-content: space-between;
                width: 40rem;
                height: 1.5625rem;
                flex: none;
                flex-grow: 0;
                margin-right: 2.5%;

                li {
                    font-weight: 700;
                    font-size: 1.2rem;
                    line-height: 1.5625rem;
                    text-transform: uppercase;
                    color: #ffffff;
                    letter-spacing: 2px;
                }
            }

            .cart {
                width: 1.6rem;
            }
        }

        .line {
            width: 100%;
            margin: auto;
            height: 0;
            background-color: #979797;
            position: absolute;
            bottom: 0;
            border-bottom: 1px solid rgba(72, 71, 71, 0.977);
        }
    }
}
</style>